[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackWithSecret

A delivery rate callback with its one-time HMAC shared secret, returned on create with hmac, by the PATCH that first adds hmac, and by rotate-secret.

An endpoint that supplies delivery rates.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `circuit_failure_count` | Required | integer | Consecutive callback failures since the last successful response. minimum: `0`. |
| `circuit_state` | Required | string | Whether Flint is currently calling the callback, based on recent failures. Values: `"closed"`, `"open"`, `"half_open"`. |
| `configuration` | Required | [DeliveryRateCallbackConfiguration](../models/DeliveryRateCallbackConfiguration.md#deliveryratecallbackconfiguration) | Current settings of the rate callback. Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it. `configuration`: [field definitions](../models/DeliveryRateCallback.md#deliveryratecallbackconfiguration-fields-1). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_delivery_rate_callback_revision_id` | Required | string | ID of the current revision. New quotes use it. Example: `"dcbr_01KEZF7C003QAPFXXMCHC59T5J"`. |
| `delivery_rate_callback_id` | Required | string | Unique identifier for this delivery rate callback, prefixed `dcb_`. Example: `"dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1"`. |
| `delivery_revocation_id` | Required | string or null | The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example: `"drev_01KEZF7C007Q141XJ28YAAC87B"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `name` | Required | string | Merchant-facing name of the rate callback. |
| `signing_methods` | Required | Array of string | Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. minItems: `1`. uniqueItems: `true`. Example: `["jwt"]`. Items: How Flint signs requests to this endpoint. Items values: `"jwt"`, `"hmac"`. |
| `status` | Required | string | Whether the rate callback is in use. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |
| `delivery_rate_callback_signing_key_id` | Optional | string | ID of the HMAC signing key for secret, sent in the Flint-Signing-Key-Ids request header. Present exactly when secret is present. Example: `"cbkey_00112233445566778899aabb"`. |
| `secret` | Optional | string | One-time HMAC shared secret. Present on create when signing_methods includes hmac, on the PATCH that first adds hmac, and on rotate-secret; omitted on an idempotent replay after the secret retention period and on every other response. Flint never returns it again. |

### DeliveryRateCallbackWithSecret.configuration

Field definitions: [DeliveryRateCallback.configuration fields 1](../models/DeliveryRateCallback.md#deliveryratecallbackconfiguration-fields-1).

