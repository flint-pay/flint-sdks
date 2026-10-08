
import type { DeliveryRecipientResourceInput } from './DeliveryRecipientResourceInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { SubscriptionAddressVerificationInput } from './SubscriptionAddressVerificationInput.js';
import type { SubscriptionDeliveryDestinationInput } from './SubscriptionDeliveryDestinationInput.js';
import type { SubscriptionDeliveryMethodSummaryInput } from './SubscriptionDeliveryMethodSummaryInput.js';

export type SubscriptionDeliveryInput = { "address_verification"?: SubscriptionAddressVerificationInput; "delivery_method"?: SubscriptionDeliveryMethodSummaryInput; "delivery_method_id": string; "destination": SubscriptionDeliveryDestinationInput; "recipient"?: DeliveryRecipientResourceInput; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 0. */ "revision": string; "shipping_money"?: MoneyValueInput; "type": "shipment" | "local_delivery"; /** RFC3339 timestamp. Format: date-time. */ "updated_at": string | globalThis.Date; };
