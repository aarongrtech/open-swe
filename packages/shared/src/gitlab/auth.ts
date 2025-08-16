import { generateJWT } from "../jwt.js";

const convertEscapedNewlinesToNewlines = (str: string) =>
  str.replace(/\\n/g, "\n");

/**
 * Stub for retrieving a GitLab project access token.
 * TODO: Implement using GitLab OAuth or project token API.
 */
export async function getProjectAccessToken(
  projectId: string,
  appId: string,
  privateKey: string,
): Promise<string> {
  // The implementation will likely mirror getInstallationToken in the GitHub utilities.
  // Generate a JWT or other credential required by the GitLab API and exchange it for an access token.
  generateJWT(appId, convertEscapedNewlinesToNewlines(privateKey));
  return Promise.reject(new Error("getProjectAccessToken not implemented"));
}
