[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditResponse

A response containing `OrderEdit` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [OrderEdit](../models/OrderEdit.md#orderedit) | Resource, collection, or operation result returned by this request. Nested child of an order: immutable, completed item changes with frozen values and refund amounts. Refund completion is tracked on the refunds. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

