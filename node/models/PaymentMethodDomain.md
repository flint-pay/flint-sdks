[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodDomain

A domain registered for browser payment methods.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `domain_name` | Required | string | The registered hostname, trimmed and lowercased. ASCII only, at least two labels, each up to 63 characters, 253 characters in total; no scheme, path, port, IP address, or wildcard. |
| `payment_method_domain_id` | Required | string | Flint payment method domain ID, starting with pmdom_. |
| `payment_option_statuses` | Required | Array of [PaymentMethodDomainPaymentOptionStatus](../models/PaymentMethodDomainPaymentOptionStatus.md#paymentmethoddomainpaymentoptionstatus) | Availability and validation status of each payment option on this domain. |
| `status` | Required | string | Values: `"active"`, `"inactive"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `validation_status` | Required | string | Values: `"active"`, `"action_required"`, `"unavailable"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

