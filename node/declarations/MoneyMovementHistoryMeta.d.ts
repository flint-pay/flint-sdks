


export type MoneyMovementHistoryMeta = { /** RFC3339 timestamp. Format: date-time. */ "earliest_available_at"?: string; /** RFC3339 timestamp. Format: date-time. */ "latest_reconciled_at"?: string; "status": "backfilling" | "partial" | "unavailable" | (string & {}); };
