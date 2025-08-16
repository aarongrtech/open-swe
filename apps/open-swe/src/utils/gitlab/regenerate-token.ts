import { createLogger, LogLevel } from "../logger.js";

const logger = createLogger(LogLevel.INFO, "GitLab-RegenerateToken");

/**
 * Placeholder for regenerating a GitLab access token.
 */
export async function regenerateProjectToken(
  projectId: string,
): Promise<string | null> {
  logger.warn("regenerateProjectToken stub called", { projectId });
  return null;
}
