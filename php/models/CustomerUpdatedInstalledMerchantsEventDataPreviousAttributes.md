[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes

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
| `receivables` | Optional | [CustomerUpdatedInstalledMerchantsEventDataPreviousAttributesReceivables](../models/CustomerUpdatedInstalledMerchantsEventDataPreviousAttributesReceivables.md#customerupdatedinstalledmerchantseventdatapreviousattributesreceivables) or null | What this customer owes you on invoices: the outstanding and overdue amounts, one balance per currency. Present only when `expand` includes `receivables`. |
| `segment` | Optional | string or null or null | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. `segment`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributessegment). |
| `shipping_address` | Optional | [Address](../models/Address.md#address) or null or null | The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default. |
| `status` | Optional | string or null | Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`. `status`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesstatus). |
| `tax_exempt` | Optional | boolean or null | Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. `tax_exempt`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributestax_exempt). |
| `tax_identity` | Optional | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null or null | Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. `null` when none is set. Always `null` for customer sessions. |
| `test_clock_id` | Optional | string or null | ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. `test_clock_id`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributestest_clock_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion). |

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.customer_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.customer_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributescustomer_id).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.default_invoice_payment_term_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_invoice_payment_term_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_invoice_payment_term_id).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.default_payment_method_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.default_payment_method_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesdefault_payment_method_id).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.email

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.email](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesemail).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.external_reference_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.external_reference_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesexternal_reference_id).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.internal_note

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.internal_note](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesinternal_note).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.is_merchant_verified

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.is_merchant_verified](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesis_merchant_verified).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.name

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.name](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesname).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.phone

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.phone](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesphone).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.price_list_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.price_list_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesprice_list_id).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.segment

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.segment](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributessegment).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.status

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.status](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesstatus).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.tax_exempt

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.tax_exempt](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributestax_exempt).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.test_clock_id

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.test_clock_id](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributestest_clock_id).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes.version

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion).

