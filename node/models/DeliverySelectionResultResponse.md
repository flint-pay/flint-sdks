[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionResultResponse

A response containing `DeliverySelectionResult` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliverySelectionResult](../models/DeliverySelectionResult.md#deliveryselectionresult) | Result of a checkout delivery selection request, returning the checkout session, order, delivery selection, and any inventory reservation summary. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

