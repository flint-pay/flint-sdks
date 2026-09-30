
import type { FulfillmentEvent } from './FulfillmentEvent.js';
import type { FulfillmentNotification } from './FulfillmentNotification.js';
import type { Package } from './Package.js';

export type VoidPackageResult = { "event"?: FulfillmentEvent; "fulfillment_notifications"?: Array<FulfillmentNotification>; "package": Package; "unchanged"?: boolean; };
