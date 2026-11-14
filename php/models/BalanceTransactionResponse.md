[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransactionResponse

A response containing `BalanceTransaction` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BalanceTransaction](../models/BalanceTransaction.md#balancetransaction) | Resource, collection, or operation result returned by this request. A change to the merchant's balance. `data`: [field definitions](../models/BalanceTransactionResponse.md#balancetransactionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BalanceTransactionResponse.data

Resource, collection, or operation result returned by this request. A change to the merchant's balance.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed gross amount of this balance movement, before any fee. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `available_at` | Optional | string | When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `balance_transaction_id` | Required | string | Stable identifier of this balance transaction. Example: `"btxn_01KEZF7C00H1Z82CMFWWXMZGHZ"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string | Short text describing the movement, from Flint or your processor. Use it for display, not for matching. |
| `fee_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Fee deducted from this balance movement. On payments, this is processing_fee_money plus every add-on fee in add_on_fees plus platform_fee.amount_money when a partner app charged a platform fee; the payment intent carries the breakdown. On disputes and dispute reversals, this includes the processor's dispute fee charged to your balance or actually returned to it. Charges are positive; returned fees are negative. A dispute of -4200 with a fee of 1500 has a net amount of -5700. A won dispute does not by itself return the fee. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `merchant_id` | Required | string | Merchant whose balance this transaction moved. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `net_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed net effect on your Flint balance: amount_money minus fee_money in the same currency. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `occurred_at` | Required | string | When the balance movement happened. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | The order, inlined when you request expand=order. null when expanded and the transaction has no order_id. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/BalanceTransactionResponse.md#balancetransactionresponsedataorder). |
| `order_id` | Optional | string | The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payout_id` | Optional | string | The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. Example: `"po_01KEZF7C00PXK8XREWJA6K4FGV"`. |
| `related_balance_transaction_ids` | Required | Array of string | Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. Items: Example: `"btxn_01KEZF7C00H1Z82CMFWWXMZGHZ"`. |
| `related_resource` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | The Flint resource behind this movement: a payment_intent, payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or platform_fee_payout. Absent when the movement has none. A reference to another resource by `resource_type` and `resource_id`. `related_resource`: [field definitions](../models/BalanceTransactionResponse.md#balancetransactionresponsedatarelated_resource). |
| `status` | Required | string | Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. Values: `"pending"`, `"available"`. |
| `type` | Required | string | Kind of balance movement. Unmapped movement types are returned as other. Values: [27 declared values](BalanceTransactionInput.md#balancetransactioninput-type-values). |

### BalanceTransactionResponse.data.order

The order, inlined when you request expand=order. null when expanded and the transaction has no order_id. Present only when `expand` includes `order`; `null` when expanded and there is no related order.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsedataorder).

### BalanceTransactionResponse.data.order variant 1

anyOf ExpandedOrderSummary: An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded..

- Required: `deferred_promotions`, `governing_delivery_selection_id`, `order_id`, `paid_at`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`.
- Optional: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `fulfillment_status`, `order_number`, `payment_intent_ids`, `updated_at`.

### BalanceTransactionResponse.data.order variant 2

anyOf variant 2.

- Undeclared: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. The order, inlined when you request expand=order. null when expanded and the transaction has no order_id. Present only when `expand` includes `order`; `null` when expanded and there is no related order. 

### BalanceTransactionResponse.data.order variant 1.buyer_contact

Field definitions: [DisputeResponse.data.order variant 1.buyer_contact](../models/DisputeResponse.md#disputeresponsedataorder-variant-1buyer_contact).

### BalanceTransactionResponse.data.order variant 1.deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### BalanceTransactionResponse.data.related_resource

The Flint resource behind this movement: a payment_intent, payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or platform_fee_payout. Absent when the movement has none. A reference to another resource by `resource_type` and `resource_id`.

Field definitions: [shared fields](ResourceReferenceInput.md#resourcereferenceinput).

### BalanceTransactionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

