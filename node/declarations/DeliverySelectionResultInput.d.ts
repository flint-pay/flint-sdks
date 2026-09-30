
import type { CheckoutSessionInput } from './CheckoutSessionInput.js';
import type { DeliveryInventoryReservationSummaryInput } from './DeliveryInventoryReservationSummaryInput.js';
import type { DeliverySelectionInput } from './DeliverySelectionInput.js';
import type { OrderInput } from './OrderInput.js';

export type DeliverySelectionResultInput = { "audience": ("merchant") & ("merchant"); "checkout_session": CheckoutSessionInput; "delivery_selection": DeliverySelectionInput; "inventory_reservation"?: DeliveryInventoryReservationSummaryInput; "order": OrderInput; };
