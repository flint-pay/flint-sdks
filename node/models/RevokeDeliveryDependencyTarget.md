[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RevokeDeliveryDependencyTarget

A typed revocation target. Each target_type accepts only its resource-specific fields.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Conditional | string | minLength: `1`. |
| `delivery_method_revision_id` | Conditional | string | minLength: `1`. |
| `delivery_rate_callback_id` | Conditional | string | minLength: `1`. |
| `delivery_rate_callback_revision_id` | Conditional | string | minLength: `1`. |
| `delivery_rate_callback_signing_key_id` | Conditional | string | minLength: `1`. |
| `location_geography_version` | Conditional | integer | Exact version of the Location geography to revoke. Required for location_geography targets. Format: `int64`. minimum: `1`. |
| `location_id` | Conditional | string | minLength: `1`. |
| `target_type` | Required | string | Values: [6 declared values](#revokedeliverydependencytarget-target_type-values). |

#### RevokeDeliveryDependencyTarget target_type values

- `"location_geography"`
- `"delivery_rate_callback_signing_key"`
- `"delivery_rate_callback"`
- `"delivery_rate_callback_revision"`
- `"delivery_method"`
- `"delivery_method_revision"`

### RevokeDeliveryDependencyTarget variant 1: `target_type` = `"location_geography"`

oneOf with target_type: "location_geography": A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`delivery_rate_callback_id`); present(`delivery_rate_callback_revision_id`); present(`delivery_rate_callback_signing_key_id`); present(`delivery_method_id`); present(`delivery_method_revision_id`))).
- Required: `location_geography_version`, `location_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`.
- Constraints for `target_type`: Values: `"location_geography"`.

### RevokeDeliveryDependencyTarget variant 2: `target_type` = `"delivery_rate_callback_signing_key"`

oneOf with target_type: "delivery_rate_callback_signing_key": A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`location_id`); present(`location_geography_version`); present(`delivery_rate_callback_id`); present(`delivery_rate_callback_revision_id`); present(`delivery_method_id`); present(`delivery_method_revision_id`))).
- Required: `delivery_rate_callback_signing_key_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Values: `"delivery_rate_callback_signing_key"`.

### RevokeDeliveryDependencyTarget variant 3: `target_type` = `"delivery_rate_callback"`

oneOf with target_type: "delivery_rate_callback": A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`location_id`); present(`location_geography_version`); present(`delivery_rate_callback_revision_id`); present(`delivery_rate_callback_signing_key_id`); present(`delivery_method_id`); present(`delivery_method_revision_id`))).
- Required: `delivery_rate_callback_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Values: `"delivery_rate_callback"`.

### RevokeDeliveryDependencyTarget variant 4: `target_type` = `"delivery_rate_callback_revision"`

oneOf with target_type: "delivery_rate_callback_revision": A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`location_id`); present(`location_geography_version`); present(`delivery_rate_callback_signing_key_id`); present(`delivery_method_id`); present(`delivery_method_revision_id`))).
- Required: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Values: `"delivery_rate_callback_revision"`.

### RevokeDeliveryDependencyTarget variant 5: `target_type` = `"delivery_method"`

oneOf with target_type: "delivery_method": A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`location_id`); present(`location_geography_version`); present(`delivery_rate_callback_id`); present(`delivery_rate_callback_revision_id`); present(`delivery_rate_callback_signing_key_id`); present(`delivery_method_revision_id`))).
- Required: `delivery_method_id`.
- Optional: `delivery_method_revision_id`, `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Values: `"delivery_method"`.

### RevokeDeliveryDependencyTarget variant 6: `target_type` = `"delivery_method_revision"`

oneOf with target_type: "delivery_method_revision": A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`location_id`); present(`location_geography_version`); present(`delivery_rate_callback_id`); present(`delivery_rate_callback_revision_id`); present(`delivery_rate_callback_signing_key_id`))).
- Required: `delivery_method_id`, `delivery_method_revision_id`.
- Optional: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Values: `"delivery_method_revision"`.

