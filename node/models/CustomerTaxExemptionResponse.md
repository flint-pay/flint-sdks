[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerTaxExemptionResponse

A response containing `CustomerTaxExemption` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerTaxExemption](../models/CustomerTaxExemption.md#customertaxexemption) | Resource, collection, or operation result returned by this request. Nested child of a customer, bounded to 100 unarchived records per customer. Archives remain retrievable by ID and through the archived status filter. Expired and archived records cannot be edited. An active record applies to the customer's sales whose taxable destination its coverage contains, within its date range, and is snapshotted on each exempt sale. Saving one doesn't change the customer's blanket tax_exempt flag, which still takes precedence. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

