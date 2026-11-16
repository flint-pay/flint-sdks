[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingBalanceUpdatedEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_credit_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Account credit Flint holds for you that hasn't been applied yet, unsigned. Each application lowers both amounts and records a credit_applied entry. |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency). |
| `merchant_billing_balance_id` | Optional | string or null | Stable identifier for this billing account and currency balance projection. `merchant_billing_balance_id`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributesmerchant_billing_balance_id). |
| `observed_at` | Optional | string or null | RFC3339 timestamp for the balance snapshot. `observed_at`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributesobserved_at). |
| `outstanding_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | What you owe Flint now, unsigned. Available credit isn't subtracted: credit lowers this amount only when Flint applies it, which records a credit_applied entry. |
| `past_due_at` | Optional | string or null | Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due. `past_due_at`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributespast_due_at). |
| `past_due_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Amount that is past its due date and still unpaid. Zero when nothing is past due. |
| `payout_hold_at` | Optional | string or null | Time at which Flint holds payouts if the past-due amount is still unpaid, as an RFC 3339 UTC timestamp. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, for example when the only past-due amounts never hold payouts. `payout_hold_at`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributespayout_hold_at). |

### MerchantBillingBalanceUpdatedEventDataPreviousAttributes.currency

Declared alternatives: [MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.currency](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency).

### MerchantBillingBalanceUpdatedEventDataPreviousAttributes.merchant_billing_balance_id

Declared alternatives: [MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.merchant_billing_balance_id](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributesmerchant_billing_balance_id).

### MerchantBillingBalanceUpdatedEventDataPreviousAttributes.observed_at

Declared alternatives: [MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.observed_at](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributesobserved_at).

### MerchantBillingBalanceUpdatedEventDataPreviousAttributes.past_due_at

Declared alternatives: [MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.past_due_at](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributespast_due_at).

### MerchantBillingBalanceUpdatedEventDataPreviousAttributes.payout_hold_at

Declared alternatives: [MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.payout_hold_at](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributespayout_hold_at).

