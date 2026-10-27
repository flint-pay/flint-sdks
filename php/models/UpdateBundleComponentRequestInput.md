[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateBundleComponentRequestInput

A component to keep or add when updating a bundle, with its variant, quantity, position, and delivery profile.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string | Identifier of an existing component to retain. Omit it to add a new component. minLength: `1`. pattern: `^bunc_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `delivery_profile_id` | Optional | string or null | Component delivery profile override. Omit to inherit the variant's profile. Send null to clear it. minLength: `1`. |
| `position` | Optional | integer | Display order among the bundle's components, starting at zero. Format: `int32`. minimum: `0`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `variant_id` | Required | string | Identifier of the product variant included in the bundle. minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

