[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ErrorDetail

One specific failure within an error, with a `code` and `message` plus fields that depend on the code, such as the `param`, resource, quantity, or amount involved.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_key_modes` | Optional | Array of string | API key modes in which this scope may be granted. Items values: `"live"`, `"test"`. |
| `available_by_source_type` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed available amounts grouped by balance source type on INSUFFICIENT_AVAILABLE_BALANCE. Keys are an open set; US accounts use card and bank_account. An empty object means no per-source amounts are reported. `available_by_source_type{}`: [field definitions](../models/Balance.md#balanceavailable_by_source_type). |
| `available_quantity` | Optional | integer string | Whole-number quantity currently available for the requested operation; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `blocking_resource_count` | Optional | integer string | On RESOURCE_IN_USE, INVOICE_ISSUE_IN_PROGRESS, CREDIT_NOTE_ISSUE_IN_PROGRESS, ORDER_PAYMENT_ATTEMPT_ACTIVE, INVOICE_PAYMENT_ATTEMPT_ACTIVE, INVOICE_PAYMENT_PROCESSING, PAYMENT_OPERATION_IN_PROGRESS, PAYMENT_CONFIRM_IN_PROGRESS, PAYMENT_REVIEW_OPEN, PAYMENT_IN_PROGRESS, ORDER_ALREADY_HAS_ACTIVE_INVOICE, ORDER_HAS_OPEN_CHECKOUT, ORDER_HAS_ACTIVE_PAYMENT_INTENT, ORDER_ALREADY_HAS_PAYMENTS, ORDER_ALREADY_HAS_REFUNDS, ORDER_HAS_MANUAL_PAYMENTS, INVOICE_PAYMENT_RESOLVING, INVOICE_LOCKED_ORDER_FINANCIALS, PAYMENT_ATTEMPT_REQUIRES_CAPTURE, ORDER_COLLECTION_IN_PROGRESS, ORDER_COLLECTION_ALREADY_ACTIVE, ORDER_CUSTOMER_CHECKOUT_ACTIVE, CHECKOUT_SESSION_CURRENT_CHANGED, INVOICE_CHECKOUT_REPLACEMENT_NOT_ALLOWED, ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE, CHECKOUT_SPLIT_PAYMENT_UNSUPPORTED, the total number of blocking resources. blocking_resources lists up to 25 of them. Manual payment conflicts identify their owning invoices. On CHECKOUT_SESSION_CURRENT_CHANGED, blockers are present only when the current session is known. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `blocking_resources` | Optional | Array of [ErrorResourceReference](../models/ErrorResourceReference.md#errorresourcereference) | On RESOURCE_IN_USE, FULFILLMENT_METHOD_UNAVAILABLE, RETURN_LINE_CANCELLATION_CONFLICT, ORDER_PAYMENT_ATTEMPT_ACTIVE, INVOICE_PAYMENT_ATTEMPT_ACTIVE, INVOICE_PAYMENT_PROCESSING, PAYMENT_OPERATION_IN_PROGRESS, PAYMENT_CONFIRM_IN_PROGRESS, PAYMENT_REVIEW_OPEN, PAYMENT_IN_PROGRESS, SUBSCRIPTION_PAYMENT_RETRY_IN_PROGRESS, INVOICE_ISSUE_IN_PROGRESS, CREDIT_NOTE_ISSUE_IN_PROGRESS, ORDER_ALREADY_HAS_ACTIVE_INVOICE, ORDER_HAS_OPEN_CHECKOUT, ORDER_HAS_ACTIVE_PAYMENT_INTENT, ORDER_ALREADY_HAS_PAYMENTS, ORDER_ALREADY_HAS_REFUNDS, ORDER_HAS_MANUAL_PAYMENTS, INVOICE_PAYMENT_RESOLVING, INVOICE_LOCKED_ORDER_FINANCIALS, PAYMENT_ATTEMPT_REQUIRES_CAPTURE, ORDER_COLLECTION_IN_PROGRESS, ORDER_COLLECTION_ALREADY_ACTIVE, ORDER_CUSTOMER_CHECKOUT_ACTIVE, CHECKOUT_SESSION_CURRENT_CHANGED, INVOICE_CHECKOUT_REPLACEMENT_NOT_ALLOWED, ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE, CHECKOUT_SPLIT_PAYMENT_UNSUPPORTED, resources that must transition or be corrected before the operation can succeed. Invoice and order dependency conflicts list up to 25 resources; blocking_resource_count is the total when present. Buyer credentials do not receive merchant-only blocking resources. Manual payment conflicts identify their owning invoices. On CHECKOUT_SESSION_CURRENT_CHANGED, blockers are present only when the current session is known. |
| `capability` | Optional | string | Flint capability associated with this error, when applicable. Values: [8 declared values](#errordetail-capability-values). |
| `capturable_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | On CAPTURE_AMOUNT_EXCEEDS_CAPTURABLE, the most you can capture now. Retry with an amount at or below it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `capturable_money`: [field definitions](../models/ErrorDetail.md#errordetailcapturable_money). |
| `captured_physical_version` | Optional | integer string | Physical basis submitted with the observation, or saved on the count line when apply refuses it. Read the current level and physically recount this item before replacing the basis. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `closed_reason` | Optional | string | How the inventory reservation ended. Present for INVENTORY_RESERVATION_CLOSED. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"mixed"`. |
| `code` | Required | string | Stable Flint error code for this item. Under INVALID_REQUEST, one of REQUIRED, INVALID_VALUE, UNKNOWN_FIELD, NOT_ALLOWED. Every value is listed in the operation's x-flint-error-codes. Values: [469 declared values](../ERRORS.md#provider-error-codes). |
| `collected_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | On ORDER_HAS_COLLECTED_MONEY, collected money still refundable through POST /v1/refunds with order_id, after pending refunds. Refund it before closing or send collected_money_behavior: keep. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `collected_money`: [field definitions](../models/ErrorDetail.md#errordetailcollected_money). |
| `conflict_type` | Optional | string | Which inventory count check failed for this line. Sent on VERSION_CONFLICT for physical observations and INVENTORY_SOURCE_SEQUENCE_CHANGED. Values: `"physical_version"`, `"source_observation_sequence"`. |
| `conflicting_fields` | Optional | Array of string | Request field paths that conflict with each other or with the rest of the request. Sent on INVALID_REQUEST with detail NOT_ALLOWED for conflicting payment inputs, and with detail INVALID_VALUE when entries in one product create repeat an option name, identifier, or selected option combination. |
| `current_api_version` | Optional | string | Current API version pin on VERSION_CONFLICT when expected_api_version is stale. |
| `current_checkout_session_id` | Optional | string | On CHECKOUT_SESSION_CURRENT_CHANGED, the ID of the checkout session that is current. The request named an earlier one. |
| `current_delivery_selection_id` | Optional | string or null | Current effective delivery selection ID on VERSION_CONFLICT when expected_delivery_selection_id is stale. Present as null when no delivery selection is current. |
| `current_interval` | Optional | string | Current payout schedule interval on STANDARD_PAYOUT_REQUIRES_MANUAL_SCHEDULE. Change the payout schedule to manual before creating a standard payout. Values: `"daily"`, `"weekly"`, `"monthly"`. |
| `current_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current money amount counted toward the threshold, when the error is threshold-based. On ORDER_CHANGED_REFRESH_REQUIRED and PAYMENT_LEG_SELECTION_REQUIRED, the order's current outstanding balance. On ORDER_TOTAL_BELOW_NET_COLLECTED, what the change would leave: the order total, or the total without its unpaid tip when items and charges would fall below the money collected for them. On CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE, the outstanding balance the allocation would leave. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `current_money`: [field definitions](../models/ErrorDetail.md#errordetailcurrent_money). |
| `current_physical_version` | Optional | integer string | Current physical version of the inventory level. This is a physical-value assertion, not the resource version in current_version. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `current_resource` | Optional | [ErrorResourceReference](../models/ErrorResourceReference.md#errorresourcereference) or [Fulfillment](../models/Fulfillment.md#fulfillment) or [Shipment](../models/Shipment.md#shipment) or [Package](../models/Package.md#package) or [CustomDomain](../models/CustomDomain.md#customdomain) | The existing resource reference or custom domain on ALREADY_EXISTS, or the current fulfillment, shipment, or package when a conditional write conflicts with resource state. |
| `current_selection_id` | Optional | string | Current effective delivery selection ID returned with a selection concurrency conflict. |
| `current_source_observation_sequence` | Optional | integer string | Latest accepted absolute source sequence for this item and Location. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `current_status` | Optional | string | Current lifecycle status of the resource when the requested mutation is not allowed. |
| `current_version` | Optional | integer string | Current version of the resource when a write that depends on its version or status is rejected. Sent on VERSION_CONFLICT and other stale-basis conflicts such as ORDER_CHANGED_REFRESH_REQUIRED, and on status conflicts such as ACTION_NOT_ALLOWED. On ORDER_CHANGED_REFRESH_REQUIRED, send the order version as expected_version. Read the resource again before you retry. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `delivery_method_id` | Optional | string | Delivery method this failure concerns. On SUBSCRIPTION_DELIVERY_UNAVAILABLE, the method that cannot currently serve the subscription. |
| `demand_key` | Optional | string | Key of the inventory demand this failure concerns. Sent on INVENTORY_INSUFFICIENT, and on INVENTORY_LOCATION_INELIGIBLE when one demand cannot use the Location. |
| `demo_session_id` | Optional | string | On ACTIVE_DEMO_SESSION_EXISTS and DEMO_SESSION_SECRET_REPLAY_EXPIRED, the ID of this client's current demo session. Send it to POST /v1/demo-sessions/reset to replace that session. |
| `dependency_type` | Optional | string | Stable dependency category blocking a Location lifecycle transition. Values: [8 declared values](#errordetail-dependency_type-values). |
| `eligibility_reason` | Optional | string | On INVENTORY_LOCATION_INELIGIBLE, why the Location in location_id cannot supply the demand. Values: [6 declared values](#errordetail-eligibility_reason-values). |
| `existing_checkout_session_id` | Optional | string | ID of the open checkout session that already owns the order. Sent on CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED, ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE, and ORDER_CUSTOMER_CHECKOUT_ACTIVE. Recover the session from this field, not from message. |
| `expected_attempt_outstanding_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | On ORDER_CHANGED_REFRESH_REQUIRED when you resume a payment attempt, the outstanding balance the attempt started with. expected_outstanding_money must match it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `expected_attempt_outstanding_money`: [field definitions](../models/ErrorDetail.md#errordetailexpected_attempt_outstanding_money). |
| `failure_category` | Optional | string | Delivery pricing failure category on SUBSCRIPTION_DELIVERY_UNAVAILABLE, when the rate cannot be calculated. Values: [16 declared values](DeliveryCandidateOutcomeResource.md#deliverycandidateoutcomeresource-failure_category-values). |
| `failure_code` | Optional | string | Decline reason for a failed payment, from the same vocabulary as the payment's last_payment_error.code. Unrecognized provider reasons are payment_failed. Values: [22 declared values](BuyerPaymentErrorSummary.md#buyerpaymenterrorsummary-code-values). |
| `gap_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Additional money amount needed to satisfy the threshold, when the error is threshold-based. On ORDER_TOTAL_BELOW_NET_COLLECTED, how far current_money falls below required_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `gap_money`: [field definitions](../models/ErrorDetail.md#errordetailgap_money). |
| `inactive_message` | Optional | string | Merchant-provided buyer-facing text on PAYMENT_LINK_INACTIVE. Present only when the merchant set an inactive message. |
| `inventory_count_line_id` | Optional | string | Inventory count line this conflict concerns. Sent on VERSION_CONFLICT for physical observations and INVENTORY_SOURCE_SEQUENCE_CHANGED. |
| `inventory_item_id` | Optional | string | Inventory item this failure concerns. Sent on INVENTORY_INSUFFICIENT, INVENTORY_LOCATION_INELIGIBLE, VERSION_CONFLICT for physical observations, and INVENTORY_SOURCE_SEQUENCE_CHANGED. |
| `invoice_payment_attempt_id` | Optional | string | ID of the invoice payment attempt this error concerns. On INVOICE_PAYMENT_ATTEMPT_ACTIVE and INVOICE_PAYMENT_PROCESSING, the invoice's open payment attempt. |
| `is_resumable` | Optional | boolean | Whether the payment attempt identified by order_payment_attempt_id or invoice_payment_attempt_id can be resumed. On order payment attempt errors, if false, read payment_attempt_status before starting another payment. Invoice payment attempt errors always send false. |
| `limit` | Optional | integer string | The limit that was reached. On RISK_RULE_LIMIT_REACHED, the most enabled risk rules in the environment. On PAYMENT_INTENT_LIMIT_REACHED, the most payment intents an order can have over its lifetime. On SUBSCRIPTION_PAYMENT_RETRY_LIMIT_REACHED, the most payment retries a subscription allows in one billing period. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `line_item_key` | Optional | string | Key of the line item whose modifiers changed: the payment link line item key when the checkout came from a payment link, otherwise the order line item ID. |
| `location_id` | Optional | string | Location this failure concerns. Sent on INVENTORY_LOCATION_INELIGIBLE, VERSION_CONFLICT for physical observations, INVENTORY_SOURCE_SEQUENCE_CHANGED, PICKUP_LOCATION_INACTIVE, PICKUP_LOCATION_INVENTORY_UNAVAILABLE, PICKUP_LOCATION_GEOGRAPHY_UNAVAILABLE, and PICKUP_LOCATION_DEPENDENCY_FAILURE. |
| `location_outcome` | Optional | string | On INVENTORY_LOCATION_INELIGIBLE, the routing outcome for the Location in location_id: for the demand in demand_key when present, otherwise for every demand. Values: `"ineligible"`. |
| `maximum_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Maximum money amount accepted by the failed validation, calculated from the current resource state. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `maximum_money`: [field definitions](../models/ErrorDetail.md#errordetailmaximum_money). |
| `message` | Required | string | Human-readable explanation of this failure for your logs. The wording can change, so branch on code. |
| `missing_scopes` | Optional | Array of string | Unsatisfied entries from scope_requirement after write-implies-read evaluation. Example: `["accounts.api_keys.write"]`. |
| `order_charge_id` | Optional | string | Existing order charge this failure concerns. Set when the order charge is already on the order; when the request body does not contain it, param is omitted and details name the affected fields relative to this order charge. pattern: `^och_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `order_id` | Optional | string | Renewal order whose payment attempt failed. |
| `order_line_item_id` | Optional | string | Existing order line item this failure concerns. Set when the order line item is already on the order; when the request body does not contain it, param is omitted and details name the affected fields relative to this order line item. pattern: `^li_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `order_payment_attempt_id` | Optional | string | ID of the order payment attempt this error concerns. On ORDER_PAYMENT_ATTEMPT_ACTIVE, the order's active payment attempt. On PAYMENT_ATTEMPT_NOT_RESUMABLE, the order payment attempt that can no longer be resumed. On INVALID_REQUEST with param order_payment_attempt_id, the order payment attempt that owns the payment intent. |
| `param` | Optional | string | Public JSON request field path associated with this failure. Always present on INVALID_REQUEST details; body for a whole-body failure, or the header name for a header. |
| `payment_attempt_status` | Optional | string | Status of the payment attempt identified by order_payment_attempt_id or invoice_payment_attempt_id when the error was returned. Values: [11 declared values](#errordetail-payment_attempt_status-values). |
| `payment_intent_ids` | Optional | Array of string | Payment intent IDs this error concerns. On ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE and CHECKOUT_SPLIT_PAYMENT_UNSUPPORTED, the order's unpaid payment intents, which you can cancel to collect the order through hosted checkout. On INVALID_REQUEST with param payment_intent_id, the selected payment intent that this order does not own. |
| `payment_method_domain_id` | Optional | string | On ALREADY_EXISTS, the ID of the payment method domain already registered for this domain_name. Use it instead of registering the domain again. |
| `payment_option` | Optional | string | Flint payment option associated with this error, when the error is about a specific requested or selected payment option. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payout_terms_expires_at` | Optional | string | RFC 3339 timestamp in UTC when the new account payout terms end on NEW_ACCOUNT_PAYOUT_TERMS_ACTIVE. Sent at second precision. Choose an allowed schedule or delay, or make the change after this time. Format: `date-time`. |
| `previous_key_expires_at` | Optional | string | RFC 3339 timestamp when the previous signing key expires on DELIVERY_RATE_CALLBACK_SECRET_ROTATION_OVERLAP_ACTIVE. Retry after this time, or revoke the current key before rotating if it leaked. Format: `date-time`. |
| `product_id` | Optional | string | Product associated with the error. |
| `quota` | Optional | [QuotaDetails](../models/QuotaDetails.md#quotadetails) | Structured resource quota state when the error is caused by quota exhaustion. Storage usage and limits for a resource, returned in the error details when an image quota is exhausted. |
| `reason` | Optional | string | Stable Flint reason associated with this error. When code is ACTION_NOT_ALLOWED, one of: already_applied, archived, authorization_expired, bank_return_not_contestable, cancellation_scheduled, configuration_required, credit_exceeds_charge, credit_note_tax_reconciliation_required, customer_account_mode_conflict, delivery_hold, delivery_requirement_changes, derived_from_packages, destination_not_served, dispute_payment_unavailable, existing_order_checkout, external_billing_schedule, field_locked, image_ingestion_restart_required, in_progress, initial_payment_pending, inventory_wait, invoice_finalized, managed_by_owner, managed_externally, merchant_hosted_customer_accounts, merchant_managed_receipts, method_unavailable, not_itemized, not_offered, not_paused, offer_subscription, on_hold, order_owned, payment_collected, payment_disputed, payment_required, payout_defaults_managed_externally, payout_delay, payout_frequency, period_end_unavailable, reconciliation_required, refund_created, refund_unavailable, return_checkout, return_tax_mismatch, status_not_reached, store_credit_unavailable, subscription_terms_locked, terminal_status, test_event, trial_in_progress, unsupported_state, verification_required. When code is ALREADY_EXISTS, one of: hardware_fingerprint_already_exists. When code is CHECKOUT_SESSION_MODIFIERS_READ_ONLY, one of: existing_order_checkout, invoice_finalized, subscription_terms_locked. When code is CONCURRENT_MODIFICATION, one of: credit_note_creditable_value_changed, credit_note_refund_retry_exhausted. When code is DELIVERY_REQUOTE_REQUIRED, one of: calculation_expired, caller_rates_required, destination_changed, option_expired, quote_expired, quote_revoked, quote_stale, selection_changed, selection_expired, window_expired. When code is EXTERNAL_SERVICE_ERROR, one of: image_ingestion_restart_required, rate_unavailable. When code is FORBIDDEN, one of: checkout_launch_token_restricted, checkout_recovery_attempt_mismatch, checkout_recovery_restricted, checkout_session_order_mismatch, checkout_session_payment_required, demo_session_route_not_allowed, direct_owner_required, environment_mismatch, expansion_not_permitted, live_mode_required, merchant_access_required, merchant_credential_required, merchant_role_insufficient, not_checkout_session, not_permitted, oauth_context_mismatch, organization_live_mode_required, organization_membership_required, organization_role_insufficient, owner_workflow_required, partner_app_management_requires_live_key, request_blocked, role_not_assignable, sandbox_management_requires_live_key, sandbox_not_accessible, sandbox_selection_forbidden, self_role_edit_forbidden. When code is FULFILLMENT_METHOD_UNAVAILABLE, one of: active, archived, inactive, invalid_configuration, not_found, not_publishable, revision_unavailable, unsupported_evaluation_schema. When code is GIFT_CARD_CHALLENGE_REQUIRED, one of: page_origin_required, proof_rejected, proof_required. When code is GIFT_CARD_FUNDING_LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily, merchant_adjustments_daily, merchant_imports_daily. When code is IMAGE_INGESTION_EXPIRED, one of: image_ingestion_restart_required. When code is IMAGE_INGESTION_IN_PROGRESS, one of: image_ingestion_restart_required. When code is IMAGE_INGESTION_RESTART_REQUIRED, one of: image_ingestion_restart_required. When code is IMAGE_PROCESSING_CAPACITY_EXCEEDED, one of: image_ingestion_restart_required. When code is IMAGE_PROCESSING_FAILED, one of: image_ingestion_restart_required. When code is IMAGE_PROCESSING_TIMEOUT, one of: image_ingestion_restart_required. When code is IMAGE_SOURCE_TIMEOUT, one of: image_ingestion_restart_required. When code is IMAGE_SOURCE_UNAVAILABLE, one of: image_ingestion_restart_required. When code is IMAGE_STORAGE_QUOTA_EXCEEDED, one of: image_ingestion_restart_required. When code is INTERNAL_ERROR, one of: image_ingestion_restart_required, repair_required. When code is INVALID_CREDENTIAL, one of: expired, malformed, mode_mismatch, revoked, session_ended, unknown, wrong_credential_type. When code is INVALID_REQUEST, one of: image_ingestion_restart_required. When code is INVENTORY_INSUFFICIENT, one of: location_ineligible, location_limit. When code is LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily, merchant_adjustments_daily, merchant_imports_daily. When code is LIMIT_REACHED, one of: checkout_tax_calculations, consecutive_skips, daily_gift_card_purchases, delivery_selection_replacements, enabled_risk_rules, external_paid_orders, image_storage, monthly_tax_calculations, payment_intents_per_order, payment_link_completions, payment_retries_per_period, receipt_recipients, saved_card_codes, verification_attempts, verification_codes, workload_identities. When code is MERCHANT_NOT_READY, one of: account_sessions_unavailable, account_setup_repair_required, account_setup_unavailable, billing_suspended, capability_blocked, capability_not_requested, capability_pending, capability_unavailable, default_environment_required, disabled_by_merchant_settings, disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled, onboarding_required, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable, pricing_not_authorized, processing_not_enabled, processing_restricted, processor_not_configured, requirements_due, tax_category_required, under_review. When code is MONEY_MOVEMENT_OPERATION_BLOCKED, one of: capability_blocked, capability_pending, disabled_by_merchant_settings, disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable, requirements_due. When code is ORDER_DELIVERY_DESTINATION_REPRICE_REQUIRED, one of: method_unavailable, shipping_changed, tax_changed. When code is ORDER_TAX_NOT_READY, one of: return_tax_mismatch. When code is PAYMENT_INTENT_DISPUTED, one of: payment_disputed. When code is PAYMENT_OPTION_NOT_READY, one of: amount_out_of_range, bounded_inventory_guarantee_not_supported, capability_blocked, capability_pending, checkout_order_ownership_required, country_not_supported, country_required, currency_not_supported, disabled_by_merchant_settings, disabled_by_platform_policy, limited_benefit_capacity_not_supported, manual_capture_not_supported, merchant_account_action_required, merchant_payments_disabled, not_supported, off_session_not_supported, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, recurring_ach_not_supported, recurring_not_supported, redirects_required, requirements_due, source_delayed_settlement_not_supported, source_not_supported, split_payment_not_supported, surface_not_supported, unsupported_use. When code is PAYMENT_OPTION_UNAVAILABLE, one of: action_window_too_short, amount_out_of_range, capability_blocked, capability_pending, disabled_by_merchant_settings, disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable, requirements_due, risk_action_unsupported, transaction_purpose_unresolved. When code is PAYMENT_PROCESSING_UNAVAILABLE, one of: capability_blocked, capability_pending, disabled_by_merchant_settings, disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable, requirements_due. When code is PROMOTION_DECLINED, one of: already_applied, automatic_disabled, buy_item_missing, code_invalid, code_required, codes_disabled, currency_mismatch, exhausted, expired, inactive, max_promotions_reached, minimum_not_met, no_discountable_balance, not_combinable, not_eligible, not_yet_started, superseded, superseded_by_better_offer, superseded_by_higher_priority, unknown_type. When code is PROMOTION_NOT_REDEEMABLE, one of: already_applied, automatic_disabled, buy_item_missing, code_invalid, code_required, codes_disabled, currency_mismatch, exhausted, expired, inactive, max_promotions_reached, minimum_not_met, no_discountable_balance, not_combinable, not_eligible, not_yet_started, superseded, superseded_by_better_offer, superseded_by_higher_priority, unknown_type. When code is REQUEST_TIMEOUT, one of: image_ingestion_restart_required. When code is RESOURCE_IN_USE, one of: selected_by_active_variants. When code is RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_FLOW, one of: allow, block, require_3ds, review. When code is RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_OPTION, one of: allow, block, require_3ds, review. When code is SAVE_PAYMENT_METHOD_NOT_OFFERED, one of: card_unavailable, customer_unavailable, ineligible_origin, merchant_hosted_customer_accounts, not_checkout_session, partial_payment, return_checkout, session_not_open, setting_off, subscription_checkout. When code is SERVICE_UNAVAILABLE, one of: image_ingestion_restart_required, outcome_unknown, repair_required. When code is SUBSCRIPTION_DELIVERY_UNAVAILABLE, one of: configuration_required, destination_not_served, method_unavailable, rate_unavailable. When code is SUBSCRIPTION_OFFER_PROMOTION_UNAVAILABLE, one of: already_applied, archived, automatic_disabled, buy_item_missing, code_invalid, code_required, codes_disabled, currency_mismatch, exhausted, expired, inactive, max_promotions_reached, minimum_not_met, no_discountable_balance, not_combinable, not_eligible, not_yet_started, superseded, superseded_by_better_offer, superseded_by_higher_priority, unknown_type. Additional reasons may be added. Values: [216 declared values](#errordetail-reason-values). |
| `remediation` | Optional | [ErrorRemediation](../models/ErrorRemediation.md#errorremediation) | Recovery guidance for this failure: whether retrying can succeed and what to do next. Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested actions. |
| `requested_key_mode` | Optional | string | API key mode requested for the rejected scope grant. Values: `"live"`, `"test"`. |
| `requested_quantity` | Optional | integer string | Whole-number quantity submitted by the caller when a quantity-bearing operation conflicts with current capacity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `required_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money amount required to satisfy a minimum threshold, when the error is threshold-based. On ORDER_TOTAL_BELOW_NET_COLLECTED, the money already collected for the order. On CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE, the order's unpaid tip the invoice must keep outstanding. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `required_money`: [field definitions](../models/ErrorDetail.md#errordetailrequired_money). |
| `requoted_shipping_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Shipping total computed for the new destination, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `requoted_shipping_money`: [field definitions](../models/ErrorDetail.md#errordetailrequoted_shipping_money). |
| `requoted_tax_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax total computed for the new destination, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `requoted_tax_money`: [field definitions](../models/ErrorDetail.md#errordetailrequoted_tax_money). |
| `resource_id` | Optional | string | ID of the referenced public resource, when available. |
| `resource_type` | Optional | string | Public resource named by RESOURCE_NOT_FOUND or a generic conflict: a ResourceType value, or resource when the resource has no public type. |
| `return_resolution_id` | Optional | string | On RETURN_CHECKOUT_REQUIRED, the return resolution whose balance the order collects. Create the checkout session with POST /v1/return-resolutions/{return_resolution_id}/checkout-session instead. |
| `risk_rule_ids` | Optional | Array of string | On RESOURCE_IN_USE, the enabled risk rules that reference the list. Archive or disable them before you archive the list. |
| `scope` | Optional | string | Canonical public scope rejected by validation, when the detail concerns one scope. |
| `scope_requirement` | Optional | [ScopeRequirement](../models/ScopeRequirement.md#scoperequirement) | Complete route or delegation scope requirement for an INSUFFICIENT_SCOPE error. The scopes an authorization decision required and whether `all` or `any` of them were needed, returned in error details. |
| `selectable_merchants` | Optional | Array of [SelectableMerchant](../models/SelectableMerchant.md#selectablemerchant) | Merchants available to this developer identity when code is MERCHANT_SELECTION_REQUIRED or INVALID_MERCHANT_SELECTION. Retry with one of the returned merchant_id values. |
| `selectable_payment_intents` | Optional | Array of [SelectableOrderPaymentIntent](../models/SelectableOrderPaymentIntent.md#selectableorderpaymentintent) | On PAYMENT_LEG_SELECTION_REQUIRED, the order's payment intents you can choose from. Retry with a payment_intents selection built from these. |
| `shipping_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Committed shipping total on the paid order when its destination cannot change without repricing. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `shipping_money`: [field definitions](../models/ErrorDetail.md#errordetailshipping_money). |
| `shortage_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `submitted_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount from your request that failed the check. On TIP_ALLOCATION_CAPACITY_EXCEEDED, the unpaid tip the payment would have to carry. On ORDER_CHANGED_REFRESH_REQUIRED, the expected_outstanding_money you sent, or the total of the selected payment legs when they do not fit the outstanding balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `submitted_money`: [field definitions](../models/ErrorDetail.md#errordetailsubmitted_money). |
| `submitted_source_observation_sequence` | Optional | integer string | Absolute source sequence submitted for this inventory count line. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `subscription_delivery_migration_id` | Optional | string | Subscription delivery migration associated with the error. |
| `subscription_offer_id` | Optional | string | Subscription offer associated with the error. |
| `subscription_plan_line_item_id` | Optional | string | Subscription plan line item associated with the error. |
| `suggestions` | Optional | Array of string | Concrete corrective actions for this validation error. |
| `supported_actions` | Optional | Array of string | Actions accepted for the current resource state. |
| `supported_api_versions` | Optional | Array of string | On INVALID_REQUEST with param Flint-Version, and on API_VERSION_RETIRED, the API versions you can use now. |
| `surface` | Optional | string | On CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED, the current surface of the checkout session in existing_checkout_session_id: hosted or embedded. Request this surface to keep using that session. |
| `tax_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Committed tax total on a paid order when its destination cannot change without repricing. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/ErrorDetail.md#errordetailtax_money). |
| `tip_capable_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | On TIP_ALLOCATION_CAPACITY_EXCEEDED, the largest tip the payment can carry: the balance left to collect. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tip_capable_money`: [field definitions](../models/ErrorDetail.md#errordetailtip_capable_money). |
| `unavailable_reason` | Optional | string | Delivery eligibility reason on SUBSCRIPTION_DELIVERY_UNAVAILABLE, when the selected method is unavailable. Values: [7 declared values](#errordetail-unavailable_reason-values). |
| `variant_id` | Optional | string | Variant associated with the error. |

#### ErrorDetail capability values

- `"accept_card_payments"`
- `"save_payment_methods"`
- `"accept_affirm_payments"`
- `"accept_ach_debit_payments"`
- `"receive_payouts"`
- `"create_standard_payouts"`
- `"manage_payout_destinations"`
- `"manage_payout_settings"`

#### ErrorDetail dependency_type values

- `"devices"`
- `"fulfillment"`
- `"inventory_allocation_policies"`
- `"inventory_claims"`
- `"inventory_counts"`
- `"inventory_levels"`
- `"inventory_transfers"`
- `"settings"`

#### ErrorDetail eligibility_reason values

- `"location_not_active"`
- `"inventory_allocation_inactive"`
- `"forced_location_mismatch"`
- `"fulfillment_incompatible"`
- `"split_prohibited"`
- `"insufficient_quantity"`

#### ErrorDetail payment_attempt_status values

- `"open"`
- `"requires_action"`
- `"processing"`
- `"requires_capture"`
- `"requires_retry"`
- `"finalizing"`
- `"partially_succeeded"`
- `"succeeded"`
- `"failed"`
- `"canceled"`
- `"expired"`

#### ErrorDetail reason values

- `"account_sessions_unavailable"`
- `"account_setup_repair_required"`
- `"account_setup_unavailable"`
- `"action_window_too_short"`
- `"active"`
- `"allow"`
- `"already_applied"`
- `"amount_out_of_range"`
- `"archived"`
- `"authorization_expired"`
- `"automatic_disabled"`
- `"bank_return_not_contestable"`
- `"billing_suspended"`
- `"block"`
- `"bounded_inventory_guarantee_not_supported"`
- `"buy_item_missing"`
- `"buyer_daily"`
- `"calculation_expired"`
- `"caller_rates_required"`
- `"cancellation_scheduled"`
- `"capability_blocked"`
- `"capability_not_requested"`
- `"capability_pending"`
- `"capability_unavailable"`
- `"card_balance"`
- `"card_daily"`
- `"card_unavailable"`
- `"checkout_launch_token_restricted"`
- `"checkout_order_ownership_required"`
- `"checkout_recovery_attempt_mismatch"`
- `"checkout_recovery_restricted"`
- `"checkout_session_order_mismatch"`
- `"checkout_session_payment_required"`
- `"checkout_tax_calculations"`
- `"code_invalid"`
- `"code_required"`
- `"codes_disabled"`
- `"configuration_required"`
- `"consecutive_skips"`
- `"country_not_supported"`
- `"country_required"`
- `"credit_exceeds_charge"`
- `"credit_note_creditable_value_changed"`
- `"credit_note_refund_retry_exhausted"`
- `"credit_note_tax_reconciliation_required"`
- `"currency_mismatch"`
- `"currency_not_supported"`
- `"customer_account_mode_conflict"`
- `"customer_unavailable"`
- `"daily_gift_card_purchases"`
- `"default_environment_required"`
- `"delivery_hold"`
- `"delivery_requirement_changes"`
- `"delivery_selection_replacements"`
- `"demo_session_route_not_allowed"`
- `"derived_from_packages"`
- `"destination_changed"`
- `"destination_not_served"`
- `"direct_owner_required"`
- `"disabled_by_merchant_settings"`
- `"disabled_by_platform_policy"`
- `"dispute_payment_unavailable"`
- `"enabled_risk_rules"`
- `"environment_mismatch"`
- `"exhausted"`
- `"existing_order_checkout"`
- `"expansion_not_permitted"`
- `"expired"`
- `"external_billing_schedule"`
- `"external_paid_orders"`
- `"field_locked"`
- `"hardware_fingerprint_already_exists"`
- `"image_ingestion_restart_required"`
- `"image_storage"`
- `"in_progress"`
- `"inactive"`
- `"ineligible_origin"`
- `"initial_payment_pending"`
- `"invalid_configuration"`
- `"inventory_wait"`
- `"invoice_finalized"`
- `"limited_benefit_capacity_not_supported"`
- `"live_mode_required"`
- `"location_ineligible"`
- `"location_limit"`
- `"malformed"`
- `"managed_by_owner"`
- `"managed_externally"`
- `"manual_capture_not_supported"`
- `"max_promotions_reached"`
- `"merchant_access_required"`
- `"merchant_account_action_required"`
- `"merchant_adjustments_daily"`
- `"merchant_credential_required"`
- `"merchant_hosted_customer_accounts"`
- `"merchant_imports_daily"`
- `"merchant_managed_receipts"`
- `"merchant_payments_disabled"`
- `"merchant_role_insufficient"`
- `"method_unavailable"`
- `"minimum_not_met"`
- `"mode_mismatch"`
- `"monthly_tax_calculations"`
- `"no_discountable_balance"`
- `"not_checkout_session"`
- `"not_combinable"`
- `"not_eligible"`
- `"not_found"`
- `"not_itemized"`
- `"not_offered"`
- `"not_paused"`
- `"not_permitted"`
- `"not_publishable"`
- `"not_supported"`
- `"not_yet_started"`
- `"oauth_context_mismatch"`
- `"off_session_not_supported"`
- `"offer_subscription"`
- `"on_hold"`
- `"onboarding_required"`
- `"option_expired"`
- `"order_owned"`
- `"organization_live_mode_required"`
- `"organization_membership_required"`
- `"organization_role_insufficient"`
- `"outcome_unknown"`
- `"owner_workflow_required"`
- `"page_origin_required"`
- `"partial_payment"`
- `"partner_app_management_requires_live_key"`
- `"payment_account_context_invalid"`
- `"payment_account_setup_incomplete"`
- `"payment_collected"`
- `"payment_disputed"`
- `"payment_intents_per_order"`
- `"payment_link_completions"`
- `"payment_option_access_not_provisioned"`
- `"payment_option_activation_pending"`
- `"payment_option_not_available"`
- `"payment_option_not_in_plan"`
- `"payment_required"`
- `"payment_retries_per_period"`
- `"payout_defaults_managed_externally"`
- `"payout_delay"`
- `"payout_frequency"`
- `"period_end_unavailable"`
- `"platform_funding_unavailable"`
- `"pricing_not_authorized"`
- `"processing_not_enabled"`
- `"processing_restricted"`
- `"processor_not_configured"`
- `"proof_rejected"`
- `"proof_required"`
- `"quote_expired"`
- `"quote_revoked"`
- `"quote_stale"`
- `"rate_unavailable"`
- `"receipt_recipients"`
- `"reconciliation_required"`
- `"recurring_ach_not_supported"`
- `"recurring_not_supported"`
- `"redirects_required"`
- `"refund_created"`
- `"refund_unavailable"`
- `"repair_required"`
- `"request_blocked"`
- `"require_3ds"`
- `"requirements_due"`
- `"return_checkout"`
- `"return_tax_mismatch"`
- `"review"`
- `"revision_unavailable"`
- `"revoked"`
- `"risk_action_unsupported"`
- `"role_not_assignable"`
- `"sandbox_management_requires_live_key"`
- `"sandbox_not_accessible"`
- `"sandbox_selection_forbidden"`
- `"saved_card_codes"`
- `"selected_by_active_variants"`
- `"selection_changed"`
- `"selection_expired"`
- `"self_role_edit_forbidden"`
- `"session_ended"`
- `"session_not_open"`
- `"setting_off"`
- `"shipping_changed"`
- `"source_delayed_settlement_not_supported"`
- `"source_not_supported"`
- `"split_payment_not_supported"`
- `"status_not_reached"`
- `"store_credit_unavailable"`
- `"subscription_checkout"`
- `"subscription_terms_locked"`
- `"superseded"`
- `"superseded_by_better_offer"`
- `"superseded_by_higher_priority"`
- `"surface_not_supported"`
- `"tax_category_required"`
- `"tax_changed"`
- `"terminal_status"`
- `"test_event"`
- `"transaction_purpose_unresolved"`
- `"trial_in_progress"`
- `"under_review"`
- `"unknown"`
- `"unknown_type"`
- `"unsupported_evaluation_schema"`
- `"unsupported_state"`
- `"unsupported_use"`
- `"verification_attempts"`
- `"verification_codes"`
- `"verification_required"`
- `"window_expired"`
- `"workload_identities"`
- `"wrong_credential_type"`

#### ErrorDetail unavailable_reason values

- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"method_type_not_allowed"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### ErrorDetail.available_by_source_type{}

Field definitions: [Balance.available_by_source_type{}](../models/Balance.md#balanceavailable_by_source_type).

### ErrorDetail.capturable_money

On CAPTURE_AMOUNT_EXCEEDS_CAPTURABLE, the most you can capture now. Retry with an amount at or below it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.collected_money

On ORDER_HAS_COLLECTED_MONEY, collected money still refundable through POST /v1/refunds with order_id, after pending refunds. Refund it before closing or send collected_money_behavior: keep. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.current_money

Current money amount counted toward the threshold, when the error is threshold-based. On ORDER_CHANGED_REFRESH_REQUIRED and PAYMENT_LEG_SELECTION_REQUIRED, the order's current outstanding balance. On ORDER_TOTAL_BELOW_NET_COLLECTED, what the change would leave: the order total, or the total without its unpaid tip when items and charges would fall below the money collected for them. On CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE, the outstanding balance the allocation would leave. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.expected_attempt_outstanding_money

On ORDER_CHANGED_REFRESH_REQUIRED when you resume a payment attempt, the outstanding balance the attempt started with. expected_outstanding_money must match it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.gap_money

Additional money amount needed to satisfy the threshold, when the error is threshold-based. On ORDER_TOTAL_BELOW_NET_COLLECTED, how far current_money falls below required_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.maximum_money

Maximum money amount accepted by the failed validation, calculated from the current resource state. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.required_money

Money amount required to satisfy a minimum threshold, when the error is threshold-based. On ORDER_TOTAL_BELOW_NET_COLLECTED, the money already collected for the order. On CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE, the order's unpaid tip the invoice must keep outstanding. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.requoted_shipping_money

Shipping total computed for the new destination, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.requoted_tax_money

Tax total computed for the new destination, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.shipping_money

Committed shipping total on the paid order when its destination cannot change without repricing. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.submitted_money

Amount from your request that failed the check. On TIP_ALLOCATION_CAPACITY_EXCEEDED, the unpaid tip the payment would have to carry. On ORDER_CHANGED_REFRESH_REQUIRED, the expected_outstanding_money you sent, or the total of the selected payment legs when they do not fit the outstanding balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.tax_money

Committed tax total on a paid order when its destination cannot change without repricing. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.tip_capable_money

On TIP_ALLOCATION_CAPACITY_EXCEEDED, the largest tip the payment can carry: the balance left to collect. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

