[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## NextActionInput

A follow-up action. When target_resource is present, send its resource_id in the target request field named {resource_type}_id.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Required | string | Action to take next. Use its target resource and required_fields to prepare the request. Values: [160 declared values](#nextactioninput-action_type-values). |
| `expires_at` | Optional | string | When this suggested action expires, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_account_session` | Optional | [ReadinessMerchantAccountSessionInput](../models/ReadinessMerchantAccountSessionInput.md#readinessmerchantaccountsessioninput) | Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is create_merchant_account_session. When absent, GET merchant readiness and use its recommended session body. Shared request body for `create_merchant_account_session` next actions in readiness, onboarding, errors, and warnings. Send unchanged to POST /v1/merchant-account-sessions; components and collection policy describe which requirements to collect. |
| `method` | Optional | string | HTTP method for the recovery read. Values: `"GET"`. |
| `reason_code` | Optional | string | Machine-readable reason this action is suggested. |
| `reason_message` | Optional | string | Explanation of why this action is suggested. |
| `required_fields` | Optional | Array of string | Field names that must be supplied to perform this action. |
| `required_scope` | Optional | string | API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint. Values: [102 declared values](APIKeyInput.md#apikeyinput-scopes--values). |
| `requires_human_confirmation` | Optional | boolean | Whether a person must approve the action before it is performed. |
| `suggested_delay_milliseconds` | Optional | integer | Suggested wait before performing the action, in milliseconds. Format: `int32`. |
| `target_resource` | Optional | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) | Resource whose ID to send in the target request field named {resource_type}_id when url cannot carry the target. A reference to another resource by `resource_type` and `resource_id`. |
| `url` | Optional | string | Public endpoint or launch URL for this remediation action, when applicable. |

#### NextActionInput action_type values

- `"add_line_items"`
- `"cancel_payment_intent"`
- `"capture_payment_intent"`
- `"close_checkout_session"`
- `"close_order"`
- `"complete_gift_card_challenge"`
- `"confirm_payment_intent"`
- `"create_checkout_session_customer_verification"`
- `"create_dispute_response_session"`
- `"create_merchant_account_session"`
- `"create_refund"`
- `"get_api_key"`
- `"get_bundle"`
- `"get_category"`
- `"get_checkout_session"`
- `"get_credit_note"`
- `"get_custom_domain"`
- `"get_customer"`
- `"get_customer_address"`
- `"get_customer_deletion_request"`
- `"get_customer_email_change_request"`
- `"get_customer_tax_exemption"`
- `"get_customer_verification"`
- `"get_delivery_location_set"`
- `"get_delivery_method"`
- `"get_delivery_profile"`
- `"get_delivery_rate_callback"`
- `"get_delivery_selection"`
- `"get_delivery_zone"`
- `"get_device"`
- `"get_dispute"`
- `"get_file"`
- `"get_gift_card"`
- `"get_gift_card_notification"`
- `"get_gift_card_redemption"`
- `"get_inventory_count"`
- `"get_inventory_item"`
- `"get_inventory_level"`
- `"get_inventory_reservation"`
- `"get_inventory_transfer"`
- `"get_invoice"`
- `"get_invoice_manual_payment"`
- `"get_invoice_payment_term"`
- `"get_location"`
- `"get_me"`
- `"get_me_address"`
- `"get_me_email_preferences"`
- `"get_me_gift_card"`
- `"get_me_payment_method"`
- `"get_me_return"`
- `"get_me_subscription"`
- `"get_merchant"`
- `"get_merchant_signup"`
- `"get_modifier_group"`
- `"get_modifier_set"`
- `"get_onboarding_state"`
- `"get_operation"`
- `"get_order"`
- `"get_order_edit"`
- `"get_order_payment_attempt"`
- `"get_partner_app"`
- `"get_partner_app_credential"`
- `"get_partner_app_install"`
- `"get_payment_intent"`
- `"get_payment_link"`
- `"get_payment_link_public"`
- `"get_payment_method"`
- `"get_payment_method_domain"`
- `"get_payment_review"`
- `"get_payout"`
- `"get_payout_destination"`
- `"get_payout_settings"`
- `"get_price_list"`
- `"get_price_list_price"`
- `"get_product"`
- `"get_product_variant"`
- `"get_promotion"`
- `"get_promotion_code"`
- `"get_reader"`
- `"get_refund"`
- `"get_return"`
- `"get_return_line_item"`
- `"get_return_policy"`
- `"get_return_resolution"`
- `"get_risk_list"`
- `"get_risk_list_item"`
- `"get_risk_rule"`
- `"get_sandbox"`
- `"get_settings"`
- `"get_shipment"`
- `"get_subscription"`
- `"get_subscription_offer"`
- `"get_subscription_plan"`
- `"get_tax_calculation_callback"`
- `"get_tax_connection"`
- `"get_tax_registration"`
- `"get_test_clock"`
- `"get_ticket"`
- `"get_webhook_delivery"`
- `"get_webhook_endpoint"`
- `"get_workload_identity"`
- `"issue_developer_sandbox_test_key"`
- `"list_credit_note_allocations"`
- `"list_credit_notes"`
- `"list_fulfillments"`
- `"list_gift_card_funding_dispositions"`
- `"list_gift_card_loads"`
- `"list_gift_card_redemptions"`
- `"list_gift_card_transactions"`
- `"list_gift_cards"`
- `"list_inventory_counts"`
- `"list_inventory_movements"`
- `"list_inventory_receipts"`
- `"list_inventory_reservations"`
- `"list_inventory_transfers"`
- `"list_invoice_activities"`
- `"list_invoice_late_fees"`
- `"list_invoice_manual_payments"`
- `"list_invoice_payment_attempts"`
- `"list_invoices"`
- `"list_me_gift_cards"`
- `"list_me_remembered_buyers"`
- `"list_me_returns"`
- `"list_me_subscription_payment_retries"`
- `"list_merchant_partner_app_installs"`
- `"list_order_charges"`
- `"list_order_edits"`
- `"list_order_line_items"`
- `"list_order_payment_attempts"`
- `"list_package_items"`
- `"list_packages"`
- `"list_payment_intent_activities"`
- `"list_payment_intents"`
- `"list_payouts"`
- `"list_product_variants"`
- `"list_refunds"`
- `"list_return_dispositions"`
- `"list_return_inspections"`
- `"list_return_reasons"`
- `"list_return_receipts"`
- `"list_return_resolutions"`
- `"list_returns"`
- `"list_shipments"`
- `"list_subscription_line_items"`
- `"list_subscription_payment_retries"`
- `"list_subscriptions"`
- `"pay_order"`
- `"payment_authentication"`
- `"recreate_delivery_quote"`
- `"review_merchant_readiness"`
- `"review_onboarding_state"`
- `"start_new_image_ingestion"`
- `"update_checkout_session"`
- `"update_delivery_profile"`
- `"update_inventory_allocation_policy"`
- `"update_invoice"`
- `"update_location"`
- `"update_order"`
- `"update_payment_link"`
- `"update_settings"`

