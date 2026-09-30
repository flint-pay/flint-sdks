import type { InputValue } from '../runtime.js';


export type RiskListsDeleteItemInput = { "risk_list_id": InputValue<string>; "risk_list_item_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
