
import type { FulfillmentEventInput } from './FulfillmentEventInput.js';
import type { FulfillmentInput } from './FulfillmentInput.js';
import type { FulfillmentNotificationInput } from './FulfillmentNotificationInput.js';

export type FulfillmentCommandResultInput = { "event"?: FulfillmentEventInput; "fulfillment": FulfillmentInput; "fulfillment_notifications"?: Array<FulfillmentNotificationInput>; "unchanged"?: boolean; };
