[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPolicyRequestInput

The request body for: Create return policy.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |
| `revision` | Required | [ReturnPolicyRevisionRequestInput](../models/ReturnPolicyRevisionRequestInput.md#returnpolicyrevisionrequestinput) | The rules for a return policy revision: scope, eligibility, return window, approval and resolution modes, shipping, and restocking fee. |

