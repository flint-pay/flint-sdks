[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingEntry

An immutable merchant billing charge, credit, collection, correction, or write-off.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_credit_effect_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed change in available billing credit. credit_issued increases it; credit_applied and credit_refunded decrease it. Other entry types do not change it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `available_credit_effect_money`: [field definitions](../models/MerchantBillingEntry.md#merchantbillingentryavailable_credit_effect_money). |
| `balance_transaction_id` | Optional | string | Balance transaction for this collection or collection reversal, when present. Example: `"btxn_01KEZF7C00H1Z82CMFWWXMZGHZ"`. |
| `created_at` | Required | string | When Flint inserted the entry. Never changes and is never backdated from occurred_at. Overlap created_after passes by a few minutes and deduplicate by merchant_billing_entry_id to pick up late commits. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Required | string | Human-readable description of the billing event. |
| `dispute_id` | Optional | string | Related dispute, when the entry is associated with a dispute. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `event_fee_type` | Optional | string | Event fee category. Present only for event_fee entries. card_dispute and card_dispute_countered apply only when Flint paid the processor's dispute fee; a fee already deducted from your balance is recorded on the dispute balance transaction instead. Values: `"bank_verification"`, `"failed_ach_payment"`, `"ach_dispute"`, `"card_dispute"`, `"card_dispute_countered"`, `"external_paid_order_overage"`. |
| `merchant_billing_entry_id` | Required | string | Stable entry ID. Re-reading an entry returns the same values. Example: `"mbe_01KEZF7C00S06A5G1B4867TF78"`. |
| `merchant_billing_invoice_id` | Optional | string | Related invoice issued by Flint, when applicable. Example: `"msinv_01KEZF7C00MB754KPEPACGRMNP"`. |
| `net_billing_effect_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed outstanding effect minus the available credit effect. Charges and collection_reversal are positive; credit_issued, collection, custom_domain_collection, and write_off are negative; credit_refunded is positive; credit_applied is zero; correction may be positive or negative. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `net_billing_effect_money`: [field definitions](../models/MerchantBillingEntry.md#merchantbillingentrynet_billing_effect_money). |
| `occurred_at` | Required | string | When the billing event happened. An entry can be recorded after entries that occurred later. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `outstanding_effect_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed change in the amount owed Flint. Charges (event_fee, invoice, custom_domain) and collection_reversal increase it; credit_applied, collection, custom_domain_collection, and write_off decrease it; correction may increase or decrease it. Credit issuance and refund do not change it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `outstanding_effect_money`: [field definitions](../models/MerchantBillingEntry.md#merchantbillingentryoutstanding_effect_money). |
| `payment_intent_id` | Optional | string | Related payment intent, when the entry is associated with a payment. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `related_merchant_billing_entry_id` | Optional | string | Entry corrected, credited, collected, reversed, or written off by this entry, when applicable. Example: `"mbe_01KEZF7C00S06A5G1B4867TF78"`. |
| `type` | Required | string | The billing event represented by this entry. Values: [11 declared values](#merchantbillingentry-type-values). |

#### MerchantBillingEntry type values

- `"event_fee"`
- `"invoice"`
- `"custom_domain"`
- `"custom_domain_collection"`
- `"correction"`
- `"credit_issued"`
- `"credit_applied"`
- `"credit_refunded"`
- `"collection"`
- `"collection_reversal"`
- `"write_off"`

### MerchantBillingEntry.available_credit_effect_money

Signed change in available billing credit. credit_issued increases it; credit_applied and credit_refunded decrease it. Other entry types do not change it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](Balance.md#balanceavailable_by_source_type).

### MerchantBillingEntry.net_billing_effect_money

Signed outstanding effect minus the available credit effect. Charges and collection_reversal are positive; credit_issued, collection, custom_domain_collection, and write_off are negative; credit_refunded is positive; credit_applied is zero; correction may be positive or negative. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](Balance.md#balanceavailable_by_source_type).

### MerchantBillingEntry.outstanding_effect_money

Signed change in the amount owed Flint. Charges (event_fee, invoice, custom_domain) and collection_reversal increase it; credit_applied, collection, custom_domain_collection, and write_off decrease it; correction may increase or decrease it. Credit issuance and refund do not change it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](Balance.md#balanceavailable_by_source_type).

