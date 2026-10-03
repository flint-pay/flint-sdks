


export type TransitionGiftCardRequest = ({ "action": "freeze" | "unfreeze" | "close" | (string & {}); /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "reason"?: "suspicious_activity" | "customer_request" | "support_issue" | (string & {}); }) & (({ "action": ("freeze") & ("freeze"); "reason": unknown; }) | (({ "action": "unfreeze" | "close"; })) | (object));
