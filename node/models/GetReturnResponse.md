[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GetReturnResponse

Declared schema AddReturnLineItemResponse: A response containing `Return` data.

Declared schema CancelReturnLineItemResponse: A response containing `Return` data.

Declared schema CancelReturnResponse: A response containing `Return` data.

Declared schema CompleteReturnResponse: A response containing `Return` data.

Declared schema CreateReturnResponse: A response containing `Return` data.

Declared schema DecideReturnResponse: A response containing `Return` data.

Declared schema DeleteReturnLineItemResponse: A response containing `Return` data.

Declared schema GetReturnResponse: A response containing `Return` data.

Declared schema ReopenReturnResponse: A response containing `Return` data.

Declared schema UpdateReturnLineItemResponse: A response containing `Return` data.

Declared schema UpdateReturnResponse: A response containing `Return` data.

Declared schema WaiveReturnLineInspectionResponse: A response containing `Return` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnResource](../models/ReturnResource.md#returnresource) | A request to send purchased items back. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

