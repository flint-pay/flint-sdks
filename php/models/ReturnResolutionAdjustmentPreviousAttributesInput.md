[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionAdjustmentPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Optional | string or null | What the fee or credit is for. Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. `adjustment_type`: [declared alternatives](../models/ReturnPolicyAdjustmentProposalPreviousAttributesInput.md#returnpolicyadjustmentproposalpreviousattributesinputadjustment_type). |
| `applied_amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is zero when the adjustment is waived. |
| `assessed_amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Amount the fee or credit comes to before any waiver. Same currency as `applied_amount_money`. |
| `reason` | Optional | string or null | Why the adjustment was made. Values: `"return_policy"`, `"inspection_result"`, `"return_shipping_cost"`, `"customer_service"`, `"manual_correction"`, `"other"`. `reason`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributesInput.md#returnresolutionadjustmentpreviousattributesinputreason). |
| `reason_message` | Optional | string or null | Optional detail about `reason`, kept with the record. `reason_message`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreason_message). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. `return_id`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributesInput.md#returncompletionblockerpreviousattributesinputreturn_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. `return_line_item_id`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributesInput.md#returnresolutionadjustmentpreviousattributesinputreturn_line_item_id). |
| `return_policy_id` | Optional | string or null | Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. `return_policy_id`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributesInput.md#returnresolutionadjustmentpreviousattributesinputreturn_policy_id). |
| `return_policy_revision_id` | Optional | string or null | ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons. `return_policy_revision_id`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributesInput.md#returnresolutionadjustmentpreviousattributesinputreturn_policy_revision_id). |
| `return_resolution_adjustment_id` | Optional | string or null | Unique identifier for this return resolution adjustment, prefixed `retadj_`. `return_resolution_adjustment_id`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributesInput.md#returnresolutionadjustmentpreviousattributesinputreturn_resolution_adjustment_id). |
| `status` | Optional | string or null | Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. Values: `"applied"`, `"waived"`. `status`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributesInput.md#returnresolutionadjustmentpreviousattributesinputstatus). |
| `value_effect` | Optional | string or null | Whether the adjustment reduces or increases what the buyer receives. Values: `"deduction"`, `"credit"`. `value_effect`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributesInput.md#returnresolutionadjustmentpreviousattributesinputvalue_effect). |
| `waived_at` | Optional | string or null | RFC3339 timestamp. `waived_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `waived_by` | Optional | [ReturnActorPreviousAttributesInput](../models/ReturnActorPreviousAttributesInput.md#returnactorpreviousattributesinput) or null | Who waived the adjustment. |
| `waiver_reason` | Optional | string or null | Why the adjustment was waived. Values: `"policy_override"`, `"merchant_review"`, `"customer_service"`, `"other"`. `waiver_reason`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributesInput.md#returnresolutionadjustmentpreviousattributesinputwaiver_reason). |
| `waiver_reason_message` | Optional | string or null | Detail about `waiver_reason`. `waiver_reason_message`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributesInput.md#returnresolutionadjustmentpreviousattributesinputwaiver_reason_message). |

### ReturnResolutionAdjustmentPreviousAttributesInput.adjustment_type

Declared alternatives: [ReturnPolicyAdjustmentProposalPreviousAttributesInput.adjustment_type](../models/ReturnPolicyAdjustmentProposalPreviousAttributesInput.md#returnpolicyadjustmentproposalpreviousattributesinputadjustment_type).

### ReturnResolutionAdjustmentPreviousAttributesInput.reason

### ReturnResolutionAdjustmentPreviousAttributesInput.reason variant 1

anyOf variant 1: Why the adjustment was made..

- Value shape: string. Why the adjustment was made. Values: `"return_policy"`, `"inspection_result"`, `"return_shipping_cost"`, `"customer_service"`, `"manual_correction"`, `"other"`.

### ReturnResolutionAdjustmentPreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. Why the adjustment was made. 

### ReturnResolutionAdjustmentPreviousAttributesInput.reason_message

Declared alternatives: [ReturnDispositionPreviousAttributesInput.reason_message](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreason_message).

### ReturnResolutionAdjustmentPreviousAttributesInput.return_id

Declared alternatives: [ReturnCompletionBlockerPreviousAttributesInput.return_id](../models/ReturnCompletionBlockerPreviousAttributesInput.md#returncompletionblockerpreviousattributesinputreturn_id).

### ReturnResolutionAdjustmentPreviousAttributesInput.return_line_item_id

### ReturnResolutionAdjustmentPreviousAttributesInput.return_line_item_id variant 1

anyOf variant 1: ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole..

- Value shape: string. ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnResolutionAdjustmentPreviousAttributesInput.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. 

### ReturnResolutionAdjustmentPreviousAttributesInput.return_policy_id

### ReturnResolutionAdjustmentPreviousAttributesInput.return_policy_id variant 1

anyOf variant 1: Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null..

- Value shape: string. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. 

### ReturnResolutionAdjustmentPreviousAttributesInput.return_policy_id variant 2

anyOf variant 2.

- Value shape: null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. 

### ReturnResolutionAdjustmentPreviousAttributesInput.return_policy_revision_id

### ReturnResolutionAdjustmentPreviousAttributesInput.return_policy_revision_id variant 1

anyOf variant 1: ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons..

- Value shape: string. ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons. ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. 

### ReturnResolutionAdjustmentPreviousAttributesInput.return_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons. 

### ReturnResolutionAdjustmentPreviousAttributesInput.return_resolution_adjustment_id

### ReturnResolutionAdjustmentPreviousAttributesInput.return_resolution_adjustment_id variant 1

anyOf variant 1: Unique identifier for this return resolution adjustment, prefixed `retadj_`..

- Value shape: string. Unique identifier for this return resolution adjustment, prefixed `retadj_`. Unique identifier for this return resolution adjustment, prefixed `retadj_`. Example: `"retadj_01KEZF7C00EX1XSCX7WSCDKSZZ"`. 

### ReturnResolutionAdjustmentPreviousAttributesInput.return_resolution_adjustment_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return resolution adjustment, prefixed `retadj_`. 

### ReturnResolutionAdjustmentPreviousAttributesInput.status

### ReturnResolutionAdjustmentPreviousAttributesInput.status variant 1

anyOf variant 1: Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero..

- Value shape: string. Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. Values: `"applied"`, `"waived"`.

### ReturnResolutionAdjustmentPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. 

### ReturnResolutionAdjustmentPreviousAttributesInput.value_effect

### ReturnResolutionAdjustmentPreviousAttributesInput.value_effect variant 1

anyOf variant 1: Whether the adjustment reduces or increases what the buyer receives..

- Value shape: string. Whether the adjustment reduces or increases what the buyer receives. Values: `"deduction"`, `"credit"`.

### ReturnResolutionAdjustmentPreviousAttributesInput.value_effect variant 2

anyOf variant 2.

- Value shape: null. Whether the adjustment reduces or increases what the buyer receives. 

### ReturnResolutionAdjustmentPreviousAttributesInput.waived_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnResolutionAdjustmentPreviousAttributesInput.waiver_reason

### ReturnResolutionAdjustmentPreviousAttributesInput.waiver_reason variant 1

anyOf variant 1: Why the adjustment was waived..

- Value shape: string. Why the adjustment was waived. Values: `"policy_override"`, `"merchant_review"`, `"customer_service"`, `"other"`.

### ReturnResolutionAdjustmentPreviousAttributesInput.waiver_reason variant 2

anyOf variant 2.

- Value shape: null. Why the adjustment was waived. 

### ReturnResolutionAdjustmentPreviousAttributesInput.waiver_reason_message

### ReturnResolutionAdjustmentPreviousAttributesInput.waiver_reason_message variant 1

anyOf variant 1: Detail about `waiver_reason`..

- Value shape: string. Detail about `waiver_reason`. 

### ReturnResolutionAdjustmentPreviousAttributesInput.waiver_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail about `waiver_reason`. 

