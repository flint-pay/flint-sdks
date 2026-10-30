[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocation

A withdrawal of a previously available delivery choice.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery_revocation_id` | Required | string |  |
| `estimated_impact` | Required | [DeliveryRevocationImpact](../models/DeliveryRevocationImpact.md#deliveryrevocationimpact) | Counts of active delivery quotes and current delivery selections affected by a delivery revocation. |
| `merchant_note` | Optional | string |  |
| `reason` | Required | string | Values: `"unsafe_configuration"`, `"location_unavailable"`, `"credential_compromise"`, `"legal_requirement"`, `"other"`. |
| `target` | Required | object and ([DeliveryRevocationTargetLocationGeography](../models/DeliveryRevocationTargetLocationGeography.md#deliveryrevocationtargetlocationgeography) or [DeliveryRevocationTargetDeliveryRateCallbackSigningKey](../models/DeliveryRevocationTargetDeliveryRateCallbackSigningKey.md#deliveryrevocationtargetdeliveryratecallbacksigningkey) or [DeliveryRevocationTargetDeliveryRateCallback](../models/DeliveryRevocationTargetDeliveryRateCallback.md#deliveryrevocationtargetdeliveryratecallback) or [DeliveryRevocationTargetDeliveryRateCallbackRevision](../models/DeliveryRevocationTargetDeliveryRateCallbackRevision.md#deliveryrevocationtargetdeliveryratecallbackrevision) or [DeliveryRevocationTargetDeliveryMethod](../models/DeliveryRevocationTargetDeliveryMethod.md#deliveryrevocationtargetdeliverymethod) or [DeliveryRevocationTargetDeliveryMethodRevision](../models/DeliveryRevocationTargetDeliveryMethodRevision.md#deliveryrevocationtargetdeliverymethodrevision)) | A typed revocation target. Each target_type accepts only its resource-specific fields. `target`: [declared alternatives](../models/DeliveryRevocation.md#deliveryrevocationtarget). |

### DeliveryRevocation.target

A typed revocation target. Each target_type accepts only its resource-specific fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Conditional | string |  |
| `delivery_method_revision_id` | Conditional | string |  |
| `delivery_rate_callback_id` | Conditional | string |  |
| `delivery_rate_callback_revision_id` | Conditional | string |  |
| `delivery_rate_callback_signing_key_id` | Conditional | string |  |
| `expected_version` | Optional | integer | Required for delivery_method and delivery_rate_callback targets. The revocation resolves and permanently fences only the exact current revision at this stable-resource version. Omit it for exact revision, geography, and signing-key targets. Format: `uint64`. minimum: `1`. |
| `location_geography_version` | Conditional | integer | Exact version of the Location geography to revoke. Required for location_geography targets. Format: `int64`. minimum: `1`. |
| `location_id` | Conditional | string |  |
| `target_type` | Required | string | Values: [6 declared values](#deliveryrevocationtarget-target_type-values). |

#### DeliveryRevocation.target target_type values

- `"location_geography"`
- `"delivery_rate_callback_signing_key"`
- `"delivery_rate_callback"`
- `"delivery_rate_callback_revision"`
- `"delivery_method"`
- `"delivery_method_revision"`

### DeliveryRevocation.target variant 1: `target_type` = `"location_geography"`

oneOf with target_type: "location_geography": A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`delivery_rate_callback_id`); present(`delivery_rate_callback_revision_id`); present(`delivery_rate_callback_signing_key_id`); present(`delivery_method_id`); present(`delivery_method_revision_id`); present(`expected_version`))).
- Required: `location_geography_version`, `location_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`.
- Constraints for `target_type`: Values: `"location_geography"`.

### DeliveryRevocation.target variant 2: `target_type` = `"delivery_rate_callback_signing_key"`

oneOf with target_type: "delivery_rate_callback_signing_key": A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`location_id`); present(`location_geography_version`); present(`delivery_rate_callback_id`); present(`delivery_rate_callback_revision_id`); present(`delivery_method_id`); present(`delivery_method_revision_id`); present(`expected_version`))).
- Required: `delivery_rate_callback_signing_key_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Values: `"delivery_rate_callback_signing_key"`.

### DeliveryRevocation.target variant 3: `target_type` = `"delivery_rate_callback"`

oneOf with target_type: "delivery_rate_callback": A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`location_id`); present(`location_geography_version`); present(`delivery_rate_callback_revision_id`); present(`delivery_rate_callback_signing_key_id`); present(`delivery_method_id`); present(`delivery_method_revision_id`); present(`expected_version`))).
- Required: `delivery_rate_callback_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Values: `"delivery_rate_callback"`.

### DeliveryRevocation.target variant 4: `target_type` = `"delivery_rate_callback_revision"`

oneOf with target_type: "delivery_rate_callback_revision": A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`location_id`); present(`location_geography_version`); present(`delivery_rate_callback_signing_key_id`); present(`delivery_method_id`); present(`delivery_method_revision_id`); present(`expected_version`))).
- Required: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Values: `"delivery_rate_callback_revision"`.

### DeliveryRevocation.target variant 5: `target_type` = `"delivery_method"`

oneOf with target_type: "delivery_method": A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`location_id`); present(`location_geography_version`); present(`delivery_rate_callback_id`); present(`delivery_rate_callback_revision_id`); present(`delivery_rate_callback_signing_key_id`); present(`delivery_method_revision_id`); present(`expected_version`))).
- Required: `delivery_method_id`.
- Optional: `delivery_method_revision_id`, `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Values: `"delivery_method"`.

### DeliveryRevocation.target variant 6: `target_type` = `"delivery_method_revision"`

oneOf with target_type: "delivery_method_revision": A typed revocation target. Each target_type accepts only its resource-specific fields..

- Condition: not (at least one(present(`location_id`); present(`location_geography_version`); present(`delivery_rate_callback_id`); present(`delivery_rate_callback_revision_id`); present(`delivery_rate_callback_signing_key_id`); present(`expected_version`))).
- Required: `delivery_method_id`, `delivery_method_revision_id`.
- Optional: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Values: `"delivery_method_revision"`.

