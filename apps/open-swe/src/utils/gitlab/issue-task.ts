import { TaskPlan } from "@open-swe/shared/open-swe/types";
import { GitLabIssue } from "./types.js";
import { createLogger, LogLevel } from "../logger.js";

const logger = createLogger(LogLevel.INFO, "GitLab-IssueTask");

export const DETAILS_OPEN_TAG = "<details>";
export const DETAILS_CLOSE_TAG = "</details>";

/**
 * Append a task plan to a GitLab issue description or comment.
 */
export async function addTaskPlanToIssue(
  issue: GitLabIssue,
  plan: TaskPlan,
  gitlabToken: string,
): Promise<void> {
  logger.warn("addTaskPlanToIssue stub called", { issueId: issue.id });
}

/**
 * Extract task plans previously stored on a GitLab issue.
 */
export async function getPlansFromIssue(
  issue: GitLabIssue,
): Promise<TaskPlan[]> {
  logger.warn("getPlansFromIssue stub called", { issueId: issue.id });
  return [];
}
