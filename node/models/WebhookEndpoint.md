[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEndpoint

A merchant webhook endpoint belongs to the live mode or sandbox of the credential that created it and receives only that environment's events. Partner endpoints select sources with event_sources and installed_merchant_modes.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | A dated API version pins this endpoint. The value default follows the endpoint owner's merchant default at delivery time, including retries. Deliveries never use a newer version than the event's recorded version. |
| `api_version_changed_at` | Optional | string | When api_version last changed. Format: `date-time`. |
| `api_version_previous` | Optional | string | Version this endpoint used before its last upgrade. Present while a rollback is available. To roll back, send it as api_version. |
| `api_version_rollback_expires_at` | Optional | string | When the rollback offer for api_version_previous ends. You can still set any supported version afterward. Format: `date-time`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Optional | string |  |
| `enabled_events` | Required | Array of string | Subscribed event types. ["*"] includes every type the endpoint's event_sources deliver, including types added later; * is not available with installed_merchants. Stored subscriptions map previous names permanently and drop removed names on read. Empty when no current subscriptions remain. See the changelog. Items: minLength: `1`. |
| `event_sources` | Optional | Array of string | Event sources this endpoint receives. Defaults to merchant. Use partner_app for app lifecycle events and installed_merchants for events from merchants that installed the partner app. Items values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `installed_merchant_modes` | Optional | Array of string | Modes of installed-merchant events this endpoint receives. Required when event_sources includes installed_merchants and omitted otherwise. Partner app lifecycle events are delivered regardless of these modes. minItems: `1`. maxItems: `2`. uniqueItems: `true`. Items values: `"test"`, `"live"`. |
| `partner_app_id` | Optional | string | Partner app that owns partner_app or installed_merchants event sources. |
| `previous_secret_expires_at` | Optional | string | When the replaced signing secret stops signing deliveries. Present only during a rotation overlap. Until then each delivery carries a signature from both secrets. Format: `date-time`. |
| `signing_methods` | Required | Array of string | minItems: `1`. uniqueItems: `true`. Items: jwt uses Flint's public JWKS. hmac uses a shared secret and Standard Webhooks v1. Items values: `"jwt"`, `"hmac"`. |
| `status` | Required | string | Availability of this endpoint. Deleted is returned only by DELETE. Values: `"active"`, `"inactive"`, `"deleted"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `url` | Required | string |  |
| `version` | Required | integer | Format: `uint64`. minimum: `1`. |
| `webhook_endpoint_id` | Required | string |  |

