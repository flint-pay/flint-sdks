[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FailedPaymentAttemptPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_email` | Optional | string or null | Email used for risk evaluation at admission. `buyer_email`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributesInput.md#failedpaymentattemptpreviousattributesinputbuyer_email). |
| `buyer_ip_address` | Optional | string or null | Canonical buyer IP stored at admission. API-key relays must supply a trusted buyer_ip_address. `buyer_ip_address`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributesInput.md#failedpaymentattemptpreviousattributesinputbuyer_ip_address). |
| `card_brand` | Optional | string or null | Card brand recorded before authorization, when available. `card_brand`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributesInput.md#failedpaymentattemptpreviousattributesinputcard_brand). |
| `card_country` | Optional | string or null | Card issuing country, when provided by the processor. Not the buyer IP's country. `card_country`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributesInput.md#failedpaymentattemptpreviousattributesinputcard_country). |
| `card_fingerprint` | Optional | string or null | Merchant/environment-scoped fingerprint used by risk card-fingerprint lists. Never a raw provider fingerprint. `card_fingerprint`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributesInput.md#failedpaymentattemptpreviousattributesinputcard_fingerprint). |
| `card_last4` | Optional | string or null | Last four card digits recorded before authorization. Not a unique card identity. `card_last4`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributesInput.md#failedpaymentattemptpreviousattributesinputcard_last4). |
| `created_at` | Optional | string or null | UTC time the attempt was created. `created_at`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributesInput.md#failedpaymentattemptpreviousattributesinputcreated_at). |
| `decline_code` | Optional | string or null | Stable decline code recorded for this attempt. `decline_code`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributesInput.md#failedpaymentattemptpreviousattributesinputdecline_code). |
| `payment_attempt_id` | Optional | string or null | Identity of the failed attempt. `payment_attempt_id`: [declared alternatives](../models/FailedPaymentAttemptPreviousAttributesInput.md#failedpaymentattemptpreviousattributesinputpayment_attempt_id). |

### FailedPaymentAttemptPreviousAttributesInput.buyer_email

### FailedPaymentAttemptPreviousAttributesInput.buyer_email variant 1

anyOf variant 1: Email used for risk evaluation at admission..

- Value shape: string. Email used for risk evaluation at admission. 

### FailedPaymentAttemptPreviousAttributesInput.buyer_email variant 2

anyOf variant 2.

- Value shape: null. Email used for risk evaluation at admission. 

### FailedPaymentAttemptPreviousAttributesInput.buyer_ip_address

### FailedPaymentAttemptPreviousAttributesInput.buyer_ip_address variant 1

anyOf variant 1: Canonical buyer IP stored at admission. API-key relays must supply a trusted buyer_ip_address..

- Value shape: string. Canonical buyer IP stored at admission. API-key relays must supply a trusted buyer_ip_address. 

### FailedPaymentAttemptPreviousAttributesInput.buyer_ip_address variant 2

anyOf variant 2.

- Value shape: null. Canonical buyer IP stored at admission. API-key relays must supply a trusted buyer_ip_address. 

### FailedPaymentAttemptPreviousAttributesInput.card_brand

### FailedPaymentAttemptPreviousAttributesInput.card_brand variant 1

anyOf variant 1: Card brand recorded before authorization, when available..

- Value shape: string. Card brand recorded before authorization, when available. 

### FailedPaymentAttemptPreviousAttributesInput.card_brand variant 2

anyOf variant 2.

- Value shape: null. Card brand recorded before authorization, when available. 

### FailedPaymentAttemptPreviousAttributesInput.card_country

### FailedPaymentAttemptPreviousAttributesInput.card_country variant 1

anyOf variant 1: Card issuing country, when provided by the processor. Not the buyer IP's country..

- Value shape: string. Card issuing country, when provided by the processor. Not the buyer IP's country. 

### FailedPaymentAttemptPreviousAttributesInput.card_country variant 2

anyOf variant 2.

- Value shape: null. Card issuing country, when provided by the processor. Not the buyer IP's country. 

### FailedPaymentAttemptPreviousAttributesInput.card_fingerprint

### FailedPaymentAttemptPreviousAttributesInput.card_fingerprint variant 1

anyOf variant 1: Merchant/environment-scoped fingerprint used by risk card-fingerprint lists. Never a raw provider fingerprint..

- Value shape: string. Merchant/environment-scoped fingerprint used by risk card-fingerprint lists. Never a raw provider fingerprint. 

### FailedPaymentAttemptPreviousAttributesInput.card_fingerprint variant 2

anyOf variant 2.

- Value shape: null. Merchant/environment-scoped fingerprint used by risk card-fingerprint lists. Never a raw provider fingerprint. 

### FailedPaymentAttemptPreviousAttributesInput.card_last4

### FailedPaymentAttemptPreviousAttributesInput.card_last4 variant 1

anyOf variant 1: Last four card digits recorded before authorization. Not a unique card identity..

- Value shape: string. Last four card digits recorded before authorization. Not a unique card identity. 

### FailedPaymentAttemptPreviousAttributesInput.card_last4 variant 2

anyOf variant 2.

- Value shape: null. Last four card digits recorded before authorization. Not a unique card identity. 

### FailedPaymentAttemptPreviousAttributesInput.created_at

### FailedPaymentAttemptPreviousAttributesInput.created_at variant 1

anyOf variant 1: UTC time the attempt was created..

- Value shape: string. UTC time the attempt was created. UTC time the attempt was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FailedPaymentAttemptPreviousAttributesInput.created_at variant 2

anyOf variant 2.

- Value shape: null. UTC time the attempt was created. 

### FailedPaymentAttemptPreviousAttributesInput.decline_code

### FailedPaymentAttemptPreviousAttributesInput.decline_code variant 1

anyOf variant 1: Stable decline code recorded for this attempt..

- Value shape: string. Stable decline code recorded for this attempt. 

### FailedPaymentAttemptPreviousAttributesInput.decline_code variant 2

anyOf variant 2.

- Value shape: null. Stable decline code recorded for this attempt. 

### FailedPaymentAttemptPreviousAttributesInput.payment_attempt_id

### FailedPaymentAttemptPreviousAttributesInput.payment_attempt_id variant 1

anyOf variant 1: Identity of the failed attempt..

- Value shape: string. Identity of the failed attempt. Identity of the failed attempt. Example: `"pia_01KEZF7C00CGGHWWR7KPCGNJRM"`. 

### FailedPaymentAttemptPreviousAttributesInput.payment_attempt_id variant 2

anyOf variant 2.

- Value shape: null. Identity of the failed attempt. 

