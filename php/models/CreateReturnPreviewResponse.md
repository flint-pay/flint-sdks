[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponse

A response containing `CreateReturnPreviewData` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | object and Alternative shapes (see declared variants) | A return preview, selected by `mode`: either the eligibility of the selected items or the amounts of a resolution. `data`: [declared alternatives](../models/CreateReturnPreviewResponse.md#createreturnpreviewresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreateReturnPreviewResponse.data

A return preview, selected by `mode`: either the eligibility of the selected items or the amounts of a resolution.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Conditional | object | The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation. `eligibility`: [field definitions](../models/CreateReturnPreviewResponse.md#createreturnpreviewresponsedataeligibility-fields-1). |
| `mode` | Required | string | Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Conditional | object | A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer. `resolution`: [field definitions](../models/CreateReturnPreviewResponse.md#createreturnpreviewresponsedataresolution-fields-1). |

### CreateReturnPreviewResponse.data variant 1: `mode` = `"eligibility"`

oneOf with mode: "eligibility": The `eligibility` variant of `CreateReturnPreviewData`..

- Condition: not (present(`resolution`)).
- Required: `eligibility`.
- Optional: `resolution`.
- Constraints for `mode`: Values: `"eligibility"`.

### CreateReturnPreviewResponse.data variant 2: `mode` = `"resolution"`

oneOf with mode: "resolution": The `resolution` variant of `CreateReturnPreviewData`..

- Condition: not (present(`eligibility`)).
- Required: `resolution`.
- Optional: `eligibility`.
- Constraints for `mode`: Values: `"resolution"`.

### CreateReturnPreviewResponse.data.eligibility fields 1

The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of object | `line_items[]`: [field definitions](../models/CreateReturnPreviewResponse.md#createreturnpreviewresponsedataeligibility-fields-1line_items). |
| `order_id` | Required | string |  |
| `policy_evaluation` | Required | [ReturnPolicyEvaluation](../models/ReturnPolicyEvaluation.md#returnpolicyevaluation) | How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results. |
| `selection` | Required | object and Alternative shapes (see declared variants) | Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. `selection`: [declared alternatives](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1selection). |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

### CreateReturnPreviewResponse.data.eligibility fields 1.line_items[]

Return eligibility for one order line item, with the line's details, suggested return reasons, and whether self-service returns are enabled.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) |  |
| `bundle_id` | Optional | string |  |
| `can_buyer_request` | Required | boolean | Whether the buyer can request this line themselves, through a customer session, right now. False when no policy covers the item, when it is not eligible, or when the store offers no reason for it. Read eligibility.reason and ineligibility_reason to say why. |
| `description` | Optional | string |  |
| `eligibility` | Required | [ReturnLineItemEligibility](../models/ReturnLineItemEligibility.md#returnlineitemeligibility) | Whether a return line is eligible under policy, with the eligible quantity, allowed resolution types, and any policy adjustments. |
| `fulfillment_id` | Required | string |  |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `modifiers` | Required | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) |  |
| `name` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `product_id` | Optional | string |  |
| `requested_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `sku` | Optional | string |  |
| `suggested_return_reasons` | Required | Array of object | Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then reasons that apply to every item. Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak. maxItems: `20`. `suggested_return_reasons[]`: [field definitions](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1line_itemssuggested_return_reasons). |
| `variant_id` | Optional | string |  |

### CreateReturnPreviewResponse.data.eligibility fields 1.line_items[].suggested_return_reasons[]

Field definitions: [BuyerReturnPreviewResponse.data.eligibility fields 1.line_items[].suggested_return_reasons[]](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1line_itemssuggested_return_reasons).

### CreateReturnPreviewResponse.data.eligibility fields 1.selection

Declared alternatives: [BuyerReturnPreviewResponse.data.eligibility fields 1.selection](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1selection).

### CreateReturnPreviewResponse.data.resolution fields 1

A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of [ReturnResolutionAdjustment](../models/ReturnResolutionAdjustment.md#returnresolutionadjustment) |  |
| `based_on_return_version` | Required | integer | Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `corrects_return_resolution_id` | Optional | string |  |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem) |  |
| `replacement_line_items` | Required | Array of [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem) |  |
| `replacement_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string |  |
| `returned_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

