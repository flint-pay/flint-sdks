[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateCustomerRequestInput

The request body for: Update customer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) or null | Billing address. Omit to leave unchanged; null clears it. Writing or clearing it also clears the saved billing-address default. |
| `default_invoice_payment_term_id` | Optional | string or null | Default payment term for this customer's invoices. Send null to clear it. minLength: `1`. |
| `default_payment_method_id` | Optional | string or null | The active off_session payment method to use by default. Omit to leave unchanged; null clears it. A change sends customer.updated. minLength: `1`. |
| `email` | Optional | string or null | The customer's email. Omit to leave unchanged; null clears it. Changing it is allowed only when your store hosts its own customer accounts (`customer_account.mode` is `merchant_hosted`). Format: `email`. minLength: `1`. maxLength: `320`. |
| `expected_version` | Optional | integer string | Required when tax_identity is null or tax_identity.tax_ids is present. Stale versions return a conflict. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Omit to leave unchanged; null clears it. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string or null | Internal note about this customer. Omit to leave unchanged; null clears it. minLength: `1`. |
| `is_merchant_verified` | Optional | boolean | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string or null | Customer name. Omit to leave unchanged; null clears it. minLength: `1`. |
| `phone` | Optional | string or null | Customer phone number. Omit to leave unchanged; null clears it. minLength: `1`. |
| `segment` | Optional | string or null | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. Omit to leave unchanged; null clears it. minLength: `1`. |
| `shipping_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) or null | Shipping address. Omit to leave unchanged; null clears it. Writing or clearing it also clears the saved shipping-address default. |
| `tax_exempt` | Optional | boolean |  |
| `tax_identity` | Optional | [TaxIdentityPatchInput](../models/TaxIdentityPatchInput.md#taxidentitypatchinput) or null |  |

