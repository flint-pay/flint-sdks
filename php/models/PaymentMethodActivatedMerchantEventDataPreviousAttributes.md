[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodActivatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card` | Optional | Alternative shapes (see declared variants) | Brand, expiry and last four digits. Present when `type` is `card`. `card`: [declared alternatives](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributescard). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer` | Optional | Alternative shapes (see declared variants) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null | Customer this payment method belongs to. `customer_id`: [declared alternatives](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributescustomer_id). |
| `fingerprint` | Optional | string or null | A value that is the same for every saved copy of one card number at this merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint from the same card typed in. `fingerprint`: [declared alternatives](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributesfingerprint). |
| `is_default` | Optional | boolean or null | Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event. `is_default`: [declared alternatives](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributesis_default). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `payment_method_id` | Optional | string or null | Unique identifier for this payment method, prefixed `pm_`. `payment_method_id`: [declared alternatives](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributespayment_method_id). |
| `saved_with` | Optional | string or null | Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values. Values: `"flint"`, `"store"`. `saved_with`: [declared alternatives](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributessaved_with). |
| `status` | Optional | string or null | Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`. `status`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1status). |
| `type` | Optional | string or null | Kind of payment method. Values: `"card"`. `type`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1type). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `usage` | Optional | string or null | When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. Values: `"on_session"`, `"off_session"`. `usage`: [declared alternatives](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributesusage). |

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.card

Brand, expiry and last four digits. Present when `type` is `card`.

Field definitions: [shared fields](CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1card).

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.card variant 1

anyOf CardDetailsPreviousAttributes.

- Optional: `brand`, `exp_month`, `exp_year`, `last4`, `wallet`.

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.card variant 2

anyOf variant 2.

- Undeclared: `brand`, `exp_month`, `exp_year`, `last4`, `wallet`.
- Value shape: null. Brand, expiry and last four digits. Present when `type` is `card`. 

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.card variant 1.brand

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.brand](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1brand).

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.card variant 1.exp_month

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 1.exp_month](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1card-variant-1exp_month).

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.card variant 1.exp_year

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 1.exp_year](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1card-variant-1exp_year).

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.card variant 1.last4

Declared alternatives: [ExpandedPaymentIntentSummaryPreviousAttributes.payment_source variant 1.card variant 1.last4](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributespayment_source-variant-1card-variant-1last4).

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.card variant 1.wallet

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.card variant 1.wallet](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1card-variant-1wallet).

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.customer

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer).

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.customer_id

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: Customer this payment method belongs to..

- Value shape: string. Customer this payment method belongs to. 

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer this payment method belongs to. 

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.fingerprint

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.fingerprint variant 1

anyOf variant 1: A value that is the same for every saved copy of one card number at this merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint from the same card typed in..

- Value shape: string. A value that is the same for every saved copy of one card number at this merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint from the same card typed in. 

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.fingerprint variant 2

anyOf variant 2.

- Value shape: null. A value that is the same for every saved copy of one card number at this merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint from the same card typed in. 

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.is_default

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.is_default variant 1

anyOf variant 1: Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event..

- Value shape: boolean. Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event. 

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.is_default variant 2

anyOf variant 2.

- Value shape: null. Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event. 

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.payment_method_id

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.payment_method_id variant 1

anyOf variant 1: Unique identifier for this payment method, prefixed `pm_`..

- Value shape: string. Unique identifier for this payment method, prefixed `pm_`. 

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment method, prefixed `pm_`. 

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.saved_with

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.saved_with variant 1

anyOf variant 1: Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values..

- Value shape: string. Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values. Values: `"flint"`, `"store"`.

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.saved_with variant 2

anyOf variant 2.

- Value shape: null. Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values. 

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.status

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.status](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1status).

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.type

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method variant 1.type](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method-variant-1type).

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.usage

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.usage variant 1

anyOf variant 1: When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session..

- Value shape: string. When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. Values: `"on_session"`, `"off_session"`.

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.usage variant 2

anyOf variant 2.

- Value shape: null. When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. 

