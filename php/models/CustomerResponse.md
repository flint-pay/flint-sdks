[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerResponse

A response containing `Customer` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Customer](../models/Customer.md#customer) | A merchant's customer profile. `data`: [field definitions](../models/CustomerResponse.md#customerresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerResponse.data

A merchant's customer profile.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Required | [Address](../models/Address.md#address) or null | The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. Null when no saved address is the billing default. `billing_address`: [declared alternatives](../models/CustomerResponse.md#customerresponsedatabilling_address). |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_id` | Required | string |  |
| `default_invoice_payment_term_id` | Optional | string |  |
| `default_payment_method` | Optional | [ExpandedPaymentMethodSummary](../models/ExpandedPaymentMethodSummary.md#expandedpaymentmethodsummary) or null | Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method. |
| `default_payment_method_id` | Required | string or null |  |
| `email` | Required | string or null | Customer email, or null when the customer has none. Unique among the environment's customers. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this customer in an external system, or null when none. Not returned to customer sessions. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string or null | Internal note about this customer, or null when none. Not returned to customer sessions. |
| `is_merchant_verified` | Optional | boolean | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | Map of string | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata). |
| `name` | Required | string or null | Customer name, or null when none. |
| `phone` | Required | string or null | Customer phone number, or null when none. |
| `receivables` | Optional | [CustomerReceivables](../models/CustomerReceivables.md#customerreceivables) | A customer's receivable balances by currency and when they were observed. |
| `segment` | Optional | string or null | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. Null when none. Not returned to customer sessions. |
| `shipping_address` | Required | [Address](../models/Address.md#address) or null | The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. Null when no saved address is the shipping default. `shipping_address`: [declared alternatives](../models/CustomerResponse.md#customerresponsedatashipping_address). |
| `status` | Required | string | Values: `"active"`, `"deletion_processing"`, `"deleted"`. |
| `tax_exempt` | Optional | boolean |  |
| `tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | `tax_identity`: [declared alternatives](../models/CustomerResponse.md#customerresponsedatatax_identity). |
| `test_clock_id` | Optional | string | ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `uint64`. minimum: `1`. |

### CustomerResponse.data.billing_address

The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. Null when no saved address is the billing default.

Field definitions: [shared fields](CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity-variant-1registered_address).

### CustomerResponse.data.billing_address variant 1

anyOf Address: A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country..

- Required: `country`.
- Optional: `city`, `line1`, `line2`, `postal_code`, `state`.

### CustomerResponse.data.billing_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. Null when no saved address is the billing default. 

### CustomerResponse.data.metadata

Field definitions: [CancelReturnResponse.data.metadata](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata).

### CustomerResponse.data.shipping_address

The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. Null when no saved address is the shipping default.

Field definitions: [shared fields](CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity-variant-1registered_address).

### CustomerResponse.data.shipping_address variant 1

anyOf Address: A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country..

- Required: `country`.
- Optional: `city`, `line1`, `line2`, `postal_code`, `state`.

### CustomerResponse.data.shipping_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. Null when no saved address is the shipping default. 

### CustomerResponse.data.tax_identity

Field definitions: [shared fields](CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity).

### CustomerResponse.data.tax_identity variant 1

anyOf TaxIdentity: Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one..

- Required: `legal_name`, `registered_address`, `tax_ids`.

### CustomerResponse.data.tax_identity variant 2

anyOf variant 2.

- Undeclared: `legal_name`, `registered_address`, `tax_ids`.
- Value shape: null.  

### CustomerResponse.data.tax_identity variant 1.registered_address

Declared alternatives: [CreditNoteResponse.data.buyer_tax_identity variant 1.registered_address](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity-variant-1registered_address).

### CustomerResponse.data.tax_identity variant 1.tax_ids[]

Field definitions: [CreditNoteResponse.data.buyer_tax_identity variant 1.tax_ids[]](../models/CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity-variant-1tax_ids).

