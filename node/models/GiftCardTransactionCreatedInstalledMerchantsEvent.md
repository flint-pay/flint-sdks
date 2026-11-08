[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardTransactionCreatedInstalledMerchantsEvent

The `gift_card_transaction.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/GiftCardTransactionCreatedInstalledMerchantsEvent.md#giftcardtransactioncreatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"gift_card_transaction.created"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### GiftCardTransactionCreatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/GiftCardTransactionCreatedInstalledMerchantsEvent.md#giftcardtransactioncreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### GiftCardTransactionCreatedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed change to the card's balance: positive amounts add value and negative amounts remove it. balance_after_money is balance_before_money plus this amount; funding_loss_accepted records a decision and moves 0. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/GiftCardTransaction.md#giftcardtransactionamount_money). |
| `balance_after_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's balance immediately after this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `balance_after_money`: [field definitions](../models/BuyerGiftCardTransaction.md#buyergiftcardtransactionbalance_after_money). |
| `balance_before_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's balance immediately before this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `balance_before_money`: [field definitions](../models/BuyerGiftCardTransaction.md#buyergiftcardtransactionbalance_before_money). |
| `cash_out_reference` | Required | string or null | Your reference for the cash you paid the buyer outside Flint. `null` when the transaction is not a cash_out. maxLength: `255`. |
| `gift_card_id` | Required | string | Gift card whose balance this transaction changed. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_transaction_id` | Required | string | Stable identifier of the transaction. Example: `"gct_01KEZF7C006Q1VC3M2DXJ6T936"`. |
| `idempotency_key` | Required | string or null | Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. |
| `merchant_sequence` | Required | integer | Position of this transaction among all of your gift card transactions in this environment. It increases by one with each posted transaction, and the transaction list is ordered by it. Format: `int64`. |
| `order_id` | Optional | string | Order this transaction belongs to, when there is one. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `posted_at` | Required | string | When the transaction was posted to the card. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `reason` | Required | string or null | Your adjustment reason on adjustment transactions, and customer_request on cash_out. `null` when the transaction is any other type. Values: [7 declared values](#giftcardtransactioncreatedinstalledmerchantseventdataobject-reason-values). |
| `sequence` | Required | integer | Position of this transaction in the card's history. It increases by one with each transaction posted to the card. Format: `int64`. |
| `source` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The resource that caused this transaction, such as a gift_card_load, gift_card_redemption, refund, or gift_card_funding_disposition. `null` when the cause has no public resource. |
| `transaction_type` | Required | string | Kind of movement, such as load, redeem, refund, adjustment, or cash_out. Values: [11 declared values](#giftcardtransactioncreatedinstalledmerchantseventdataobject-transaction_type-values). |

#### GiftCardTransactionCreatedInstalledMerchantsEvent.data.object reason values

- `"complimentary"`
- `"balance_accidentally_decreased"`
- `"support_issue"`
- `"suspicious_activity"`
- `"balance_accidentally_increased"`
- `"customer_request"`
- `null`

#### GiftCardTransactionCreatedInstalledMerchantsEvent.data.object transaction_type values

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

### GiftCardTransactionCreatedInstalledMerchantsEvent.data.object.amount_money

Field definitions: [GiftCardTransaction.amount_money](../models/GiftCardTransaction.md#giftcardtransactionamount_money).

### GiftCardTransactionCreatedInstalledMerchantsEvent.data.object.balance_after_money

Field definitions: [BuyerGiftCardTransaction.balance_after_money](../models/BuyerGiftCardTransaction.md#buyergiftcardtransactionbalance_after_money).

### GiftCardTransactionCreatedInstalledMerchantsEvent.data.object.balance_before_money

Field definitions: [BuyerGiftCardTransaction.balance_before_money](../models/BuyerGiftCardTransaction.md#buyergiftcardtransactionbalance_before_money).

### GiftCardTransactionCreatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

