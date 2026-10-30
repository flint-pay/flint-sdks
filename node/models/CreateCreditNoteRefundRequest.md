[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCreditNoteRefundRequest

The request body for: Refund credit note.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit to refund. Omit to refund all available credit, which Flint resolves once when it accepts the request. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequestamount_money). |
| `expected_version` | Optional | integer | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Why the refund is being made. Values: [12 declared values](#createcreditnoterefundrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund. minLength: `1`. |

#### CreateCreditNoteRefundRequest reason values

- `"duplicate"`
- `"fraudulent"`
- `"requested_by_customer"`
- `"defective_product"`
- `"wrong_item_shipped"`
- `"never_received"`
- `"not_as_described"`
- `"arrived_too_late"`
- `"customer_changed_mind"`
- `"better_price_found"`
- `"accidental_order"`
- `"other"`

### CreateCreditNoteRefundRequest.amount_money

Credit to refund. Omit to refund all available credit, which Flint resolves once when it accepts the request. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

