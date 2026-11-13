[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocation

A permanent fence on an exact delivery method revision, rate callback revision, callback signing key, or Location geography version. Quotes that depend on it are revoked, and selections that depend on it stop being current.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When Flint created this permanent fence, as an RFC 3339 timestamp in UTC. Format: `date-time`. |
| `delivery_revocation_id` | Required | string | Unique ID of this permanent delivery revocation. |
| `estimated_impact` | Required | [DeliveryRevocationImpact](../models/DeliveryRevocationImpact.md#deliveryrevocationimpact) | Counts of active quotes and provisional selections that depended on the target when the fence was created. Later reads keep these recorded counts. Counts of active delivery quotes and current delivery selections affected by a delivery revocation. |
| `merchant_note` | Optional | string | Optional incident context recorded when this revocation was created. |
| `reason` | Required | string | Why the dependency was permanently fenced. Values: `"unsafe_configuration"`, `"location_unavailable"`, `"credential_compromise"`, `"legal_requirement"`, `"other"`. |
| `target` | Required | object and ([DeliveryRevocationTargetLocationGeography](../models/DeliveryRevocationTargetLocationGeography.md#deliveryrevocationtargetlocationgeography) or [DeliveryRevocationTargetDeliveryRateCallbackSigningKey](../models/DeliveryRevocationTargetDeliveryRateCallbackSigningKey.md#deliveryrevocationtargetdeliveryratecallbacksigningkey) or [DeliveryRevocationTargetDeliveryRateCallbackRevision](../models/DeliveryRevocationTargetDeliveryRateCallbackRevision.md#deliveryrevocationtargetdeliveryratecallbackrevision) or [DeliveryRevocationTargetDeliveryMethodRevision](../models/DeliveryRevocationTargetDeliveryMethodRevision.md#deliveryrevocationtargetdeliverymethodrevision)) | The parent and exact revision, HMAC signing key, or recorded geography version permanently fenced by this revocation. The parent and exact child identity permanently fenced by this revocation. `target`: [declared alternatives](../models/DeliveryRevocationResponse.md#deliveryrevocationresponsedatatarget). |

### DeliveryRevocation.target

Declared alternatives: [DeliveryRevocationResponse.data.target](../models/DeliveryRevocationResponse.md#deliveryrevocationresponsedatatarget).

