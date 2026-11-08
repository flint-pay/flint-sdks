[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileAssignmentResponse

A response containing `DeliveryProfileAssignment` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryProfileAssignment](../models/DeliveryProfileAssignment.md#deliveryprofileassignment) | Resource, collection, or operation result returned by this request. Result of assigning a delivery profile to catalog items that had none, with counts of the product variants and bundle components updated. `data`: [field definitions](../models/DeliveryProfileAssignmentResponse.md#deliveryprofileassignmentresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryProfileAssignmentResponse.data

Resource, collection, or operation result returned by this request. Result of assigning a delivery profile to catalog items that had none, with counts of the product variants and bundle components updated.

Field definitions: [shared fields](DeliveryProfileAssignmentInput.md#deliveryprofileassignmentinput).

### DeliveryProfileAssignmentResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

