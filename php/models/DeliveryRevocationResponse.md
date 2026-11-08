[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocationResponse

A response containing `DeliveryRevocation` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryRevocation](../models/DeliveryRevocation.md#deliveryrevocation) | Resource, collection, or operation result returned by this request. A withdrawal of a previously available delivery choice. `data`: [field definitions](../models/DeliveryRevocationResponse.md#deliveryrevocationresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryRevocationResponse.data

Resource, collection, or operation result returned by this request. A withdrawal of a previously available delivery choice.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When Flint created this permanent fence, as an RFC 3339 timestamp in UTC. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_revocation_id` | Required | string | Unique ID of this permanent delivery revocation. Example: `"drev_01KEZF7C007Q141XJ28YAAC87B"`. |
| `estimated_impact` | Required | [DeliveryRevocationImpact](../models/DeliveryRevocationImpact.md#deliveryrevocationimpact) | Counts of active quotes and provisional selections that depended on the target when the fence was created. Later reads keep these recorded counts. Counts of active delivery quotes and current delivery selections affected by a delivery revocation. |
| `merchant_note` | Optional | string | Optional incident context recorded when this revocation was created. |
| `reason` | Required | string | Why the dependency was permanently fenced. Values: `"unsafe_configuration"`, `"location_unavailable"`, `"credential_compromise"`, `"legal_requirement"`, `"other"`. |
| `target` | Required | object and ([DeliveryRevocationTargetLocationGeography](../models/DeliveryRevocationTargetLocationGeography.md#deliveryrevocationtargetlocationgeography) or [DeliveryRevocationTargetDeliveryRateCallbackSigningKey](../models/DeliveryRevocationTargetDeliveryRateCallbackSigningKey.md#deliveryrevocationtargetdeliveryratecallbacksigningkey) or [DeliveryRevocationTargetDeliveryRateCallbackRevision](../models/DeliveryRevocationTargetDeliveryRateCallbackRevision.md#deliveryrevocationtargetdeliveryratecallbackrevision) or [DeliveryRevocationTargetDeliveryMethodRevision](../models/DeliveryRevocationTargetDeliveryMethodRevision.md#deliveryrevocationtargetdeliverymethodrevision)) | The parent and exact revision, HMAC signing key, or recorded geography version permanently fenced by this revocation. The parent and exact child identity permanently fenced by this revocation. `target`: [declared alternatives](../models/DeliveryRevocationResponse.md#deliveryrevocationresponsedatatarget). |

### DeliveryRevocationResponse.data.target

The parent and exact revision, HMAC signing key, or recorded geography version permanently fenced by this revocation. The parent and exact child identity permanently fenced by this revocation.

Field definitions: [shared fields](DeliveryRevocationTargetInput.md#deliveryrevocationtargetinput).

### DeliveryRevocationResponse.data.target variant 1: `target_type` = `"location_geography"`

oneOf with target_type: "location_geography": Fences one geography version recorded by the named Location..

- Required: `location_geography_version`, `location_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`.
- Constraints for `target_type`: Fences one geography version recorded by the named Location. Values: `"location_geography"`.

### DeliveryRevocationResponse.data.target variant 2: `target_type` = `"delivery_rate_callback_signing_key"`

oneOf with target_type: "delivery_rate_callback_signing_key": Fences one current or previous HMAC signing key of the named delivery rate callback..

- Required: `delivery_rate_callback_id`, `delivery_rate_callback_signing_key_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_revision_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Fences one current or previous HMAC signing key of the named delivery rate callback. Values: `"delivery_rate_callback_signing_key"`.

### DeliveryRevocationResponse.data.target variant 3: `target_type` = `"delivery_rate_callback_revision"`

oneOf with target_type: "delivery_rate_callback_revision": Fences one immutable revision of the named delivery rate callback..

- Required: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`.
- Optional: `delivery_method_id`, `delivery_method_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Fences one immutable revision of the named delivery rate callback. Values: `"delivery_rate_callback_revision"`.

### DeliveryRevocationResponse.data.target variant 4: `target_type` = `"delivery_method_revision"`

oneOf with target_type: "delivery_method_revision": Fences one immutable revision of the named delivery method..

- Required: `delivery_method_id`, `delivery_method_revision_id`.
- Optional: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `delivery_rate_callback_signing_key_id`, `location_geography_version`, `location_id`.
- Constraints for `target_type`: Fences one immutable revision of the named delivery method. Values: `"delivery_method_revision"`.

### DeliveryRevocationResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

