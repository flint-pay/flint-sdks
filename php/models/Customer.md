[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Customer

A merchant's customer profile.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Required | [Address](../models/Address.md#address) or null | The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. `null` when no saved address is the billing default. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_id` | Required | string | Unique identifier for this customer, prefixed `cus_`. |
| `default_invoice_payment_term_id` | Optional | string | ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. |
| `default_payment_method` | Optional | [ExpandedPaymentMethodSummary](../models/ExpandedPaymentMethodSummary.md#expandedpaymentmethodsummary) or null | Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method. |
| `default_payment_method_id` | Required | string or null | ID of the customer's default off-session payment method. `null` when none is set. |
| `email` | Required | string or null | Customer email. `null` when the customer has none. Unique among the environment's customers. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. minLength: `1`. maxLength: `255`. |
| `internal_note` | Required | string or null | Internal note about this customer. `null` when none is set. Not returned to customer sessions. |
| `is_merchant_verified` | Optional | boolean | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `name` | Required | string or null | Customer name. `null` when none is set. |
| `phone` | Required | string or null | Customer phone number. `null` when none is set. |
| `price_list_id` | Required | string or null | ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. pattern: `^prl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `receivables` | Optional | [CustomerReceivables](../models/CustomerReceivables.md#customerreceivables) | What this customer owes you on invoices: the outstanding and overdue amounts, one balance per currency. Present only when `expand` includes `receivables`. A customer's receivable balances by currency and when they were observed. `receivables`: [field definitions](../models/CustomerResponse.md#customerresponsedatareceivables). |
| `segment` | Required | string or null | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. |
| `shipping_address` | Required | [Address](../models/Address.md#address) or null | The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default. |
| `status` | Required | string | Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`. |
| `tax_exempt` | Optional | boolean | Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. |
| `tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. `null` when none is set. Always `null` for customer sessions. |
| `test_clock_id` | Optional | string | ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

### Customer.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### Customer.receivables fields 1

Field definitions: [CustomerResponse.data.receivables](../models/CustomerResponse.md#customerresponsedatareceivables).

