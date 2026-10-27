[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateProductOptionRequestInput

A product option to keep or add when updating a product, with its name, position, status, and values.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `existing_variant_value` | Optional | string | Value of this option given to every active variant that has no active value for it after this request, such as when you add an option to a product that already has active variants. It must match one of this option's active `values`, ignoring case and surrounding whitespace. Not stored; the variants keep the value. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of (string or null) or null | Complete caller-owned metadata for this option. Retained options are replaced as members of the options array, so omitting metadata, sending null, or sending {} clears it. A null-valued key is omitted from the replacement. Values can't be empty strings. Keys starting with flint_ are reserved and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | Option name, such as Size or Color. minLength: `1`. maxLength: `255`. |
| `option_id` | Optional | string | Identifier of an existing option to retain. Omit it to create a new option. minLength: `1`. pattern: `^opt_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `position` | Optional | integer | Display order among the product's options, starting at zero. Format: `int32`. minimum: `0`. |
| `status` | Optional | string | Whether the option is active or inactive. Active variants must select an active value for every active option. Values: `"active"`, `"inactive"`. |
| `values` | Optional | Array of [UpdateProductOptionValueRequestInput](../models/UpdateProductOptionValueRequestInput.md#updateproductoptionvaluerequestinput) | Values offered for this option, such as Small, Medium, and Large for Size. |

