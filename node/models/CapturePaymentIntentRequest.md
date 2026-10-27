[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CapturePaymentIntentRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequest-variant-1amount_money), [field definitions](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequest-variant-2amount_money). |

### CapturePaymentIntentRequest variant 1

anyOf variant 1: Declared schema CapturePaymentIntentRequest. The request body for: Capture payment intent..

- Constraints for `amount_money`: Amount to capture, in the authorization's currency. Omit it to capture all of capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same request, and the payment intent can't be captured again. Must be greater than zero and at most capturable_money. Affirm payments can only be captured in full.

### CapturePaymentIntentRequest variant 2

anyOf variant 2: Declared schema CreditNoteIssueAllocationRequest. Credit to apply to the invoice when issuing a credit note..

- Constraints for `amount_money`: Credit to apply. Omit to apply the smaller of the credit available after issue and the invoice's outstanding balance. An explicit amount must be positive, use the invoice's currency, and fit both balances. Either way, the allocation must leave the order's unpaid tip outstanding.

### CapturePaymentIntentRequest variant 1.amount_money

Amount to capture, in the authorization's currency. Omit it to capture all of capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same request, and the payment intent can't be captured again. Must be greater than zero and at most capturable_money. Affirm payments can only be captured in full. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CapturePaymentIntentRequest variant 2.amount_money

Credit to apply. Omit to apply the smaller of the credit available after issue and the invoice's outstanding balance. An explicit amount must be positive, use the invoice's currency, and fit both balances. Either way, the allocation must leave the order's unpaid tip outstanding. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

