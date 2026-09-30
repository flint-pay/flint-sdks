
import type { FulfillmentEvent } from './FulfillmentEvent.js';
import type { FulfillmentNotification } from './FulfillmentNotification.js';
import type { Package } from './Package.js';
import type { PackageStatusUpdate } from './PackageStatusUpdate.js';

export type PackageStatusUpdateResult = { "event"?: FulfillmentEvent; "fulfillment_notifications"?: Array<FulfillmentNotification>; "package": Package; "package_status_update"?: PackageStatusUpdate; "unchanged"?: boolean; };
