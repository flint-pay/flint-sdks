[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateWebhookEndpointRequest

The request body for: Update webhook endpoint.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | Set default to follow the merchant default, or a supported YYYY-MM-DD version to pin this endpoint. Omit to leave unchanged. Null is not accepted. Switching between a pin and default clears the rollback offer. minLength: `1`. |
| `description` | Optional | string or null | Endpoint description. Omit to leave unchanged; null clears it. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `enabled_events` | Optional | Array of string | Event types to deliver. Send ["*"] for every type the endpoint's event_sources deliver, including types added later; * must be the only entry and is not available with installed_merchants. At least one entry is required. Use only current event type names; previous and removed names are rejected. Stored subscriptions map previous names permanently and drop removed names on read. See the changelog. minItems: `1`. Items: minLength: `1`. |
| `event_sources` | Optional | Array of string | Event sources this endpoint receives. Defaults to merchant. Use partner_app for app lifecycle events and installed_merchants for events from merchants that installed the partner app. Items values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when enabled_events, event_sources, installed_merchant_modes, or signing_methods is present, including an empty array. Optional for scalar updates. Format: `uint64`. minimum: `1`. |
| `installed_merchant_modes` | Optional | Array of string | Modes of installed-merchant events this endpoint receives. Required when event_sources includes installed_merchants and omitted otherwise. Partner app lifecycle events are delivered regardless of these modes. minItems: `1`. maxItems: `2`. uniqueItems: `true`. Items values: `"test"`, `"live"`. |
| `partner_app_id` | Optional | string | Partner app that owns partner_app or installed_merchants event sources. minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethod](../models/WebhookSigningMethod.md#webhooksigningmethod) | Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to add hmac when no secret has been issued. Omit to leave unchanged. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |
| `url` | Optional | string | minLength: `1`. |

