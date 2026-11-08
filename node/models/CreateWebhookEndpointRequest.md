[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateWebhookEndpointRequest

The request body for: Create webhook endpoint.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | Set default to follow the merchant default, or a supported YYYY-MM-DD version to pin this endpoint. Omission pins the API version this create request is served at (Flint-Version, or the merchant default when the header is absent). Null is not accepted. minLength: `1`. |
| `description` | Optional | string | Your description of this endpoint. `null` is the same as omitting the field. minLength: `1`. |
| `enabled_events` | Required | Array of string | Event types to deliver. Send ["*"] for every type the endpoint's event_sources deliver, including types added later; * must be the only entry and is not available with installed_merchants. At least one entry is required. Use only current event type names; previous and removed names are rejected. Stored subscriptions map previous names permanently and drop removed names on read. See the changelog. minItems: `1`. Items: minLength: `1`. |
| `event_sources` | Optional | Array of string | Event sources this endpoint receives. Defaults to merchant. Use partner_app for app lifecycle events and installed_merchants for events from merchants that installed the partner app. Items values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `installed_merchant_modes` | Optional | Array of string | Modes of installed-merchant events this endpoint receives. Required when event_sources includes installed_merchants and omitted otherwise. Partner app lifecycle events are delivered regardless of these modes. minItems: `1`. maxItems: `2`. uniqueItems: `true`. Items values: `"test"`, `"live"`. |
| `partner_app_id` | Optional | string | Partner app that owns partner_app or installed_merchants event sources. minLength: `1`. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `partner_app_install_id` | Optional | string | Links this endpoint to a connected app's install. Revoking the install, or its grant for this endpoint's environment, deletes the endpoint. The install must be active and authorized for this environment. Set only at creation; it never changes. Omit for an endpoint not tied to an app. Endpoints created by a linked key are linked to the same install. At most 25 endpoints may link to one install in each environment. minLength: `1`. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethod](../models/WebhookSigningMethod.md#webhooksigningmethod) | Methods Flint uses to sign deliveries. Defaults to jwt. Including hmac issues a shared secret returned once. minItems: `1`. uniqueItems: `true`. Default: `["jwt"]`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Whether this endpoint receives events. Defaults to active. Values: `"active"`, `"inactive"`. |
| `url` | Required | string | Public HTTPS URL to receive webhook deliveries. minLength: `1`. |

