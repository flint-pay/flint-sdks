[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionResponseInput

A response containing `DeliverySelection` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliverySelectionInput](../models/DeliverySelectionInput.md#deliveryselectioninput) | Resource, collection, or operation result returned by this request. The delivery choice selected for a checkout or order. Poll GET /v1/delivery-selections/{delivery_selection_id} or list delivery selections to read its current status. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

