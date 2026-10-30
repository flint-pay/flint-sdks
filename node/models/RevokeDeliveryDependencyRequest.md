[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RevokeDeliveryDependencyRequest

The request body for: Revoke delivery dependency.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Required when target.target_type is delivery_method or delivery_rate_callback. The version of the stable resource whose current revision will be revoked. Omit it for exact revision, geography, and signing-key targets. Format: `uint64`. minimum: `1`. |
| `merchant_note` | Optional | string | minLength: `1`. maxLength: `2048`. |
| `reason` | Required | string | Values: `"unsafe_configuration"`, `"location_unavailable"`, `"credential_compromise"`, `"legal_requirement"`, `"other"`. |
| `target` | Required | [RevokeDeliveryDependencyTarget](../models/RevokeDeliveryDependencyTarget.md#revokedeliverydependencytarget) | A typed revocation target. Each target_type accepts only its resource-specific fields. |

