[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPayBalanceActionOptionsInput

The return resolutions the buyer can pay now.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_ids` | Required | Array of string | Payable resolutions in creation order. Read each amount with GET /v1/me/return-resolutions/{return_resolution_id}, then create its checkout session with POST /v1/me/return-resolutions/{return_resolution_id}/checkout-sessions. minItems: `1`. |

