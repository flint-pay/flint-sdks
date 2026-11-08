[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerGiftCardTransactionListResponse

A page of `BuyerGiftCardTransaction` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerGiftCardTransaction](../models/BuyerGiftCardTransaction.md#buyergiftcardtransaction) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/BuyerGiftCardTransactionListResponse.md#buyergiftcardtransactionlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerGiftCardTransactionListResponse.data[]

A record of a change to a gift card's balance.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed change to the card's balance: positive amounts add value and negative amounts remove it. `funding_loss_accepted` records a decision and moves 0. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_after_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's balance immediately after this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_before_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's balance immediately before this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Required | string | ID of the gift card whose balance this transaction changed. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_transaction_id` | Required | string | Unique identifier for this gift card transaction, prefixed `gct_`. Example: `"gct_01KEZF7C006Q1VC3M2DXJ6T936"`. |
| `posted_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `sequence` | Required | integer | Position of this transaction in the card's history. It increases by one with each transaction posted to the card. Format: `int64`. |
| `transaction_type` | Required | string | Kind of movement, such as load, redeem, refund, adjustment, or cash_out. Values: [11 declared values](#buyergiftcardtransactionlistresponsedata-transaction_type-values). |

#### BuyerGiftCardTransactionListResponse.data[] transaction_type values

- `"load"`
- `"import"`
- `"redeem"`
- `"refund"`
- `"refund_transfer"`
- `"adjustment"`
- `"cash_out"`
- `"purchase_reversal"`
- `"funding_loss_accepted"`
- `"purchase_refund_recovery"`
- `"purchase_refund_recovery_transfer"`

### BuyerGiftCardTransactionListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

