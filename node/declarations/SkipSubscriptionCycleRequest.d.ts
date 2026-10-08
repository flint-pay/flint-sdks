


export type SkipSubscriptionCycleRequest = { /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; /** Who asked for the skip. Defaults to merchant. Send buyer when you skip at the buyer's request. The subscription.cycle_skipped webhook reports this value as initiated_by. */ "initiated_by"?: "buyer" | "merchant" | "integration" | (string & {}); };
