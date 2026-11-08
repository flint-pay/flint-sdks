[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformCapability

One platform capability and whether the app can use it in live mode.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capability` | Required | string | The platform capability. Values: `"platform_fees"`, `"merchant_onboarding"`. |
| `inactive_reason` | Optional | string | Why the capability is inactive. Present only while status is inactive. Values: `"requirements_due"`, `"pending_review"`, `"not_approved"`, `"rejected"`, `"paused"`. |
| `status` | Required | string | Whether the capability works in live mode. Values: `"active"`, `"inactive"`. |

