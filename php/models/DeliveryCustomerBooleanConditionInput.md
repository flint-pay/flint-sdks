[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCustomerBooleanConditionInput

A delivery eligibility condition that tests a true or false fact about the customer against `value`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `value` | Required | boolean | The value the fact must have. `true` matches when the fact holds, `false` when it does not. |

