[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateCustomerRequestInput

The request body for: Update customer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_invoice_payment_term_id` | Optional | string or null | Default payment term for this customer's invoices. Send null to clear it. minLength: `1`. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. |
| `default_payment_method_id` | Optional | string or null | The active off_session payment method to use by default. Omit to leave unchanged; null clears it. A change sends customer.updated. minLength: `1`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `email` | Optional | string or null | The customer's email. Omit to leave unchanged. You can set an email when the customer has none in either customer account mode. Changing or clearing an existing email requires `customer_account.mode` to be `merchant_hosted`; null clears it. In `flint_hosted` mode, the buyer must confirm a change to an existing email. Format: `email`. minLength: `1`. maxLength: `320`. Example: `"buyer@example.com"`. |
| `expected_version` | Optional | integer | Required when tax_identity is null or tax_identity.tax_ids is present. Stale versions return a conflict. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Omit to leave unchanged; null clears it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `internal_note` | Optional | string or null | Internal note about this customer. Omit to leave unchanged; null clears it. minLength: `1`. |
| `is_merchant_verified` | Optional | boolean | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `name` | Optional | string or null | Customer name, up to 255 characters (Unicode code points) after trimming surrounding whitespace. Omit to leave unchanged; null clears it. minLength: `1`. |
| `phone` | Optional | string or null | Customer phone number. Omit to leave unchanged; null clears it. minLength: `1`. |
| `price_list_id` | Optional | string or null | ID of a wholesale price list in this merchant environment. Omit to leave unchanged; null clears it. An inactive list can be assigned but does not apply. An archived list returns 409 ACTION_NOT_ALLOWED; a missing list returns 404 RESOURCE_NOT_FOUND. minLength: `1`. pattern: `^prl_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prl_01KEZF7C00EH39P59GN3XMGS2Q"`. |
| `segment` | Optional | string or null | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. Omit to leave unchanged; null clears it. minLength: `1`. |
| `tax_exempt` | Optional | boolean | Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Omit to leave unchanged; `null` is not accepted. |
| `tax_identity` | Optional | [TaxIdentityPatchInput](../models/TaxIdentityPatchInput.md#taxidentitypatchinput) or null | Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. Omit to leave unchanged; null clears it. |

