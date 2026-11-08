[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnShippingPolicyInput

Who pays for return shipping in a return policy: the merchant or the buyer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payer` | Required | string | Who pays for shipping the goods back. This states your policy and charges nothing. Values: `"merchant"`, `"buyer"`. |

