[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCategoryRequest

The request body for: Create category.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string | Description of the category. minLength: `1`. maxLength: `2048`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `handle` | Optional | string | Unique category handle, using lowercase letters, digits, and single hyphens between words. Cannot be changed after creation. minLength: `1`. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | Category name shown to buyers. minLength: `1`. maxLength: `100`. |

