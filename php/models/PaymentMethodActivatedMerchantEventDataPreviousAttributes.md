[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodActivatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card` | Optional | [CardDetails](../models/CardDetails.md#carddetails) or null | Brand, expiry and last four digits. Present when `type` is `card`. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | Customer this payment method belongs to. `customer_id`: [declared alternatives](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributescustomer_id). |
| `fingerprint` | Optional | string or null | A value that is the same for every saved copy of one card number at this merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint from the same card typed in. `fingerprint`: [declared alternatives](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributesfingerprint). |
| `is_default` | Optional | boolean or null | Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event. `is_default`: [declared alternatives](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributesis_default). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `payment_method_id` | Optional | string or null | Unique identifier for this payment method, prefixed `pm_`. `payment_method_id`: [declared alternatives](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributespayment_method_id). |
| `saved_with` | Optional | string or null | Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values. Values: `"flint"`, `"store"`. `saved_with`: [declared alternatives](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributessaved_with). |
| `status` | Optional | string or null | Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`. `status`: [declared alternatives](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributesstatus). |
| `type` | Optional | string or null | Kind of payment method. Values: `"card"`. `type`: [declared alternatives](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributestype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `usage` | Optional | string or null | When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. Values: `"on_session"`, `"off_session"`. `usage`: [declared alternatives](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributesusage). |

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

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

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later..

- Value shape: string. Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`.

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. 

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.type

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.type variant 1

anyOf variant 1: Kind of payment method..

- Value shape: string. Kind of payment method. Values: `"card"`.

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Kind of payment method. 

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.usage

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.usage variant 1

anyOf variant 1: When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session..

- Value shape: string. When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. Values: `"on_session"`, `"off_session"`.

### PaymentMethodActivatedMerchantEventDataPreviousAttributes.usage variant 2

anyOf variant 2.

- Value shape: null. When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. 

