export interface GitLabIssue {
  id: number;
  iid: number;
  title: string;
  description: string;
  web_url: string;
}

export interface GitLabIssueComment {
  id: number;
  body: string;
  created_at?: string;
}

export interface GitLabMergeRequest {
  id: number;
  iid: number;
  title: string;
  description: string;
  web_url: string;
  state?: string;
}

export type GitLabMergeRequestList = GitLabMergeRequest[];

export interface GitLabMergeRequestUpdate {
  title?: string;
  description?: string;
  state_event?: "close" | "reopen";
}

export interface GitLabBranch {
  name: string;
  commit?: { id: string };
}
