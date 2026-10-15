
import type { NextAction } from './NextAction.js';

export type MerchantReadinessAxis = { "next_actions": Array<NextAction>; "status": "ready" | "blocked" | "pending" | "not_available" | "not_requested" | (string & {}); "status_reason"?: "requirements_due" | "requirements_past_due" | "pending_verification" | "disabled_by_platform_policy" | "service_unavailable" | "onboarding_not_started" | "billing_suspended" | "platform_review" | "processing_not_enabled" | "platform_funding_unavailable" | "tax_category_required" | null | (string & {}) | null; };
