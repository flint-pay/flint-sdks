[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodDomain

A domain registered for browser payment methods.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `domain_name` | Required | string |  |
| `payment_method_domain_id` | Required | string |  |
| `payment_option_statuses` | Required | Array of [PaymentMethodDomainPaymentOptionStatus](../models/PaymentMethodDomainPaymentOptionStatus.md#paymentmethoddomainpaymentoptionstatus) | Availability and validation status of each payment option on this domain. |
| `status` | Required | string | Values: `"active"`, `"inactive"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `validation_status` | Required | string | Values: `"active"`, `"action_required"`, `"unavailable"`. |

