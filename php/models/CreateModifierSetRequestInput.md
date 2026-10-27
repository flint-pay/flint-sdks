[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateModifierSetRequestInput

The request body for: Create modifier set.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `modifier_groups` | Optional | Array of [CreateModifierSetGroupRequestInput](../models/CreateModifierSetGroupRequestInput.md#createmodifiersetgrouprequestinput) | Ordered group entries in this set, including references to reusable groups and groups owned by the set. |
| `name` | Required | string | Name used to identify this modifier set. minLength: `1`. maxLength: `255`. |
| `status` | Optional | string | Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Default: `"active"`. Values: `"active"`, `"inactive"`. |

