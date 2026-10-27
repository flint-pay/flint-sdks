[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomersCreateResponse200

A response containing `Customer` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Customer](../models/Customer.md#customer) | A merchant's customer profile. `data`: [field definitions](../models/CustomersCreateResponse200.md#customerscreateresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomersCreateResponse200.data

A merchant's customer profile.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [Address](../models/Address.md#address) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `billing_address`: [field definitions](../models/CustomersCreateResponse200.md#customerscreateresponse200databilling_address). |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_id` | Required | string |  |
| `default_invoice_payment_term_id` | Optional | string |  |
| `default_payment_method` | Optional | [ExpandedPaymentMethodSummary](../models/ExpandedPaymentMethodSummary.md#expandedpaymentmethodsummary) or null |  |
| `default_payment_method_id` | Required | string or null |  |
| `email` | Required | string or null | Customer email, or null when the customer has none. Unique among the environment's customers. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this customer in an external system, or null when none. Not returned to customer sessions. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string or null | Internal note about this customer, or null when none. Not returned to customer sessions. |
| `is_merchant_verified` | Optional | boolean | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | Map of string |  |
| `name` | Required | string or null | Customer name, or null when none. |
| `phone` | Required | string or null | Customer phone number, or null when none. |
| `receivables` | Optional | [CustomerReceivables](../models/CustomerReceivables.md#customerreceivables) | A customer's receivable balances by currency and when they were observed. |
| `segment` | Optional | string or null | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. Null when none. Not returned to customer sessions. |
| `shipping_address` | Optional | [Address](../models/Address.md#address) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `shipping_address`: [field definitions](../models/CustomersCreateResponse200.md#customerscreateresponse200databilling_address). |
| `status` | Required | string | Values: `"active"`, `"deletion_processing"`, `"deleted"`. |
| `tax_exempt` | Optional | boolean |  |
| `tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | `tax_identity`: [declared alternatives](../models/CustomersCreateResponse200.md#customerscreateresponse200datatax_identity). |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

### CustomersCreateResponse200.data.billing_address

A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.

Field definitions: [shared fields](AddressInput.md#addressinput).

### CustomersCreateResponse200.data.shipping_address

Field definitions: [CustomersCreateResponse200.data.billing_address](../models/CustomersCreateResponse200.md#customerscreateresponse200databilling_address).

### CustomersCreateResponse200.data.tax_identity

Field definitions: [shared fields](CreditNotesCreateResponse201.md#creditnotescreateresponse201databuyer_tax_identity).

### CustomersCreateResponse200.data.tax_identity variant 1

anyOf variant 1: Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one..

- Required: `legal_name`, `registered_address`, `tax_ids`.

### CustomersCreateResponse200.data.tax_identity variant 2

anyOf variant 2.

- Undeclared: `legal_name`, `registered_address`, `tax_ids`.
- Value shape: null.  

### CustomersCreateResponse200.data.tax_identity variant 1.registered_address

Declared alternatives: [CreditNotesCreateResponse201.data.buyer_tax_identity variant 1.registered_address](../models/CreditNotesCreateResponse201.md#creditnotescreateresponse201databuyer_tax_identity-variant-1registered_address).

### CustomersCreateResponse200.data.tax_identity variant 1.tax_ids[]

Field definitions: [CreditNotesCreateResponse201.data.buyer_tax_identity variant 1.tax_ids[]](../models/CreditNotesCreateResponse201.md#creditnotescreateresponse201databuyer_tax_identity-variant-1tax_ids).

