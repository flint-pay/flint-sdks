[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodDomainInput

A domain registered for browser payment methods.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `domain_name` | Required | string | The registered hostname, trimmed and lowercased. ASCII only, at least two labels, each up to 63 characters, 253 characters in total; no scheme, path, port, IP address, or wildcard. |
| `payment_method_domain_id` | Required | string | Flint payment method domain ID, starting with pmdom_. Example: `"pmdom_01KEZF7C001WQCSRGH9GWR6628"`. |
| `payment_option_statuses` | Required | Array of [PaymentMethodDomainPaymentOptionStatusInput](../models/PaymentMethodDomainPaymentOptionStatusInput.md#paymentmethoddomainpaymentoptionstatusinput) | Availability and validation status of each payment option on this domain. |
| `status` | Required | string | Whether wallet buttons are on for the hostname. Change it with `PATCH`. Values: `"active"`, `"inactive"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `validation_status` | Required | string | Whether the hostname passed the checks wallets need, summarizing `payment_option_statuses`. Values: `"active"`, `"action_required"`, `"unavailable"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

