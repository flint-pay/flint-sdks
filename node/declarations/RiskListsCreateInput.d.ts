import type { InputValue } from '../runtime.js';
import type { CreateRiskListRequestInput } from './CreateRiskListRequestInput.js';

export type RiskListsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateRiskListRequestInput>; };
