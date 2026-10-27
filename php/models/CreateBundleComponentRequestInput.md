[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateBundleComponentRequestInput

A component to include when creating a bundle: a variant, its quantity and position, and an optional delivery profile override.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_profile_id` | Optional | string or null | Component delivery profile override. Omit to inherit the variant's profile. Send null to clear it. minLength: `1`. |
| `position` | Optional | integer | Display order among the bundle's components, starting at zero. Format: `int32`. minimum: `0`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `variant_id` | Required | string | Identifier of the product variant included in the bundle. minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

