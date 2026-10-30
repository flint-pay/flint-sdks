[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileAssignmentResponse

A response containing `DeliveryProfileAssignment` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryProfileAssignment](../models/DeliveryProfileAssignment.md#deliveryprofileassignment) | Result of assigning a delivery profile to catalog items that had none, with counts of the product variants and bundle components updated. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

