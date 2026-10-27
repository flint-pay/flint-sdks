[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateProductOptionValueRequest

One value of a product option to create, such as a specific size, with its position and status.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `position` | Optional | integer | Display order among the option's values, starting at zero. Format: `int32`. minimum: `0`. |
| `status` | Optional | string | Whether the value is active or inactive. Active variants cannot newly select an inactive value. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `value` | Required | string | Option value shown to buyers, such as Medium. minLength: `1`. maxLength: `255`. |

