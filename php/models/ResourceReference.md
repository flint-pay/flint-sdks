[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceReference

A reference to another resource by `resource_type` and `resource_id`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string | Public Flint ID of the referenced resource. |
| `resource_type` | Required | string | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [141 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). `resource_type`: [field definitions](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedataresource_type). |

### ResourceReference.resource_type

Field definitions: [APIRequestLogDetailResponse.data.resource_type](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedataresource_type).

