[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodActivatedInstalledMerchantsEventInput

The `payment_method.activated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PaymentMethodActivatedInstalledMerchantsEventInput.md#paymentmethodactivatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payment_method.activated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PaymentMethodActivatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PaymentMethodActivatedInstalledMerchantsEventInput.md#paymentmethodactivatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PaymentMethodActivatedInstalledMerchantsEventInput.md#paymentmethodactivatedinstalledmerchantseventinputdataprevious_attributes). |

### PaymentMethodActivatedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PaymentMethodInput.md#paymentmethodinput).

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card` | Optional | [CardDetailsPreviousAttributesInput](../models/CardDetailsPreviousAttributesInput.md#carddetailspreviousattributesinput) or null | Brand, expiry and last four digits. Present when `type` is `card`. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributesInput](../models/ExpandedCustomerSummaryPreviousAttributesInput.md#expandedcustomersummarypreviousattributesinput) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | Customer this payment method belongs to. `customer_id`: [declared alternatives](../models/ExpandedPaymentMethodSummaryPreviousAttributesInput.md#expandedpaymentmethodsummarypreviousattributesinputcustomer_id). |
| `fingerprint` | Optional | string or null | A value that is the same for every saved copy of one card number at this merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint from the same card typed in. `fingerprint`: [declared alternatives](../models/PaymentMethodActivatedInstalledMerchantsEventInput.md#paymentmethodactivatedinstalledmerchantseventinputdataprevious_attributesfingerprint). |
| `is_default` | Optional | boolean or null | Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event. Existing subscriptions keep their payment_method_id. `is_default`: [declared alternatives](../models/PaymentMethodActivatedInstalledMerchantsEventInput.md#paymentmethodactivatedinstalledmerchantseventinputdataprevious_attributesis_default). |
| `is_removing` | Optional | boolean or null | Removal is in progress. Show this card as Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment, subscription, or default. Flint retries abandoned removals automatically. `is_removing`: [declared alternatives](../models/PaymentMethodActivatedInstalledMerchantsEventInput.md#paymentmethodactivatedinstalledmerchantseventinputdataprevious_attributesis_removing). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id). |
| `payment_method_id` | Optional | string or null | Unique identifier for this payment method, prefixed `pm_`. `payment_method_id`: [declared alternatives](../models/ExpandedPaymentMethodSummaryPreviousAttributesInput.md#expandedpaymentmethodsummarypreviousattributesinputpayment_method_id). |
| `saved_with` | Optional | string or null | Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values. Values: `"flint"`, `"store"`. `saved_with`: [declared alternatives](../models/PaymentMethodActivatedInstalledMerchantsEventInput.md#paymentmethodactivatedinstalledmerchantseventinputdataprevious_attributessaved_with). |
| `status` | Optional | string or null | The saved card lifecycle. Offer the card for a new payment only when status is active and is_removing is false. Treat any other status as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`. `status`: [declared alternatives](../models/PaymentMethodActivatedInstalledMerchantsEventInput.md#paymentmethodactivatedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `type` | Optional | string or null | Kind of payment method. Values: `"card"`. `type`: [declared alternatives](../models/ExpandedPaymentMethodSummaryPreviousAttributesInput.md#expandedpaymentmethodsummarypreviousattributesinputtype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `usage` | Optional | string or null | When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. Values: `"on_session"`, `"off_session"`. `usage`: [declared alternatives](../models/PaymentMethodActivatedInstalledMerchantsEventInput.md#paymentmethodactivatedinstalledmerchantseventinputdataprevious_attributesusage). |

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.customer_id

Declared alternatives: [ExpandedPaymentMethodSummaryPreviousAttributesInput.customer_id](../models/ExpandedPaymentMethodSummaryPreviousAttributesInput.md#expandedpaymentmethodsummarypreviousattributesinputcustomer_id).

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.fingerprint

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.fingerprint variant 1

anyOf variant 1: A value that is the same for every saved copy of one card number at this merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint from the same card typed in..

- Value shape: string. A value that is the same for every saved copy of one card number at this merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint from the same card typed in. 

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.fingerprint variant 2

anyOf variant 2.

- Value shape: null. A value that is the same for every saved copy of one card number at this merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint from the same card typed in. 

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.is_default

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.is_default variant 1

anyOf variant 1: Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event. Existing subscriptions keep their payment_method_id..

- Value shape: boolean. Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event. Existing subscriptions keep their payment_method_id. 

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.is_default variant 2

anyOf variant 2.

- Value shape: null. Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event. Existing subscriptions keep their payment_method_id. 

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.is_removing

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.is_removing variant 1

anyOf variant 1: Removal is in progress. Show this card as Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment, subscription, or default. Flint retries abandoned removals automatically..

- Value shape: boolean. Removal is in progress. Show this card as Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment, subscription, or default. Flint retries abandoned removals automatically. 

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.is_removing variant 2

anyOf variant 2.

- Value shape: null. Removal is in progress. Show this card as Removing and offer retry with DELETE /v1/payment-methods/{payment_method_id}, or DELETE /v1/me/payment-methods/{payment_method_id} for buyers. Do not offer it for a new payment, subscription, or default. Flint retries abandoned removals automatically. 

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id).

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.payment_method_id

Declared alternatives: [ExpandedPaymentMethodSummaryPreviousAttributesInput.payment_method_id](../models/ExpandedPaymentMethodSummaryPreviousAttributesInput.md#expandedpaymentmethodsummarypreviousattributesinputpayment_method_id).

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.saved_with

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.saved_with variant 1

anyOf variant 1: Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values..

- Value shape: string. Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values. Values: `"flint"`, `"store"`.

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.saved_with variant 2

anyOf variant 2.

- Value shape: null. Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values. 

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.status

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: The saved card lifecycle. Offer the card for a new payment only when status is active and is_removing is false. Treat any other status as not chargeable, including values added later..

- Value shape: string. The saved card lifecycle. Offer the card for a new payment only when status is active and is_removing is false. Treat any other status as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`.

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. The saved card lifecycle. Offer the card for a new payment only when status is active and is_removing is false. Treat any other status as not chargeable, including values added later. 

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.type

Declared alternatives: [ExpandedPaymentMethodSummaryPreviousAttributesInput.type](../models/ExpandedPaymentMethodSummaryPreviousAttributesInput.md#expandedpaymentmethodsummarypreviousattributesinputtype).

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.usage

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.usage variant 1

anyOf variant 1: When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session..

- Value shape: string. When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. Values: `"on_session"`, `"off_session"`.

### PaymentMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.usage variant 2

anyOf variant 2.

- Value shape: null. When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. 

### PaymentMethodActivatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

