[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnActivityInput

One entry in a return's activity history.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Required | string | What happened, as `&lt;resource>.&lt;action>`. Values: [39 declared values](#returnactivityinput-activity_type-values). |
| `actor` | Required | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who took the action. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `quantity` | Optional | integer | Canceled whole-number quantity; fractional quantities are not supported. Present only for return_line_item.quantity_canceled. Format: `int64`. |
| `reason` | Optional | string | The reason given for the action. When Flint records a failed effect, the failure code, such as `refund_creation_failed`. Values: [54 declared values](#returnactivityinput-reason-values). |
| `reason_message` | Optional | string | Free text given with the reason, or the failure message for a failed effect. Can hold staff notes, so only merchant credentials can read it. |
| `resource_id` | Required | string | The ID of the Return or child resource the activity touched, whose type is `resource_type`. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `resource_type` | Required | string | Type of the resource that changed: the part of `activity_type` before the dot. Example: `"return"`. Values: [146 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `return_activity_id` | Required | string | Stable identifier of the activity. Example: `"retact_01KEZF7C00J26XVS5GK98PQ39D"`. |
| `return_id` | Required | string | The Return this activity belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_version` | Required | integer | Return version produced by this activity. Format: `int64`. minimum: `0`. |

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

