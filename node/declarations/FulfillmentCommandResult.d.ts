
import type { Fulfillment } from './Fulfillment.js';
import type { FulfillmentEvent } from './FulfillmentEvent.js';
import type { FulfillmentNotification } from './FulfillmentNotification.js';

export type FulfillmentCommandResult = { "event"?: FulfillmentEvent; "fulfillment": Fulfillment; "fulfillment_notifications"?: Array<FulfillmentNotification>; "unchanged"?: boolean; };
