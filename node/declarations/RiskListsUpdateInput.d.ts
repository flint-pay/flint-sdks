import type { InputValue } from '../runtime.js';
import type { UpdateRiskListRequestInput } from './UpdateRiskListRequestInput.js';

export type RiskListsUpdateInput = { "risk_list_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateRiskListRequestInput>; };
