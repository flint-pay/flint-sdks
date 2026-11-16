[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerUpdatedInstalledMerchantsEvent

The `customer.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"customer.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### CustomerUpdatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/CustomerCreatedInstalledMerchantsEvent.md#customercreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributes). |

### CustomerUpdatedInstalledMerchantsEvent.data.object

Field definitions: [CustomerCreatedInstalledMerchantsEvent.data.object](../models/CustomerCreatedInstalledMerchantsEvent.md#customercreatedinstalledmerchantseventdataobject).

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [Address](../models/Address.md#address) or null or null | The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. `null` when no saved address is the billing default. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `customer_id` | Optional | string or null | Unique identifier for this customer, prefixed `cus_`. `customer_id`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributescustomer_id). |
| `default_invoice_payment_term_id` | Optional | string or null | ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. `default_invoice_payment_term_id`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesdefault_invoice_payment_term_id). |
| `default_payment_method` | Optional | [ExpandedPaymentMethodSummary](../models/ExpandedPaymentMethodSummary.md#expandedpaymentmethodsummary) or null or null | Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method. |
| `default_payment_method_id` | Optional | string or null or null | ID of the customer's default off-session payment method. `null` when none is set. `default_payment_method_id`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesdefault_payment_method_id). |
| `email` | Optional | string or null or null | Customer email. `null` when the customer has none. Unique among the environment's customers. `email`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesemail). |
| `external_reference_id` | Optional | string or null or null | Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. `external_reference_id`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `internal_note` | Optional | string or null or null | Internal note about this customer. `null` when none is set. Not returned to customer sessions. `internal_note`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesinternal_note). |
| `is_merchant_verified` | Optional | boolean or null | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. `is_merchant_verified`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesis_merchant_verified). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata). |
| `name` | Optional | string or null or null | Customer name. `null` when none is set. `name`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesname). |
| `phone` | Optional | string or null or null | Customer phone number. `null` when none is set. `phone`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesphone). |
| `price_list_id` | Optional | string or null or null | ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. `price_list_id`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesprice_list_id). |
| `receivables` | Optional | [CustomerReceivables](../models/CustomerReceivables.md#customerreceivables) or null | What this customer owes you on invoices: the outstanding and overdue amounts, one balance per currency. Present only when `expand` includes `receivables`. |
| `segment` | Optional | string or null or null | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. `segment`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributessegment). |
| `shipping_address` | Optional | [Address](../models/Address.md#address) or null or null | The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default. |
| `status` | Optional | string or null | Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`. `status`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesstatus). |
| `tax_exempt` | Optional | boolean or null | Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. `tax_exempt`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributestax_exempt). |
| `tax_identity` | Optional | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null or null | Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. `null` when none is set. Always `null` for customer sessions. |
| `test_clock_id` | Optional | string or null | ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. `test_clock_id`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributestest_clock_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesversion). |

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.customer_id

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.customer_id variant 1

anyOf variant 1: Unique identifier for this customer, prefixed `cus_`..

- Value shape: string. Unique identifier for this customer, prefixed `cus_`. Unique identifier for this customer, prefixed `cus_`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this customer, prefixed `cus_`. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.default_invoice_payment_term_id

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.default_invoice_payment_term_id variant 1

anyOf variant 1: ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set..

- Value shape: string. ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.default_invoice_payment_term_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.default_payment_method_id

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.default_payment_method_id variant 1

anyOf variant 1: ID of the customer's default off-session payment method. `null` when none is set..

- Value shape: (string or null). ID of the customer's default off-session payment method. `null` when none is set. ID of the customer's default off-session payment method. `null` when none is set. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.default_payment_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer's default off-session payment method. `null` when none is set. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.email

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.email variant 1

anyOf variant 1: Customer email. `null` when the customer has none. Unique among the environment's customers..

- Value shape: (string or null). Customer email. `null` when the customer has none. Unique among the environment's customers. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.email variant 2

anyOf variant 2.

- Value shape: null. Customer email. `null` when the customer has none. Unique among the environment's customers. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions..

- Value shape: (string or null). Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.internal_note

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.internal_note variant 1

anyOf variant 1: Internal note about this customer. `null` when none is set. Not returned to customer sessions..

- Value shape: (string or null). Internal note about this customer. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.internal_note variant 2

anyOf variant 2.

- Value shape: null. Internal note about this customer. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.is_merchant_verified

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.is_merchant_verified variant 1

anyOf variant 1: Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address..

- Value shape: boolean. Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.is_merchant_verified variant 2

anyOf variant 2.

- Value shape: null. Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id).

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata).

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.name

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.name variant 1

anyOf variant 1: Customer name. `null` when none is set..

- Value shape: (string or null). Customer name. `null` when none is set. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Customer name. `null` when none is set. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.phone

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.phone variant 1

anyOf variant 1: Customer phone number. `null` when none is set..

- Value shape: (string or null). Customer phone number. `null` when none is set. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.phone variant 2

anyOf variant 2.

- Value shape: null. Customer phone number. `null` when none is set. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.price_list_id

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.price_list_id variant 1

anyOf variant 1: ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions..

- Value shape: (string or null). ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. pattern: `^prl_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prl_01KEZF7C00EH39P59GN3XMGS2Q"`. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.price_list_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.segment

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.segment variant 1

anyOf variant 1: Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions..

- Value shape: (string or null). Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.segment variant 2

anyOf variant 2.

- Value shape: null. Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.status

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Where the customer is in the deletion lifecycle..

- Value shape: string. Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`.

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the customer is in the deletion lifecycle. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.tax_exempt

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.tax_exempt variant 1

anyOf variant 1: Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions..

- Value shape: boolean. Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.tax_exempt variant 2

anyOf variant 2.

- Value shape: null. Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.test_clock_id

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.test_clock_id variant 1

anyOf variant 1: ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions..

- Value shape: string. ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. Example: `"tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ"`. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.test_clock_id variant 2

anyOf variant 2.

- Value shape: null. ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. 

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesversion).

### CustomerUpdatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

