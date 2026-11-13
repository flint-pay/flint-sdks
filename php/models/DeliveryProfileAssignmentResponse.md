[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileAssignmentResponse

A response containing `DeliveryProfileAssignment` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryProfileAssignment](../models/DeliveryProfileAssignment.md#deliveryprofileassignment) | Resource, collection, or operation result returned by this request. An accepted assignment of a delivery profile to catalog items that have none, with counts of the product variants and bundle components that had none when Flint accepted it. Flint assigns them after responding; `unconfigured_assignment` is the progress to poll. `data`: [field definitions](../models/DeliveryProfileAssignmentResponse.md#deliveryprofileassignmentresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryProfileAssignmentResponse.data

Resource, collection, or operation result returned by this request. An accepted assignment of a delivery profile to catalog items that have none, with counts of the product variants and bundle components that had none when Flint accepted it. Flint assigns them after responding; `unconfigured_assignment` is the progress to poll.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_components_unconfigured` | Required | integer | Bundle components of physical products without a delivery profile when Flint accepted the request. Flint assigns the profile to each one that still has none when the assignment reaches it. Format: `int64`. minimum: `0`. |
| `delivery_profile_id` | Required | string | Delivery profile Flint assigns to each unconfigured catalog item. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. |
| `product_variants_unconfigured` | Required | integer | Physical product variants without a delivery profile when Flint accepted the request. Flint assigns the profile to each one that still has none when the assignment reaches it. Format: `int64`. minimum: `0`. |
| `unconfigured_assignment` | Required | [DeliveryProfileUnconfiguredAssignment](../models/DeliveryProfileUnconfiguredAssignment.md#deliveryprofileunconfiguredassignment) | The accepted assignment, `processing`. Poll `GET /v1/delivery-profiles/{delivery_profile_id}` until its `unconfigured_assignment.status` is no longer `processing`. Progress of a delivery profile's latest bulk assignment to catalog items that have no delivery profile. It moves from `processing` to `completed`, to `canceled` when it stops early, or to `failed` when Flint can't finish it. `unconfigured_assignment`: [field definitions](../models/DeliveryProfileAssignmentResponse.md#deliveryprofileassignmentresponsedataunconfigured_assignment). |

### DeliveryProfileAssignmentResponse.data.unconfigured_assignment

The accepted assignment, `processing`. Poll `GET /v1/delivery-profiles/{delivery_profile_id}` until its `unconfigured_assignment.status` is no longer `processing`. Progress of a delivery profile's latest bulk assignment to catalog items that have no delivery profile. It moves from `processing` to `completed`, to `canceled` when it stops early, or to `failed` when Flint can't finish it.

Field definitions: [shared fields](DeliveryProfileUnconfiguredAssignmentInput.md#deliveryprofileunconfiguredassignmentinput).

### DeliveryProfileAssignmentResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

