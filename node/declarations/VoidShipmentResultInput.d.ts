
import type { FulfillmentEventInput } from './FulfillmentEventInput.js';
import type { FulfillmentNotificationInput } from './FulfillmentNotificationInput.js';
import type { PackageInput } from './PackageInput.js';
import type { ShipmentInput } from './ShipmentInput.js';

export type VoidShipmentResultInput = { "events"?: Array<FulfillmentEventInput>; "fulfillment_notifications"?: Array<FulfillmentNotificationInput>; "packages"?: Array<PackageInput>; "shipment": ShipmentInput; "unchanged"?: boolean; };
