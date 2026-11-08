[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateBundleComponentRequestInput

A component to keep or add when updating a bundle, with its variant, quantity, position, and delivery profile.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string | Identifier of an existing component to retain. Omit it to add a new component. minLength: `1`. pattern: `^bunc_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `delivery_profile_id` | Optional | string or null | Delivery profile for this component. Omit it to copy the variant's current profile when the component is saved; later changes to the variant's profile don't follow. On update, omitting it on a retained component replaces any override with the variant's current profile, so resend it to keep it. Send null to leave the component without a profile, which makes a physical component `action_required` and a digital or service component `not_applicable` with no delivery requirement. Digital and service components never use defaults; explicit and inherited profiles must be required/manual with allowed_types exactly [digital] or [service], matching the component product type. Existing order delivery snapshots do not change. minLength: `1`. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. |
| `position` | Optional | integer | Display order among the bundle's components, starting at zero. Format: `int32`. minimum: `0`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `variant_id` | Required | string | Identifier of the product variant included in the bundle. minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

