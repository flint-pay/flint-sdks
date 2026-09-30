
import type { MoneyMovementHistoryMetaInput } from './MoneyMovementHistoryMetaInput.js';
import type { ResponseWarningInput } from './ResponseWarningInput.js';

export type MoneyMovementListMetaInput = { "api_version"?: string; "history"?: MoneyMovementHistoryMetaInput; "idempotency_replayed"?: boolean; "request_id"?: string; "trace_id"?: string; "warnings"?: Array<ResponseWarningInput>; };
