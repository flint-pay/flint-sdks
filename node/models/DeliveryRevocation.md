[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocation

A withdrawal of a previously available delivery choice.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery_revocation_id` | Required | string |  |
| `estimated_impact` | Required | [DeliveryRevocationImpact](../models/DeliveryRevocationImpact.md#deliveryrevocationimpact) | Counts of active delivery quotes and current delivery selections affected by a delivery revocation. |
| `merchant_note` | Optional | string |  |
| `reason` | Required | string | Values: `"unsafe_configuration"`, `"location_unavailable"`, `"credential_compromise"`, `"legal_requirement"`, `"other"`. |
| `target` | Required | [DeliveryRevocationTarget](../models/DeliveryRevocationTarget.md#deliveryrevocationtarget) | A typed revocation target. Each target_type accepts only its resource-specific fields. |

