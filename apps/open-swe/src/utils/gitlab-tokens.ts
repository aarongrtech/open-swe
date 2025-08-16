import {
  GITLAB_TOKEN_COOKIE,
  GITLAB_PROJECT_ID_HEADER,
} from "@open-swe/shared/constants";
import { GraphConfig } from "@open-swe/shared/open-swe/types";
import { decryptSecret } from "@open-swe/shared/crypto";

/**
 * Retrieve GitLab tokens from the graph configuration.
 * This mirrors getGitHubTokensFromConfig but for GitLab.
 */
export function getGitLabTokensFromConfig(config: GraphConfig): {
  gitlabAccessToken: string;
  projectId: string;
} {
  if (!config.configurable) {
    throw new Error("No configurable object found in graph config.");
  }
  const encryptionKey = process.env.SECRETS_ENCRYPTION_KEY;
  if (!encryptionKey) {
    throw new Error("Missing SECRETS_ENCRYPTION_KEY environment variable.");
  }
  const encryptedToken = config.configurable[GITLAB_TOKEN_COOKIE];
  const projectId = config.configurable[GITLAB_PROJECT_ID_HEADER];
  return {
    gitlabAccessToken: encryptedToken
      ? decryptSecret(encryptedToken, encryptionKey)
      : "",
    projectId: projectId ?? "",
  };
}
