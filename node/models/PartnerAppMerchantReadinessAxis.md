[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppMerchantReadinessAxis

The status of one readiness area and the reason for it, as on the merchant's `readiness`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Required | string | Whether this area works now, with the same value as on the merchant's `readiness`. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. |
| `status_reason` | Optional | string | Why the status isn't `ready`. Absent when the status is `ready` or `not_requested`. Values: [19 declared values](CapabilityReadiness.md#capabilityreadiness-status_reason-values). |

