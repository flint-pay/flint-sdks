[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocationTarget

A typed revocation target. Each target_type accepts only its resource-specific fields.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Conditional | string |  |
| `delivery_method_revision_id` | Conditional | string |  |
| `delivery_rate_callback_id` | Conditional | string |  |
| `delivery_rate_callback_revision_id` | Conditional | string |  |
| `delivery_rate_callback_signing_key_id` | Conditional | string |  |
| `expected_version` | Optional | integer string | Required for delivery_method and delivery_rate_callback targets. The revocation resolves and permanently fences only the exact current revision at this stable-resource version. Omit it for exact revision, geography, and signing-key targets. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `location_geography_version` | Conditional | integer string | Exact version of the Location geography to revoke. Required for location_geography targets. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `location_id` | Conditional | string |  |
| `target_type` | Required | string | Values: [6 declared values](#deliveryrevocationtarget-target_type-values). |

#### DeliveryRevocationTarget target_type values

- `"location_geography"`
- `"delivery_rate_callback_signing_key"`
- `"delivery_rate_callback"`
- `"delivery_rate_callback_revision"`
- `"delivery_method"`
- `"delivery_method_revision"`

### DeliveryRevocationTarget variant 1: `target_type` = `"location_geography"`

oneOf variant 1: A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`delivery_rate_callback_id`); present(`delivery_rate_callback_revision_id`); present(`delivery_rate_callback_signing_key_id`); present(`delivery_method_id`); present(`delivery_method_revision_id`); present(`expected_version`))).
- Required: `location_geography_version`, `location_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`.
- Constraints for `target_type`: Values: `"location_geography"`.

### DeliveryRevocationTarget variant 2: `target_type` = `"delivery_rate_callback_signing_key"`

oneOf variant 2: A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`location_id`); present(`location_geography_version`); present(`delivery_rate_callback_id`); present(`delivery_rate_callback_revision_id`); present(`delivery_method_id`); present(`delivery_method_revision_id`); present(`expected_version`))).
- Required: `delivery_rate_callback_signing_key_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Values: `"delivery_rate_callback_signing_key"`.

### DeliveryRevocationTarget variant 3: `target_type` = `"delivery_rate_callback"`

oneOf variant 3: A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`location_id`); present(`location_geography_version`); present(`delivery_rate_callback_revision_id`); present(`delivery_rate_callback_signing_key_id`); present(`delivery_method_id`); present(`delivery_method_revision_id`); present(`expected_version`))).
- Required: `delivery_rate_callback_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Values: `"delivery_rate_callback"`.

### DeliveryRevocationTarget variant 4: `target_type` = `"delivery_rate_callback_revision"`

oneOf variant 4: A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`location_id`); present(`location_geography_version`); present(`delivery_rate_callback_signing_key_id`); present(`delivery_method_id`); present(`delivery_method_revision_id`); present(`expected_version`))).
- Required: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Values: `"delivery_rate_callback_revision"`.

### DeliveryRevocationTarget variant 5: `target_type` = `"delivery_method"`

oneOf variant 5: A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`location_id`); present(`location_geography_version`); present(`delivery_rate_callback_id`); present(`delivery_rate_callback_revision_id`); present(`delivery_rate_callback_signing_key_id`); present(`delivery_method_revision_id`); present(`expected_version`))).
- Required: `delivery_method_id`.
- Optional: `delivery_method_revision_id`, `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Values: `"delivery_method"`.

### DeliveryRevocationTarget variant 6: `target_type` = `"delivery_method_revision"`

oneOf variant 6: A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`location_id`); present(`location_geography_version`); present(`delivery_rate_callback_id`); present(`delivery_rate_callback_revision_id`); present(`delivery_rate_callback_signing_key_id`); present(`expected_version`))).
- Required: `delivery_method_id`, `delivery_method_revision_id`.
- Optional: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Values: `"delivery_method_revision"`.

