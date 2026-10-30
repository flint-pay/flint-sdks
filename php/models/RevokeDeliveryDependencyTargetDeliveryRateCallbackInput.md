[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RevokeDeliveryDependencyTargetDeliveryRateCallbackInput

A typed revocation target. Each target_type accepts only its resource-specific fields.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Optional | string | minLength: `1`. |
| `delivery_method_revision_id` | Optional | string | minLength: `1`. |
| `delivery_rate_callback_id` | Required | string | minLength: `1`. |
| `delivery_rate_callback_revision_id` | Optional | string | minLength: `1`. |
| `delivery_rate_callback_signing_key_id` | Optional | string | minLength: `1`. |
| `location_geography_version` | Optional | integer | Exact version of the Location geography to revoke. Required for location_geography targets. Format: `int64`. minimum: `1`. |
| `location_id` | Optional | string | minLength: `1`. |
| `target_type` | Required | string | Values: `"delivery_rate_callback"`. |

