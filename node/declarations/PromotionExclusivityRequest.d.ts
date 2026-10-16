


export type PromotionExclusivityRequest = { "group": string; /** Format: int32. */ "priority"?: number; /** Defaults to `best_of`. */ "selection"?: "best_of" | "highest_priority" | (string & {}); };
