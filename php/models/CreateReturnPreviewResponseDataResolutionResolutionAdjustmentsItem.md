[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItem

A fee or credit applied to a return resolution, such as a restocking fee, with the assessed and applied amounts and any waiver.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | What the fee or credit is for. Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. |
| `applied_amount_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItemAppliedAmountMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItemAppliedAmountMoney.md#createreturnpreviewresponsedataresolutionresolutionadjustmentsitemappliedamountmoney) | Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is zero when the adjustment is waived. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `assessed_amount_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItemAssessedAmountMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItemAssessedAmountMoney.md#createreturnpreviewresponsedataresolutionresolutionadjustmentsitemassessedamountmoney) | Amount the fee or credit comes to before any waiver. Same currency as `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reason` | Required | string | Why the adjustment was made. Values: `"return_policy"`, `"inspection_result"`, `"return_shipping_cost"`, `"customer_service"`, `"manual_correction"`, `"other"`. |
| `reason_message` | Optional | string | Optional detail about `reason`, kept with the record. |
| `return_id` | Required | (string or null) or null | `return_id`: [declared alternatives](../models/BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem.md#buyerreturnpreviewresponsedataeligibilityresolutionadjustmentsitemreturn_id). |
| `return_line_item_id` | Optional | string | ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. |
| `return_policy_id` | Required | (string or null) or null | `return_policy_id`: [declared alternatives](../models/CreateReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem.md#createreturnpreviewresponsedataeligibilityresolutionadjustmentsitemreturn_policy_id). |
| `return_policy_revision_id` | Optional | string |  |
| `return_resolution_adjustment_id` | Required | string | Unique identifier for this return resolution adjustment, prefixed `retadj_`. |
| `status` | Required | string | Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. Values: `"applied"`, `"waived"`. |
| `value_effect` | Required | string | Whether the adjustment reduces or increases what the buyer receives. Values: `"deduction"`, `"credit"`. |
| `waived_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `waived_by` | Optional | [CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItemWaivedBy](../models/CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItemWaivedBy.md#createreturnpreviewresponsedataresolutionresolutionadjustmentsitemwaivedby) | Who waived the adjustment. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `waived_by`: [field definitions](../models/CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItem.md#createreturnpreviewresponsedataresolutionresolutionadjustmentsitemwaived_by). |
| `waiver_reason` | Optional | string | Why the adjustment was waived. Values: `"policy_override"`, `"merchant_review"`, `"customer_service"`, `"other"`. |
| `waiver_reason_message` | Optional | string | Detail about `waiver_reason`. |

### CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItem.return_id

Declared alternatives: [BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem.return_id](../models/BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem.md#buyerreturnpreviewresponsedataeligibilityresolutionadjustmentsitemreturn_id).

### CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItem.return_policy_id

Declared alternatives: [CreateReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem.return_policy_id](../models/CreateReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem.md#createreturnpreviewresponsedataeligibilityresolutionadjustmentsitemreturn_policy_id).

### CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItem.waived_by

Who waived the adjustment. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.

Field definitions: [shared fields](ReturnActorInput.md#returnactorinput).

