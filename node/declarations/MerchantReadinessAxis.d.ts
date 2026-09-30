
import type { NextAction } from './NextAction.js';

export type MerchantReadinessAxis = { "next_actions": Array<NextAction>; "status": "ready" | "blocked" | "pending" | "not_available" | "not_requested" | (string & {}); "status_reason"?: "requirements_due" | "requirements_past_due" | "pending_verification" | "disabled_by_platform_policy" | "service_unavailable" | "onboarding_not_started" | null | (string & {}) | null; };
