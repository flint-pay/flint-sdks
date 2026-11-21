[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## NextActionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Optional | string or null | Action to take next. Use its target resource and required_fields to prepare the request. Values: [169 declared values](NextActionInput.md#nextactioninput-action_type-values). `action_type`: [declared alternatives](../models/NextActionPreviousAttributesInput.md#nextactionpreviousattributesinputaction_type). |
| `expires_at` | Optional | string or null | When this suggested action expires, in RFC3339 format. `expires_at`: [declared alternatives](../models/NextActionPreviousAttributesInput.md#nextactionpreviousattributesinputexpires_at). |
| `merchant_account_session` | Optional | [ReadinessMerchantAccountSessionPreviousAttributesInput](../models/ReadinessMerchantAccountSessionPreviousAttributesInput.md#readinessmerchantaccountsessionpreviousattributesinput) or null | Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is create_merchant_account_session. When absent, GET merchant readiness and use its recommended session body. |
| `method` | Optional | string or null | HTTP method for the recovery read. Values: `"GET"`. `method`: [declared alternatives](../models/NextActionPreviousAttributesInput.md#nextactionpreviousattributesinputmethod). |
| `reason_code` | Optional | string or null | Machine-readable reason this action is suggested. `reason_code`: [declared alternatives](../models/NextActionPreviousAttributesInput.md#nextactionpreviousattributesinputreason_code). |
| `reason_message` | Optional | string or null | Explanation of why this action is suggested. `reason_message`: [declared alternatives](../models/NextActionPreviousAttributesInput.md#nextactionpreviousattributesinputreason_message). |
| `required_fields` | Optional | Array of string or null | Field names that must be supplied to perform this action. `required_fields`: [declared alternatives](../models/NextActionPreviousAttributesInput.md#nextactionpreviousattributesinputrequired_fields). |
| `required_scope` | Optional | string or null | API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint. Values: [103 declared values](APIKeyInput.md#apikeyinput-scopes--values). `required_scope`: [declared alternatives](../models/NextActionPreviousAttributesInput.md#nextactionpreviousattributesinputrequired_scope). |
| `requires_human_confirmation` | Optional | boolean or null | Whether a person must approve the action before it is performed. `requires_human_confirmation`: [declared alternatives](../models/NextActionPreviousAttributesInput.md#nextactionpreviousattributesinputrequires_human_confirmation). |
| `suggested_delay_milliseconds` | Optional | integer or null | Suggested wait before performing the action, in milliseconds. `suggested_delay_milliseconds`: [declared alternatives](../models/NextActionPreviousAttributesInput.md#nextactionpreviousattributesinputsuggested_delay_milliseconds). |
| `target_resource` | Optional | [ResourceReferencePreviousAttributesInput](../models/ResourceReferencePreviousAttributesInput.md#resourcereferencepreviousattributesinput) or null | Resource whose ID to send in the target request field named {resource_type}_id when url cannot carry the target. |
| `url` | Optional | string or null | Public endpoint or launch URL for this remediation action, when applicable. `url`: [declared alternatives](../models/NextActionPreviousAttributesInput.md#nextactionpreviousattributesinputurl). |

### NextActionPreviousAttributesInput.action_type

### NextActionPreviousAttributesInput.action_type variant 1

anyOf variant 1: Action to take next. Use its target resource and required_fields to prepare the request..

- Value shape: string. Action to take next. Use its target resource and required_fields to prepare the request. Values: `"add_line_items"`, `"cancel_order_edit"`, `"cancel_payment_intent"`, `"capture_payment_intent"`, `"close_checkout_session"`, `"close_order"`, `"collect_invoice"`, `"complete_gift_card_challenge"`, `"confirm_payment_intent"`, `"create_checkout_session_customer_verification"`, `"create_delivery_selection"`, `"create_dispute_response_session"`, `"create_merchant_account_session"`, `"create_refund"`, `"create_subscription_payment_retry"`, `"get_api_key"`, `"get_bundle"`, `"get_category"`, `"get_checkout_session"`, `"get_credit_note"`, `"get_custom_domain"`, `"get_customer"`, `"get_customer_address"`, `"get_customer_deletion_request"`, `"get_customer_email_change_request"`, `"get_customer_tax_exemption"`, `"get_customer_verification"`, `"get_delivery_location_set"`, `"get_delivery_method"`, `"get_delivery_profile"`, `"get_delivery_rate_callback"`, `"get_delivery_selection"`, `"get_delivery_zone"`, `"get_device"`, `"get_dispute"`, `"get_file"`, `"get_gift_card"`, `"get_gift_card_notification"`, `"get_gift_card_redemption"`, `"get_inventory_count"`, `"get_inventory_item"`, `"get_inventory_level"`, `"get_inventory_reservation"`, `"get_inventory_transfer"`, `"get_invoice"`, `"get_invoice_manual_payment"`, `"get_invoice_payment_term"`, `"get_license_key"`, `"get_license_key_pool"`, `"get_location"`, `"get_me"`, `"get_me_address"`, `"get_me_email_preferences"`, `"get_me_gift_card"`, `"get_me_payment_method"`, `"get_me_return"`, `"get_me_subscription"`, `"get_merchant"`, `"get_merchant_signup"`, `"get_modifier_group"`, `"get_modifier_set"`, `"get_onboarding_state"`, `"get_operation"`, `"get_order"`, `"get_order_edit"`, `"get_order_payment_attempt"`, `"get_partner_app"`, `"get_partner_app_credential"`, `"get_partner_app_install"`, `"get_payment_intent"`, `"get_payment_link"`, `"get_payment_link_public"`, `"get_payment_method"`, `"get_payment_method_domain"`, `"get_payment_review"`, `"get_payout"`, `"get_payout_destination"`, `"get_payout_settings"`, `"get_price_list"`, `"get_price_list_price"`, `"get_product"`, `"get_product_variant"`, `"get_promotion"`, `"get_promotion_code"`, `"get_reader"`, `"get_refund"`, `"get_return"`, `"get_return_line_item"`, `"get_return_policy"`, `"get_return_resolution"`, `"get_risk_list"`, `"get_risk_list_item"`, `"get_risk_rule"`, `"get_sandbox"`, `"get_settings"`, `"get_shipment"`, `"get_subscription"`, `"get_subscription_offer"`, `"get_subscription_plan"`, `"get_tax_calculation_callback"`, `"get_tax_connection"`, `"get_tax_registration"`, `"get_test_clock"`, `"get_ticket"`, `"get_webhook_delivery"`, `"get_webhook_endpoint"`, `"get_workload_identity"`, `"issue_developer_sandbox_test_key"`, `"list_credit_note_allocations"`, `"list_credit_notes"`, `"list_fulfillment_events"`, `"list_fulfillments"`, `"list_gift_card_funding_dispositions"`, `"list_gift_card_loads"`, `"list_gift_card_redemptions"`, `"list_gift_card_transactions"`, `"list_gift_cards"`, `"list_inventory_counts"`, `"list_inventory_movements"`, `"list_inventory_receipts"`, `"list_inventory_reservations"`, `"list_inventory_transfers"`, `"list_invoice_activities"`, `"list_invoice_late_fees"`, `"list_invoice_manual_payments"`, `"list_invoice_payment_attempts"`, `"list_invoices"`, `"list_license_key_pool_keys"`, `"list_me_gift_cards"`, `"list_me_remembered_buyers"`, `"list_me_returns"`, `"list_me_subscription_payment_retries"`, `"list_merchant_partner_app_installs"`, `"list_order_charges"`, `"list_order_edits"`, `"list_order_line_items"`, `"list_order_payment_attempts"`, `"list_orders"`, `"list_package_items"`, `"list_packages"`, `"list_payment_intent_activities"`, `"list_payouts"`, `"list_product_variants"`, `"list_refunds"`, `"list_return_dispositions"`, `"list_return_inspections"`, `"list_return_reasons"`, `"list_return_receipts"`, `"list_return_resolutions"`, `"list_returns"`, `"list_shipments"`, `"list_subscription_line_items"`, `"list_subscription_payment_retries"`, `"list_subscriptions"`, `"pay_order"`, `"payment_authentication"`, `"recreate_delivery_quote"`, `"replace_default_payout_destination"`, `"review_merchant_readiness"`, `"review_onboarding_state"`, `"start_new_image_ingestion"`, `"update_checkout_session"`, `"update_delivery_profile"`, `"update_inventory_allocation_policy"`, `"update_invoice"`, `"update_location"`, `"update_order"`, `"update_payment_link"`, `"update_settings"`.

### NextActionPreviousAttributesInput.action_type variant 2

anyOf variant 2.

- Value shape: null. Action to take next. Use its target resource and required_fields to prepare the request. 

### NextActionPreviousAttributesInput.expires_at

### NextActionPreviousAttributesInput.expires_at variant 1

anyOf variant 1: When this suggested action expires, in RFC3339 format..

- Value shape: string. When this suggested action expires, in RFC3339 format. When this suggested action expires, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### NextActionPreviousAttributesInput.expires_at variant 2

anyOf variant 2.

- Value shape: null. When this suggested action expires, in RFC3339 format. 

### NextActionPreviousAttributesInput.method

### NextActionPreviousAttributesInput.method variant 1

anyOf variant 1: HTTP method for the recovery read..

- Value shape: string. HTTP method for the recovery read. Values: `"GET"`.

### NextActionPreviousAttributesInput.method variant 2

anyOf variant 2.

- Value shape: null. HTTP method for the recovery read. 

### NextActionPreviousAttributesInput.reason_code

### NextActionPreviousAttributesInput.reason_code variant 1

anyOf variant 1: Machine-readable reason this action is suggested..

- Value shape: string. Machine-readable reason this action is suggested. 

### NextActionPreviousAttributesInput.reason_code variant 2

anyOf variant 2.

- Value shape: null. Machine-readable reason this action is suggested. 

### NextActionPreviousAttributesInput.reason_message

### NextActionPreviousAttributesInput.reason_message variant 1

anyOf variant 1: Explanation of why this action is suggested..

- Value shape: string. Explanation of why this action is suggested. 

### NextActionPreviousAttributesInput.reason_message variant 2

anyOf variant 2.

- Value shape: null. Explanation of why this action is suggested. 

### NextActionPreviousAttributesInput.required_fields

### NextActionPreviousAttributesInput.required_fields variant 1

anyOf variant 1: Field names that must be supplied to perform this action..

- Value shape: Array of string. Field names that must be supplied to perform this action. 

### NextActionPreviousAttributesInput.required_fields variant 2

anyOf variant 2.

- Value shape: null. Field names that must be supplied to perform this action. 

### NextActionPreviousAttributesInput.required_scope

### NextActionPreviousAttributesInput.required_scope variant 1

anyOf variant 1: API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint..

- Value shape: string. API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint. Values: `"accounts.api_keys.read"`, `"accounts.api_keys.write"`, `"accounts.devices.read"`, `"accounts.devices.write"`, `"accounts.workload_identities.read"`, `"accounts.workload_identities.write"`, `"analytics.read"`, `"checkouts.checkout_sessions.read"`, `"checkouts.checkout_sessions.write"`, `"checkouts.payment_links.read"`, `"checkouts.payment_links.write"`, `"commerce.bundles.read"`, `"commerce.bundles.write"`, `"commerce.catalog.read"`, `"commerce.catalog.write"`, `"commerce.credit_notes.read"`, `"commerce.credit_notes.write"`, `"commerce.delivery.read"`, `"commerce.delivery.write"`, `"commerce.gift_cards.adjustments.write"`, `"commerce.gift_cards.read"`, `"commerce.gift_cards.redemptions.write"`, `"commerce.gift_cards.secrets.write"`, `"commerce.gift_cards.write"`, `"commerce.inventory.allocation.write"`, `"commerce.inventory.policies.write"`, `"commerce.inventory.read"`, `"commerce.inventory.write"`, `"commerce.invoices.read"`, `"commerce.invoices.write"`, `"commerce.license_keys.read"`, `"commerce.license_keys.secrets.write"`, `"commerce.license_keys.write"`, `"commerce.orders.read"`, `"commerce.orders.write"`, `"commerce.products.read"`, `"commerce.products.write"`, `"commerce.promotions.read"`, `"commerce.promotions.write"`, `"commerce.refunds.read"`, `"commerce.refunds.tax_overrides.write"`, `"commerce.refunds.write"`, `"commerce.returns.operations.write"`, `"commerce.returns.policies.write"`, `"commerce.returns.read"`, `"commerce.returns.reasons.write"`, `"commerce.returns.resolutions.write"`, `"commerce.returns.write"`, `"commerce.subscription_plans.read"`, `"commerce.subscription_plans.write"`, `"commerce.subscriptions.read"`, `"commerce.subscriptions.write"`, `"commerce.tickets.read"`, `"commerce.tickets.write"`, `"customers.read"`, `"customers.sessions.write"`, `"customers.write"`, `"developer.merchant_signups.read"`, `"developer.merchant_signups.write"`, `"developer.partner_apps.read"`, `"developer.partner_apps.write"`, `"developer.request_logs.read"`, `"developer.request_logs.self.read"`, `"developer.resource_timelines.read"`, `"developer.sandboxes.read"`, `"developer.sandboxes.write"`, `"developer.test_clocks.read"`, `"developer.test_clocks.write"`, `"merchant_billing.read"`, `"merchants.account_sessions.write"`, `"merchants.locations.read"`, `"merchants.locations.write"`, `"merchants.onboarding.read"`, `"merchants.onboarding.write"`, `"merchants.profile.read"`, `"merchants.profile.write"`, `"money_movement.balance_transactions.read"`, `"money_movement.balances.read"`, `"money_movement.payment_splits.read"`, `"money_movement.payout_settings.read"`, `"money_movement.payout_settings.write"`, `"money_movement.payouts.read"`, `"money_movement.payouts.write"`, `"money_movement.platform_fees.read"`, `"payments.disputes.read"`, `"payments.disputes.write"`, `"payments.payment_intents.read"`, `"payments.payment_intents.write"`, `"payments.payment_method_domains.read"`, `"payments.payment_method_domains.write"`, `"payments.payment_methods.read"`, `"payments.payment_methods.write"`, `"payments.readers.read"`, `"payments.readers.write"`, `"reports.read"`, `"reports.write"`, `"risk.controls.write"`, `"risk.read"`, `"risk.reviews.write"`, `"settings.read"`, `"settings.write"`, `"webhooks.read"`, `"webhooks.write"`.

### NextActionPreviousAttributesInput.required_scope variant 2

anyOf variant 2.

- Value shape: null. API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint. 

### NextActionPreviousAttributesInput.requires_human_confirmation

### NextActionPreviousAttributesInput.requires_human_confirmation variant 1

anyOf variant 1: Whether a person must approve the action before it is performed..

- Value shape: boolean. Whether a person must approve the action before it is performed. 

### NextActionPreviousAttributesInput.requires_human_confirmation variant 2

anyOf variant 2.

- Value shape: null. Whether a person must approve the action before it is performed. 

### NextActionPreviousAttributesInput.suggested_delay_milliseconds

### NextActionPreviousAttributesInput.suggested_delay_milliseconds variant 1

anyOf variant 1: Suggested wait before performing the action, in milliseconds..

- Value shape: integer. Suggested wait before performing the action, in milliseconds. Suggested wait before performing the action, in milliseconds. Format: `int32`. 

### NextActionPreviousAttributesInput.suggested_delay_milliseconds variant 2

anyOf variant 2.

- Value shape: null. Suggested wait before performing the action, in milliseconds. 

### NextActionPreviousAttributesInput.url

### NextActionPreviousAttributesInput.url variant 1

anyOf variant 1: Public endpoint or launch URL for this remediation action, when applicable..

- Value shape: string. Public endpoint or launch URL for this remediation action, when applicable. 

### NextActionPreviousAttributesInput.url variant 2

anyOf variant 2.

- Value shape: null. Public endpoint or launch URL for this remediation action, when applicable. 

