import type { InputValue } from '../runtime.js';
import type { UpdateSubscriptionLineItemRequestInput } from './UpdateSubscriptionLineItemRequestInput.js';

export type SubscriptionsUpdateLineItemInput = { "subscription_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "subscription_line_item_id": InputValue<string>; "body": InputValue<UpdateSubscriptionLineItemRequestInput>; };
