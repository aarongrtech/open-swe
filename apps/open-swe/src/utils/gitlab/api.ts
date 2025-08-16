import { createLogger, LogLevel } from "../logger.js";
import {
  GitLabIssue,
  GitLabIssueComment,
  GitLabMergeRequest,
  GitLabMergeRequestList,
  GitLabMergeRequestUpdate,
  GitLabBranch,
} from "./types.js";

const logger = createLogger(LogLevel.INFO, "GitLab-API");

/**
 * Create a new issue in a GitLab project.
 */
export async function createIssue({
  owner,
  project,
  title,
  description,
  gitlabToken,
}: {
  owner: string;
  project: string;
  title: string;
  description: string;
  gitlabToken: string;
}): Promise<GitLabIssue | null> {
  logger.warn("createIssue stub called", { owner, project, title });
  return null;
}

/**
 * Create a comment on an existing GitLab issue.
 */
export async function createIssueComment({
  owner,
  project,
  issueIid,
  body,
  gitlabToken,
}: {
  owner: string;
  project: string;
  issueIid: number;
  body: string;
  gitlabToken: string;
}): Promise<GitLabIssueComment | null> {
  logger.warn("createIssueComment stub called", { owner, project, issueIid });
  return null;
}

/**
 * Update fields on a GitLab issue.
 */
export async function updateIssue({
  owner,
  project,
  issueIid,
  title,
  description,
  gitlabToken,
}: {
  owner: string;
  project: string;
  issueIid: number;
  title?: string;
  description?: string;
  gitlabToken: string;
}): Promise<GitLabIssue | null> {
  logger.warn("updateIssue stub called", { owner, project, issueIid });
  return null;
}

/**
 * Create a merge request for the specified branch.
 */
export async function createMergeRequest({
  owner,
  project,
  sourceBranch,
  targetBranch,
  title,
  description,
  gitlabToken,
}: {
  owner: string;
  project: string;
  sourceBranch: string;
  targetBranch: string;
  title: string;
  description: string;
  gitlabToken: string;
}): Promise<GitLabMergeRequest | null> {
  logger.warn("createMergeRequest stub called", {
    owner,
    project,
    sourceBranch,
  });
  return null;
}

/**
 * Update a merge request.
 */
export async function updateMergeRequest({
  owner,
  project,
  mergeRequestIid,
  update,
  gitlabToken,
}: {
  owner: string;
  project: string;
  mergeRequestIid: number;
  update: GitLabMergeRequestUpdate;
  gitlabToken: string;
}): Promise<GitLabMergeRequest | null> {
  logger.warn("updateMergeRequest stub called", {
    owner,
    project,
    mergeRequestIid,
  });
  return null;
}

/**
 * Retrieve merge requests for a branch.
 */
export async function getMergeRequests({
  owner,
  project,
  sourceBranch,
  gitlabToken,
}: {
  owner: string;
  project: string;
  sourceBranch: string;
  gitlabToken: string;
}): Promise<GitLabMergeRequestList | null> {
  logger.warn("getMergeRequests stub called", { owner, project, sourceBranch });
  return null;
}

/**
 * Get metadata for a branch.
 */
export async function getBranch({
  owner,
  project,
  branchName,
  gitlabToken,
}: {
  owner: string;
  project: string;
  branchName: string;
  gitlabToken: string;
}): Promise<GitLabBranch | null> {
  logger.warn("getBranch stub called", { owner, project, branchName });
  return null;
}
