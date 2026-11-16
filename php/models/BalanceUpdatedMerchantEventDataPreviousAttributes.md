[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_by_source_type` | Optional | Map of [SignedMoney](../models/SignedMoney.md#signedmoney) or null | Signed available amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to available_money. Active payout holds reduce both available_money and one source entry by the same amount. A payout with no recorded source type uses card. A hold whose source is absent from the map uses the largest source amount, with ties broken by source name. `available_by_source_type`: [declared alternatives](../models/BalanceUpdatedMerchantEventDataPreviousAttributes.md#balanceupdatedmerchanteventdatapreviousattributesavailable_by_source_type). |
| `available_money` | Optional | [SignedMoney](../models/SignedMoney.md#signedmoney) or null | Signed amount available for payouts after active payout holds are deducted. Separate from pending_money, reserve_money, and held_money. |
| `balance_id` | Optional | string or null | Stable identifier of this currency's balance. `balance_id`: [declared alternatives](../models/BalanceUpdatedMerchantEventDataPreviousAttributes.md#balanceupdatedmerchanteventdatapreviousattributesbalance_id). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency). |
| `held_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Funds set aside for payouts you created that haven't been debited from your balance yet. They aren't payable and aren't included in `available_money`. |
| `merchant_id` | Optional | string or null | Merchant whose balance this is. `merchant_id`: [declared alternatives](../models/BalanceUpdatedMerchantEventDataPreviousAttributes.md#balanceupdatedmerchanteventdatapreviousattributesmerchant_id). |
| `observed_at` | Optional | string or null | When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. `observed_at`: [declared alternatives](../models/BalanceUpdatedMerchantEventDataPreviousAttributes.md#balanceupdatedmerchanteventdatapreviousattributesobserved_at). |
| `payouts_enabled` | Optional | boolean or null | Whether payouts are ready for this balance currency, including an active default payout destination and account readiness. While it is false, payments can still succeed, and their funds wait in your balance. `payouts_enabled`: [declared alternatives](../models/BalanceUpdatedMerchantEventDataPreviousAttributes.md#balanceupdatedmerchanteventdatapreviousattributespayouts_enabled). |
| `pending_by_source_type` | Optional | Map of [SignedMoney](../models/SignedMoney.md#signedmoney) or null | Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These amounts are separate from available_by_source_type. `pending_by_source_type`: [declared alternatives](../models/BalanceUpdatedMerchantEventDataPreviousAttributes.md#balanceupdatedmerchanteventdatapreviousattributespending_by_source_type). |
| `pending_money` | Optional | [SignedMoney](../models/SignedMoney.md#signedmoney) or null | Signed amount awaiting availability. Separate from available_money; pending_by_source_type breaks down this amount when source details are supplied. |
| `reserve_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Amount held in reserve. It doesn't overlap available_money or held_money. |

### BalanceUpdatedMerchantEventDataPreviousAttributes.available_by_source_type

### BalanceUpdatedMerchantEventDataPreviousAttributes.available_by_source_type variant 1

anyOf variant 1: Signed available amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to available_money. Active payout holds reduce both available_money and one source entry by the same amount. A payout with no recorded source type uses card. A hold whose source is absent from the map uses the largest source amount, with ties broken by source name..

- Value shape: Map of [SignedMoney](../models/SignedMoney.md#signedmoney). Signed available amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to available_money. Active payout holds reduce both available_money and one source entry by the same amount. A payout with no recorded source type uses card. A hold whose source is absent from the map uses the largest source amount, with ties broken by source name. 

### BalanceUpdatedMerchantEventDataPreviousAttributes.available_by_source_type variant 2

anyOf variant 2.

- Value shape: null. Signed available amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to available_money. Active payout holds reduce both available_money and one source entry by the same amount. A payout with no recorded source type uses card. A hold whose source is absent from the map uses the largest source amount, with ties broken by source name. 

### BalanceUpdatedMerchantEventDataPreviousAttributes.balance_id

### BalanceUpdatedMerchantEventDataPreviousAttributes.balance_id variant 1

anyOf variant 1: Stable identifier of this currency's balance..

- Value shape: string. Stable identifier of this currency's balance. 

### BalanceUpdatedMerchantEventDataPreviousAttributes.balance_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this currency's balance. 

### BalanceUpdatedMerchantEventDataPreviousAttributes.currency

Declared alternatives: [MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.currency](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency).

### BalanceUpdatedMerchantEventDataPreviousAttributes.merchant_id

### BalanceUpdatedMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Merchant whose balance this is..

- Value shape: string. Merchant whose balance this is. 

### BalanceUpdatedMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant whose balance this is. 

### BalanceUpdatedMerchantEventDataPreviousAttributes.observed_at

### BalanceUpdatedMerchantEventDataPreviousAttributes.observed_at variant 1

anyOf variant 1: When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read..

- Value shape: string. When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. Format: `date-time`. 

### BalanceUpdatedMerchantEventDataPreviousAttributes.observed_at variant 2

anyOf variant 2.

- Value shape: null. When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. 

### BalanceUpdatedMerchantEventDataPreviousAttributes.payouts_enabled

### BalanceUpdatedMerchantEventDataPreviousAttributes.payouts_enabled variant 1

anyOf variant 1: Whether payouts are ready for this balance currency, including an active default payout destination and account readiness. While it is false, payments can still succeed, and their funds wait in your balance..

- Value shape: boolean. Whether payouts are ready for this balance currency, including an active default payout destination and account readiness. While it is false, payments can still succeed, and their funds wait in your balance. 

### BalanceUpdatedMerchantEventDataPreviousAttributes.payouts_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether payouts are ready for this balance currency, including an active default payout destination and account readiness. While it is false, payments can still succeed, and their funds wait in your balance. 

### BalanceUpdatedMerchantEventDataPreviousAttributes.pending_by_source_type

### BalanceUpdatedMerchantEventDataPreviousAttributes.pending_by_source_type variant 1

anyOf variant 1: Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These amounts are separate from available_by_source_type..

- Value shape: Map of [SignedMoney](../models/SignedMoney.md#signedmoney). Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These amounts are separate from available_by_source_type. 

### BalanceUpdatedMerchantEventDataPreviousAttributes.pending_by_source_type variant 2

anyOf variant 2.

- Value shape: null. Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These amounts are separate from available_by_source_type. 

