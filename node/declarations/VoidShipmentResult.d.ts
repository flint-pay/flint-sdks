
import type { FulfillmentEvent } from './FulfillmentEvent.js';
import type { FulfillmentNotification } from './FulfillmentNotification.js';
import type { Package } from './Package.js';
import type { Shipment } from './Shipment.js';

export type VoidShipmentResult = { "events"?: Array<FulfillmentEvent>; "fulfillment_notifications"?: Array<FulfillmentNotification>; "packages"?: Array<Package>; "shipment": Shipment; "unchanged"?: boolean; };
