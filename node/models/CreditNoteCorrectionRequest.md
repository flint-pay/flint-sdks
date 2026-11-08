[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteCorrectionRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Positive billed value to credit in the invoice currency, no more than the frozen source line's remaining value. Consumes proportional remaining tax and discount without consuming quantity; later quantity corrections use the reduced remaining value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreditNoteCorrectionRequest.md#creditnotecorrectionrequestamount_money). |
| `quantity` | Conditional | integer | Positive whole units; fractional quantities are not supported. No more than the source line's remaining uncredited quantity. Credits that fraction of its remaining billed value, rounded half up once at line level. Earlier amount corrections reduce that remaining value without consuming quantity. A share that rounds to zero is rejected; use a larger quantity or a positive amount. Format: `int64`. |
| `type` | Required | string | quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"quantity"`, `"amount"`. |

### CreditNoteCorrectionRequest variant 1: `type` = `"quantity"`

anyOf variant 1: Declared schema CreditNoteCorrectionRequest. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`.; oneOf with type: "quantity": The `quantity` variant of `CreditNoteCorrectionRequest`..

- Condition: not (present(`amount_money`)).
- Required: `quantity`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"quantity"`.

### CreditNoteCorrectionRequest variant 2: `type` = `"amount"`

anyOf variant 1: Declared schema CreditNoteCorrectionRequest. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`.; oneOf with type: "amount": The `amount` variant of `CreditNoteCorrectionRequest`..

- Condition: not (present(`quantity`)).
- Required: `amount_money`.
- Optional: `quantity`.
- Constraints for `type`: Values: `"amount"`.

### CreditNoteCorrectionRequest variant 3: `type` = `"quantity"`

anyOf variant 2: Declared schema CreditNoteCorrectionRequestModel. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`.; oneOf with type: "quantity": The `quantity` variant of `CreditNoteCorrectionRequest`..

- Condition: not (present(`amount_money`)).
- Required: `quantity`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"quantity"`.

### CreditNoteCorrectionRequest variant 4: `type` = `"amount"`

anyOf variant 2: Declared schema CreditNoteCorrectionRequestModel. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`.; oneOf with type: "amount": The `amount` variant of `CreditNoteCorrectionRequest`..

- Condition: not (present(`quantity`)).
- Required: `amount_money`.
- Optional: `quantity`.
- Constraints for `type`: Values: `"amount"`.

### CreditNoteCorrectionRequest.amount_money

Positive billed value to credit in the invoice currency, no more than the frozen source line's remaining value. Consumes proportional remaining tax and discount without consuming quantity; later quantity corrections use the reduced remaining value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

