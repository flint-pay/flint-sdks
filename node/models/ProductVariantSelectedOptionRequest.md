[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantSelectedOptionRequest

An option name and value you choose to identify a product variant, such as Size and Large.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `option_name` | Required | string | Name of one of the product's options. Limited to 255 characters (Unicode code points) before trimming surrounding whitespace. Matches case-insensitively after trimming surrounding whitespace. On a variant update, an option that is no longer active is accepted only when the entry matches the variant's current selection for that option; omit it to keep that selection. minLength: `1`. maxLength: `255`. |
| `value` | Required | string | Value of the named option. Limited to 255 characters (Unicode code points) before trimming surrounding whitespace. Matches the option's values case-insensitively after trimming surrounding whitespace. A value that is no longer active is accepted only on a variant update, when it matches the variant's current selection for that option. minLength: `1`. maxLength: `255`. |

