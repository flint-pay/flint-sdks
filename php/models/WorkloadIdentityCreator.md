[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WorkloadIdentityCreator

The user or credential that created a workload identity, identified by resource type and ID.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string |  |
| `resource_type` | Required | string | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [141 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). `resource_type`: [field definitions](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedataresource_type). |

### WorkloadIdentityCreator.resource_type

Field definitions: [APIRequestLogDetailResponse.data.resource_type](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedataresource_type).

