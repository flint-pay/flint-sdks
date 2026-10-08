import type { InputValue } from '../runtime.js';
import type { UpdateMeSubscriptionLineItemRequestInput } from './UpdateMeSubscriptionLineItemRequestInput.js';

export type MeUpdateSubscriptionLineItemInput = { "subscription_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "subscription_line_item_id": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateMeSubscriptionLineItemRequestInput>; };
