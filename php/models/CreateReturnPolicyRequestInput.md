[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPolicyRequestInput

The request body for: Create return policy.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | Name of the policy, limited to 1 through 255 bytes after trimming surrounding whitespace. minLength: `1`. |
| `revision` | Required | [ReturnPolicyRevisionRequestInput](../models/ReturnPolicyRevisionRequestInput.md#returnpolicyrevisionrequestinput) | The revision with the complete rules. A field you leave out doesn't carry over from the previous revision. The rules for a return policy revision: scope, eligibility, return window, approval and resolution modes, shipping, and restocking fee. |
| `status` | Optional | string | Whether the policy applies to new Returns. Defaults to inactive. Creating an active policy checks for overlapping active policies and a usable receiving location, just like activation through PATCH. Default: `"inactive"`. Values: `"active"`, `"inactive"`. |

