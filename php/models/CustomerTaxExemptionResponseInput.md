[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerTaxExemptionResponseInput

A response containing `CustomerTaxExemption` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerTaxExemptionInput](../models/CustomerTaxExemptionInput.md#customertaxexemptioninput) | Resource, collection, or operation result returned by this request. Nested child of a customer, bounded to 100 unarchived records per customer. Archives remain retrievable by ID and through the archived status filter. Expired and archived records cannot be edited. These records store exemption evidence; saving one does not apply it to sales or change the customer's blanket tax_exempt flag. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

