[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateProductOptionRequestInput

A product option to create with a product, such as size, with its values, position, and status.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `existing_variant_value` | Optional | string | Value of this option given to every active variant that has no active value for it after this request, such as when you add an option to a product that already has active variants. It must match one of this option's active `values`, ignoring case and surrounding whitespace. Not stored; the variants keep the value. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | Option name, such as Size or Color. minLength: `1`. maxLength: `255`. |
| `position` | Optional | integer | Display order among the product's options, starting at zero. Format: `int32`. minimum: `0`. |
| `status` | Optional | string | Whether the option is active or inactive. Active variants must select an active value for every active option. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `values` | Optional | Array of [CreateProductOptionValueRequestInput](../models/CreateProductOptionValueRequestInput.md#createproductoptionvaluerequestinput) | Values offered for this option, such as Small, Medium, and Large for Size. |

