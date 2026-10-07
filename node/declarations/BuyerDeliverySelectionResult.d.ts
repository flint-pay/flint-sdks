
import type { BuyerDeliverySelection } from './BuyerDeliverySelection.js';
import type { CheckoutSession } from './CheckoutSession.js';
import type { DeliveryInventoryReservationSummary } from './DeliveryInventoryReservationSummary.js';
import type { Order } from './Order.js';

export type BuyerDeliverySelectionResult = { "audience": "buyer" | (string & {}); /** The checkout session after the change. Merchant-only fields, such as metadata and external_reference_id, are omitted. */ "checkout_session": CheckoutSession; "delivery_selection": BuyerDeliverySelection; /** Omitted for checkout credentials, which cannot read the merchant's inventory reservation. Merchant credentials receive it on DeliverySelectionResult. */ "inventory_reservation"?: DeliveryInventoryReservationSummary; /** The order after the change. Merchant-only fields, such as external_reference_id and internal_note, are omitted. */ "order": Order; };
