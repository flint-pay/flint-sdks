
import type { Fulfillment } from './Fulfillment.js';
import type { FulfillmentEvent } from './FulfillmentEvent.js';
import type { FulfillmentNotification } from './FulfillmentNotification.js';
import type { Package } from './Package.js';
import type { Shipment } from './Shipment.js';

export type FulfillmentEventResult = { "fulfillment"?: Fulfillment; "fulfillment_event": FulfillmentEvent; "fulfillment_notifications"?: Array<FulfillmentNotification>; "package"?: Package; "replayed"?: boolean; "shipment"?: Shipment; };
