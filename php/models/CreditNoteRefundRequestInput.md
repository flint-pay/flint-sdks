[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteRefundRequestInput

Refund details you supply when issuing a credit note: the reason, an optional message, and an optional amount.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credit to refund. Omit to refund all available credit, which Flint resolves once when it accepts the request. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reason` | Optional | string | Why the refund is being made. Omit to record no reason. Values: [13 declared values](CreateOrderEditRequestInput.md#createordereditrequestinput-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund, up to 1,024 characters. minLength: `1`. maxLength: `1024`. |

