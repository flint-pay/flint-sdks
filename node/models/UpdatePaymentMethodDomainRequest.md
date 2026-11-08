[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePaymentMethodDomainRequest

The request body for: Update payment method domain.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `status` | Required | string | Whether wallet buttons are on for the hostname. active registers it on your current payment account and checks it again; inactive turns wallet buttons off. Values: `"active"`, `"inactive"`. |

