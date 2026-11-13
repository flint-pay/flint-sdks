[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WorkloadIdentityCreator

The user or credential that created a workload identity, identified by resource type and ID.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string | Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `resource_type` | Required | [ResourceType](../models/ResourceType.md#resourcetype) | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Example: `"user"`. Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [153 declared values](APIRequestLog.md#apirequestlog-resource_type-values). |

