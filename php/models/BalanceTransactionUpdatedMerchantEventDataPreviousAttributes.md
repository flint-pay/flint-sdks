[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransactionUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [SignedMoney](../models/SignedMoney.md#signedmoney) or null | Signed gross amount of this balance movement, before any fee. |
| `available_at` | Optional | string or null | When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. `available_at`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesavailable_at). |
| `balance_transaction_id` | Optional | string or null | Stable identifier of this balance transaction. `balance_transaction_id`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesbalance_transaction_id). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency). |
| `description` | Optional | string or null | Short text describing the movement, from Flint or your processor. Use it for display, not for matching. `description`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesdescription). |
| `fee_money` | Optional | [SignedMoney](../models/SignedMoney.md#signedmoney) or null | Fee deducted from this balance movement. On payments, this is processing_fee_money plus every add-on fee in add_on_fees plus platform_fee.amount_money when a partner app charged a platform fee; the payment intent carries the breakdown. On disputes and dispute reversals, this includes the processor's dispute fee charged to your balance or actually returned to it. Charges are positive; returned fees are negative. A dispute of -4200 with a fee of 1500 has a net amount of -5700. A won dispute does not by itself return the fee. |
| `merchant_id` | Optional | string or null | Merchant whose balance this transaction moved. `merchant_id`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesmerchant_id). |
| `net_money` | Optional | [SignedMoney](../models/SignedMoney.md#signedmoney) or null | Signed net effect on your Flint balance: amount_money minus fee_money in the same currency. |
| `occurred_at` | Optional | string or null | When the balance movement happened. `occurred_at`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesoccurred_at). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null or null | The order, inlined when you request expand=order. null when expanded and the transaction has no order_id. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. `order_id`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder_id). |
| `payout_id` | Optional | string or null | The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. `payout_id`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributespayout_id). |
| `related_balance_transaction_ids` | Optional | Array of string or null | Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. `related_balance_transaction_ids`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesrelated_balance_transaction_ids). |
| `related_resource` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The Flint resource behind this movement: a payment_intent, payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or platform_fee_payout. Absent when the movement has none. |
| `status` | Optional | string or null | Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. Values: `"pending"`, `"available"`. `status`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesstatus). |
| `type` | Optional | string or null | Kind of balance movement. Unmapped movement types are returned as other. Values: [27 declared values](BalanceTransactionInput.md#balancetransactioninput-type-values). `type`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributestype). |

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.available_at

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.available_at variant 1

anyOf variant 1: When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now..

- Value shape: string. When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. Format: `date-time`. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.available_at variant 2

anyOf variant 2.

- Value shape: null. When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.balance_transaction_id

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.balance_transaction_id variant 1

anyOf variant 1: Stable identifier of this balance transaction..

- Value shape: string. Stable identifier of this balance transaction. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.balance_transaction_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this balance transaction. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.currency

Declared alternatives: [MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.currency](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency).

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.description

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.description variant 1

anyOf variant 1: Short text describing the movement, from Flint or your processor. Use it for display, not for matching..

- Value shape: string. Short text describing the movement, from Flint or your processor. Use it for display, not for matching. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Short text describing the movement, from Flint or your processor. Use it for display, not for matching. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.merchant_id

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Merchant whose balance this transaction moved..

- Value shape: string. Merchant whose balance this transaction moved. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant whose balance this transaction moved. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.occurred_at

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.occurred_at variant 1

anyOf variant 1: When the balance movement happened..

- Value shape: string. When the balance movement happened. When the balance movement happened. Format: `date-time`. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.occurred_at variant 2

anyOf variant 2.

- Value shape: null. When the balance movement happened. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order_id

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order..

- Value shape: string. The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.payout_id

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.payout_id variant 1

anyOf variant 1: The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries..

- Value shape: string. The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.payout_id variant 2

anyOf variant 2.

- Value shape: null. The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.related_balance_transaction_ids

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.related_balance_transaction_ids variant 1

anyOf variant 1: Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none..

- Value shape: Array of string. Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.related_balance_transaction_ids variant 2

anyOf variant 2.

- Value shape: null. Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.status

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated..

- Value shape: string. Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. Values: `"pending"`, `"available"`.

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.type

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.type variant 1

anyOf variant 1: Kind of balance movement. Unmapped movement types are returned as other..

- Value shape: string. Kind of balance movement. Unmapped movement types are returned as other. Values: `"payment"`, `"refund"`, `"dispute"`, `"dispute_reversal"`, `"return"`, `"recovery"`, `"payout"`, `"payout_failure"`, `"payout_cancellation"`, `"payout_reversal"`, `"payout_advance"`, `"payout_advance_funding"`, `"reserve_hold"`, `"reserve_release"`, `"adjustment"`, `"merchant_billing_collection"`, `"merchant_billing_collection_reversal"`, `"platform_fee_refund"`, `"platform_fee_payout"`, `"platform_fee_payout_reversal"`, `"payment_split"`, `"payment_split_reversal"`, `"payment_split_reinstatement"`, `"payment_split_failure"`, `"seller_shortfall_coverage"`, `"seller_shortfall_coverage_reversal"`, `"other"`.

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Kind of balance movement. Unmapped movement types are returned as other. 

