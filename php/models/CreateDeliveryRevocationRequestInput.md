[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryRevocationRequestInput

Creates a permanent fence for one exact delivery dependency in this merchant and environment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_note` | Optional | string | Optional incident context retained with this revocation. minLength: `1`. maxLength: `2048`. |
| `reason` | Required | string | Why this dependency must no longer be used. Values: `"unsafe_configuration"`, `"location_unavailable"`, `"credential_compromise"`, `"legal_requirement"`, `"other"`. |
| `target` | Required | [CreateDeliveryRevocationTargetInput](../models/CreateDeliveryRevocationTargetInput.md#createdeliveryrevocationtargetinput) | The parent and exact child identity to fence. Each target_type accepts only its own IDs. The parent and exact child identity to fence. Targets never resolve an alias to a current revision. |

