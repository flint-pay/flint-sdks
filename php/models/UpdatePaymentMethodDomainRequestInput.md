[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePaymentMethodDomainRequestInput

The request body for: Update payment method domain.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `status` | Required | string | Values: `"active"`, `"inactive"`. |

