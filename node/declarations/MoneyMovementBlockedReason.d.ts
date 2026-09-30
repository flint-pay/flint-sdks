


export type MoneyMovementBlockedReason = { "code": string; "message"?: string; "next_steps"?: string; "param"?: string; "resolution_owner"?: "merchant" | "flint" | "integrator" | "buyer" | (string & {}); "retryable"?: boolean; };
