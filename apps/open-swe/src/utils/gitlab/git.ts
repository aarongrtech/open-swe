import { Sandbox } from "@daytonaio/sdk";
import { createLogger, LogLevel } from "../logger.js";
import {
  GraphConfig,
  TargetRepository,
  TaskPlan,
} from "@open-swe/shared/open-swe/types";

const logger = createLogger(LogLevel.INFO, "GitLab-Git");

/**
 * Determine branch name for a GitLab merge request.
 */
export function getBranchName(configOrThreadId: GraphConfig | string): string {
  const threadId =
    typeof configOrThreadId === "string"
      ? configOrThreadId
      : configOrThreadId.configurable?.thread_id;
  if (!threadId) {
    throw new Error("No thread ID provided");
  }
  return `open-swe/${threadId}`;
}

/**
 * Clone a GitLab repository into the sandbox.
 */
export async function cloneRepo(
  sandbox: Sandbox,
  targetRepository: TargetRepository,
  config: GraphConfig,
  gitlabToken: string,
): Promise<string> {
  logger.warn("cloneRepo stub called", { targetRepository });
  return "";
}

/**
 * Commit and push files to GitLab.
 */
export async function commitAndPush(
  sandbox: Sandbox,
  absoluteRepoDir: string,
  commitMessage: string,
  gitlabToken: string,
  config: GraphConfig,
): Promise<void> {
  logger.warn("commitAndPush stub called", { commitMessage });
}

/**
 * Placeholder for creating a merge request after committing changes.
 */
export async function createMergeRequestFromPlan(
  sandbox: Sandbox,
  repoDir: string,
  plan: TaskPlan,
  targetRepository: TargetRepository,
  gitlabToken: string,
  config: GraphConfig,
): Promise<void> {
  logger.warn("createMergeRequestFromPlan stub called", { plan });
}
