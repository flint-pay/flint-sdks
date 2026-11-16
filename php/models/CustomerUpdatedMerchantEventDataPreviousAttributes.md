[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [Address](../models/Address.md#address) or null or null | The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. `null` when no saved address is the billing default. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer_id` | Optional | string or null | Unique identifier for this customer, prefixed `cus_`. `customer_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributescustomer_id). |
| `default_invoice_payment_term_id` | Optional | string or null | ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. `default_invoice_payment_term_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_invoice_payment_term_id). |
| `default_payment_method` | Optional | [ExpandedPaymentMethodSummary](../models/ExpandedPaymentMethodSummary.md#expandedpaymentmethodsummary) or null or null | Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method. |
| `default_payment_method_id` | Optional | string or null or null | ID of the customer's default off-session payment method. `null` when none is set. `default_payment_method_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method_id). |
| `email` | Optional | string or null or null | Customer email. `null` when the customer has none. Unique among the environment's customers. `email`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesemail). |
| `external_reference_id` | Optional | string or null or null | Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. `external_reference_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesexternal_reference_id). |
| `internal_note` | Optional | string or null or null | Internal note about this customer. `null` when none is set. Not returned to customer sessions. `internal_note`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesinternal_note). |
| `is_merchant_verified` | Optional | boolean or null | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. `is_merchant_verified`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesis_merchant_verified). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null or null | Customer name. `null` when none is set. `name`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesname). |
| `phone` | Optional | string or null or null | Customer phone number. `null` when none is set. `phone`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesphone). |
| `price_list_id` | Optional | string or null or null | ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. `price_list_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesprice_list_id). |
| `receivables` | Optional | [CustomerUpdatedMerchantEventDataPreviousAttributesReceivables](../models/CustomerUpdatedMerchantEventDataPreviousAttributesReceivables.md#customerupdatedmerchanteventdatapreviousattributesreceivables) or null | What this customer owes you on invoices: the outstanding and overdue amounts, one balance per currency. Present only when `expand` includes `receivables`. |
| `segment` | Optional | string or null or null | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. `segment`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributessegment). |
| `shipping_address` | Optional | [Address](../models/Address.md#address) or null or null | The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default. |
| `status` | Optional | string or null | Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`. `status`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesstatus). |
| `tax_exempt` | Optional | boolean or null | Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. `tax_exempt`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributestax_exempt). |
| `tax_identity` | Optional | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null or null | Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. `null` when none is set. Always `null` for customer sessions. |
| `test_clock_id` | Optional | string or null | ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. `test_clock_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributestest_clock_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion). |

### CustomerUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CustomerUpdatedMerchantEventDataPreviousAttributes.customer_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: Unique identifier for this customer, prefixed `cus_`..

- Value shape: string. Unique identifier for this customer, prefixed `cus_`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this customer, prefixed `cus_`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_invoice_payment_term_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_invoice_payment_term_id variant 1

anyOf variant 1: ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set..

- Value shape: string. ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_invoice_payment_term_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method_id variant 1

anyOf variant 1: ID of the customer's default off-session payment method. `null` when none is set..

- Value shape: (string or null). ID of the customer's default off-session payment method. `null` when none is set. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer's default off-session payment method. `null` when none is set. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.email

### CustomerUpdatedMerchantEventDataPreviousAttributes.email variant 1

anyOf variant 1: Customer email. `null` when the customer has none. Unique among the environment's customers..

- Value shape: (string or null). Customer email. `null` when the customer has none. Unique among the environment's customers. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.email variant 2

anyOf variant 2.

- Value shape: null. Customer email. `null` when the customer has none. Unique among the environment's customers. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.external_reference_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions..

- Value shape: (string or null). Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. minLength: `1`. maxLength: `255`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.internal_note

### CustomerUpdatedMerchantEventDataPreviousAttributes.internal_note variant 1

anyOf variant 1: Internal note about this customer. `null` when none is set. Not returned to customer sessions..

- Value shape: (string or null). Internal note about this customer. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.internal_note variant 2

anyOf variant 2.

- Value shape: null. Internal note about this customer. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.is_merchant_verified

### CustomerUpdatedMerchantEventDataPreviousAttributes.is_merchant_verified variant 1

anyOf variant 1: Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address..

- Value shape: boolean. Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.is_merchant_verified variant 2

anyOf variant 2.

- Value shape: null. Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### CustomerUpdatedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### CustomerUpdatedMerchantEventDataPreviousAttributes.name

### CustomerUpdatedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Customer name. `null` when none is set..

- Value shape: (string or null). Customer name. `null` when none is set. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Customer name. `null` when none is set. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.phone

### CustomerUpdatedMerchantEventDataPreviousAttributes.phone variant 1

anyOf variant 1: Customer phone number. `null` when none is set..

- Value shape: (string or null). Customer phone number. `null` when none is set. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.phone variant 2

anyOf variant 2.

- Value shape: null. Customer phone number. `null` when none is set. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.price_list_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.price_list_id variant 1

anyOf variant 1: ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions..

- Value shape: (string or null). ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. pattern: `^prl_[0-9A-HJKMNP-TV-Z]{26}$`. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.price_list_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.segment

### CustomerUpdatedMerchantEventDataPreviousAttributes.segment variant 1

anyOf variant 1: Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions..

- Value shape: (string or null). Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.segment variant 2

anyOf variant 2.

- Value shape: null. Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.status

### CustomerUpdatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Where the customer is in the deletion lifecycle..

- Value shape: string. Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`.

### CustomerUpdatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the customer is in the deletion lifecycle. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.tax_exempt

### CustomerUpdatedMerchantEventDataPreviousAttributes.tax_exempt variant 1

anyOf variant 1: Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions..

- Value shape: boolean. Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.tax_exempt variant 2

anyOf variant 2.

- Value shape: null. Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.test_clock_id

### CustomerUpdatedMerchantEventDataPreviousAttributes.test_clock_id variant 1

anyOf variant 1: ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions..

- Value shape: string. ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.test_clock_id variant 2

anyOf variant 2.

- Value shape: null. ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. 

### CustomerUpdatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CustomerUpdatedMerchantEventDataPreviousAttributes.version

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion).

