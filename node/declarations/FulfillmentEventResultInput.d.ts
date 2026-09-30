
import type { FulfillmentEventInput } from './FulfillmentEventInput.js';
import type { FulfillmentInput } from './FulfillmentInput.js';
import type { FulfillmentNotificationInput } from './FulfillmentNotificationInput.js';
import type { PackageInput } from './PackageInput.js';
import type { ShipmentInput } from './ShipmentInput.js';

export type FulfillmentEventResultInput = { "fulfillment"?: FulfillmentInput; "fulfillment_event": FulfillmentEventInput; "fulfillment_notifications"?: Array<FulfillmentNotificationInput>; "package"?: PackageInput; "replayed"?: boolean; "shipment"?: ShipmentInput; };
