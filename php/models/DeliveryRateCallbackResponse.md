[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackResponse

A response containing `DeliveryRateCallback` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryRateCallback](../models/DeliveryRateCallback.md#deliveryratecallback) | An endpoint that supplies delivery rates. `data`: [field definitions](../models/DeliveryRateCallbackResponse.md#deliveryratecallbackresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryRateCallbackResponse.data

An endpoint that supplies delivery rates.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `circuit_failure_count` | Required | integer | Consecutive callback failures since the last successful response. minimum: `0`. |
| `circuit_state` | Required | string | Values: `"closed"`, `"open"`, `"half_open"`. |
| `configuration` | Required | [DeliveryRateCallbackConfiguration](../models/DeliveryRateCallbackConfiguration.md#deliveryratecallbackconfiguration) | Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `current_delivery_rate_callback_revision_id` | Required | string |  |
| `delivery_rate_callback_id` | Required | string |  |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `key_id` | Optional | string | Initial HMAC signing key ID. Returned only by create when hmac is included. |
| `name` | Required | string |  |
| `secret` | Optional | string | Initial HMAC shared secret. Returned only by the create response when signing_methods includes hmac. |
| `signing_methods` | Required | Array of string | Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. minItems: `1`. uniqueItems: `true`. Example: `["jwt"]`. Items: jwt uses Flint's public JWKS. hmac uses a shared secret and Standard Webhooks v1. Items values: `"jwt"`, `"hmac"`. |
| `status` | Required | string | Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `uint64`. minimum: `1`. |

