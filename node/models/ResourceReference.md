[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceReference







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string |  |
| `resource_type` | Required | [ResourceType](../models/ResourceType.md#resourcetype) | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [140 declared values](APIKey.md#apikeycreated_by-resource_type-values). |

### ResourceReference variant 1

anyOf variant 1: Declared schema ResourceReference. A reference to another resource by `resource_type` and `resource_id`..

- Constraints for `resource_id`: Public Flint ID of the referenced resource.

### ResourceReference variant 2

anyOf variant 2: Declared schema WorkloadIdentityCreator. The user or credential that created a workload identity, identified by resource type and ID..

No additional constraints.

