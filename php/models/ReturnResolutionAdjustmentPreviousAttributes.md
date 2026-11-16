[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionAdjustmentPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Optional | string or null | What the fee or credit is for. Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. `adjustment_type`: [declared alternatives](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributesadjustment_type). |
| `applied_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is zero when the adjustment is waived. |
| `assessed_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount the fee or credit comes to before any waiver. Same currency as `applied_amount_money`. |
| `reason` | Optional | string or null | Why the adjustment was made. Values: `"return_policy"`, `"inspection_result"`, `"return_shipping_cost"`, `"customer_service"`, `"manual_correction"`, `"other"`. `reason`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesreason). |
| `reason_message` | Optional | string or null | Optional detail about `reason`, kept with the record. `reason_message`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreason_message). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. `return_id`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. `return_line_item_id`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesreturn_line_item_id). |
| `return_policy_id` | Optional | string or null | Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. `return_policy_id`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesreturn_policy_id). |
| `return_policy_revision_id` | Optional | string or null | ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons. `return_policy_revision_id`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesreturn_policy_revision_id). |
| `return_resolution_adjustment_id` | Optional | string or null | Unique identifier for this return resolution adjustment, prefixed `retadj_`. `return_resolution_adjustment_id`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesreturn_resolution_adjustment_id). |
| `status` | Optional | string or null | Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. Values: `"applied"`, `"waived"`. `status`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesstatus). |
| `value_effect` | Optional | string or null | Whether the adjustment reduces or increases what the buyer receives. Values: `"deduction"`, `"credit"`. `value_effect`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesvalue_effect). |
| `waived_at` | Optional | string or null | RFC3339 timestamp. `waived_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `waived_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who waived the adjustment. `waived_by`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributeswaived_by). |
| `waiver_reason` | Optional | string or null | Why the adjustment was waived. Values: `"policy_override"`, `"merchant_review"`, `"customer_service"`, `"other"`. `waiver_reason`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributeswaiver_reason). |
| `waiver_reason_message` | Optional | string or null | Detail about `waiver_reason`. `waiver_reason_message`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributeswaiver_reason_message). |

### ReturnResolutionAdjustmentPreviousAttributes.adjustment_type

Declared alternatives: [ReturnPolicyAdjustmentProposalPreviousAttributes.adjustment_type](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributesadjustment_type).

### ReturnResolutionAdjustmentPreviousAttributes.reason

### ReturnResolutionAdjustmentPreviousAttributes.reason variant 1

anyOf variant 1: Why the adjustment was made..

- Value shape: string. Why the adjustment was made. Values: `"return_policy"`, `"inspection_result"`, `"return_shipping_cost"`, `"customer_service"`, `"manual_correction"`, `"other"`.

### ReturnResolutionAdjustmentPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the adjustment was made. 

### ReturnResolutionAdjustmentPreviousAttributes.reason_message

Declared alternatives: [ReturnDispositionPreviousAttributes.reason_message](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreason_message).

### ReturnResolutionAdjustmentPreviousAttributes.return_id

Declared alternatives: [ReturnCompletionBlockerPreviousAttributes.return_id](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_id).

### ReturnResolutionAdjustmentPreviousAttributes.return_line_item_id

### ReturnResolutionAdjustmentPreviousAttributes.return_line_item_id variant 1

anyOf variant 1: ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole..

- Value shape: string. ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. 

### ReturnResolutionAdjustmentPreviousAttributes.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. 

### ReturnResolutionAdjustmentPreviousAttributes.return_policy_id

### ReturnResolutionAdjustmentPreviousAttributes.return_policy_id variant 1

anyOf variant 1: Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null..

- Value shape: string. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. 

### ReturnResolutionAdjustmentPreviousAttributes.return_policy_id variant 2

anyOf variant 2.

- Value shape: null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. 

### ReturnResolutionAdjustmentPreviousAttributes.return_policy_revision_id

### ReturnResolutionAdjustmentPreviousAttributes.return_policy_revision_id variant 1

anyOf variant 1: ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons..

- Value shape: string. ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons. 

### ReturnResolutionAdjustmentPreviousAttributes.return_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons. 

### ReturnResolutionAdjustmentPreviousAttributes.return_resolution_adjustment_id

### ReturnResolutionAdjustmentPreviousAttributes.return_resolution_adjustment_id variant 1

anyOf variant 1: Unique identifier for this return resolution adjustment, prefixed `retadj_`..

- Value shape: string. Unique identifier for this return resolution adjustment, prefixed `retadj_`. 

### ReturnResolutionAdjustmentPreviousAttributes.return_resolution_adjustment_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return resolution adjustment, prefixed `retadj_`. 

### ReturnResolutionAdjustmentPreviousAttributes.status

### ReturnResolutionAdjustmentPreviousAttributes.status variant 1

anyOf variant 1: Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero..

- Value shape: string. Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. Values: `"applied"`, `"waived"`.

### ReturnResolutionAdjustmentPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. 

### ReturnResolutionAdjustmentPreviousAttributes.value_effect

### ReturnResolutionAdjustmentPreviousAttributes.value_effect variant 1

anyOf variant 1: Whether the adjustment reduces or increases what the buyer receives..

- Value shape: string. Whether the adjustment reduces or increases what the buyer receives. Values: `"deduction"`, `"credit"`.

### ReturnResolutionAdjustmentPreviousAttributes.value_effect variant 2

anyOf variant 2.

- Value shape: null. Whether the adjustment reduces or increases what the buyer receives. 

### ReturnResolutionAdjustmentPreviousAttributes.waived_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionAdjustmentPreviousAttributes.waived_by

Who waived the adjustment.

Field definitions: [shared fields](ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by).

### ReturnResolutionAdjustmentPreviousAttributes.waived_by variant 1

anyOf ReturnActorPreviousAttributes.

- Optional: `actor_id`, `actor_type`.

### ReturnResolutionAdjustmentPreviousAttributes.waived_by variant 2

anyOf variant 2.

- Undeclared: `actor_id`, `actor_type`.
- Value shape: null. Who waived the adjustment. 

### ReturnResolutionAdjustmentPreviousAttributes.waived_by variant 1.actor_id

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_id](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_id).

### ReturnResolutionAdjustmentPreviousAttributes.waived_by variant 1.actor_type

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_type](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_type).

### ReturnResolutionAdjustmentPreviousAttributes.waiver_reason

### ReturnResolutionAdjustmentPreviousAttributes.waiver_reason variant 1

anyOf variant 1: Why the adjustment was waived..

- Value shape: string. Why the adjustment was waived. Values: `"policy_override"`, `"merchant_review"`, `"customer_service"`, `"other"`.

### ReturnResolutionAdjustmentPreviousAttributes.waiver_reason variant 2

anyOf variant 2.

- Value shape: null. Why the adjustment was waived. 

### ReturnResolutionAdjustmentPreviousAttributes.waiver_reason_message

### ReturnResolutionAdjustmentPreviousAttributes.waiver_reason_message variant 1

anyOf variant 1: Detail about `waiver_reason`..

- Value shape: string. Detail about `waiver_reason`. 

### ReturnResolutionAdjustmentPreviousAttributes.waiver_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail about `waiver_reason`. 

