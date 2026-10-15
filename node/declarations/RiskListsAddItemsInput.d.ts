import type { InputValue } from '../runtime.js';
import type { AddRiskListItemsRequestInput } from './AddRiskListItemsRequestInput.js';

export type RiskListsAddItemsInput = { "risk_list_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<AddRiskListItemsRequestInput>; };
