[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEndpointWithSecretInput

A webhook endpoint with its one-time signing secret, returned on create with hmac, when PATCH first enables hmac, or when its secret is rotated.

A merchant webhook endpoint belongs to the live mode or sandbox of the credential that created it and receives only that environment's events. Partner endpoints select sources with event_sources and installed_merchant_modes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | A dated API version pins this endpoint. The value default follows the endpoint owner's merchant default at delivery time, including retries. Deliveries never use a newer version than the event's recorded version. |
| `api_version_changed_at` | Optional | string | When api_version last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `api_version_previous` | Optional | string | Version this endpoint used before its last upgrade. Present while a rollback is available. To roll back, send it as api_version. |
| `api_version_rollback_expires_at` | Optional | string | When the rollback offer for api_version_previous ends. You can still set any supported version afterward. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_by` | Optional | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) | The API key, user, partner app, or workload identity that created this endpoint. An API key creator can belong to another mode, such as a live key that creates a sandbox endpoint. Absent when the creator is unavailable, including endpoints created before attribution was recorded. A reference to another resource by `resource_type` and `resource_id`. |
| `description` | Optional | string | Your description of this endpoint. Omitted when none is set. |
| `enabled_events` | Required | Array of string | Subscribed event types. ["*"] includes every type the endpoint's event_sources deliver, including types added later; * is not available with installed_merchants. Stored subscriptions map previous names permanently and drop removed names on read. Empty when no current subscriptions remain. See the changelog. Items: minLength: `1`. |
| `event_sources` | Optional | Array of string | Event sources this endpoint receives. Defaults to merchant. Use partner_app for app lifecycle events and installed_merchants for events from merchants that installed the partner app. Items values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `installed_merchant_modes` | Optional | Array of string | Modes of installed-merchant events this endpoint receives. Required when event_sources includes installed_merchants and omitted otherwise. Partner app lifecycle events are delivered regardless of these modes. minItems: `1`. maxItems: `2`. uniqueItems: `true`. Items values: `"test"`, `"live"`. |
| `partner_app_id` | Optional | string | Partner app that owns partner_app or installed_merchants event sources. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `partner_app_install_id` | Required | string or null | The connected app install this endpoint is linked to. The endpoint is deleted when that install is revoked or loses its grant for this endpoint's environment. Null when the endpoint is not linked to a connected app. Never changes. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `previous_secret_expires_at` | Optional | string | When the replaced signing secret stops signing deliveries. Present only during a rotation overlap. Until then each delivery carries a signature from both secrets. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `signing_methods` | Required | Array of string | Methods Flint uses to sign deliveries to this endpoint. minItems: `1`. uniqueItems: `true`. Items: How Flint signs requests to this endpoint. Items values: `"jwt"`, `"hmac"`. |
| `status` | Required | string | Availability of this endpoint. Deleted is returned only by DELETE. Values: `"active"`, `"inactive"`, `"deleted"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `url` | Required | string | Public HTTPS URL that receives webhook deliveries. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |
| `webhook_endpoint_id` | Required | string | Unique identifier for this webhook endpoint, prefixed `whep_`. Example: `"whep_01KEZF7C006FXYTAJRZCGCBJTN"`. |
| `secret` | Optional | string | One-time signing secret. Present on create when hmac is enabled, on PATCH when hmac is first enabled, and on rotation; omitted on an idempotent replay after the secret retention period. |

