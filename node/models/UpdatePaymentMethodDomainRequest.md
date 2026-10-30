[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePaymentMethodDomainRequest

The request body for: Update payment method domain.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `status` | Required | string | Whether wallet buttons are on for the hostname. active registers it on your current payment account and checks it again; inactive turns wallet buttons off. Values: `"active"`, `"inactive"`. |

