[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateEvaluationRequestInput

The body Flint sends to a delivery rate callback's URL to price delivery methods for a quote. Verify the signature against the raw body before parsing it, then answer with a DeliveryRateEvaluationResponse.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | object | The buyer's location for local delivery, limited like destination. It adds latitude and longitude when a candidate lists buyer_location.coordinate. Omitted when no candidate lists a buyer_location field. `buyer_location`: [field definitions](../models/DeliveryRateEvaluationRequestInput.md#deliveryrateevaluationrequestinputbuyer_location). |
| `candidates` | Required | Array of [DeliveryRateEvaluationCandidateInput](../models/DeliveryRateEvaluationCandidateInput.md#deliveryrateevaluationcandidateinput) | The delivery methods to price, sorted by delivery_method_revision_id. Every candidate in a request has the same execution legs; methods that ship from different Locations get separate requests. |
| `checkout_session_id` | Required | string or null | The checkout session being quoted. `null` when a delivery preview prices the methods, because a preview has no checkout session. A test delivery sends an ID that matches no checkout session. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `choice_group_fingerprint` | Required | string | Opaque fingerprint of the choice group's items and quantities. Equal fingerprints mean the same contents. |
| `currency` | Required | string | The checkout currency as an ISO 4217 code. Every amount in the response must use it. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_choice_group_id` | Required | string | The choice group being priced: the line items that ship together under one delivery method. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `delivery_feasibility_plan_fingerprint` | Required | string | Opaque fingerprint of the plan Flint priced: its origins and the allocations each one ships. Equal fingerprints mean the same plan. |
| `delivery_quote_expires_at` | Required | string | When the quote expires, in RFC 3339 format truncated to whole seconds. Every expires_at in the response must be no later than this. It is up to 15 minutes after evaluated_at, or just under 5 minutes for a cart with tracked inventory. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_rate_callback_revision_id` | Required | string | The delivery rate callback revision whose configuration sent this request. Example: `"dcbr_01KEZF7C003QAPFXXMCHC59T5J"`. |
| `delivery_rate_callback_signing_key_id` | Required | string | ID of the current HMAC signing key when hmac signing is enabled, or an empty string for a JWT-only callback. It is the first ID in the Flint-Signing-Key-Ids header and is unrelated to the JWT header's kid. Example: `"cbkey_00112233445566778899aabb"`. |
| `delivery_rate_evaluation_id` | Required | string | Identifies this evaluation. A retry reuses it with the same body, and each new quote gets a new one. The webhook-id header carries the same value. Echo it in the response. Example: `"dreval_01KEZF7C00X0Q3Z075W9W90ZGC"`. |
| `destination` | Optional | object | The delivery address, limited to the fields that a candidate method lists in quote_input_fields. Omitted when no candidate lists an address field. `destination`: [field definitions](../models/DeliveryRateEvaluationRequestInput.md#deliveryrateevaluationrequestinputdestination). |
| `evaluated_at` | Required | string | The quote's evaluation time, in RFC 3339 format with up to nine fractional digits. Compute every time in the response from this value, not from your server's clock. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `order_id` | Required | string | The order whose items are being priced. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `quote_creation_identity` | Required | string | Opaque identity of the quote attempt this evaluation belongs to. |
| `test` | Optional | boolean | `true` on a test delivery sent by createDeliveryRateCallbackTestDelivery, whose IDs don't refer to stored checkout sessions or orders. Omitted on live requests. |

### DeliveryRateEvaluationRequestInput.buyer_location

The buyer's location for local delivery, limited like destination. It adds latitude and longitude when a candidate lists buyer_location.coordinate. Omitted when no candidate lists a buyer_location field.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Optional | string | City or locality. |
| `country` | Optional | string | Two-letter ISO 3166-1 country code. |
| `latitude` | Optional | number | Latitude in decimal degrees. |
| `line1` | Optional | string | First address line. |
| `line2` | Optional | string | Second address line. |
| `longitude` | Optional | number | Longitude in decimal degrees. |
| `postal_code` | Optional | string | Postal or ZIP code. |
| `state` | Optional | string | State, province, or region code. |

### DeliveryRateEvaluationRequestInput.destination

The delivery address, limited to the fields that a candidate method lists in quote_input_fields. Omitted when no candidate lists an address field.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Optional | string | City or locality. |
| `country` | Optional | string | Two-letter ISO 3166-1 country code. |
| `line1` | Optional | string | First address line. |
| `line2` | Optional | string | Second address line. |
| `postal_code` | Optional | string | Postal or ZIP code. |
| `state` | Optional | string | State, province, or region code. |

