[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocationTargetInput

The parent and exact child identity permanently fenced by this revocation.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Conditional | string | ID of the delivery method that owns the targeted revision. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_method_revision_id` | Conditional | string | ID of the immutable revision to fence. It must belong to delivery_method_id. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `delivery_rate_callback_id` | Conditional | string | ID of the delivery rate callback that owns the targeted revision or signing key. Example: `"dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1"`. |
| `delivery_rate_callback_revision_id` | Conditional | string | ID of the immutable revision to fence. It must belong to delivery_rate_callback_id. Example: `"dcbr_01KEZF7C003QAPFXXMCHC59T5J"`. |
| `delivery_rate_callback_signing_key_id` | Conditional | string | ID of the HMAC signing key to fence. It must be the named callback's current or previous key; secret material is never returned. Example: `"cbkey_00112233445566778899aabb"`. |
| `location_geography_version` | Conditional | integer | Exact recorded geography version of location_id to fence. Future and unrecorded versions are not accepted. Format: `int64`. minimum: `1`. |
| `location_id` | Conditional | string | ID of the Location that recorded the targeted geography version. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `target_type` | Required | string | The kind of exact dependency this revocation fences. Values: `"location_geography"`, `"delivery_rate_callback_signing_key"`, `"delivery_rate_callback_revision"`, `"delivery_method_revision"`. |

### DeliveryRevocationTargetInput variant 1: `target_type` = `"location_geography"`

oneOf with target_type: "location_geography": Fences one geography version recorded by the named Location..

- Required: `location_geography_version`, `location_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`.
- Constraints for `target_type`: Fences one geography version recorded by the named Location. Values: `"location_geography"`.

### DeliveryRevocationTargetInput variant 2: `target_type` = `"delivery_rate_callback_signing_key"`

oneOf with target_type: "delivery_rate_callback_signing_key": Fences one current or previous HMAC signing key of the named delivery rate callback..

- Required: `delivery_rate_callback_id`, `delivery_rate_callback_signing_key_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_revision_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Fences one current or previous HMAC signing key of the named delivery rate callback. Values: `"delivery_rate_callback_signing_key"`.

### DeliveryRevocationTargetInput variant 3: `target_type` = `"delivery_rate_callback_revision"`

oneOf with target_type: "delivery_rate_callback_revision": Fences one immutable revision of the named delivery rate callback..

- Required: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Fences one immutable revision of the named delivery rate callback. Values: `"delivery_rate_callback_revision"`.

### DeliveryRevocationTargetInput variant 4: `target_type` = `"delivery_method_revision"`

oneOf with target_type: "delivery_method_revision": Fences one immutable revision of the named delivery method..

- Required: `delivery_method_id`, `delivery_method_revision_id`.
- Optional: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Fences one immutable revision of the named delivery method. Values: `"delivery_method_revision"`.

