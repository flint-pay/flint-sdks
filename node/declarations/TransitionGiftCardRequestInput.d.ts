


export type TransitionGiftCardRequestInput = ({ "action": "freeze" | "unfreeze" | "close"; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "reason"?: "suspicious_activity" | "customer_request" | "support_issue"; }) & (({ "action": ("freeze") & ("freeze"); "reason": unknown; }) | (({ "action": "unfreeze" | "close"; }) & ({ "reason"?: never })));
