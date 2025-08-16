# GitLab Integration Plan

This document outlines a high-level plan for adding GitLab support to Open SWE. The goal is feature parity with the existing GitHub integration.

## Authentication
- Support GitLab personal and project access tokens.
- Provide helper utilities to generate and refresh tokens.
- Store encrypted tokens in configuration similar to GitHub's installation tokens.

## API Wrappers
- Implement `utils/gitlab/api.ts` with wrappers for:
  - Project issue creation, updates, and comments.
  - Merge request creation and updates.
  - Branch and repository metadata.
- Handle retry logic and token regeneration like the GitHub utilities.

## Git Operations
- Mirror `utils/github/git.ts` with GitLab-aware helpers for cloning projects, creating branches, and pushing commits.
- Reuse shared git helpers from `@open-swe/shared/git` where possible.

## Issue Message Helpers
- Provide functions for synchronizing LangGraph messages with GitLab issue discussions.
- Support parsing and formatting issue content with delimiters used by Open SWE.

## Task Plans
- Store and retrieve task plans inside GitLab issue descriptions or comments using the same structured tags as GitHub.
- Add helpers for reading and writing these plans.

## Configuration Constants
- Introduce GitLab-specific constants and headers in `@open-swe/shared` for tokens and project identifiers.

## Testing
- Add unit tests for API wrappers covering success and failure cases plus token refresh flows.
- Create integration tests against mocked GitLab endpoints for issues, merge requests, and git operations.
- Verify git workflow helpers by cloning repositories, creating branches, and pushing commits in a test environment.

## Future Work
- Web UI components for authenticating with GitLab.
- GitLab webhook handlers to trigger tasks from issues or merge requests.

