
import type { PostalAddress } from './PostalAddress.js';
import type { SubscriptionAddressVerification } from './SubscriptionAddressVerification.js';
import type { SubscriptionDeliveryOption } from './SubscriptionDeliveryOption.js';
import type { SubscriptionPreviewError } from './SubscriptionPreviewError.js';

export type SubscriptionPreview = { "address_verification"?: SubscriptionAddressVerification; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency"?: string; /** Present in delivery_options mode ([] when no method applies); absent in create mode. */ "delivery_methods"?: Array<SubscriptionDeliveryOption>; "destination_address"?: PostalAddress; /** Present in create mode ([] when the subscription is valid); absent in delivery_options mode. */ "errors"?: Array<SubscriptionPreviewError>; /** Present in create mode; absent in delivery_options mode. */ "is_valid"?: boolean; "mode": "create" | "delivery_options" | (string & {}); "subscription_id"?: string; };
