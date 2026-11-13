[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WorkloadIdentityCreatorInput

The user or credential that created a workload identity, identified by resource type and ID.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string | Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `resource_type` | Required | [ResourceTypeInput](../models/ResourceTypeInput.md#resourcetypeinput) | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Example: `"user"`. Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [153 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |

