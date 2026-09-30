


export type MoneyMovementHistoryMetaInput = { /** RFC3339 timestamp. Format: date-time. */ "earliest_available_at"?: string | globalThis.Date; /** RFC3339 timestamp. Format: date-time. */ "latest_reconciled_at"?: string | globalThis.Date; "status": "backfilling" | "partial" | "unavailable"; };
