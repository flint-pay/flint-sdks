[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryRevocationRequest

Creates a permanent fence for one exact delivery dependency in this merchant and environment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_note` | Optional | string | Optional incident context retained with this revocation. minLength: `1`. maxLength: `2048`. |
| `reason` | Required | string | Why this dependency must no longer be used. Values: `"unsafe_configuration"`, `"location_unavailable"`, `"credential_compromise"`, `"legal_requirement"`, `"other"`. |
| `target` | Required | [DeliveryRevocationTarget](../models/DeliveryRevocationTarget.md#deliveryrevocationtarget) | The parent and exact child identity to fence. Each target_type accepts only its own IDs. The parent and exact child identity to fence. Targets never resolve an alias to a current revision. `target`: [declared alternatives](../models/CreateDeliveryRevocationRequest.md#createdeliveryrevocationrequesttarget). |

### CreateDeliveryRevocationRequest.target

The parent and exact child identity to fence. Each target_type accepts only its own IDs. The parent and exact child identity to fence. Targets never resolve an alias to a current revision.

Field definitions: [shared fields](CreateDeliveryRevocationTargetInput.md#createdeliveryrevocationtargetinput).

### CreateDeliveryRevocationRequest.target variant 1: `target_type` = `"location_geography"`

oneOf with target_type: "location_geography": Fences one geography version recorded by the named Location..

- Required: `location_geography_version`, `location_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`.
- Constraints for `target_type`: Fences one geography version recorded by the named Location. Values: `"location_geography"`.

### CreateDeliveryRevocationRequest.target variant 2: `target_type` = `"delivery_rate_callback_signing_key"`

oneOf with target_type: "delivery_rate_callback_signing_key": Fences one current or previous HMAC signing key of the named delivery rate callback..

- Required: `delivery_rate_callback_id`, `delivery_rate_callback_signing_key_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_revision_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Fences one current or previous HMAC signing key of the named delivery rate callback. Values: `"delivery_rate_callback_signing_key"`.

### CreateDeliveryRevocationRequest.target variant 3: `target_type` = `"delivery_rate_callback_revision"`

oneOf with target_type: "delivery_rate_callback_revision": Fences one immutable revision of the named delivery rate callback..

- Required: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Fences one immutable revision of the named delivery rate callback. Values: `"delivery_rate_callback_revision"`.

### CreateDeliveryRevocationRequest.target variant 4: `target_type` = `"delivery_method_revision"`

oneOf with target_type: "delivery_method_revision": Fences one immutable revision of the named delivery method..

- Required: `delivery_method_id`, `delivery_method_revision_id`.
- Optional: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Fences one immutable revision of the named delivery method. Values: `"delivery_method_revision"`.

