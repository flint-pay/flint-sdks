
import type { DeliveryRecipientResource } from './DeliveryRecipientResource.js';
import type { MoneyValue } from './MoneyValue.js';
import type { SubscriptionAddressVerification } from './SubscriptionAddressVerification.js';
import type { SubscriptionDeliveryDestination } from './SubscriptionDeliveryDestination.js';
import type { SubscriptionDeliveryMethodSummary } from './SubscriptionDeliveryMethodSummary.js';

export type SubscriptionDelivery = { "address_verification"?: SubscriptionAddressVerification; "delivery_method"?: SubscriptionDeliveryMethodSummary; "delivery_method_id": string; "destination": SubscriptionDeliveryDestination; "recipient"?: DeliveryRecipientResource; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 0. */ "revision": string; "shipping_money"?: MoneyValue; "type": "shipment" | "local_delivery" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at": string; };
