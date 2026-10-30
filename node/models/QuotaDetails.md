[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## QuotaDetails

Storage usage and limits for a resource, returned in the error details when an image quota is exhausted.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `limit_bytes` | Required | integer | Maximum bytes available for the resource in the authenticated scope. Format: `int64`. |
| `next_expiration_at` | Optional | string | RFC 3339 time when the next ready unattached image becomes eligible for cleanup, when known. Format: `date-time`. |
| `ready_unattached_bytes` | Required | integer | Stored bytes held by completed images that are not attached to a resource. Format: `int64`. |
| `reserved_bytes` | Required | integer | Bytes reserved by in-progress resource mutations. Format: `int64`. |
| `resource` | Required | string | Stable resource name whose quota was exhausted. |
| `used_bytes` | Required | integer | Bytes currently stored for the resource in the authenticated scope. Format: `int64`. |

