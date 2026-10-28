[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateWebhookEndpointRequest

The request body for: Create webhook endpoint.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | Set default to follow the merchant default, or a supported YYYY-MM-DD version to pin this endpoint. Omission follows the merchant default. Null is not accepted. minLength: `1`. |
| `description` | Optional | string | minLength: `1`. |
| `enabled_events` | Required | Array of string | Event types to deliver. Send ["*"] for every type the endpoint's event_sources deliver, including types added later; * must be the only entry and is not available with installed_merchants. At least one entry is required. Use only current event type names; previous and removed names are rejected. Stored subscriptions map previous names permanently and drop removed names on read. See the changelog. minItems: `1`. Items: minLength: `1`. |
| `event_sources` | Optional | Array of string | Event sources this endpoint receives. Defaults to merchant. Use partner_app for app lifecycle events and installed_merchants for events from merchants that installed the partner app. Items values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `installed_merchant_modes` | Optional | Array of string | Modes of installed-merchant events this endpoint receives. Required when event_sources includes installed_merchants and omitted otherwise. Partner app lifecycle events are delivered regardless of these modes. minItems: `1`. maxItems: `2`. uniqueItems: `true`. Items values: `"test"`, `"live"`. |
| `partner_app_id` | Optional | string | Partner app that owns partner_app or installed_merchants event sources. minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethod](../models/WebhookSigningMethod.md#webhooksigningmethod) | minItems: `1`. uniqueItems: `true`. Default: `["jwt"]`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |
| `url` | Required | string | minLength: `1`. |

