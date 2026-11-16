[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFeePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. `amount_money`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributesamount_money). |
| `assessed_at` | Optional | string or null | When the fee was assessed. `assessed_at`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributesassessed_at). |
| `base_outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. `base_outstanding_money`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributesbase_outstanding_money). |
| `invoice_id` | Optional | string or null | Invoice that owns this late fee. `invoice_id`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributesinvoice_id). |
| `invoice_late_fee_id` | Optional | string or null | Flint invoice late fee ID. `invoice_late_fee_id`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributesinvoice_late_fee_id). |
| `invoice_schedule_entry_id` | Optional | string or null | The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. `invoice_schedule_entry_id`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributesinvoice_schedule_entry_id). |
| `late_fee_policy` | Optional | ([InvoiceLateFeePolicyPreviousAttributes](../models/InvoiceLateFeePolicyPreviousAttributes.md#invoicelatefeepolicypreviousattributes) or null) or null | The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null` when no policy was captured. |
| `outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. `outstanding_money`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributesoutstanding_money). |
| `paid_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Payments applied to this fee, minus reversed payments. Dispute losses don't reduce it. `paid_money`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributespaid_money). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"waive"`. `supported_actions`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributessupported_actions). |
| `waived_at` | Optional | string or null | When the fee was waived. Absent unless it was waived. `waived_at`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeswaived_at). |
| `waived_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. `waived_money`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeswaived_money). |
| `waiver_reason_message` | Optional | string or null | Why the fee was waived, as given when waiving it. `waiver_reason_message`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeswaiver_reason_message). |
| `written_off_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of this fee written off when the invoice was marked uncollectible. `written_off_money`: [declared alternatives](../models/InvoiceLateFeePreviousAttributes.md#invoicelatefeepreviousattributeswritten_off_money). |

### InvoiceLateFeePreviousAttributes.amount_money

The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceLateFeePreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceLateFeePreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money. 

### InvoiceLateFeePreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### InvoiceLateFeePreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### InvoiceLateFeePreviousAttributes.assessed_at

### InvoiceLateFeePreviousAttributes.assessed_at variant 1

anyOf variant 1: When the fee was assessed..

- Value shape: string. When the fee was assessed. When the fee was assessed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceLateFeePreviousAttributes.assessed_at variant 2

anyOf variant 2.

- Value shape: null. When the fee was assessed. 

### InvoiceLateFeePreviousAttributes.base_outstanding_money

The unpaid balance the fee was calculated from, excluding late fees, captured at assessment.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceLateFeePreviousAttributes.base_outstanding_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceLateFeePreviousAttributes.base_outstanding_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The unpaid balance the fee was calculated from, excluding late fees, captured at assessment. 

### InvoiceLateFeePreviousAttributes.base_outstanding_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### InvoiceLateFeePreviousAttributes.base_outstanding_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### InvoiceLateFeePreviousAttributes.invoice_id

### InvoiceLateFeePreviousAttributes.invoice_id variant 1

anyOf variant 1: Invoice that owns this late fee..

- Value shape: string. Invoice that owns this late fee. Invoice that owns this late fee. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### InvoiceLateFeePreviousAttributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. Invoice that owns this late fee. 

### InvoiceLateFeePreviousAttributes.invoice_late_fee_id

### InvoiceLateFeePreviousAttributes.invoice_late_fee_id variant 1

anyOf variant 1: Flint invoice late fee ID..

- Value shape: string. Flint invoice late fee ID. Flint invoice late fee ID. Example: `"inlf_01KEZF7C00NVR97MBH5AHR4W1X"`. 

### InvoiceLateFeePreviousAttributes.invoice_late_fee_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice late fee ID. 

### InvoiceLateFeePreviousAttributes.invoice_schedule_entry_id

### InvoiceLateFeePreviousAttributes.invoice_schedule_entry_id variant 1

anyOf variant 1: The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver..

- Value shape: string. The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. 

### InvoiceLateFeePreviousAttributes.invoice_schedule_entry_id variant 2

anyOf variant 2.

- Value shape: null. The schedule entry this fee applies to. Absent on an invoice without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even after a waiver. 

### InvoiceLateFeePreviousAttributes.outstanding_money

What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceLateFeePreviousAttributes.outstanding_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceLateFeePreviousAttributes.outstanding_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. What is still owed on this fee: amount_money - paid_money - waived_money - written_off_money, never below zero. 

### InvoiceLateFeePreviousAttributes.outstanding_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### InvoiceLateFeePreviousAttributes.outstanding_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### InvoiceLateFeePreviousAttributes.paid_money

Payments applied to this fee, minus reversed payments. Dispute losses don't reduce it.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceLateFeePreviousAttributes.paid_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceLateFeePreviousAttributes.paid_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Payments applied to this fee, minus reversed payments. Dispute losses don't reduce it. 

### InvoiceLateFeePreviousAttributes.paid_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### InvoiceLateFeePreviousAttributes.paid_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### InvoiceLateFeePreviousAttributes.supported_actions

### InvoiceLateFeePreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available..

- Value shape: Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"waive"`.

### InvoiceLateFeePreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. 

### InvoiceLateFeePreviousAttributes.waived_at

### InvoiceLateFeePreviousAttributes.waived_at variant 1

anyOf variant 1: When the fee was waived. Absent unless it was waived..

- Value shape: string. When the fee was waived. Absent unless it was waived. When the fee was waived. Absent unless it was waived. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceLateFeePreviousAttributes.waived_at variant 2

anyOf variant 2.

- Value shape: null. When the fee was waived. Absent unless it was waived. 

### InvoiceLateFeePreviousAttributes.waived_money

The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceLateFeePreviousAttributes.waived_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceLateFeePreviousAttributes.waived_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it is less than amount_money when part of the fee was already paid. 

### InvoiceLateFeePreviousAttributes.waived_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### InvoiceLateFeePreviousAttributes.waived_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### InvoiceLateFeePreviousAttributes.waiver_reason_message

### InvoiceLateFeePreviousAttributes.waiver_reason_message variant 1

anyOf variant 1: Why the fee was waived, as given when waiving it..

- Value shape: string. Why the fee was waived, as given when waiving it. 

### InvoiceLateFeePreviousAttributes.waiver_reason_message variant 2

anyOf variant 2.

- Value shape: null. Why the fee was waived, as given when waiving it. 

### InvoiceLateFeePreviousAttributes.written_off_money

The part of this fee written off when the invoice was marked uncollectible.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceLateFeePreviousAttributes.written_off_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceLateFeePreviousAttributes.written_off_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The part of this fee written off when the invoice was marked uncollectible. 

### InvoiceLateFeePreviousAttributes.written_off_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### InvoiceLateFeePreviousAttributes.written_off_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

