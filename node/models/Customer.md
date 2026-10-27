[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Customer

A merchant's customer profile.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [Address](../models/Address.md#address) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `billing_address`: [field definitions](../models/BuyerCustomer.md#buyercustomerbilling_address). |
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
| `shipping_address` | Optional | [Address](../models/Address.md#address) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `shipping_address`: [field definitions](../models/BuyerCustomer.md#buyercustomerbilling_address). |
| `status` | Required | string | Values: `"active"`, `"deletion_processing"`, `"deleted"`. |
| `tax_exempt` | Optional | boolean |  |
| `tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null |  |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

### Customer.billing_address

Field definitions: [BuyerCustomer.billing_address](../models/BuyerCustomer.md#buyercustomerbilling_address).

### Customer.shipping_address

Field definitions: [BuyerCustomer.billing_address](../models/BuyerCustomer.md#buyercustomerbilling_address).

