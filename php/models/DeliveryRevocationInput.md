[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocationInput

A withdrawal of a previously available delivery choice.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When Flint created this permanent fence, as an RFC 3339 timestamp in UTC. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_revocation_id` | Required | string | Unique ID of this permanent delivery revocation. Example: `"drev_01KEZF7C007Q141XJ28YAAC87B"`. |
| `estimated_impact` | Required | [DeliveryRevocationImpactInput](../models/DeliveryRevocationImpactInput.md#deliveryrevocationimpactinput) | Counts of active quotes and provisional selections that depended on the target when the fence was created. Later reads keep these recorded counts. Counts of active delivery quotes and current delivery selections affected by a delivery revocation. |
| `merchant_note` | Optional | string | Optional incident context recorded when this revocation was created. |
| `reason` | Required | string | Why the dependency was permanently fenced. Values: `"unsafe_configuration"`, `"location_unavailable"`, `"credential_compromise"`, `"legal_requirement"`, `"other"`. |
| `target` | Required | [DeliveryRevocationTargetInput](../models/DeliveryRevocationTargetInput.md#deliveryrevocationtargetinput) | The parent and exact revision, HMAC signing key, or recorded geography version permanently fenced by this revocation. The parent and exact child identity permanently fenced by this revocation. |

