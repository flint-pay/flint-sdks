
import type { PostalAddressInput } from './PostalAddressInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { SubscriptionAddressVerificationInput } from './SubscriptionAddressVerificationInput.js';
import type { SubscriptionCountsInput } from './SubscriptionCountsInput.js';
import type { SubscriptionDeliveryOptionInput } from './SubscriptionDeliveryOptionInput.js';
import type { SubscriptionPreviewErrorInput } from './SubscriptionPreviewErrorInput.js';

export type SubscriptionPreviewResponseInput = { "data": (({ "address_verification"?: SubscriptionAddressVerificationInput; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency"?: string; /** Present in delivery_options mode ([] when no method applies); absent in create mode. */ "delivery_methods"?: Array<SubscriptionDeliveryOptionInput>; "destination_address"?: PostalAddressInput; /** Present in create mode ([] when the subscription is valid); absent in delivery_options mode. */ "errors"?: Array<SubscriptionPreviewErrorInput>; /** Present in create mode; absent in delivery_options mode. */ "is_valid"?: boolean; "mode": "create" | "delivery_options"; "subscription_id"?: string; }) | ({ "delivery_method_id": string; "mode": "delivery_method_update"; "no_longer_eligible_counts": SubscriptionCountsInput; "subscription_counts": SubscriptionCountsInput; })); "meta"?: ResponseMetaInput; "request_id"?: string; };
