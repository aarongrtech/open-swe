import { TaskPlan } from "@open-swe/shared/open-swe/types";

/**
 * Format a task plan for inclusion in a GitLab merge request description.
 */
export function formatPlanForMergeRequest(plan: TaskPlan): string {
  // TODO: Implement structured formatting of the task plan
  return JSON.stringify(plan, null, 2);
}
