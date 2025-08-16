import { BaseMessage } from "@langchain/core/messages";
import { GraphConfig, TargetRepository } from "@open-swe/shared/open-swe/types";
import { GitLabIssue, GitLabIssueComment } from "./types.js";
import { createLogger, LogLevel } from "../logger.js";

const logger = createLogger(LogLevel.INFO, "GitLab-IssueMessages");

/**
 * Retrieve LangGraph messages that are missing from a GitLab issue.
 * TODO: Implement actual synchronization against GitLab discussions.
 */
export async function getMissingMessages(
  input: {
    messages: BaseMessage[];
    gitlabIssueIid: number;
    targetRepository: TargetRepository;
  },
  config: GraphConfig,
): Promise<BaseMessage[]> {
  logger.warn("getMissingMessages stub called", {
    issue: input.gitlabIssueIid,
  });
  return [];
}

export const ISSUE_TITLE_OPEN_TAG = "<open-swe-issue-title>";
export const ISSUE_TITLE_CLOSE_TAG = "</open-swe-issue-title>";
export const ISSUE_CONTENT_OPEN_TAG = "<open-swe-issue-content>";
export const ISSUE_CONTENT_CLOSE_TAG = "</open-swe-issue-content>";

export function extractIssueTitleAndContentFromMessage(content: string) {
  // TODO: Parse title and content using the tags above
  return { title: null, content };
}

export function formatContentForIssueBody(body: string): string {
  // TODO: Wrap content in ISSUE_CONTENT tags
  return body;
}

export function getMessageContentFromIssue(
  issue: GitLabIssue | GitLabIssueComment,
): string {
  logger.warn("getMessageContentFromIssue stub called", { issueId: issue.id });
  return "";
}
