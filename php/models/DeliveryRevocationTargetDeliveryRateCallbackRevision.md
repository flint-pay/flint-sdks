[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocationTargetDeliveryRateCallbackRevision

The parent and exact child identity permanently fenced by this revocation.

Fences one immutable revision of the named delivery rate callback.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Optional | string | ID of the delivery method that owns the targeted revision. |
| `delivery_method_revision_id` | Optional | string | ID of the immutable revision to fence. It must belong to delivery_method_id. |
| `delivery_rate_callback_id` | Required | string | ID of the delivery rate callback that owns the targeted revision or signing key. |
| `delivery_rate_callback_revision_id` | Required | string | ID of the immutable revision to fence. It must belong to delivery_rate_callback_id. |
| `delivery_rate_callback_signing_key_id` | Optional | string | ID of the HMAC signing key to fence. It must be the named callback's current or previous key; secret material is never returned. |
| `location_geography_version` | Optional | integer | Exact recorded geography version of location_id to fence. Future and unrecorded versions are not accepted. Format: `int64`. minimum: `1`. |
| `location_id` | Optional | string | ID of the Location that recorded the targeted geography version. |
| `target_type` | Required | string | The kind of exact dependency this revocation fences. Fences one immutable revision of the named delivery rate callback. The kind of exact dependency this revocation fences. Fences one immutable revision of the named delivery rate callback. Values: `"delivery_rate_callback_revision"`. |

