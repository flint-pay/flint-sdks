[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCustomerRequestInput

The request body for: Create customer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_invoice_payment_term_id` | Optional | string | minLength: `1`. |
| `email` | Optional | string | Format: `email`. minLength: `1`. maxLength: `320`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string | minLength: `1`. |
| `is_merchant_verified` | Optional | boolean | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Optional | string | minLength: `1`. |
| `on_email_conflict` | Optional | string | What to do when an active customer in this environment already has `email`. `error` returns `409 ALREADY_EXISTS` naming that customer. `return_existing` returns that customer unchanged with `200` instead of creating one; it requires `email`. Emails match case-insensitively. Default: `"error"`. Values: `"error"`, `"return_existing"`. |
| `phone` | Optional | string | minLength: `1`. |
| `segment` | Optional | string | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. minLength: `1`. |
| `tax_exempt` | Optional | boolean |  |
| `tax_identity` | Optional | [TaxIdentityRequestInput](../models/TaxIdentityRequestInput.md#taxidentityrequestinput) | Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. |
| `test_clock_id` | Optional | string | Sandbox only. ID of a test clock to create the customer on. The customer, and every subscription created for it, read the clock's time instead of real time. A customer can't be moved to another clock or taken off one. A live credential gets `403 FORBIDDEN` with reason `test_mode_required`. minLength: `1`. |

