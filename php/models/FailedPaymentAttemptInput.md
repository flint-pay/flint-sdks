[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FailedPaymentAttemptInput

Merchant-only evidence from one failed payment attempt. Fields absent from the original attempt are omitted.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_email` | Optional | string | Email used for risk evaluation at admission. |
| `buyer_ip_address` | Optional | string | Canonical buyer IP stored at admission. API-key relays must supply a trusted buyer_ip_address. |
| `card_brand` | Optional | string | Card brand recorded before authorization, when available. |
| `card_country` | Optional | string | Card issuing country, when provided by the processor. Not the buyer IP's country. |
| `card_fingerprint` | Optional | string | Merchant/environment-scoped fingerprint used by risk card-fingerprint lists. Never a raw provider fingerprint. |
| `card_last4` | Optional | string | Last four card digits recorded before authorization. Not a unique card identity. |
| `created_at` | Required | string | UTC time the attempt was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `decline_code` | Required | string | Stable decline code recorded for this attempt. |
| `payment_attempt_id` | Required | string | Identity of the failed attempt. Example: `"pia_01KEZF7C00CGGHWWR7KPCGNJRM"`. |

