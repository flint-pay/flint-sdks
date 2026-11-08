[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ErrorDetail

One specific failure within an error, with a `code` and `message` plus fields that depend on the code, such as the `param`, resource, quantity, or amount involved.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_auth_types` | Optional | Array of string | Credential types this endpoint accepts, on INVALID_CREDENTIAL with reason wrong_credential_type. The list excludes first-party dashboard sessions and secrets that cannot authenticate requests. Items values: [14 declared values](#errordetail-accepted_auth_types--values). |
| `allowed_key_modes` | Optional | Array of string | API key modes in which this scope may be granted. Items values: `"live"`, `"test"`. |
| `auth_type` | Optional | string | Recognized credential type on INVALID_CREDENTIAL with reason unknown, expired, revoked, or wrong_credential_type. Omitted for malformed headers and first-party dashboard sessions. Values: [14 declared values](#errordetail-accepted_auth_types--values). |
| `available_by_source_type` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed available amounts grouped by balance source type on LIMIT_EXCEEDED when the requested amount exceeds the available balance. Keys are an open set; US accounts use card and bank_account. An empty object means no per-source amounts are reported. `available_by_source_type{}`: [field definitions](../models/Balance.md#balanceavailable_by_source_type). |
| `available_quantity` | Optional | integer | Whole-number quantity currently available for the requested operation; fractional quantities are not supported. Format: `int64`. |
| `blocking_resource_count` | Optional | integer | Total number of blocking resources when a dependency refusal publishes a count. blocking_resources lists up to 25 of them. Invoice ownership conflicts use current_resource instead. Format: `int64`. |
| `blocking_resources` | Optional | Array of [ErrorResourceReference](../models/ErrorResourceReference.md#errorresourcereference) | Resources that must transition or be corrected before the operation can succeed. Dependency conflicts list up to 25 resources, with blocking_resource_count as the total when present. OPERATION_IN_PROGRESS identifies work Flint is finishing, and PAYMENT_ATTEMPT_ACTIVE identifies the active attempt. Buyer credentials do not receive merchant-only blocking resources. On ACTION_NOT_ALLOWED with reason in_progress, a subscription payment retry is included when the buyer can read it. Manual payment conflicts identify their owning invoices. |
| `bundle_component_id` | Optional | string | Bundle component whose inventory demand cannot be satisfied. Present on INVENTORY_INSUFFICIENT when the demand belongs to a bundle component. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `capability` | Optional | string | Flint capability associated with this error, when applicable. Values: [9 declared values](#errordetail-capability-values). |
| `captured_physical_version` | Optional | integer | Physical basis submitted with the observation, or saved on the count line when apply refuses it. Read the current level and physically recount this item before replacing the basis. Format: `int64`. minimum: `0`. |
| `closed_reason` | Optional | string | How the inventory reservation ended on ACTION_NOT_ALLOWED with reason terminal_status. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"mixed"`. |
| `code` | Required | string and ([ErrorDetailCode](../models/ErrorDetailCode.md#errordetailcode) or string) | On INVALID_REQUEST, one of the detail codes; on every other error, repeats the top-level code. Values: [44 declared values](#errordetail-code-values). `code`: [declared alternatives](../models/ErrorDetail.md#errordetailcode-fields-1). |
| `conflict_type` | Optional | string | Which inventory count check failed for this line. Sent on VERSION_CONFLICT for physical observations or stale source observation sequences. Values: `"physical_version"`, `"source_observation_sequence"`. |
| `conflicting_fields` | Optional | Array of string | Request field paths that conflict with each other or with the rest of the request. Sent on INVALID_REQUEST with detail NOT_ALLOWED for conflicting payment inputs, and with detail INVALID_VALUE when entries in one product create repeat an option name, identifier, or selected option combination. |
| `current_api_version` | Optional | string | Current API version pin on VERSION_CONFLICT when expected_api_version is stale. |
| `current_count` | Optional | integer | The current resource count. On LIMIT_REACHED with reason product_variants, the product's non-archived variant count. Format: `int64`. |
| `current_delivery_selection_id` | Optional | string or null | Current effective delivery selection ID on VERSION_CONFLICT when expected_delivery_selection_id is stale. `null` when no delivery selection is current. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `current_disclosure_version` | Optional | string | Current disclosure version. Show the seller the current disclosure from GET /v1/tax-connection and get their agreement before sending its version. |
| `current_interval` | Optional | string | Current payout schedule interval on ACTION_NOT_ALLOWED with reason configuration_required. Change the payout schedule to manual before creating a standard payout. Values: `"daily"`, `"weekly"`, `"monthly"`. |
| `current_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current money amount counted toward the threshold, when the error is threshold-based. On VERSION_CONFLICT, the order's current outstanding balance. On ACTION_NOT_ALLOWED with reason already_applied after a capture amount mismatch, the amount already captured. On an order total floor refusal, the resulting order total. Retained errors keep their captured values. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `current_money`: [field definitions](../models/ErrorDetail.md#errordetailcurrent_money). |
| `current_physical_version` | Optional | integer | Current physical version of the inventory level. This is a physical-value assertion, not the resource version in current_version. Format: `int64`. minimum: `0`. |
| `current_resource` | Optional | object and [ErrorResourceReference](../models/ErrorResourceReference.md#errorresourcereference) or object and [Fulfillment](../models/Fulfillment.md#fulfillment) or object and [Shipment](../models/Shipment.md#shipment) or object and [Package](../models/Package.md#package) or object and [CustomDomain](../models/CustomDomain.md#customdomain) or object and [DeliveryRevocation](../models/DeliveryRevocation.md#deliveryrevocation) | The existing resource reference, custom domain, or delivery revocation on ALREADY_EXISTS. On VERSION_CONFLICT when replace_checkout_session_id is stale, the current checkout session reference. On ACTION_NOT_ALLOWED with reason in_progress when a checkout surface cannot change, the existing checkout session reference. Also the current fulfillment, shipment, or package when a conditional write conflicts with resource state. |
| `current_selection_id` | Optional | string | Current effective delivery selection ID returned with a selection concurrency conflict. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `current_source_observation_sequence` | Optional | integer | Latest accepted absolute source sequence for this item and Location. Format: `uint64`. minimum: `0`. |
| `current_status` | Optional | string | Current lifecycle status of the resource when the requested mutation is not allowed. |
| `current_version` | Optional | integer | On VERSION_CONFLICT, the resource's current version; send it as expected_version after rereading. Format: `uint64`. minimum: `0`. |
| `delivery_method_id` | Optional | string | Delivery method this failure concerns on ACTION_NOT_ALLOWED with reason method_unavailable, destination_not_served, or configuration_required. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `demand_key` | Optional | string | Key of the inventory demand this failure concerns. Sent on INVENTORY_INSUFFICIENT, and on INVENTORY_INSUFFICIENT with reason location_ineligible when one demand cannot use the Location. |
| `eligibility_reason` | Optional | string | On INVENTORY_INSUFFICIENT with reason location_ineligible, why the Location in location_id cannot supply the demand. Values: [6 declared values](#errordetail-eligibility_reason-values). |
| `expected_attempt_outstanding_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | On VERSION_CONFLICT when you resume a payment attempt, the outstanding balance the attempt started with. expected_outstanding_money must match it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `expected_attempt_outstanding_money`: [field definitions](../models/ErrorDetail.md#errordetailexpected_attempt_outstanding_money). |
| `failure_category` | Optional | string | Delivery pricing failure category on ACTION_NOT_ALLOWED with reason method_unavailable, destination_not_served, or configuration_required, when the rate cannot be calculated. Values: [16 declared values](DeliveryCandidateOutcomeResource.md#deliverycandidateoutcomeresource-failure_category-values). |
| `failure_code` | Optional | string | Decline reason for a failed payment, from the same vocabulary as the payment's last_payment_error.code. Unrecognized provider reasons are payment_failed. Values: [22 declared values](#errordetail-failure_code-values). |
| `inactive_message` | Optional | string | Merchant-provided buyer-facing text on ACTION_NOT_ALLOWED with reason unsupported_state, not_offered, or terminal_status. Present only when the merchant set an inactive message. |
| `inventory_count_line_id` | Optional | string | Inventory count line this conflict concerns. Sent on VERSION_CONFLICT for physical observations or stale source observation sequences. Example: `"invcln_01KEZF7C00BJK1S36219KK040Q"`. |
| `inventory_item_id` | Optional | string | Inventory item this failure concerns. Omitted for buyer credentials. Sent on INVENTORY_INSUFFICIENT and on VERSION_CONFLICT for physical observations or stale source observation sequences. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `inventory_reservation_line_id` | Optional | string | Inventory reservation line this failure concerns. Sent when a reservation line cannot satisfy an inventory operation. Example: `"invrln_01KEZF7C002JCDA729XDSNWGY5"`. |
| `latest_status_occurred_at` | Optional | string | Latest recorded package status time. On ACTION_NOT_ALLOWED with reason out_of_order, a reroute to in_transit must have occurred_at at or after this instant. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `limit` | Optional | integer | The limit that was reached. On LIMIT_REACHED with reason product_variants, the most non-archived variants a product can hold. On LIMIT_REACHED with reason enabled_risk_rules, the most active risk rules in the environment. On LIMIT_REACHED with reason partner_app_credentials, the most active credentials a partner app can hold. On LIMIT_REACHED with reason payment_intents_per_order, the most payment intents an order can have over its lifetime. On LIMIT_REACHED with reason payment_retries_per_period, the most payment retries a subscription allows in one billing period. On LIMIT_REACHED with reason test_clock_subscriptions, the most subscriptions that aren't canceled one test clock can hold. Format: `int64`. |
| `location_id` | Optional | string | Location this failure concerns on INVENTORY_INSUFFICIENT with reason location_ineligible, on VERSION_CONFLICT for physical observations or stale source observation sequences, or on SERVICE_UNAVAILABLE when pickup availability cannot be evaluated. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `location_outcome` | Optional | string | On INVENTORY_INSUFFICIENT with reason location_ineligible, the routing outcome for the Location in location_id: for the demand in demand_key when present, otherwise for every demand. Values: `"ineligible"`. |
| `maximum_frozen_at` | Optional | string | RFC 3339 timestamp in UTC of the latest time this advance can reach. Sent on ACTION_NOT_ALLOWED with reason advance_limit_exceeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `maximum_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Maximum money amount accepted by the failed validation, calculated from the current resource state. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `maximum_money`: [field definitions](../models/ErrorDetail.md#errordetailmaximum_money). |
| `message` | Required | string | Human-readable explanation of this failure for your logs. The wording can change, so branch on code. |
| `minimum_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Smallest money amount the input at param may contain in the resource's current state. On an order total floor refusal without param, the minimum resulting order total, including any unpaid tip. On ACTION_NOT_ALLOWED with reason minimum_charge, the processor minimum for the prorated net charge. Retained errors keep their captured values. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `minimum_money`: [field definitions](../models/ErrorDetail.md#errordetailminimum_money). |
| `minimum_quantity` | Optional | integer | Minimum accepted whole-number quantity for the input at param, based on stored state; fractional quantities are not supported. Sent on LIMIT_EXCEEDED. Format: `int64`. |
| `missing_scopes` | Optional | Array of string | Unsatisfied entries from scope_requirement after write-implies-read evaluation. Example: `["accounts.api_keys.write"]`. |
| `mode` | Optional | string | Environment mode the referenced connected app install must authorize. Values: `"live"`, `"test"`. |
| `order_id` | Optional | string | Order that owns the line item in order_line_item_id. Sent on INVENTORY_INSUFFICIENT for an order inventory demand. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Optional | string | Order line item whose inventory demand cannot be satisfied. Sent on INVENTORY_INSUFFICIENT. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `param` | Optional | string | Path of the input associated with this failure. Present on every INVALID_REQUEST detail. Uses a body path such as line_items[0].name or metadata.order_ref, a path or query parameter name, a published header name, or body for a whole-body failure. |
| `payment_option` | Optional | string | Flint payment option associated with this error, when the error is about a specific requested or selected payment option. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payout_terms_expires_at` | Optional | string | RFC 3339 timestamp in UTC when new account payout terms end on ACTION_NOT_ALLOWED with reason payout_frequency or payout_delay. Sent at second precision. Choose an allowed schedule or delay, or make the change after this time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `previous_key_expires_at` | Optional | string | RFC 3339 timestamp when the previous signing key expires on ACTION_NOT_ALLOWED with reason in_progress. Retry after this time, or revoke the current key before rotating if it leaked. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `quota` | Optional | [QuotaDetails](../models/QuotaDetails.md#quotadetails) | Structured resource quota state when the error is caused by quota exhaustion. Storage usage and limits for a resource, returned in the error details when an image quota is exhausted. |
| `reason` | Optional | string | Stable Flint reason associated with this error. When code is ACTION_NOT_ALLOWED, one of: advance_limit_exceeded, already_applied, archived, authorization_expired, bank_return_not_contestable, cancellation_scheduled, configuration_required, credit_exceeds_charge, credit_note_tax_reconciliation_required, customer_account_mode_conflict, delivery_hold, delivery_requirement_changes, dependency_revoked, derived_from_packages, destination_not_served, disclosure_changed, dispute_payment_unavailable, end_after_reached, environment_not_granted, existing_order_checkout, external_billing_schedule, field_locked, first_period_unpaid, frozen_at_not_later, image_ingestion_restart_required, in_progress, inventory_wait, invoice_finalized, managed_by_owner, managed_externally, merchant_hosted_customer_accounts, merchant_managed_email, method_unavailable, minimum_charge, mixed_tax_treatment, not_itemized, not_offered, not_paused, offer_subscription, on_hold, order_owned, out_of_order, paid_period_required, payload_expired, payment_collected, payment_disputed, payment_method_not_reusable, payment_required, payout_defaults_managed_externally, payout_delay, payout_frequency, period_end_unavailable, plan_change_scheduled, platform_capability_inactive, platform_onboarding_required, platform_pending_review, platform_rejected, previous_refund_failed, quantity_not_carried, reconciliation_required, refund_created, refund_unavailable, refund_window_expired, restricted, return_checkout, return_owned, return_tax_mismatch, secret_not_issued, status_not_reached, stock_at_risk, store_credit_unavailable, subscription_owned, subscription_terms_locked, terminal_status, test_event, trial_in_progress, unsupported_state, variant_not_targeted, verification_required. When code is ALREADY_EXISTS, one of: dashboard_sign_in_required, hardware_fingerprint_already_exists. When code is CONCURRENT_MODIFICATION, one of: credit_note_refund_retry_exhausted. When code is DELIVERY_REQUOTE_REQUIRED, one of: calculation_expired, caller_rates_required, destination_changed, option_expired, quote_expired, quote_revoked, quote_stale, selection_changed, selection_expired, window_expired. When code is EXTERNAL_SERVICE_ERROR, one of: issuer_unavailable, outcome_unknown, rate_callback_failed, rate_unavailable. When code is FORBIDDEN, one of: checkout_launch_token_restricted, checkout_recovery_attempt_mismatch, checkout_recovery_restricted, checkout_session_order_mismatch, checkout_session_payment_required, context_mismatch, demo_session_route_not_allowed, direct_owner_required, environment_grant_required, environment_mismatch, expansion_not_permitted, full_access_required, linked_key_not_allowed, live_mode_required, merchant_access_required, merchant_credential_required, merchant_role_insufficient, not_checkout_session, not_permitted, organization_membership_required, organization_role_insufficient, owner_workflow_required, request_blocked, role_not_assignable, sandbox_not_accessible, sandbox_selection_forbidden, self_role_edit_forbidden, test_mode_required. When code is GIFT_CARD_CHALLENGE_REQUIRED, one of: page_origin_required, proof_rejected, proof_required. When code is IDEMPOTENCY_KEY_REUSED, one of: transport_mismatch. When code is INSUFFICIENT_SCOPE, one of: install_scope_not_granted, scope_not_granted, scope_not_held. When code is INTERNAL_ERROR, one of: repair_required. When code is INVALID_CREDENTIAL, one of: expired, malformed, mode_mismatch, revoked, session_ended, unknown, wrong_credential_type. When code is INVENTORY_INSUFFICIENT, one of: location_ineligible, location_limit. When code is LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily, insufficient_available_value, merchant_adjustments_daily, merchant_imports_daily. When code is LIMIT_REACHED, one of: checkout_tax_calculations, consecutive_skips, customer_tax_exemptions, daily_demo_sessions, daily_gift_card_purchases, delivery_selection_replacements, enabled_risk_rules, external_paid_orders, image_storage, monthly_tax_calculations, partner_app_credentials, partner_app_install_links, payment_intents_per_order, payment_link_completions, payment_retries_per_period, pending_reports, price_list_prices, product_variants, receipt_recipients, saved_card_codes, test_clock_subscriptions, verification_attempts, verification_codes, webhook_event_streams, workload_identities. When code is MERCHANT_NOT_READY, one of: account_sessions_unavailable, account_setup_repair_required, account_setup_unavailable, billing_suspended, capability_blocked, capability_not_requested, capability_pending, capability_unavailable, default_environment_required, disabled_by_merchant_settings, disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled, onboarding_required, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable, platform_review, pricing_not_authorized, processing_not_enabled, processing_restricted, processor_not_configured, requirements_due, tax_category_required. When code is OPERATION_IN_PROGRESS, one of: delivery_selection_materializing. When code is PAYMENT_OPTION_UNAVAILABLE, one of: action_window_too_short, amount_out_of_range, capability_blocked, capability_pending, disabled_by_merchant_settings, disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable, requirements_due, risk_action_unsupported, transaction_purpose_unresolved. When code is PAYMENT_PROCESSING_UNAVAILABLE, one of: platform_funding_unavailable. When code is PROMOTION_DECLINED, one of: already_applied, automatic_disabled, buy_item_missing, code_invalid, code_required, codes_disabled, currency_mismatch, customer_limit_reached, customer_mismatch, customer_required, exhausted, expired, inactive, max_promotions_reached, minimum_not_met, no_discountable_balance, not_combinable, not_eligible, not_yet_started, recurrence_completed, superseded, superseded_by_better_offer, superseded_by_higher_priority, unknown_type. When code is RESOURCE_IN_USE, one of: selected_by_active_variants. When code is RESOURCE_NOT_FOUND, one of: email_missing. When code is SERVICE_UNAVAILABLE, one of: outcome_unknown, processor_unavailable, repair_required. Additional reasons may be added. Values: [230 declared values](#errordetail-reason-values). |
| `remediation` | Optional | [ErrorRemediation](../models/ErrorRemediation.md#errorremediation) | Recovery guidance for this failure: whether retrying can succeed and what to do next. Omitted on the details of INVALID_REQUEST, where the error's own remediation applies to every input. Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested actions. |
| `requested_quantity` | Optional | integer | Whole-number quantity submitted by the caller when a quantity-bearing operation conflicts with current capacity; fractional quantities are not supported. Format: `int64`. |
| `requoted_shipping_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Shipping total computed for the new destination, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `requoted_shipping_money`: [field definitions](../models/ErrorDetail.md#errordetailrequoted_shipping_money). |
| `requoted_tax_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax total computed for the new destination, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `requoted_tax_money`: [field definitions](../models/ErrorDetail.md#errordetailrequoted_tax_money). |
| `resets_at` | Optional | string | RFC 3339 instant when time alone frees capacity for LIMIT_REACHED or LIMIT_EXCEEDED. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `resource_id` | Optional | string | ID of the referenced public resource, when available. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Optional | string | Public resource named by RESOURCE_NOT_FOUND or a generic conflict: a ResourceType value, or resource when the resource has no public type. Example: `"order"`. |
| `restrictions` | Optional | Array of [GiftCardRestriction](../models/GiftCardRestriction.md#giftcardrestriction) | Restrictions that prevented this gift card action, in the same shape as GiftCard.restrictions. Sent on ACTION_NOT_ALLOWED with reason restricted. |
| `sandbox_id` | Optional | string | Sandbox the referenced connected app install must authorize for a test-mode link. pattern: `^(test\|menv)_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scope` | Optional | string | Canonical public scope rejected by validation, when the detail concerns one scope. |
| `scope_requirement` | Optional | [ScopeRequirement](../models/ScopeRequirement.md#scoperequirement) | Complete route or delegation scope requirement for an INSUFFICIENT_SCOPE error. The scopes an authorization decision required and whether `all` or `any` of them were needed, returned in error details. |
| `selectable_resources` | Optional | Array of [SelectableErrorResource](../models/SelectableErrorResource.md#selectableerrorresource) | Resources offered for the field named by param under INVALID_REQUEST. Submit one of their resource_id values. |
| `shipping_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Committed shipping total on the paid order when its destination cannot change without repricing. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `shipping_money`: [field definitions](../models/ErrorDetail.md#errordetailshipping_money). |
| `shortage_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `submitted_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount from your request that failed the check. On ACTION_NOT_ALLOWED with reconciliation_required, the unpaid tip the payment would have to carry. On VERSION_CONFLICT or LIMIT_EXCEEDED, the expected_outstanding_money you sent, or the total of the selected payment legs when they do not fit the outstanding balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `submitted_money`: [field definitions](../models/ErrorDetail.md#errordetailsubmitted_money). |
| `submitted_source_observation_sequence` | Optional | integer | Absolute source sequence submitted for this inventory count line. Format: `uint64`. minimum: `0`. |
| `suggestions` | Optional | Array of string | Concrete corrective actions for this validation error. |
| `supported_actions` | Optional | Array of string | Actions accepted for the current resource state. |
| `supported_api_versions` | Optional | Array of string | On INVALID_REQUEST with param Flint-Version, and on API_VERSION_RETIRED, the API versions you can use now. |
| `tax_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Committed tax total on a paid order when its destination cannot change without repricing. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/ErrorDetail.md#errordetailtax_money). |
| `unavailable_reason` | Optional | string | Delivery eligibility reason on ACTION_NOT_ALLOWED with reason method_unavailable, destination_not_served, or configuration_required, when the selected method is unavailable. Values: [8 declared values](#errordetail-unavailable_reason-values). |
| `verification_max_age_seconds` | Optional | integer | How many seconds an identity verification lasts for this request, on IDENTITY_VERIFICATION_REQUIRED. Verify again when verified_at is older than this. Format: `int64`. |
| `verified_at` | Optional | string | When the calling user session last verified the user's identity, on IDENTITY_VERIFICATION_REQUIRED. Dashboard sessions report it to the minute. Omitted when the session has no recorded verification. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

#### ErrorDetail accepted_auth_types [] values

- `"api_key"`
- `"cli_login"`
- `"workload_identity"`
- `"partner_app"`
- `"onboarding_session"`
- `"checkout_session"`
- `"checkout_launch"`
- `"customer_session"`
- `"invoice_access"`
- `"cli_refresh"`
- `"customer_refresh"`
- `"cli_device_code"`
- `"checkout_stored_secret"`
- `"payment_link_resolution"`

#### ErrorDetail capability values

- `"accept_card_payments"`
- `"save_payment_methods"`
- `"accept_affirm_payments"`
- `"accept_ach_debit_payments"`
- `"receive_payouts"`
- `"create_standard_payouts"`
- `"manage_payout_destinations"`
- `"manage_payout_settings"`
- `"merchant_onboarding"`

#### ErrorDetail code values

- `"REQUIRED"`
- `"INVALID_VALUE"`
- `"UNKNOWN_FIELD"`
- `"NOT_ALLOWED"`
- `"ACTION_NOT_ALLOWED"`
- `"ALREADY_EXISTS"`
- `"API_VERSION_RETIRED"`
- `"AUTHENTICATION_REQUIRED"`
- `"CONCURRENT_MODIFICATION"`
- `"CUSTOMER_EMAIL_REQUIRED"`
- `"DELIVERY_REQUOTE_REQUIRED"`
- `"EXTERNAL_SERVICE_ERROR"`
- `"FORBIDDEN"`
- `"GIFT_CARD_CHALLENGE_REQUIRED"`
- `"IDEMPOTENCY_KEY_IN_PROGRESS"`
- `"IDEMPOTENCY_KEY_REUSED"`
- `"IDEMPOTENCY_RECOVERY_REQUIRED"`
- `"IDENTITY_VERIFICATION_REQUIRED"`
- `"INSUFFICIENT_SCOPE"`
- `"INTERNAL_ERROR"`
- `"INVALID_CREDENTIAL"`
- `"INVALID_REQUEST"`
- `"INVENTORY_INSUFFICIENT"`
- `"LIMIT_EXCEEDED"`
- `"LIMIT_REACHED"`
- `"MERCHANT_NOT_READY"`
- `"METHOD_NOT_ALLOWED"`
- `"OPERATION_IN_PROGRESS"`
- `"PAYMENT_ATTEMPT_ACTIVE"`
- `"PAYMENT_OPTION_UNAVAILABLE"`
- `"PAYMENT_PROCESSING_UNAVAILABLE"`
- `"PAYMENT_PROCESSOR_REJECTED"`
- `"PAYMENT_REVIEW_OPEN"`
- `"PROMOTION_DECLINED"`
- `"RATE_LIMIT_EXCEEDED"`
- `"REQUEST_BODY_TOO_LARGE"`
- `"REQUEST_CANCELED"`
- `"REQUEST_TIMEOUT"`
- `"RESOURCE_IN_USE"`
- `"RESOURCE_NOT_FOUND"`
- `"ROUTE_NOT_FOUND"`
- `"SERVICE_UNAVAILABLE"`
- `"UNSUPPORTED_CONTENT_TYPE"`
- `"VERSION_CONFLICT"`

#### ErrorDetail eligibility_reason values

- `"location_not_active"`
- `"inventory_allocation_inactive"`
- `"forced_location_mismatch"`
- `"fulfillment_incompatible"`
- `"split_prohibited"`
- `"insufficient_quantity"`

#### ErrorDetail failure_code values

- `"card_declined"`
- `"insufficient_funds"`
- `"bank_account_closed"`
- `"bank_account_not_found"`
- `"bank_debit_not_authorized"`
- `"bank_account_restricted"`
- `"bank_debit_limit_exceeded"`
- `"authentication_required"`
- `"payment_blocked"`
- `"expired_card"`
- `"incorrect_cvc"`
- `"lost_card"`
- `"stolen_card"`
- `"do_not_honor"`
- `"fraudulent"`
- `"processing_error"`
- `"payment_method_unavailable"`
- `"payment_method_declined"`
- `"payment_not_completed"`
- `"payment_action_expired"`
- `"payment_method_temporarily_unavailable"`
- `"payment_failed"`

#### ErrorDetail reason values

- `"account_sessions_unavailable"`
- `"account_setup_repair_required"`
- `"account_setup_unavailable"`
- `"action_window_too_short"`
- `"advance_limit_exceeded"`
- `"already_applied"`
- `"amount_out_of_range"`
- `"archived"`
- `"authorization_expired"`
- `"automatic_disabled"`
- `"bank_return_not_contestable"`
- `"billing_suspended"`
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
- `"checkout_launch_token_restricted"`
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
- `"context_mismatch"`
- `"credit_exceeds_charge"`
- `"credit_note_refund_retry_exhausted"`
- `"credit_note_tax_reconciliation_required"`
- `"currency_mismatch"`
- `"customer_account_mode_conflict"`
- `"customer_limit_reached"`
- `"customer_mismatch"`
- `"customer_required"`
- `"customer_tax_exemptions"`
- `"daily_demo_sessions"`
- `"daily_gift_card_purchases"`
- `"dashboard_sign_in_required"`
- `"default_environment_required"`
- `"delivery_hold"`
- `"delivery_requirement_changes"`
- `"delivery_selection_materializing"`
- `"delivery_selection_replacements"`
- `"demo_session_route_not_allowed"`
- `"dependency_revoked"`
- `"derived_from_packages"`
- `"destination_changed"`
- `"destination_not_served"`
- `"direct_owner_required"`
- `"disabled_by_merchant_settings"`
- `"disabled_by_platform_policy"`
- `"disclosure_changed"`
- `"dispute_payment_unavailable"`
- `"email_missing"`
- `"enabled_risk_rules"`
- `"end_after_reached"`
- `"environment_grant_required"`
- `"environment_mismatch"`
- `"environment_not_granted"`
- `"exhausted"`
- `"existing_order_checkout"`
- `"expansion_not_permitted"`
- `"expired"`
- `"external_billing_schedule"`
- `"external_paid_orders"`
- `"field_locked"`
- `"first_period_unpaid"`
- `"frozen_at_not_later"`
- `"full_access_required"`
- `"hardware_fingerprint_already_exists"`
- `"image_ingestion_restart_required"`
- `"image_storage"`
- `"in_progress"`
- `"inactive"`
- `"install_scope_not_granted"`
- `"insufficient_available_value"`
- `"inventory_wait"`
- `"invoice_finalized"`
- `"issuer_unavailable"`
- `"linked_key_not_allowed"`
- `"live_mode_required"`
- `"location_ineligible"`
- `"location_limit"`
- `"malformed"`
- `"managed_by_owner"`
- `"managed_externally"`
- `"max_promotions_reached"`
- `"merchant_access_required"`
- `"merchant_account_action_required"`
- `"merchant_adjustments_daily"`
- `"merchant_credential_required"`
- `"merchant_hosted_customer_accounts"`
- `"merchant_imports_daily"`
- `"merchant_managed_email"`
- `"merchant_payments_disabled"`
- `"merchant_role_insufficient"`
- `"method_unavailable"`
- `"minimum_charge"`
- `"minimum_not_met"`
- `"mixed_tax_treatment"`
- `"mode_mismatch"`
- `"monthly_tax_calculations"`
- `"no_discountable_balance"`
- `"not_checkout_session"`
- `"not_combinable"`
- `"not_eligible"`
- `"not_itemized"`
- `"not_offered"`
- `"not_paused"`
- `"not_permitted"`
- `"not_yet_started"`
- `"offer_subscription"`
- `"on_hold"`
- `"onboarding_required"`
- `"option_expired"`
- `"order_owned"`
- `"organization_membership_required"`
- `"organization_role_insufficient"`
- `"out_of_order"`
- `"outcome_unknown"`
- `"owner_workflow_required"`
- `"page_origin_required"`
- `"paid_period_required"`
- `"partner_app_credentials"`
- `"partner_app_install_links"`
- `"payload_expired"`
- `"payment_account_context_invalid"`
- `"payment_account_setup_incomplete"`
- `"payment_collected"`
- `"payment_disputed"`
- `"payment_intents_per_order"`
- `"payment_link_completions"`
- `"payment_method_not_reusable"`
- `"payment_option_access_not_provisioned"`
- `"payment_option_activation_pending"`
- `"payment_option_not_available"`
- `"payment_option_not_in_plan"`
- `"payment_required"`
- `"payment_retries_per_period"`
- `"payout_defaults_managed_externally"`
- `"payout_delay"`
- `"payout_frequency"`
- `"pending_reports"`
- `"period_end_unavailable"`
- `"plan_change_scheduled"`
- `"platform_capability_inactive"`
- `"platform_funding_unavailable"`
- `"platform_onboarding_required"`
- `"platform_pending_review"`
- `"platform_rejected"`
- `"platform_review"`
- `"previous_refund_failed"`
- `"price_list_prices"`
- `"pricing_not_authorized"`
- `"processing_not_enabled"`
- `"processing_restricted"`
- `"processor_not_configured"`
- `"processor_unavailable"`
- `"product_variants"`
- `"proof_rejected"`
- `"proof_required"`
- `"quantity_not_carried"`
- `"quote_expired"`
- `"quote_revoked"`
- `"quote_stale"`
- `"rate_callback_failed"`
- `"rate_unavailable"`
- `"receipt_recipients"`
- `"reconciliation_required"`
- `"recurrence_completed"`
- `"refund_created"`
- `"refund_unavailable"`
- `"refund_window_expired"`
- `"repair_required"`
- `"request_blocked"`
- `"requirements_due"`
- `"restricted"`
- `"return_checkout"`
- `"return_owned"`
- `"return_tax_mismatch"`
- `"revoked"`
- `"risk_action_unsupported"`
- `"role_not_assignable"`
- `"sandbox_not_accessible"`
- `"sandbox_selection_forbidden"`
- `"saved_card_codes"`
- `"scope_not_granted"`
- `"scope_not_held"`
- `"secret_not_issued"`
- `"selected_by_active_variants"`
- `"selection_changed"`
- `"selection_expired"`
- `"self_role_edit_forbidden"`
- `"session_ended"`
- `"status_not_reached"`
- `"stock_at_risk"`
- `"store_credit_unavailable"`
- `"subscription_owned"`
- `"subscription_terms_locked"`
- `"superseded"`
- `"superseded_by_better_offer"`
- `"superseded_by_higher_priority"`
- `"tax_category_required"`
- `"terminal_status"`
- `"test_clock_subscriptions"`
- `"test_event"`
- `"test_mode_required"`
- `"transaction_purpose_unresolved"`
- `"transport_mismatch"`
- `"trial_in_progress"`
- `"unknown"`
- `"unknown_type"`
- `"unsupported_state"`
- `"variant_not_targeted"`
- `"verification_attempts"`
- `"verification_codes"`
- `"verification_required"`
- `"webhook_event_streams"`
- `"window_expired"`
- `"workload_identities"`
- `"wrong_credential_type"`

#### ErrorDetail unavailable_reason values

- `"dependency_revoked"`
- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"method_type_not_allowed"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### ErrorDetail.available_by_source_type{}

Field definitions: [Balance.available_by_source_type{}](../models/Balance.md#balanceavailable_by_source_type).

### ErrorDetail.code fields 1

### ErrorDetail.code fields 1 variant 1

anyOf ErrorDetailCode: Validation detail code on INVALID_REQUEST; param identifies the input to correct..

- Value shape: string. On INVALID_REQUEST, one of the detail codes; on every other error, repeats the top-level code. Validation detail code on INVALID_REQUEST; param identifies the input to correct. Values: `"REQUIRED"`, `"INVALID_VALUE"`, `"UNKNOWN_FIELD"`, `"NOT_ALLOWED"`.

### ErrorDetail.code fields 1 variant 2

anyOf variant 2.

- Value shape: string. On INVALID_REQUEST, one of the detail codes; on every other error, repeats the top-level code. Values: [40 declared values](../ERRORS.md#flint-error-codes).

### ErrorDetail.current_money

Current money amount counted toward the threshold, when the error is threshold-based. On VERSION_CONFLICT, the order's current outstanding balance. On ACTION_NOT_ALLOWED with reason already_applied after a capture amount mismatch, the amount already captured. On an order total floor refusal, the resulting order total. Retained errors keep their captured values. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.expected_attempt_outstanding_money

On VERSION_CONFLICT when you resume a payment attempt, the outstanding balance the attempt started with. expected_outstanding_money must match it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.maximum_money

Maximum money amount accepted by the failed validation, calculated from the current resource state. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.minimum_money

Smallest money amount the input at param may contain in the resource's current state. On an order total floor refusal without param, the minimum resulting order total, including any unpaid tip. On ACTION_NOT_ALLOWED with reason minimum_charge, the processor minimum for the prorated net charge. Retained errors keep their captured values. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

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

Amount from your request that failed the check. On ACTION_NOT_ALLOWED with reconciliation_required, the unpaid tip the payment would have to carry. On VERSION_CONFLICT or LIMIT_EXCEEDED, the expected_outstanding_money you sent, or the total of the selected payment legs when they do not fit the outstanding balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ErrorDetail.tax_money

Committed tax total on a paid order when its destination cannot change without repricing. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

