[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnActivityInput

One entry in a Return's merchant activity history.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Required | string | Values: [39 declared values](#returnactivityinput-activity_type-values). |
| `actor` | Required | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `quantity` | Optional | integer string | Canceled whole-number quantity; fractional quantities are not supported. Present only for return_line_item.quantity_canceled. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `reason` | Optional | string | Values: [56 declared values](#returnactivityinput-reason-values). |
| `reason_message` | Optional | string |  |
| `resource_id` | Required | string |  |
| `resource_type` | Required | [ResourceTypeInput](../models/ResourceTypeInput.md#resourcetypeinput) | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [134 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `return_activity_id` | Required | string |  |
| `return_id` | Required | string |  |
| `return_version` | Required | integer string | Return version produced by this activity. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

#### ReturnActivityInput activity_type values

- `"return.canceled"`
- `"return.completed"`
- `"return.created"`
- `"return.decision_recorded"`
- `"return.reopened"`
- `"return.shipment_handoff_converged"`
- `"return.updated"`
- `"return_disposition.canceled"`
- `"return_disposition.created"`
- `"return_disposition.failed"`
- `"return_disposition.retried"`
- `"return_disposition.succeeded"`
- `"return_inspection.corrected"`
- `"return_inspection.created"`
- `"return_inspection_line_item.acceptance_decided"`
- `"return_line_item.deleted"`
- `"return_line_item.inspection_waived"`
- `"return_line_item.line_item_added"`
- `"return_line_item.quantity_canceled"`
- `"return_line_item.updated"`
- `"return_receipt.corrected"`
- `"return_receipt.created"`
- `"return_receipt_line_item.verified"`
- `"return_resolution.buyer_payment_required"`
- `"return_resolution.canceled"`
- `"return_resolution.confirmed"`
- `"return_resolution.created"`
- `"return_resolution.effect_failed"`
- `"return_resolution.payment_failed"`
- `"return_resolution.payment_intent_updated"`
- `"return_resolution.payment_succeeded"`
- `"return_resolution.refund_failed"`
- `"return_resolution.refund_succeeded"`
- `"return_resolution.released"`
- `"return_resolution.replacement_fulfilled"`
- `"return_resolution.replacement_fulfillment_canceled"`
- `"return_resolution.replacement_order_created"`
- `"return_resolution.retried"`
- `"return_resolution.updated"`

#### ReturnActivityInput reason values

- `"additional_merchandise_received"`
- `"automatic_receipt"`
- `"buyer_payment"`
- `"buyer_request"`
- `"buyer_selection"`
- `"changed_disposition"`
- `"correction_required"`
- `"created_in_error"`
- `"customer_service"`
- `"customer_service_exception"`
- `"dependency_recovered"`
- `"duplicate"`
- `"duplicate_observation"`
- `"entry_error"`
- `"evidence_missing"`
- `"exception_resolved"`
- `"exception_waived"`
- `"expired"`
- `"inspection_confirmed"`
- `"inspection_result"`
- `"inventory_effect_failed"`
- `"inventory_item_unmapped"`
- `"linked_effect_changed"`
- `"linked_effect_retry"`
- `"manual_completion"`
- `"manual_correction"`
- `"manual_release"`
- `"manual_review"`
- `"mapping_corrected"`
- `"merchant_approved"`
- `"merchant_discretion"`
- `"merchant_request"`
- `"merchant_review"`
- `"not_eligible"`
- `"operator_retry"`
- `"order_match_confirmed"`
- `"other"`
- `"payment_intent_creation_failed"`
- `"payment_method_updated"`
- `"policy_correction"`
- `"policy_override"`
- `"quantity_unavailable"`
- `"reconciliation_correction"`
- `"refund_creation_failed"`
- `"refund_line_value_unavailable"`
- `"replacement_order_creation_failed"`
- `"resolution_effect_failed"`
- `"return_policy"`
- `"return_shipping_cost"`
- `"risk_review"`
- `"safety_requirement"`
- `"sku_match_confirmed"`
- `"source_correction"`
- `"suspected_abuse"`
- `"trusted_in_store_handoff"`
- `"warehouse_override"`

