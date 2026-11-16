[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutProblemResourcePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocks_completion` | Optional | boolean or null | Whether the checkout cannot complete until the problem is resolved. `blocks_completion`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesblocks_completion). |
| `code` | Optional | string or null | Which condition affects the checkout. Values: `"delivery_selection_stale"`, `"delivery_selection_invalid"`, `"delivery_unreadable"`, `"payment_in_progress"`. `code`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributescode). |
| `remediation` | Optional | Alternative shapes (see declared variants) | What the caller can do about the problem, and whether retrying the same request can help. `remediation`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation). |
| `severity` | Optional | string or null | How serious the problem is. Values: `"error"`. `severity`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesseverity). |

### CheckoutProblemResourcePreviousAttributes.blocks_completion

### CheckoutProblemResourcePreviousAttributes.blocks_completion variant 1

anyOf variant 1: Whether the checkout cannot complete until the problem is resolved..

- Value shape: boolean. Whether the checkout cannot complete until the problem is resolved. 

### CheckoutProblemResourcePreviousAttributes.blocks_completion variant 2

anyOf variant 2.

- Value shape: null. Whether the checkout cannot complete until the problem is resolved. 

### CheckoutProblemResourcePreviousAttributes.code

### CheckoutProblemResourcePreviousAttributes.code variant 1

anyOf variant 1: Which condition affects the checkout..

- Value shape: string. Which condition affects the checkout. Values: `"delivery_selection_stale"`, `"delivery_selection_invalid"`, `"delivery_unreadable"`, `"payment_in_progress"`.

### CheckoutProblemResourcePreviousAttributes.code variant 2

anyOf variant 2.

- Value shape: null. Which condition affects the checkout. 

### CheckoutProblemResourcePreviousAttributes.remediation

What the caller can do about the problem, and whether retrying the same request can help.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `next_actions` | Conditional | Array of [NextActionPreviousAttributes](../models/NextActionPreviousAttributes.md#nextactionpreviousattributes) or null | Suggested actions for resolving the error, including the target resource and any required input. `next_actions`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions). |
| `next_steps` | Conditional | string or null | What to change or check before attempting the operation again. `next_steps`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_steps). |
| `retry` | Conditional | string or null | Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`. `retry`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1retry). |

### CheckoutProblemResourcePreviousAttributes.remediation variant 1

anyOf ErrorRemediationPreviousAttributes.

- Optional: `next_actions`, `next_steps`, `retry`.

### CheckoutProblemResourcePreviousAttributes.remediation variant 2

anyOf variant 2.

- Undeclared: `next_actions`, `next_steps`, `retry`.
- Value shape: null. What the caller can do about the problem, and whether retrying the same request can help. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1

anyOf variant 1: Suggested actions for resolving the error, including the target resource and any required input..

- Value shape: Array of [NextActionPreviousAttributes](../models/NextActionPreviousAttributes.md#nextactionpreviousattributes). Suggested actions for resolving the error, including the target resource and any required input. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 2

anyOf variant 2.

- Value shape: null. Suggested actions for resolving the error, including the target resource and any required input. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Optional | string or null | Action to take next. Use its target resource and required_fields to prepare the request. Values: [163 declared values](NextActionInput.md#nextactioninput-action_type-values). `action_type`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1action_type). |
| `expires_at` | Optional | string or null | When this suggested action expires, in RFC3339 format. `expires_at`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1expires_at). |
| `merchant_account_session` | Optional | Alternative shapes (see declared variants) | Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is create_merchant_account_session. When absent, GET merchant readiness and use its recommended session body. `merchant_account_session`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session). |
| `method` | Optional | string or null | HTTP method for the recovery read. Values: `"GET"`. `method`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1method). |
| `reason_code` | Optional | string or null | Machine-readable reason this action is suggested. `reason_code`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1reason_code). |
| `reason_message` | Optional | string or null | Explanation of why this action is suggested. `reason_message`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1reason_message). |
| `required_fields` | Optional | Array of string or null | Field names that must be supplied to perform this action. `required_fields`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1required_fields). |
| `required_scope` | Optional | string or null | API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint. Values: [102 declared values](APIKeyInput.md#apikeyinput-scopes--values). `required_scope`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1required_scope). |
| `requires_human_confirmation` | Optional | boolean or null | Whether a person must approve the action before it is performed. `requires_human_confirmation`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1requires_human_confirmation). |
| `suggested_delay_milliseconds` | Optional | integer or null | Suggested wait before performing the action, in milliseconds. `suggested_delay_milliseconds`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1suggested_delay_milliseconds). |
| `target_resource` | Optional | Alternative shapes (see declared variants) | Resource whose ID to send in the target request field named {resource_type}_id when url cannot carry the target. `target_resource`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1target_resource). |
| `url` | Optional | string or null | Public endpoint or launch URL for this remediation action, when applicable. `url`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1url). |

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.action_type

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.action_type variant 1

anyOf variant 1: Action to take next. Use its target resource and required_fields to prepare the request..

- Value shape: string. Action to take next. Use its target resource and required_fields to prepare the request. Values: `"add_line_items"`, `"cancel_order_edit"`, `"cancel_payment_intent"`, `"capture_payment_intent"`, `"close_checkout_session"`, `"close_order"`, `"collect_invoice"`, `"complete_gift_card_challenge"`, `"confirm_payment_intent"`, `"create_checkout_session_customer_verification"`, `"create_delivery_selection"`, `"create_dispute_response_session"`, `"create_merchant_account_session"`, `"create_refund"`, `"create_subscription_payment_retry"`, `"get_api_key"`, `"get_bundle"`, `"get_category"`, `"get_checkout_session"`, `"get_credit_note"`, `"get_custom_domain"`, `"get_customer"`, `"get_customer_address"`, `"get_customer_deletion_request"`, `"get_customer_email_change_request"`, `"get_customer_tax_exemption"`, `"get_customer_verification"`, `"get_delivery_location_set"`, `"get_delivery_method"`, `"get_delivery_profile"`, `"get_delivery_rate_callback"`, `"get_delivery_selection"`, `"get_delivery_zone"`, `"get_device"`, `"get_dispute"`, `"get_file"`, `"get_gift_card"`, `"get_gift_card_notification"`, `"get_gift_card_redemption"`, `"get_inventory_count"`, `"get_inventory_item"`, `"get_inventory_level"`, `"get_inventory_reservation"`, `"get_inventory_transfer"`, `"get_invoice"`, `"get_invoice_manual_payment"`, `"get_invoice_payment_term"`, `"get_location"`, `"get_me"`, `"get_me_address"`, `"get_me_email_preferences"`, `"get_me_gift_card"`, `"get_me_payment_method"`, `"get_me_return"`, `"get_me_subscription"`, `"get_merchant"`, `"get_merchant_signup"`, `"get_modifier_group"`, `"get_modifier_set"`, `"get_onboarding_state"`, `"get_operation"`, `"get_order"`, `"get_order_edit"`, `"get_order_payment_attempt"`, `"get_partner_app"`, `"get_partner_app_credential"`, `"get_partner_app_install"`, `"get_payment_intent"`, `"get_payment_link"`, `"get_payment_link_public"`, `"get_payment_method"`, `"get_payment_method_domain"`, `"get_payment_review"`, `"get_payout"`, `"get_payout_destination"`, `"get_payout_settings"`, `"get_price_list"`, `"get_price_list_price"`, `"get_product"`, `"get_product_variant"`, `"get_promotion"`, `"get_promotion_code"`, `"get_reader"`, `"get_refund"`, `"get_return"`, `"get_return_line_item"`, `"get_return_policy"`, `"get_return_resolution"`, `"get_risk_list"`, `"get_risk_list_item"`, `"get_risk_rule"`, `"get_sandbox"`, `"get_settings"`, `"get_shipment"`, `"get_subscription"`, `"get_subscription_offer"`, `"get_subscription_plan"`, `"get_tax_calculation_callback"`, `"get_tax_connection"`, `"get_tax_registration"`, `"get_test_clock"`, `"get_ticket"`, `"get_webhook_delivery"`, `"get_webhook_endpoint"`, `"get_workload_identity"`, `"issue_developer_sandbox_test_key"`, `"list_credit_note_allocations"`, `"list_credit_notes"`, `"list_fulfillments"`, `"list_gift_card_funding_dispositions"`, `"list_gift_card_loads"`, `"list_gift_card_redemptions"`, `"list_gift_card_transactions"`, `"list_gift_cards"`, `"list_inventory_counts"`, `"list_inventory_movements"`, `"list_inventory_receipts"`, `"list_inventory_reservations"`, `"list_inventory_transfers"`, `"list_invoice_activities"`, `"list_invoice_late_fees"`, `"list_invoice_manual_payments"`, `"list_invoice_payment_attempts"`, `"list_invoices"`, `"list_me_gift_cards"`, `"list_me_remembered_buyers"`, `"list_me_returns"`, `"list_me_subscription_payment_retries"`, `"list_merchant_partner_app_installs"`, `"list_order_charges"`, `"list_order_edits"`, `"list_order_line_items"`, `"list_order_payment_attempts"`, `"list_package_items"`, `"list_packages"`, `"list_payment_intent_activities"`, `"list_payouts"`, `"list_product_variants"`, `"list_refunds"`, `"list_return_dispositions"`, `"list_return_inspections"`, `"list_return_reasons"`, `"list_return_receipts"`, `"list_return_resolutions"`, `"list_returns"`, `"list_shipments"`, `"list_subscription_line_items"`, `"list_subscription_payment_retries"`, `"list_subscriptions"`, `"pay_order"`, `"payment_authentication"`, `"recreate_delivery_quote"`, `"review_merchant_readiness"`, `"review_onboarding_state"`, `"start_new_image_ingestion"`, `"update_checkout_session"`, `"update_delivery_profile"`, `"update_inventory_allocation_policy"`, `"update_invoice"`, `"update_location"`, `"update_order"`, `"update_payment_link"`, `"update_settings"`.

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.action_type variant 2

anyOf variant 2.

- Value shape: null. Action to take next. Use its target resource and required_fields to prepare the request. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.expires_at

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.expires_at variant 1

anyOf variant 1: When this suggested action expires, in RFC3339 format..

- Value shape: string. When this suggested action expires, in RFC3339 format. When this suggested action expires, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.expires_at variant 2

anyOf variant 2.

- Value shape: null. When this suggested action expires, in RFC3339 format. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session

Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is create_merchant_account_session. When absent, GET merchant readiness and use its recommended session body.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_strategy` | Conditional | string or null | How onboarding collects requirements. upfront asks for everything the account will eventually need; incremental asks only for what is currently due. Values: `"upfront"`, `"incremental"`. `collection_strategy`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1collection_strategy). |
| `components` | Conditional | Array of string or null | Flint components to request. Send this list as components in POST /v1/merchant-account-sessions. Items values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`, `"payments"`. `components`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1components). |
| `future_requirements` | Conditional | string or null | Whether onboarding also collects requirements the processor has scheduled for a future date. include collects them now; omit leaves them until they are due. Values: `"omit"`, `"include"`. `future_requirements`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1future_requirements). |
| `targeted_requirements` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `targeted_requirements`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements). |

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1

anyOf ReadinessMerchantAccountSessionPreviousAttributes.

- Optional: `collection_strategy`, `components`, `future_requirements`, `targeted_requirements`.

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 2

anyOf variant 2.

- Undeclared: `collection_strategy`, `components`, `future_requirements`, `targeted_requirements`.
- Value shape: null. Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is create_merchant_account_session. When absent, GET merchant readiness and use its recommended session body. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.collection_strategy

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.collection_strategy variant 1

anyOf variant 1: How onboarding collects requirements. upfront asks for everything the account will eventually need; incremental asks only for what is currently due..

- Value shape: string. How onboarding collects requirements. upfront asks for everything the account will eventually need; incremental asks only for what is currently due. Values: `"upfront"`, `"incremental"`.

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.collection_strategy variant 2

anyOf variant 2.

- Value shape: null. How onboarding collects requirements. upfront asks for everything the account will eventually need; incremental asks only for what is currently due. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.components

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.components variant 1

anyOf variant 1: Flint components to request. Send this list as components in POST /v1/merchant-account-sessions..

- Value shape: Array of string. Flint components to request. Send this list as components in POST /v1/merchant-account-sessions. Items values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"tax_documents"`, `"notification_banner"`, `"payments"`.

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.components variant 2

anyOf variant 2.

- Value shape: null. Flint components to request. Send this list as components in POST /v1/merchant-account-sessions. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.future_requirements

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.future_requirements variant 1

anyOf variant 1: Whether onboarding also collects requirements the processor has scheduled for a future date. include collects them now; omit leaves them until they are due..

- Value shape: string. Whether onboarding also collects requirements the processor has scheduled for a future date. include collects them now; omit leaves them until they are due. Values: `"omit"`, `"include"`.

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.future_requirements variant 2

anyOf variant 2.

- Value shape: null. Whether onboarding also collects requirements the processor has scheduled for a future date. include collects them now; omit leaves them until they are due. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.targeted_requirements

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.targeted_requirements variant 1

anyOf variant 1: Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information..

- Value shape: Array of string. Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: `"additional_account_information"`, `"business_address"`, `"business_description"`, `"business_directors"`, `"business_executives"`, `"business_name"`, `"business_owners"`, `"business_phone"`, `"business_support_phone"`, `"business_support_url"`, `"business_tax_id"`, `"business_verification_document"`, `"business_website"`, `"merchant_category_code"`, `"owner_address"`, `"owner_additional_identity_document"`, `"owner_date_of_birth"`, `"owner_first_name"`, `"owner_identity_document"`, `"owner_last_name"`, `"owner_tax_id_last_four"`, `"payout_destination"`, `"representative_address"`, `"representative_additional_identity_document"`, `"representative_date_of_birth"`, `"representative_email"`, `"representative_first_name"`, `"representative_identity_document"`, `"representative_last_name"`, `"representative_phone"`, `"representative_tax_id"`, `"representative_tax_id_last_four"`.

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.targeted_requirements variant 2

anyOf variant 2.

- Value shape: null. Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.method

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.method variant 1

anyOf variant 1: HTTP method for the recovery read..

- Value shape: string. HTTP method for the recovery read. Values: `"GET"`.

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.method variant 2

anyOf variant 2.

- Value shape: null. HTTP method for the recovery read. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.reason_code

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.reason_code variant 1

anyOf variant 1: Machine-readable reason this action is suggested..

- Value shape: string. Machine-readable reason this action is suggested. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.reason_code variant 2

anyOf variant 2.

- Value shape: null. Machine-readable reason this action is suggested. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.reason_message

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.reason_message variant 1

anyOf variant 1: Explanation of why this action is suggested..

- Value shape: string. Explanation of why this action is suggested. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.reason_message variant 2

anyOf variant 2.

- Value shape: null. Explanation of why this action is suggested. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.required_fields

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.required_fields variant 1

anyOf variant 1: Field names that must be supplied to perform this action..

- Value shape: Array of string. Field names that must be supplied to perform this action. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.required_fields variant 2

anyOf variant 2.

- Value shape: null. Field names that must be supplied to perform this action. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.required_scope

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.required_scope variant 1

anyOf variant 1: API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint..

- Value shape: string. API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint. Values: `"accounts.api_keys.read"`, `"accounts.api_keys.write"`, `"accounts.devices.read"`, `"accounts.devices.write"`, `"accounts.workload_identities.read"`, `"accounts.workload_identities.write"`, `"analytics.read"`, `"checkouts.checkout_sessions.read"`, `"checkouts.checkout_sessions.write"`, `"checkouts.payment_links.read"`, `"checkouts.payment_links.write"`, `"commerce.bundles.read"`, `"commerce.bundles.write"`, `"commerce.catalog.read"`, `"commerce.catalog.write"`, `"commerce.credit_notes.read"`, `"commerce.credit_notes.write"`, `"commerce.delivery.read"`, `"commerce.delivery.write"`, `"commerce.gift_cards.adjustments.write"`, `"commerce.gift_cards.read"`, `"commerce.gift_cards.redemptions.write"`, `"commerce.gift_cards.secrets.write"`, `"commerce.gift_cards.write"`, `"commerce.inventory.allocation.write"`, `"commerce.inventory.policies.write"`, `"commerce.inventory.read"`, `"commerce.inventory.write"`, `"commerce.invoices.read"`, `"commerce.invoices.write"`, `"commerce.orders.read"`, `"commerce.orders.write"`, `"commerce.products.read"`, `"commerce.products.write"`, `"commerce.promotions.read"`, `"commerce.promotions.write"`, `"commerce.refunds.read"`, `"commerce.refunds.tax_overrides.write"`, `"commerce.refunds.write"`, `"commerce.returns.operations.write"`, `"commerce.returns.policies.write"`, `"commerce.returns.read"`, `"commerce.returns.reasons.write"`, `"commerce.returns.resolutions.write"`, `"commerce.returns.write"`, `"commerce.subscription_plans.read"`, `"commerce.subscription_plans.write"`, `"commerce.subscriptions.read"`, `"commerce.subscriptions.write"`, `"commerce.tickets.read"`, `"commerce.tickets.write"`, `"customers.read"`, `"customers.sessions.write"`, `"customers.write"`, `"developer.feedback_reports.read"`, `"developer.feedback_reports.write"`, `"developer.merchant_signups.read"`, `"developer.merchant_signups.write"`, `"developer.partner_apps.read"`, `"developer.partner_apps.write"`, `"developer.request_logs.read"`, `"developer.request_logs.self.read"`, `"developer.resource_timelines.read"`, `"developer.sandboxes.read"`, `"developer.sandboxes.write"`, `"developer.test_clocks.read"`, `"developer.test_clocks.write"`, `"merchant_billing.read"`, `"merchants.account_sessions.write"`, `"merchants.locations.read"`, `"merchants.locations.write"`, `"merchants.onboarding.read"`, `"merchants.onboarding.write"`, `"merchants.profile.read"`, `"merchants.profile.write"`, `"money_movement.balance_transactions.read"`, `"money_movement.balances.read"`, `"money_movement.payment_splits.read"`, `"money_movement.payout_settings.read"`, `"money_movement.payout_settings.write"`, `"money_movement.payouts.read"`, `"money_movement.payouts.write"`, `"money_movement.platform_fees.read"`, `"payments.disputes.read"`, `"payments.disputes.write"`, `"payments.payment_intents.read"`, `"payments.payment_intents.write"`, `"payments.payment_method_domains.read"`, `"payments.payment_method_domains.write"`, `"payments.payment_methods.read"`, `"payments.payment_methods.write"`, `"payments.readers.read"`, `"payments.readers.write"`, `"reports.read"`, `"reports.write"`, `"risk.controls.write"`, `"risk.read"`, `"risk.reviews.write"`, `"settings.read"`, `"settings.write"`, `"webhooks.read"`, `"webhooks.write"`.

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.required_scope variant 2

anyOf variant 2.

- Value shape: null. API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.requires_human_confirmation

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.requires_human_confirmation variant 1

anyOf variant 1: Whether a person must approve the action before it is performed..

- Value shape: boolean. Whether a person must approve the action before it is performed. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.requires_human_confirmation variant 2

anyOf variant 2.

- Value shape: null. Whether a person must approve the action before it is performed. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.suggested_delay_milliseconds

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.suggested_delay_milliseconds variant 1

anyOf variant 1: Suggested wait before performing the action, in milliseconds..

- Value shape: integer. Suggested wait before performing the action, in milliseconds. Suggested wait before performing the action, in milliseconds. Format: `int32`. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.suggested_delay_milliseconds variant 2

anyOf variant 2.

- Value shape: null. Suggested wait before performing the action, in milliseconds. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.target_resource

Resource whose ID to send in the target request field named {resource_type}_id when url cannot carry the target.

Field definitions: [shared fields](ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by).

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.target_resource variant 1

anyOf ResourceReferencePreviousAttributes.

- Optional: `resource_id`, `resource_type`.

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.target_resource variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. Resource whose ID to send in the target request field named {resource_type}_id when url cannot carry the target. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.target_resource variant 1.resource_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_id).

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.target_resource variant 1.resource_type

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_type](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_type).

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.url

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.url variant 1

anyOf variant 1: Public endpoint or launch URL for this remediation action, when applicable..

- Value shape: string. Public endpoint or launch URL for this remediation action, when applicable. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.url variant 2

anyOf variant 2.

- Value shape: null. Public endpoint or launch URL for this remediation action, when applicable. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_steps

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_steps variant 1

anyOf variant 1: What to change or check before attempting the operation again..

- Value shape: string. What to change or check before attempting the operation again. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_steps variant 2

anyOf variant 2.

- Value shape: null. What to change or check before attempting the operation again. 

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.retry

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.retry variant 1

anyOf variant 1: Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each..

- Value shape: string. Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`.

### CheckoutProblemResourcePreviousAttributes.remediation variant 1.retry variant 2

anyOf variant 2.

- Value shape: null. Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. 

### CheckoutProblemResourcePreviousAttributes.severity

### CheckoutProblemResourcePreviousAttributes.severity variant 1

anyOf variant 1: How serious the problem is..

- Value shape: string. How serious the problem is. Values: `"error"`.

### CheckoutProblemResourcePreviousAttributes.severity variant 2

anyOf variant 2.

- Value shape: null. How serious the problem is. 

