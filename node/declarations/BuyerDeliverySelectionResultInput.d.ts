
import type { BuyerDeliverySelectionInput } from './BuyerDeliverySelectionInput.js';
import type { CheckoutSessionInput } from './CheckoutSessionInput.js';
import type { DeliveryInventoryReservationSummaryInput } from './DeliveryInventoryReservationSummaryInput.js';
import type { OrderInput } from './OrderInput.js';

export type BuyerDeliverySelectionResultInput = { "audience": ("buyer") & ("buyer"); /** The checkout session after the change. Merchant-only fields, such as metadata and external_reference_id, are omitted. */ "checkout_session": CheckoutSessionInput; "delivery_selection": BuyerDeliverySelectionInput; /** Omitted for checkout credentials, which cannot read the merchant's inventory reservation. Merchant credentials receive it on DeliverySelectionResult. */ "inventory_reservation"?: DeliveryInventoryReservationSummaryInput; /** The order after the change. Merchant-only fields, such as external_reference_id and internal_note, are omitted. */ "order": OrderInput; };
