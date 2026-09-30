
import type { CheckoutSession } from './CheckoutSession.js';
import type { DeliveryInventoryReservationSummary } from './DeliveryInventoryReservationSummary.js';
import type { DeliverySelection } from './DeliverySelection.js';
import type { Order } from './Order.js';

export type DeliverySelectionResult = { "audience": "merchant" | (string & {}); "checkout_session": CheckoutSession; "delivery_selection": DeliverySelection; "inventory_reservation"?: DeliveryInventoryReservationSummary; "order": Order; };
