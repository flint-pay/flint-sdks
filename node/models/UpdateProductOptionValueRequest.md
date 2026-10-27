[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateProductOptionValueRequest

A value to keep or add on a product option when updating a product, with its position and status.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | Map of (string or null) or null | Complete caller-owned metadata for this option value. Retained option values are replaced as members of the options array, so omitting metadata, sending null, or sending {} clears it. A null-valued key is omitted from the replacement. Values can't be empty strings. Keys starting with flint_ are reserved and cannot be written through the public API. Map values: minLength: `1`. |
| `option_value_id` | Optional | string | Identifier of an existing option value to retain. Omit it to create a new value. minLength: `1`. pattern: `^optv_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `position` | Optional | integer | Display order among the option's values, starting at zero. Format: `int32`. minimum: `0`. |
| `status` | Optional | string | Whether the value is active or inactive. Active variants cannot newly select an inactive value. Values: `"active"`, `"inactive"`. |
| `value` | Required | string | Option value shown to buyers, such as Medium. minLength: `1`. maxLength: `255`. |

