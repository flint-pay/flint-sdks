[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceReferenceInput

A reference to another resource by `resource_type` and `resource_id`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string | Public Flint ID of the referenced resource. |
| `resource_type` | Required | [ResourceTypeInput](../models/ResourceTypeInput.md#resourcetypeinput) | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [135 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |

