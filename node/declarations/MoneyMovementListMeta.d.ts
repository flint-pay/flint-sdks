
import type { MoneyMovementHistoryMeta } from './MoneyMovementHistoryMeta.js';
import type { ResponseWarning } from './ResponseWarning.js';

export type MoneyMovementListMeta = { "api_version"?: string; "history"?: MoneyMovementHistoryMeta; "idempotency_replayed"?: boolean; "request_id"?: string; "trace_id"?: string; "warnings"?: Array<ResponseWarning>; };
