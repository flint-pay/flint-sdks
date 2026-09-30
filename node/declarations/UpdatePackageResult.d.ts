
import type { FulfillmentEvent } from './FulfillmentEvent.js';
import type { FulfillmentNotification } from './FulfillmentNotification.js';
import type { Package } from './Package.js';

export type UpdatePackageResult = { "fulfillment_event"?: FulfillmentEvent; "fulfillment_notifications"?: Array<FulfillmentNotification>; "package": Package; };
