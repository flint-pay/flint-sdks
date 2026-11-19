[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransactionUpdatedInstalledMerchantsEvent

The `balance_transaction.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"balance_transaction.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### BalanceTransactionUpdatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributes). |

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.object

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.data.object](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventdataobject).

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Signed gross amount of this balance movement, before any fee. `amount_money`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money). |
| `available_at` | Optional | string or null | When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. `available_at`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesavailable_at). |
| `balance_transaction_id` | Optional | string or null | Stable identifier of this balance transaction. `balance_transaction_id`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesbalance_transaction_id). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributescurrency). |
| `description` | Optional | string or null | Short text describing the movement, from Flint or your processor. Use it for display, not for matching. `description`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesdescription). |
| `fee_details` | Optional | Array of [BalanceTransactionFeeDetailPreviousAttributes](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributes) or null | Fee sources on a payment charged a platform fee. Amounts are zero or positive and sum to the magnitude of fee_money. These are the original charges; later refunds do not reduce them. Absent on movements without a platform fee or without a payment Flint accepted. `fee_details`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesfee_details). |
| `fee_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fee deducted from this balance movement. On payments, this is processing_fee_money plus every add-on fee in add_on_fees plus platform_fee.amount_money when a partner app charged a platform fee; the payment intent carries the breakdown. On disputes and dispute reversals, this includes the processor's dispute fee charged to your balance or actually returned to it. Charges are positive; returned fees are negative. A dispute of -4200 with a fee of 1500 has a net amount of -5700. A won dispute does not by itself return the fee. `fee_money`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesfee_money). |
| `merchant_id` | Optional | string or null | Merchant whose balance this transaction moved. `merchant_id`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesmerchant_id). |
| `net_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Signed net effect on your Flint balance: amount_money minus fee_money in the same currency. `net_money`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesnet_money). |
| `occurred_at` | Optional | string or null | When the balance movement happened. `occurred_at`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesoccurred_at). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | The order, inlined when you request expand=order. null when expanded and the transaction has no order_id. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. `order_id`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesorder_id). |
| `payout_id` | Optional | string or null | The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. `payout_id`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributespayout_id). |
| `related_balance_transaction_ids` | Optional | Array of string or null | Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. `related_balance_transaction_ids`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesrelated_balance_transaction_ids). |
| `related_resource` | Optional | [ResourceReferencePreviousAttributes](../models/ResourceReferencePreviousAttributes.md#resourcereferencepreviousattributes) or null | The Flint resource behind this movement: a payment_intent, payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or platform_fee_payout. Absent when the movement has none. |
| `status` | Optional | string or null | Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. Values: `"pending"`, `"available"`. `status`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesstatus). |
| `type` | Optional | string or null | Kind of balance movement. Unmapped movement types are returned as other. Values: [29 declared values](BalanceTransaction.md#balancetransaction-type-values). `type`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributestype). |

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money

Signed gross amount of this balance movement, before any fee.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Conditional | integer string or null | Signed amount in the currency's minor unit, such as cents for USD. `amount`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1amount). |
| `currency` | Conditional | string or null | Three-letter uppercase ISO 4217 currency code for this amount, such as USD. `currency`: [declared alternatives](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency). |

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1

anyOf SignedMoneyPreviousAttributes.

- Optional: `amount`, `currency`.

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Signed gross amount of this balance movement, before any fee. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.amount

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.amount variant 1

anyOf variant 1: Signed amount in the currency's minor unit, such as cents for USD..

- Value shape: integer string. Signed amount in the currency's minor unit, such as cents for USD. Signed amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.amount variant 2

anyOf variant 2.

- Value shape: null. Signed amount in the currency's minor unit, such as cents for USD. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.available_at

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.available_at variant 1

anyOf variant 1: When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now..

- Value shape: string. When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.available_at variant 2

anyOf variant 2.

- Value shape: null. When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.balance_transaction_id

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.balance_transaction_id variant 1

anyOf variant 1: Stable identifier of this balance transaction..

- Value shape: string. Stable identifier of this balance transaction. Stable identifier of this balance transaction. Example: `"btxn_01KEZF7C00H1Z82CMFWWXMZGHZ"`. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.balance_transaction_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this balance transaction. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.currency

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.currency variant 1

anyOf variant 1: ISO 4217 currency code..

- Value shape: string. ISO 4217 currency code. ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.currency variant 2

anyOf variant 2.

- Value shape: null. ISO 4217 currency code. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.description

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.description variant 1

anyOf variant 1: Short text describing the movement, from Flint or your processor. Use it for display, not for matching..

- Value shape: string. Short text describing the movement, from Flint or your processor. Use it for display, not for matching. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.description variant 2

anyOf variant 2.

- Value shape: null. Short text describing the movement, from Flint or your processor. Use it for display, not for matching. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.fee_details

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.fee_details variant 1

anyOf variant 1: Fee sources on a payment charged a platform fee. Amounts are zero or positive and sum to the magnitude of fee_money. These are the original charges; later refunds do not reduce them. Absent on movements without a platform fee or without a payment Flint accepted..

- Value shape: Array of [BalanceTransactionFeeDetailPreviousAttributes](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributes). Fee sources on a payment charged a platform fee. Amounts are zero or positive and sum to the magnitude of fee_money. These are the original charges; later refunds do not reduce them. Absent on movements without a platform fee or without a payment Flint accepted. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.fee_details variant 2

anyOf variant 2.

- Value shape: null. Fee sources on a payment charged a platform fee. Amounts are zero or positive and sum to the magnitude of fee_money. These are the original charges; later refunds do not reduce them. Absent on movements without a platform fee or without a payment Flint accepted. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.fee_money

Fee deducted from this balance movement. On payments, this is processing_fee_money plus every add-on fee in add_on_fees plus platform_fee.amount_money when a partner app charged a platform fee; the payment intent carries the breakdown. On disputes and dispute reversals, this includes the processor's dispute fee charged to your balance or actually returned to it. Charges are positive; returned fees are negative. A dispute of -4200 with a fee of 1500 has a net amount of -5700. A won dispute does not by itself return the fee.

Field definitions: [shared fields](#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money).

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.fee_money variant 1

anyOf SignedMoneyPreviousAttributes.

- Optional: `amount`, `currency`.

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.fee_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Fee deducted from this balance movement. On payments, this is processing_fee_money plus every add-on fee in add_on_fees plus platform_fee.amount_money when a partner app charged a platform fee; the payment intent carries the breakdown. On disputes and dispute reversals, this includes the processor's dispute fee charged to your balance or actually returned to it. Charges are positive; returned fees are negative. A dispute of -4200 with a fee of 1500 has a net amount of -5700. A won dispute does not by itself return the fee. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.fee_money variant 1.amount

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.amount](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1amount).

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.fee_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.merchant_id

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Merchant whose balance this transaction moved..

- Value shape: string. Merchant whose balance this transaction moved. Merchant whose balance this transaction moved. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant whose balance this transaction moved. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.net_money

Signed net effect on your Flint balance: amount_money minus fee_money in the same currency.

Field definitions: [shared fields](#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money).

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.net_money variant 1

anyOf SignedMoneyPreviousAttributes.

- Optional: `amount`, `currency`.

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.net_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Signed net effect on your Flint balance: amount_money minus fee_money in the same currency. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.net_money variant 1.amount

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.amount](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1amount).

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.net_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.occurred_at

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.occurred_at variant 1

anyOf variant 1: When the balance movement happened..

- Value shape: string. When the balance movement happened. When the balance movement happened. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.occurred_at variant 2

anyOf variant 2.

- Value shape: null. When the balance movement happened. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.order_id

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.order_id variant 1

anyOf variant 1: The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order..

- Value shape: string. The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.payout_id

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.payout_id variant 1

anyOf variant 1: The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries..

- Value shape: string. The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. Example: `"po_01KEZF7C00PXK8XREWJA6K4FGV"`. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.payout_id variant 2

anyOf variant 2.

- Value shape: null. The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.related_balance_transaction_ids

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.related_balance_transaction_ids variant 1

anyOf variant 1: Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none..

- Value shape: Array of string. Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. Items: Example: `"btxn_01KEZF7C00H1Z82CMFWWXMZGHZ"`. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.related_balance_transaction_ids variant 2

anyOf variant 2.

- Value shape: null. Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.status

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated..

- Value shape: string. Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. Values: `"pending"`, `"available"`.

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.type

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.type variant 1

anyOf variant 1: Kind of balance movement. Unmapped movement types are returned as other..

- Value shape: string. Kind of balance movement. Unmapped movement types are returned as other. Values: `"inbound_payout"`, `"inbound_payout_failure"`, `"payment"`, `"refund"`, `"dispute"`, `"dispute_reversal"`, `"return"`, `"recovery"`, `"payout"`, `"payout_failure"`, `"payout_cancellation"`, `"payout_reversal"`, `"payout_advance"`, `"payout_advance_funding"`, `"reserve_hold"`, `"reserve_release"`, `"adjustment"`, `"merchant_billing_collection"`, `"merchant_billing_collection_reversal"`, `"platform_fee_refund"`, `"platform_fee_payout"`, `"platform_fee_payout_reversal"`, `"payment_split"`, `"payment_split_reversal"`, `"payment_split_reinstatement"`, `"payment_split_failure"`, `"seller_shortfall_coverage"`, `"seller_shortfall_coverage_reversal"`, `"other"`.

### BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.type variant 2

anyOf variant 2.

- Value shape: null. Kind of balance movement. Unmapped movement types are returned as other. 

### BalanceTransactionUpdatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

