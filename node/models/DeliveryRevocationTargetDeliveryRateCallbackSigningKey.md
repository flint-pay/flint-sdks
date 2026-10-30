[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocationTargetDeliveryRateCallbackSigningKey

A typed revocation target. Each target_type accepts only its resource-specific fields.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Optional | string |  |
| `delivery_method_revision_id` | Optional | string |  |
| `delivery_rate_callback_id` | Optional | string |  |
| `delivery_rate_callback_revision_id` | Optional | string |  |
| `delivery_rate_callback_signing_key_id` | Required | string |  |
| `expected_version` | Optional | integer | Required for delivery_method and delivery_rate_callback targets. The revocation resolves and permanently fences only the exact current revision at this stable-resource version. Omit it for exact revision, geography, and signing-key targets. Format: `uint64`. minimum: `1`. |
| `location_geography_version` | Optional | integer | Exact version of the Location geography to revoke. Required for location_geography targets. Format: `int64`. minimum: `1`. |
| `location_id` | Optional | string |  |
| `target_type` | Required | string | Values: `"delivery_rate_callback_signing_key"`. |

