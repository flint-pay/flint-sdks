[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodActivatedInstalledMerchantsEvent

The `payment_method.activated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PaymentMethodActivatedInstalledMerchantsEvent.md#paymentmethodactivatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payment_method.activated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PaymentMethodActivatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PaymentMethodActivatedInstalledMerchantsEvent.md#paymentmethodactivatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PaymentMethodActivatedInstalledMerchantsEvent.md#paymentmethodactivatedinstalledmerchantseventdataprevious_attributes). |

### PaymentMethodActivatedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PaymentMethod.md#paymentmethod).

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card` | Optional | [CardDetails](../models/CardDetails.md#carddetails) or null | Brand, expiry and last four digits. Present when `type` is `card`. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | Customer this payment method belongs to. `customer_id`: [declared alternatives](../models/PaymentMethodActivatedInstalledMerchantsEvent.md#paymentmethodactivatedinstalledmerchantseventdataprevious_attributescustomer_id). |
| `fingerprint` | Optional | string or null | A value that is the same for every saved copy of one card number at this merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint from the same card typed in. `fingerprint`: [declared alternatives](../models/PaymentMethodActivatedInstalledMerchantsEvent.md#paymentmethodactivatedinstalledmerchantseventdataprevious_attributesfingerprint). |
| `is_default` | Optional | boolean or null | Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event. `is_default`: [declared alternatives](../models/PaymentMethodActivatedInstalledMerchantsEvent.md#paymentmethodactivatedinstalledmerchantseventdataprevious_attributesis_default). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id). |
| `payment_method_id` | Optional | string or null | Unique identifier for this payment method, prefixed `pm_`. `payment_method_id`: [declared alternatives](../models/PaymentMethodActivatedInstalledMerchantsEvent.md#paymentmethodactivatedinstalledmerchantseventdataprevious_attributespayment_method_id). |
| `saved_with` | Optional | string or null | Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values. Values: `"flint"`, `"store"`. `saved_with`: [declared alternatives](../models/PaymentMethodActivatedInstalledMerchantsEvent.md#paymentmethodactivatedinstalledmerchantseventdataprevious_attributessaved_with). |
| `status` | Optional | string or null | Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`. `status`: [declared alternatives](../models/PaymentMethodActivatedInstalledMerchantsEvent.md#paymentmethodactivatedinstalledmerchantseventdataprevious_attributesstatus). |
| `type` | Optional | string or null | Kind of payment method. Values: `"card"`. `type`: [declared alternatives](../models/PaymentMethodActivatedInstalledMerchantsEvent.md#paymentmethodactivatedinstalledmerchantseventdataprevious_attributestype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `usage` | Optional | string or null | When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. Values: `"on_session"`, `"off_session"`. `usage`: [declared alternatives](../models/PaymentMethodActivatedInstalledMerchantsEvent.md#paymentmethodactivatedinstalledmerchantseventdataprevious_attributesusage). |

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.customer_id

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.customer_id variant 1

anyOf variant 1: Customer this payment method belongs to..

- Value shape: string. Customer this payment method belongs to. Customer this payment method belongs to. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer this payment method belongs to. 

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.fingerprint

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.fingerprint variant 1

anyOf variant 1: A value that is the same for every saved copy of one card number at this merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint from the same card typed in..

- Value shape: string. A value that is the same for every saved copy of one card number at this merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint from the same card typed in. 

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.fingerprint variant 2

anyOf variant 2.

- Value shape: null. A value that is the same for every saved copy of one card number at this merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint from the same card typed in. 

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.is_default

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.is_default variant 1

anyOf variant 1: Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event..

- Value shape: boolean. Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event. 

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.is_default variant 2

anyOf variant 2.

- Value shape: null. Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event. 

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id).

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.payment_method_id

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.payment_method_id variant 1

anyOf variant 1: Unique identifier for this payment method, prefixed `pm_`..

- Value shape: string. Unique identifier for this payment method, prefixed `pm_`. Unique identifier for this payment method, prefixed `pm_`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment method, prefixed `pm_`. 

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.saved_with

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.saved_with variant 1

anyOf variant 1: Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values..

- Value shape: string. Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values. Values: `"flint"`, `"store"`.

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.saved_with variant 2

anyOf variant 2.

- Value shape: null. Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values. 

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.status

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later..

- Value shape: string. Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`.

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. 

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.type

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.type variant 1

anyOf variant 1: Kind of payment method..

- Value shape: string. Kind of payment method. Values: `"card"`.

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.type variant 2

anyOf variant 2.

- Value shape: null. Kind of payment method. 

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.usage

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.usage variant 1

anyOf variant 1: When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session..

- Value shape: string. When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. Values: `"on_session"`, `"off_session"`.

### PaymentMethodActivatedInstalledMerchantsEvent.data.previous_attributes.usage variant 2

anyOf variant 2.

- Value shape: null. When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. 

### PaymentMethodActivatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

