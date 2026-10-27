[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IssueCreditNoteRequest

The request body for: Issue credit note.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Optional | [CapturePaymentIntentRequest](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequest) | Issue the credit note and apply credit to its invoice atomically. If the allocation fails, the note stays a draft. Omit amount_money to apply the smaller of the credit available after issue and the invoice's outstanding balance. Cannot be combined with refund. Credit to apply to the invoice when issuing a credit note. `allocation`: [field definitions](../models/IssueCreditNoteRequest.md#issuecreditnoterequestallocation). |
| `expected_version` | Optional | integer string | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `refund` | Optional | [CreditNoteRefundRequest](../models/CreditNoteRefundRequest.md#creditnoterefundrequest) | Create a linked refund when the credit note is issued. Requires both credit-note and refund write permissions and a paid invoice. Cannot be combined with allocation. Refund details you supply when issuing a credit note: the reason, an optional message, and an optional amount. |

### IssueCreditNoteRequest.allocation

Issue the credit note and apply credit to its invoice atomically. If the allocation fails, the note stays a draft. Omit amount_money to apply the smaller of the credit available after issue and the invoice's outstanding balance. Cannot be combined with refund. Credit to apply to the invoice when issuing a credit note.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit to apply. Omit to apply the smaller of the credit available after issue and the invoice's outstanding balance. An explicit amount must be positive, use the invoice's currency, and fit both balances. Either way, the allocation must leave the order's unpaid tip outstanding. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequest-variant-2amount_money). |

### IssueCreditNoteRequest.allocation.amount_money

Field definitions: [CapturePaymentIntentRequest variant 2.amount_money](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequest-variant-2amount_money).

