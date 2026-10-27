[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteRefundRequest

Refund details you supply when issuing a credit note: the reason, an optional message, and an optional amount.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit to refund. Omit to refund all available credit, which Flint resolves once when it accepts the request. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequestamount_money). |
| `reason` | Required | string | Why the refund is being made. Values: [12 declared values](CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund. minLength: `1`. |

### CreditNoteRefundRequest.amount_money

Field definitions: [CreateCreditNoteRefundRequest.amount_money](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequestamount_money).

