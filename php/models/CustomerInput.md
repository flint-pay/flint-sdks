[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerInput

A merchant's customer profile.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Required | [AddressInput](../models/AddressInput.md#addressinput) or null | The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. Null when no saved address is the billing default. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_id` | Required | string |  |
| `default_invoice_payment_term_id` | Optional | string |  |
| `default_payment_method` | Optional | [ExpandedPaymentMethodSummaryInput](../models/ExpandedPaymentMethodSummaryInput.md#expandedpaymentmethodsummaryinput) or null | Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method. |
| `default_payment_method_id` | Required | string or null |  |
| `email` | Required | string or null | Customer email, or null when the customer has none. Unique among the environment's customers. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this customer in an external system, or null when none. Not returned to customer sessions. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string or null | Internal note about this customer, or null when none. Not returned to customer sessions. |
| `is_merchant_verified` | Optional | boolean | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. |
| `merchant_id` | Optional | string |  |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `name` | Required | string or null | Customer name, or null when none. |
| `phone` | Required | string or null | Customer phone number, or null when none. |
| `receivables` | Optional | [CustomerReceivablesInput](../models/CustomerReceivablesInput.md#customerreceivablesinput) | A customer's receivable balances by currency and when they were observed. |
| `segment` | Optional | string or null | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. Null when none. Not returned to customer sessions. |
| `shipping_address` | Required | [AddressInput](../models/AddressInput.md#addressinput) or null | The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. Null when no saved address is the shipping default. |
| `status` | Required | string | Values: `"active"`, `"deletion_processing"`, `"deleted"`. |
| `tax_exempt` | Optional | boolean |  |
| `tax_identity` | Required | [TaxIdentityInput](../models/TaxIdentityInput.md#taxidentityinput) or null |  |
| `test_clock_id` | Optional | string | ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `uint64`. minimum: `1`. |

