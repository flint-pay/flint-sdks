[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnLineItemInput

An item included in a return request.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `allowed_resolution_types` | Required | Array of string | Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `approved_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `automatic_resolution_type` | Optional | string | The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Example: `"refund"`. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. |
| `available_resolution_quantity` | Required | integer string | Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and fulfilled resolutions. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `bundle_components` | Required | Array of [BundleComponentInput](../models/BundleComponentInput.md#bundlecomponentinput) |  |
| `bundle_id` | Optional | string |  |
| `buyer_note` | Optional | string |  |
| `canceled_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `decision_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `decline_reason` | Optional | string | Values: `"not_eligible"`, `"quantity_unavailable"`, `"evidence_missing"`, `"suspected_abuse"`, `"merchant_discretion"`, `"other"`. |
| `decline_reason_message` | Optional | string |  |
| `declined_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `description` | Optional | string |  |
| `dispositioned_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `eligibility` | Required | [BuyerReturnLineItemEligibilityInput](../models/BuyerReturnLineItemEligibilityInput.md#buyerreturnlineitemeligibilityinput) | An item's Return eligibility, eligible quantity, allowed resolution types, and eligibility reasons shown to the buyer. |
| `fulfillment_id` | Required | string |  |
| `handed_off_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `inspected_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `is_inspection_required` | Optional | boolean |  |
| `is_policy_overridden` | Required | boolean |  |
| `merchandise_status` | Required | string | Values: [10 declared values](#buyerreturnlineiteminput-merchandise_status-values). |
| `modifiers` | Required | Array of [BuyerReturnLineItemModifierInput](../models/BuyerReturnLineItemModifierInput.md#buyerreturnlineitemmodifierinput) |  |
| `name` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `product_id` | Optional | string |  |
| `received_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `rejected_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `release_timing` | Optional | string | Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `requested_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `requested_resolution_type` | Optional | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `resolution_status` | Required | string | Values: `"not_selected"`, `"pending"`, `"requires_action"`, `"fulfilled"`, `"failed"`. |
| `resolved_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_id` | Required | string |  |
| `return_line_item_id` | Required | string |  |
| `return_reason_handle` | Required | string |  |
| `return_reason_id` | Required | string |  |
| `return_reason_name` | Required | string |  |
| `return_required_quantity` | Required | integer string | How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_resolution_ids` | Required | Array of string | IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. |
| `return_value` | Required | [ReturnLineItemValueInput](../models/ReturnLineItemValueInput.md#returnlineitemvalueinput) | The value of a return line: unit price, subtotal, discount, tax, and total. |
| `review_required_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) |  |
| `sku` | Optional | string |  |
| `status` | Required | string | Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Always empty for buyer credentials. maxItems: `0`. Items values: `"cancel"`, `"waive_inspection"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `variant_id` | Optional | string |  |

#### BuyerReturnLineItemInput merchandise_status values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`
- `"exception"`

