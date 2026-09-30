
import type { NextActionInput } from './NextActionInput.js';

export type MerchantReadinessAxisInput = { "next_actions": Array<NextActionInput>; "status": "ready" | "blocked" | "pending" | "not_available" | "not_requested"; "status_reason"?: "requirements_due" | "requirements_past_due" | "pending_verification" | "disabled_by_platform_policy" | "service_unavailable" | "onboarding_not_started" | null; };
