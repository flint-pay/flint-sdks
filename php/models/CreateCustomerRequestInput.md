[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCustomerRequestInput

The request body for: Create customer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `default_invoice_payment_term_id` | Optional | string | minLength: `1`. |
| `email` | Optional | string | Format: `email`. minLength: `1`. maxLength: `320`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string | minLength: `1`. |
| `is_merchant_verified` | Optional | boolean | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `on_email_conflict` | Optional | string | What to do when an active customer in this environment already has `email`. `error` returns `409 ALREADY_EXISTS` naming that customer. `return_existing` returns that customer unchanged with `200` instead of creating one; it requires `email`. Emails match case-insensitively. Default: `"error"`. Values: `"error"`, `"return_existing"`. |
| `phone` | Optional | string | minLength: `1`. |
| `segment` | Optional | string | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. minLength: `1`. |
| `shipping_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `tax_exempt` | Optional | boolean |  |
| `tax_identity` | Optional | [TaxIdentityRequestInput](../models/TaxIdentityRequestInput.md#taxidentityrequestinput) | Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. |

