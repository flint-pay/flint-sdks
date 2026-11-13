[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPreviewError

An error found while previewing a subscription, with a `code`, message, and the parameter at fault.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string |  |
| `details` | Optional | Array of [ErrorDetail](../models/ErrorDetail.md#errordetail) | `details[]`: [field definitions](../models/SubscriptionPreviewError.md#subscriptionpreviewerrordetails). |
| `message` | Required | string |  |
| `param` | Optional | string |  |

### SubscriptionPreviewError.details[]

One specific failure within an error, with a `code` and `message` plus fields that depend on the code, such as the `param`, resource, quantity, or amount involved.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_auth_types` | Optional | Array of string | Credential types this endpoint accepts, on INVALID_CREDENTIAL with reason wrong_credential_type. The list excludes first-party dashboard sessions and secrets that cannot authenticate requests. Items values: [14 declared values](ErrorDetailInput.md#errordetailinput-accepted_auth_types--values). |
| `allowed_key_modes` | Optional | Array of string | API key modes in which this scope may be granted. Items values: `"live"`, `"test"`. |
| `auth_type` | Optional | string | Recognized credential type on INVALID_CREDENTIAL with reason unknown, expired, revoked, or wrong_credential_type. Omitted for malformed headers and first-party dashboard sessions. Values: [14 declared values](ErrorDetailInput.md#errordetailinput-accepted_auth_types--values). |
| `available_by_source_type` | Optional | Map of [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed available amounts grouped by balance source type on LIMIT_EXCEEDED when the requested amount exceeds the available balance. Keys are an open set; US accounts use card and bank_account. An empty object means no per-source amounts are reported. |
| `available_quantity` | Optional | integer | Whole-number quantity currently available for the requested operation; fractional quantities are not supported. Format: `int64`. |
| `blocking_resource_count` | Optional | integer | Total number of blocking resources when a dependency refusal publishes a count. blocking_resources lists up to 25 of them. Invoice ownership conflicts use current_resource instead. Format: `int64`. |
| `blocking_resources` | Optional | Array of [ErrorResourceReference](../models/ErrorResourceReference.md#errorresourcereference) | Resources that must transition or be corrected before the operation can succeed. Dependency conflicts list up to 25 resources, with blocking_resource_count as the total when present. OPERATION_IN_PROGRESS identifies work Flint is finishing, and PAYMENT_ATTEMPT_ACTIVE identifies the active attempt. Buyer credentials do not receive merchant-only blocking resources. On ACTION_NOT_ALLOWED with reason in_progress, a subscription payment retry is included when the buyer can read it. Manual payment conflicts identify their owning invoices. `blocking_resources[]`: [field definitions](../models/ErrorDetail.md#errordetailblocking_resources). |
| `bundle_component_id` | Optional | string | Bundle component whose inventory demand cannot be satisfied. Present on INVENTORY_INSUFFICIENT when the demand belongs to a bundle component. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `capability` | Optional | string | Flint capability associated with this error, when applicable. Values: [10 declared values](ErrorDetailInput.md#errordetailinput-capability-values). |
| `captured_physical_version` | Optional | integer | Physical basis submitted with the observation, or saved on the count line when apply refuses it. Read the current level and physically recount this item before replacing the basis. Format: `int64`. minimum: `0`. |
| `closed_reason` | Optional | string | How the inventory reservation ended on ACTION_NOT_ALLOWED with reason terminal_status. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"mixed"`, `"adopted"`. |
| `code` | Required | string | On INVALID_REQUEST, one of the detail codes; on every other error, repeats the top-level code. Values: [44 declared values](ErrorDetailInput.md#errordetailinput-code-values). `code`: [declared alternatives](../models/ErrorDetail.md#errordetailcode). |
| `conflict_type` | Optional | string | Which inventory count check failed for this line. Sent on VERSION_CONFLICT for physical observations or stale source observation sequences. Values: `"physical_version"`, `"source_observation_sequence"`. |
| `conflicting_fields` | Optional | Array of string | The other request inputs in a conflict, as param-form paths; never the detail's own param. Sent on INVALID_REQUEST with detail NOT_ALLOWED when inputs can't be sent together: param is the input to remove, and conflicting_fields lists the inputs it conflicts with, such as the type or mode field whose value excludes it. Also sent with detail INVALID_VALUE when entries in one product create repeat an option name, identifier, or selected option combination. |
| `current_api_version` | Optional | string | Current API version pin on VERSION_CONFLICT when expected_api_version is stale. |
| `current_count` | Optional | integer | The current resource count. On LIMIT_REACHED with reason product_variants, the product's non-archived variant count. Format: `int64`. |
| `current_delivery_selection_id` | Optional | string or null | Current effective delivery selection ID on VERSION_CONFLICT when expected_delivery_selection_id is stale. `null` when no delivery selection is current. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `current_disclosure_version` | Optional | string | Current disclosure version. Show the seller the current disclosure from GET /v1/tax-connection and get their agreement before sending its version. |
| `current_interval` | Optional | string | Current payout schedule interval on ACTION_NOT_ALLOWED with reason configuration_required. Change the payout schedule to manual before creating a standard payout. Values: `"daily"`, `"weekly"`, `"monthly"`. |
| `current_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current money amount counted toward the threshold, when the error is threshold-based. On VERSION_CONFLICT, the order's current outstanding balance. On ACTION_NOT_ALLOWED with reason already_applied after a capture amount mismatch, the amount already captured. On an order total floor refusal, the resulting order total. Retained errors keep their captured values. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `current_physical_version` | Optional | integer | Current physical version of the inventory level. This is a physical-value assertion, not the resource version in current_version. Format: `int64`. minimum: `0`. |
| `current_resource` | Optional | object and [ErrorResourceReference](../models/ErrorResourceReference.md#errorresourcereference) or object and [Fulfillment](../models/Fulfillment.md#fulfillment) or object and [Shipment](../models/Shipment.md#shipment) or object and [Package](../models/Package.md#package) or object and [CustomDomain](../models/CustomDomain.md#customdomain) or object and [DeliveryRevocation](../models/DeliveryRevocation.md#deliveryrevocation) | The existing resource reference, custom domain, or delivery revocation on ALREADY_EXISTS. On VERSION_CONFLICT when replace_checkout_session_id is stale, the current checkout session reference. On ACTION_NOT_ALLOWED with reason in_progress when a checkout surface cannot change, the existing checkout session reference. Also the current fulfillment, shipment, or package when a conditional write conflicts with resource state. `current_resource`: [declared alternatives](../models/SubscriptionPreviewError.md#subscriptionpreviewerrordetailscurrent_resource). |
| `current_selection_id` | Optional | string | Current effective delivery selection ID returned with a selection concurrency conflict. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `current_source_observation_sequence` | Optional | integer | Latest accepted absolute source sequence for this item and Location. Format: `uint64`. minimum: `0`. |
| `current_status` | Optional | string | Current lifecycle status of the resource when the requested mutation is not allowed. |
| `current_version` | Optional | integer | On VERSION_CONFLICT, the resource's current version; send it as expected_version after rereading. Format: `uint64`. minimum: `0`. |
| `delivery_method_id` | Optional | string | Delivery method this failure concerns on ACTION_NOT_ALLOWED with reason method_unavailable, destination_not_served, or configuration_required. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `demand_key` | Optional | string | Key of the inventory demand this failure concerns. Sent on INVENTORY_INSUFFICIENT, and on INVENTORY_INSUFFICIENT with reason location_ineligible when one demand cannot use the Location. |
| `eligibility_reason` | Optional | string | On INVENTORY_INSUFFICIENT with reason location_ineligible, why the Location in location_id cannot supply the demand. Values: [6 declared values](#subscriptionpreviewerrordetails-eligibility_reason-values). |
| `expected_attempt_outstanding_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | On VERSION_CONFLICT when you resume a payment attempt, the outstanding balance the attempt started with. expected_outstanding_money must match it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `failure_category` | Optional | string | Delivery pricing failure category on ACTION_NOT_ALLOWED with reason method_unavailable, destination_not_served, or configuration_required, when the rate cannot be calculated, and the merchant callback failure category on EXTERNAL_SERVICE_ERROR with reason rate_callback_failed or tax_callback_failed. Values: [16 declared values](DeliveryCandidateOutcomeResourceInput.md#deliverycandidateoutcomeresourceinput-failure_category-values). |
| `failure_code` | Optional | string | Decline reason for a failed payment, from the same vocabulary as the payment's last_payment_error.code. Unrecognized provider reasons are payment_failed. Values: [27 declared values](ErrorDetailInput.md#errordetailinput-failure_code-values). |
| `inactive_message` | Optional | string | Merchant-provided buyer-facing text on ACTION_NOT_ALLOWED with reason unsupported_state, not_offered, or terminal_status. Present only when the merchant set an inactive message. |
| `inventory_count_line_id` | Optional | string | Inventory count line this conflict concerns. Sent on VERSION_CONFLICT for physical observations or stale source observation sequences. Example: `"invcln_01KEZF7C00BJK1S36219KK040Q"`. |
| `inventory_item_id` | Optional | string | Inventory item this failure concerns. Omitted for buyer credentials. Sent on INVENTORY_INSUFFICIENT and on VERSION_CONFLICT for physical observations or stale source observation sequences. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `inventory_reservation_line_id` | Optional | string | Inventory reservation line this failure concerns. Sent when a reservation line cannot satisfy an inventory operation. Example: `"invrln_01KEZF7C002JCDA729XDSNWGY5"`. |
| `latest_status_occurred_at` | Optional | string | Latest recorded package status time. On ACTION_NOT_ALLOWED with reason out_of_order, a reroute to in_transit must have occurred_at at or after this instant. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `limit` | Optional | integer | The limit that was reached. On LIMIT_REACHED with reason product_variants, the most non-archived variants a product can hold. On LIMIT_REACHED with reason enabled_risk_rules, the most active risk rules in the environment. On LIMIT_REACHED with reason partner_app_credentials, the most active credentials a partner app can hold. On LIMIT_REACHED with reason payment_intents_per_order, the most payment intents an order can have over its lifetime. On LIMIT_REACHED with reason payment_retries_per_period, the most payment retries a subscription allows in one billing period. On LIMIT_REACHED with reason test_clock_subscriptions, the most subscriptions that aren't canceled one test clock can hold. Format: `int64`. |
| `location_id` | Optional | string | Location this failure concerns on INVENTORY_INSUFFICIENT with reason location_ineligible, on VERSION_CONFLICT for physical observations or stale source observation sequences, or on SERVICE_UNAVAILABLE when pickup availability cannot be evaluated. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `location_outcome` | Optional | string | On INVENTORY_INSUFFICIENT with reason location_ineligible, the routing outcome for the Location in location_id: for the demand in demand_key when present, otherwise for every demand. Values: `"ineligible"`. |
| `maximum_frozen_at` | Optional | string | RFC 3339 timestamp in UTC of the latest time this advance can reach. Sent on ACTION_NOT_ALLOWED with reason advance_limit_exceeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `maximum_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Maximum money amount accepted by the failed validation, calculated from the current resource state. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `message` | Required | string | Human-readable explanation of this failure for your logs. The wording can change, so branch on code. |
| `minimum_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Smallest money amount the input at param may contain in the resource's current state. On an order total floor refusal without param, the minimum resulting order total, including any unpaid tip. On ACTION_NOT_ALLOWED with reason minimum_charge, the processor minimum for the prorated net charge. Retained errors keep their captured values. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `minimum_quantity` | Optional | integer | Minimum accepted whole-number quantity for the input at param, based on stored state; fractional quantities are not supported. Sent on LIMIT_EXCEEDED. Format: `int64`. |
| `missing_scopes` | Optional | Array of string | Unsatisfied entries from scope_requirement after write-implies-read evaluation. Example: `["accounts.api_keys.write"]`. |
| `mode` | Optional | string | Environment mode the referenced connected app install must authorize. Values: `"live"`, `"test"`. |
| `order_id` | Optional | string | Order that owns the line item in order_line_item_id. Sent on INVENTORY_INSUFFICIENT for an order inventory demand. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Optional | string | Order line item whose inventory demand cannot be satisfied. Sent on INVENTORY_INSUFFICIENT. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `param` | Optional | string | Path of the input associated with this failure. Present on every INVALID_REQUEST detail. Uses a body path such as line_items[0].name or metadata.order_ref, a path or query parameter name, a published header name, or body for a whole-body failure. |
| `payment_option` | Optional | string | Flint payment option associated with this error, when the error is about a specific requested or selected payment option. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payout_terms_expires_at` | Optional | string | RFC 3339 timestamp in UTC when new account payout terms end on ACTION_NOT_ALLOWED with reason payout_frequency or payout_delay. Sent at second precision. Choose an allowed schedule or delay, or make the change after this time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `previous_key_expires_at` | Optional | string | RFC 3339 timestamp when the previous signing key expires on ACTION_NOT_ALLOWED with reason in_progress. Retry after this time, or revoke the current key before rotating if it leaked. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `quota` | Optional | [QuotaDetails](../models/QuotaDetails.md#quotadetails) | Structured resource quota state when the error is caused by quota exhaustion. Storage usage and limits for a resource, returned in the error details when an image quota is exhausted. `quota`: [field definitions](../models/ErrorDetail.md#errordetailquota). |
| `reason` | Optional | string | Stable Flint reason associated with this error. When code is ACTION_NOT_ALLOWED, one of: advance_limit_exceeded, already_applied, archived, authorization_expired, bank_return_not_contestable, cancellation_scheduled, choice_group_unavailable, configuration_required, confirmation_token_unusable, credit_exceeds_charge, credit_note_tax_reconciliation_required, customer_account_mode_conflict, delivery_hold, delivery_requirement_changes, dependency_revoked, derived_from_packages, destination_not_served, disclosure_changed, dispute_payment_unavailable, end_after_reached, environment_not_granted, existing_order_checkout, external_billing_schedule, field_locked, first_period_unpaid, frozen_at_not_later, image_ingestion_restart_required, in_progress, inventory_wait, invoice_finalized, jwt_signing_not_enabled, managed_by_owner, managed_externally, merchant_hosted_customer_accounts, merchant_managed_email, method_unavailable, minimum_charge, mixed_tax_treatment, not_itemized, not_offered, not_paused, offer_subscription, on_hold, order_owned, out_of_order, owner_identity_conflict, paid_period_required, payload_expired, payment_collected, payment_disputed, payment_method_not_reusable, payment_required, payment_split_consent_required, payout_defaults_managed_externally, payout_delay, payout_frequency, period_end_unavailable, plan_change_scheduled, platform_capability_inactive, platform_fee_consent_required, platform_onboarding_required, platform_pending_review, platform_rejected, prepaid_deliveries_remaining, previous_refund_failed, provider_action_unsupported, quantity_not_carried, reader_offline, reader_type_not_supported, reader_unavailable, reconciliation_required, refund_created, refund_unavailable, refund_window_expired, restricted, return_checkout, return_owned, return_tax_mismatch, sandbox_reset_failed, secret_not_issued, seller_not_ready, simulated_reader_required, status_not_reached, stock_at_risk, store_credit_unavailable, subscription_owned, subscription_terms_locked, terminal_status, test_event, trial_in_progress, unsupported_state, variant_not_targeted, verification_required. When code is ALREADY_EXISTS, one of: dashboard_sign_in_required, device_reader_already_exists, hardware_fingerprint_already_exists. When code is CONCURRENT_MODIFICATION, one of: credit_note_refund_retry_exhausted. When code is DELIVERY_REQUOTE_REQUIRED, one of: calculation_expired, caller_rates_required, destination_changed, input_required, option_expired, quote_expired, quote_revoked, quote_stale, selection_changed, selection_expired, window_expired. When code is EXTERNAL_SERVICE_ERROR, one of: issuer_unavailable, outcome_unknown, rate_callback_failed, rate_unavailable, tax_callback_failed. When code is FORBIDDEN, one of: checkout_launch_token_restricted, checkout_recovery_attempt_mismatch, checkout_recovery_restricted, checkout_session_order_mismatch, checkout_session_payment_required, context_mismatch, demo_session_route_not_allowed, direct_owner_required, environment_grant_required, environment_mismatch, expansion_not_permitted, full_access_required, linked_key_not_allowed, live_mode_required, merchant_access_required, merchant_credential_required, merchant_role_insufficient, not_checkout_session, not_permitted, organization_membership_required, organization_role_insufficient, owner_workflow_required, request_blocked, role_not_assignable, sandbox_not_accessible, sandbox_selection_forbidden, self_role_edit_forbidden, test_mode_required. When code is GIFT_CARD_CHALLENGE_REQUIRED, one of: page_origin_required, proof_rejected, proof_required. When code is IDEMPOTENCY_KEY_REUSED, one of: transport_mismatch. When code is INSUFFICIENT_SCOPE, one of: install_scope_not_granted, scope_not_granted, scope_not_held. When code is INTERNAL_ERROR, one of: repair_required. When code is INVALID_CREDENTIAL, one of: expired, malformed, mode_mismatch, revoked, session_ended, unknown, wrong_credential_type. When code is INVENTORY_INSUFFICIENT, one of: location_ineligible, location_limit. When code is LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily, insufficient_available_value, merchant_adjustments_daily, merchant_imports_daily, order_edit_balance_due. When code is LIMIT_REACHED, one of: active_readers, checkout_tax_calculations, consecutive_skips, customer_tax_exemptions, daily_demo_sessions, daily_gift_card_purchases, delivery_selection_replacements, enabled_risk_rules, external_paid_orders, image_storage, merchant_signups, monthly_tax_calculations, owned_merchants, partner_app_credentials, partner_app_install_links, payment_intents_per_order, payment_link_completions, payment_retries_per_period, pending_reports, price_list_prices, product_variants, receipt_recipients, saved_card_codes, test_clock_subscriptions, verification_attempts, verification_codes, webhook_event_streams, webhook_listener_signatures_daily, workload_identities. When code is MERCHANT_NOT_READY, one of: account_sessions_unavailable, account_setup_repair_required, account_setup_unavailable, billing_suspended, capability_blocked, capability_not_requested, capability_pending, capability_unavailable, default_environment_required, disabled_by_merchant_settings, disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled, onboarding_required, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, payment_splits_unavailable, platform_funding_unavailable, platform_review, pricing_not_authorized, processing_not_enabled, processing_restricted, processor_not_configured, requirements_due, tax_category_required. When code is OPERATION_IN_PROGRESS, one of: delivery_selection_materializing, reader_busy, sandbox_resetting. When code is PAYMENT_OPTION_UNAVAILABLE, one of: action_window_too_short, amount_out_of_range, capability_blocked, capability_pending, disabled_by_merchant_settings, disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable, requirements_due, risk_action_unsupported, transaction_purpose_unresolved. When code is PAYMENT_PROCESSING_UNAVAILABLE, one of: platform_funding_unavailable. When code is PROMOTION_DECLINED, one of: already_applied, automatic_disabled, buy_item_missing, code_invalid, code_required, codes_disabled, currency_mismatch, customer_limit_reached, customer_mismatch, customer_required, exhausted, expired, inactive, max_promotions_reached, minimum_not_met, no_discountable_balance, not_combinable, not_eligible, not_yet_started, recurrence_completed, superseded, superseded_by_better_offer, superseded_by_higher_priority, unknown_type. When code is RESOURCE_IN_USE, one of: selected_by_active_variants. When code is RESOURCE_NOT_FOUND, one of: email_missing, resource_in_different_environment. When code is SERVICE_UNAVAILABLE, one of: outcome_unknown, processor_unavailable, repair_required. Additional reasons may be added. Values: [256 declared values](ErrorDetailInput.md#errordetailinput-reason-values). |
| `remediation` | Optional | [ErrorRemediation](../models/ErrorRemediation.md#errorremediation) | Recovery guidance for this failure: whether retrying can succeed and what to do next. Omitted on the details of INVALID_REQUEST, where the error's own remediation applies to every input. Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested actions. |
| `requested_quantity` | Optional | integer | Whole-number quantity submitted by the caller when a quantity-bearing operation conflicts with current capacity; fractional quantities are not supported. Format: `int64`. |
| `requoted_shipping_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Shipping total computed for the new destination, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `requoted_tax_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax total computed for the new destination, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resets_at` | Optional | string | RFC 3339 instant when time alone frees capacity for LIMIT_REACHED or LIMIT_EXCEEDED. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `resource_id` | Optional | string | ID of the referenced public resource, when available. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Optional | string | Public resource named by RESOURCE_NOT_FOUND or a generic conflict: a ResourceType value, or resource when the resource has no public type. Example: `"order"`. |
| `restrictions` | Optional | Array of [GiftCardRestriction](../models/GiftCardRestriction.md#giftcardrestriction) | Restrictions that prevented this gift card action, in the same shape as GiftCard.restrictions. Sent on ACTION_NOT_ALLOWED with reason restricted. `restrictions[]`: [field definitions](../models/GiftCardResponse.md#giftcardresponsedatarestrictions). |
| `sandbox_id` | Optional | string | Sandbox the referenced connected app install must authorize for a test-mode link. pattern: `^(test\|menv)_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scope` | Optional | string | Canonical public scope rejected by validation, when the detail concerns one scope. |
| `scope_requirement` | Optional | [ScopeRequirement](../models/ScopeRequirement.md#scoperequirement) | Complete route or delegation scope requirement for an INSUFFICIENT_SCOPE error. The scopes an authorization decision required and whether `all` or `any` of them were needed, returned in error details. `scope_requirement`: [field definitions](../models/ErrorDetail.md#errordetailscope_requirement). |
| `selectable_resources` | Optional | Array of [SelectableErrorResource](../models/SelectableErrorResource.md#selectableerrorresource) | Resources offered for the field named by param under INVALID_REQUEST. Submit one of their resource_id values. `selectable_resources[]`: [field definitions](../models/ErrorDetail.md#errordetailselectable_resources). |
| `shipping_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Committed shipping total on the paid order when its destination cannot change without repricing. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `shortage_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `submitted_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount from your request that failed the check. On ACTION_NOT_ALLOWED with reconciliation_required, the unpaid tip the payment would have to carry. On VERSION_CONFLICT or LIMIT_EXCEEDED, the expected_outstanding_money you sent, or the total of the selected payment legs when they do not fit the outstanding balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `submitted_source_observation_sequence` | Optional | integer | Absolute source sequence submitted for this inventory count line. Format: `uint64`. minimum: `0`. |
| `suggestions` | Optional | Array of string | Concrete corrective actions for this validation error. |
| `supported_actions` | Optional | Array of string | Actions accepted for the current resource state. |
| `supported_api_versions` | Optional | Array of string | On INVALID_REQUEST with param Flint-Version, and on API_VERSION_RETIRED, the API versions you can use now. |
| `tax_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Committed tax total on a paid order when its destination cannot change without repricing. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unavailable_reason` | Optional | string | Delivery eligibility reason on ACTION_NOT_ALLOWED with reason method_unavailable, destination_not_served, or configuration_required, when the selected method is unavailable. Values: [8 declared values](#subscriptionpreviewerrordetails-unavailable_reason-values). |
| `verification_max_age_seconds` | Optional | integer | How many seconds an identity verification lasts for this request, on IDENTITY_VERIFICATION_REQUIRED. Verify again when verified_at is older than this. Format: `int64`. |
| `verified_at` | Optional | string | When the calling user session last verified the user's identity, on IDENTITY_VERIFICATION_REQUIRED. Dashboard sessions report it to the minute. Omitted when the session has no recorded verification. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

#### SubscriptionPreviewError.details[] eligibility_reason values

- `"location_not_active"`
- `"inventory_allocation_inactive"`
- `"forced_location_mismatch"`
- `"fulfillment_incompatible"`
- `"split_prohibited"`
- `"insufficient_quantity"`

#### SubscriptionPreviewError.details[] unavailable_reason values

- `"dependency_revoked"`
- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"method_type_not_allowed"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### SubscriptionPreviewError.details[].blocking_resources[]

Field definitions: [ErrorDetail.blocking_resources[]](../models/ErrorDetail.md#errordetailblocking_resources).

### SubscriptionPreviewError.details[].code

Declared alternatives: [ErrorDetail.code](../models/ErrorDetail.md#errordetailcode).

### SubscriptionPreviewError.details[].current_resource

The existing resource reference, custom domain, or delivery revocation on ALREADY_EXISTS. On VERSION_CONFLICT when replace_checkout_session_id is stale, the current checkout session reference. On ACTION_NOT_ALLOWED with reason in_progress when a checkout surface cannot change, the existing checkout session reference. Also the current fulfillment, shipment, or package when a conditional write conflicts with resource state.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Conditional | string | Public Flint ID of the referenced resource. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Conditional | string | Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type. Example: `"order"`. |
| `status` | Conditional | string |  |
| `active_hold` | Conditional | [FulfillmentHold](../models/FulfillmentHold.md#fulfillmenthold) | Current hold details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and when it became active. `active_hold`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataactive_hold). |
| `charges` | Conditional | Array of [FulfillmentChargeLink](../models/FulfillmentChargeLink.md#fulfillmentchargelink) | Order charges associated with this fulfillment. `charges[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatacharges). |
| `completed_at` | Conditional | string | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Conditional | string | Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Conditional | string | Customer receiving this fulfillment, when one is set. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `delivery_choice_group_id` | Conditional | string or null | Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `delivery_execution_leg_id` | Conditional | string or null | Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Example: `"dleg_01KEZF7C00VB59BKTRC8W4KR4M"`. |
| `delivery_method_id` | Conditional | string or null | Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_selection_id` | Conditional | string or null | Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `device_id` | Conditional | string | Device associated with the fulfillment, when one is recorded. Example: `"dev_01KEZF7C0051ZP8MZSGHP989F6"`. |
| `digital_details` | Conditional | [DigitalFulfillmentDetails](../models/DigitalFulfillmentDetails.md#digitalfulfillmentdetails) | Delivery URL and completion time for a digital fulfillment. Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`. `digital_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatadigital_details). |
| `dispatched_at` | Conditional | string | First time this fulfillment reached dispatched. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Conditional | string | maxLength: `255`. Example: `"warehouse-1842"`. |
| `fulfillment_id` | Conditional | string | Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `line_items` | Conditional | Array of [FulfillmentLineItem](../models/FulfillmentLineItem.md#fulfillmentlineitem) | Order lines and quantities allocated to this fulfillment. `line_items[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_items). |
| `local_delivery_details` | Conditional | [DeliveryFulfillmentDetails](../models/DeliveryFulfillmentDetails.md#deliveryfulfillmentdetails) | Courier, delivery window, and handoff details for a local delivery fulfillment. Details of a local delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are omitted for credentials that don't act for the verified customer. `local_delivery_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatalocal_delivery_details). |
| `location_id` | Conditional | string | Merchant location responsible for this fulfillment. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `metadata` | Conditional | Map of string | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatametadata), [field definitions](../models/ShipmentResponse.md#shipmentresponsedatametadata), [field definitions](../models/PackageResponse.md#packageresponsedatametadata). |
| `order` | Conditional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/FulfillmentResponse.md#fulfillmentresponsedataorder). |
| `order_id` | Conditional | string | Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_number` | Conditional | string | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. |
| `outcome` | Conditional | [FulfillmentOutcome](../models/FulfillmentOutcome.md#fulfillmentoutcome) | Terminal outcome details. Present exactly when status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred. `outcome`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataoutcome). |
| `packages` | Conditional | Array of [ExpandedPackageSummary](../models/ExpandedPackageSummary.md#expandedpackagesummary) | `packages[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatapackages). |
| `packed_at` | Conditional | string | First time this fulfillment reached packed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `picked_at` | Conditional | string | First time this fulfillment reached picked. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `pickup_details` | Conditional | [PickupFulfillmentDetails](../models/PickupFulfillmentDetails.md#pickupfulfillmentdetails) | Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and instructions name the store the buyer chose and the delivery method's pickup instructions. The note the buyer left for the store is in recipient.instructions. `pickup_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatapickup_details). |
| `recipient` | Conditional | [FulfillmentRecipient](../models/FulfillmentRecipient.md#fulfillmentrecipient) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name, email, phone, address, and handling instructions. |
| `scheduled_start_at` | Conditional | string or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_details` | Conditional | [ServiceFulfillmentDetails](../models/ServiceFulfillmentDetails.md#servicefulfillmentdetails) | Schedule and completion details for a service fulfillment. Details of a service fulfillment: the scheduled start and end, timezone, completion time, and notes. `service_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataservice_details). |
| `shipment_details` | Conditional | [ShipmentFulfillmentDetails](../models/ShipmentFulfillmentDetails.md#shipmentfulfillmentdetails) | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed to the carrier. `shipment_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatashipment_details). |
| `shipments` | Conditional | Array of [ExpandedShipmentSummary](../models/ExpandedShipmentSummary.md#expandedshipmentsummary) | Shipments associated with this fulfillment. `shipments[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatashipments). |
| `supported_actions` | Conditional | Array of string |  |
| `terminal_at` | Conditional | string | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `type` | Conditional | string |  |
| `updated_at` | Conditional | string | Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Conditional | integer | Format: `uint64`. minimum: `1`. |
| `delivered_at` | Conditional | string | Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `direction` | Conditional | string | Whether the shipment sends items to the buyer or returns items to the merchant. Values: `"outbound"`, `"return"`. |
| `external_system` | Conditional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. |
| `handed_off_at` | Conditional | string | Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `package_count` | Conditional | integer | Total number of packages attached to the shipment, including voided packages. Format: `int32`. minimum: `0`. |
| `return_id` | Conditional | string | Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_line_items` | Conditional | Array of [ReturnShipmentLineItemAllocation](../models/ReturnShipmentLineItemAllocation.md#returnshipmentlineitemallocation) | `return_line_items[]`: [field definitions](../models/PackageResponse.md#packageresponsedatareturn_line_items). |
| `shipment_id` | Conditional | string | Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. |
| `shipped_at` | Conditional | string | Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `carrier` | Conditional | string | Carrier transporting the package. |
| `dimensions` | Conditional | [Dimensions](../models/Dimensions.md#dimensions) | Physical length, width, and height of the package. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `expected_delivery_at` | Conditional | string or null | When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `label_url` | Conditional | string | HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `package_id` | Conditional | string | Stable identifier of the package. Example: `"pkg_01KEZF7C00ZZA16BJCEJBWKJ5R"`. |
| `service_code` | Conditional | string | Carrier service used for the package. |
| `status_reason` | Conditional | Varies by condition |  |
| `tracking_number` | Conditional | string | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `tracking_url` | Conditional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `weight` | Conditional | [Weight](../models/Weight.md#weight) | Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `active_payment_attempt_count` | Conditional | integer or null | Payment attempts in progress on this checkout hostname. `null` when `type` is `customer_account`. Format: `int64`. |
| `custom_domain_id` | Conditional | string | Flint custom domain ID. Example: `"cdom_01KEZF7C00483JTTKHZVFQHKS8"`. |
| `dns_records` | Conditional | Array of [CustomDomainDNSRecord](../models/CustomDomainDNSRecord.md#customdomaindnsrecord) | DNS records to add for setup or verification. For an archived hostname, records that can be deleted. |
| `hostname` | Conditional | string | Configured hostname, normalized to lowercase without a trailing dot. |
| `last_checked_at` | Conditional | string or null | When the domain was last checked, in RFC3339 format; `null` when no check time is available. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payment_method_domain_id` | Conditional | string or null | Payment method domain associated with this hostname. `null` when none is reported. Example: `"pmdom_01KEZF7C001WQCSRGH9GWR6628"`. |
| `redirect_expires_at` | Conditional | string or null | End of the redirect window for an archived hostname. After archive, dns_records lists records you can delete. `null` when the hostname isn't archived. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_revocation_id` | Conditional | string | Unique ID of this permanent delivery revocation. Example: `"drev_01KEZF7C007Q141XJ28YAAC87B"`. |
| `estimated_impact` | Conditional | [DeliveryRevocationImpact](../models/DeliveryRevocationImpact.md#deliveryrevocationimpact) | Counts of active quotes and provisional selections that depended on the target when the fence was created. Later reads keep these recorded counts. Counts of active delivery quotes and current delivery selections affected by a delivery revocation. |
| `merchant_note` | Conditional | string | Optional incident context recorded when this revocation was created. |
| `reason` | Conditional | string | Why the dependency was permanently fenced. Values: `"unsafe_configuration"`, `"location_unavailable"`, `"credential_compromise"`, `"legal_requirement"`, `"other"`. |
| `target` | Conditional | object and ([DeliveryRevocationTargetLocationGeography](../models/DeliveryRevocationTargetLocationGeography.md#deliveryrevocationtargetlocationgeography) or [DeliveryRevocationTargetDeliveryRateCallbackSigningKey](../models/DeliveryRevocationTargetDeliveryRateCallbackSigningKey.md#deliveryrevocationtargetdeliveryratecallbacksigningkey) or [DeliveryRevocationTargetDeliveryRateCallbackRevision](../models/DeliveryRevocationTargetDeliveryRateCallbackRevision.md#deliveryrevocationtargetdeliveryratecallbackrevision) or [DeliveryRevocationTargetDeliveryMethodRevision](../models/DeliveryRevocationTargetDeliveryMethodRevision.md#deliveryrevocationtargetdeliverymethodrevision)) | The parent and exact revision, HMAC signing key, or recorded geography version permanently fenced by this revocation. The parent and exact child identity permanently fenced by this revocation. `target`: [declared alternatives](../models/DeliveryRevocationResponse.md#deliveryrevocationresponsedatatarget). |

### SubscriptionPreviewError.details[].current_resource variant 1

oneOf Resource reference.

- Condition: not (at least one(present(`fulfillment_id`); present(`shipment_id`); present(`package_id`); present(`custom_domain_id`); present(`delivery_revocation_id`))).
- Required: `resource_id`, `resource_type`.
- Optional: `status`.
- Undeclared: `active_hold`, `charges`, `completed_at`, `created_at`, `customer_id`, `delivery_choice_group_id`, `delivery_execution_leg_id`, `delivery_method_id`, `delivery_selection_id`, `device_id`, `digital_details`, `dispatched_at`, `external_reference_id`, `fulfillment_id`, `line_items`, `local_delivery_details`, `location_id`, `metadata`, `order`, `order_id`, `order_number`, `outcome`, `packages`, `packed_at`, `picked_at`, `pickup_details`, `recipient`, `scheduled_start_at`, `service_details`, `shipment_details`, `shipments`, `supported_actions`, `terminal_at`, `type`, `updated_at`, `version`, `delivered_at`, `direction`, `external_system`, `handed_off_at`, `package_count`, `return_id`, `return_line_items`, `shipment_id`, `shipped_at`, `carrier`, `dimensions`, `expected_delivery_at`, `label_url`, `package_id`, `service_code`, `status_reason`, `tracking_number`, `tracking_url`, `weight`, `active_payment_attempt_count`, `custom_domain_id`, `dns_records`, `hostname`, `last_checked_at`, `payment_method_domain_id`, `redirect_expires_at`, `delivery_revocation_id`, `estimated_impact`, `merchant_note`, `reason`, `target`.
- Constraints for `status`: Current public status of the referenced resource when available.

### SubscriptionPreviewError.details[].current_resource variant 2

oneOf Fulfillment.

- Condition: not (at least one(present(`resource_type`); present(`resource_id`); present(`shipment_id`); present(`package_id`); present(`custom_domain_id`); present(`delivery_revocation_id`))).
- Required: `created_at`, `delivery_choice_group_id`, `delivery_execution_leg_id`, `delivery_method_id`, `delivery_selection_id`, `fulfillment_id`, `line_items`, `order_id`, `scheduled_start_at`, `status`, `supported_actions`, `type`, `updated_at`, `version`.
- Optional: `active_hold`, `charges`, `completed_at`, `customer_id`, `device_id`, `digital_details`, `dispatched_at`, `external_reference_id`, `local_delivery_details`, `location_id`, `metadata`, `order`, `order_number`, `outcome`, `packages`, `packed_at`, `picked_at`, `pickup_details`, `recipient`, `service_details`, `shipment_details`, `shipments`, `terminal_at`.
- Undeclared: `resource_id`, `resource_type`, `delivered_at`, `direction`, `external_system`, `handed_off_at`, `package_count`, `return_id`, `return_line_items`, `shipment_id`, `shipped_at`, `carrier`, `dimensions`, `expected_delivery_at`, `label_url`, `package_id`, `service_code`, `status_reason`, `tracking_number`, `tracking_url`, `weight`, `active_payment_attempt_count`, `custom_domain_id`, `dns_records`, `hostname`, `last_checked_at`, `payment_method_domain_id`, `redirect_expires_at`, `delivery_revocation_id`, `estimated_impact`, `merchant_note`, `reason`, `target`.
- Constraints for `created_at`: When the fulfillment was created, in RFC3339 format.
- Constraints for `external_reference_id`: Caller-owned identifier for this resource in an external system.
- Constraints for `fulfillment_id`: Stable identifier of the fulfillment.
- Constraints for `metadata`: Caller-owned key-value metadata associated with the fulfillment.
- Constraints for `order_id`: Order whose items this fulfillment delivers.
- Constraints for `packages`: Packages associated with this fulfillment.
- Constraints for `status`: Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: `"pending"`, `"accepted"`, `"on_hold"`, `"in_progress"`, `"ready"`, `"completed"`, `"canceled"`, `"failed"`, `"scheduled"`, `"preparing"`, `"picked"`, `"packed"`, `"dispatched"`, `"no_show"`.
- Constraints for `supported_actions`: Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Items values: `"accept"`, `"cancel"`, `"complete"`, `"dispatch"`, `"fail"`, `"hold"`, `"mark_no_show"`, `"mark_packed"`, `"mark_picked"`, `"mark_preparing"`, `"mark_ready"`, `"release_hold"`, `"schedule"`, `"start"`.
- Constraints for `type`: How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`.
- Constraints for `updated_at`: When the fulfillment was last updated, in RFC3339 format.
- Constraints for `version`: Monotonic fulfillment version for expected_version checks.

### SubscriptionPreviewError.details[].current_resource variant 3

oneOf Shipment.

- Condition: not (at least one(present(`resource_type`); present(`resource_id`); present(`package_id`); present(`custom_domain_id`); present(`delivery_revocation_id`))).
- Required: `created_at`, `direction`, `fulfillment_id`, `order_id`, `package_count`, `shipment_id`, `status`, `supported_actions`, `updated_at`, `version`.
- Optional: `delivered_at`, `external_reference_id`, `external_system`, `handed_off_at`, `metadata`, `order`, `packages`, `return_id`, `return_line_items`, `shipped_at`.
- Undeclared: `resource_id`, `resource_type`, `active_hold`, `charges`, `completed_at`, `customer_id`, `delivery_choice_group_id`, `delivery_execution_leg_id`, `delivery_method_id`, `delivery_selection_id`, `device_id`, `digital_details`, `dispatched_at`, `line_items`, `local_delivery_details`, `location_id`, `order_number`, `outcome`, `packed_at`, `picked_at`, `pickup_details`, `recipient`, `scheduled_start_at`, `service_details`, `shipment_details`, `shipments`, `terminal_at`, `type`, `carrier`, `dimensions`, `expected_delivery_at`, `label_url`, `package_id`, `service_code`, `status_reason`, `tracking_number`, `tracking_url`, `weight`, `active_payment_attempt_count`, `custom_domain_id`, `dns_records`, `hostname`, `last_checked_at`, `payment_method_domain_id`, `redirect_expires_at`, `delivery_revocation_id`, `estimated_impact`, `merchant_note`, `reason`, `target`.
- Constraints for `created_at`: Creation timestamp.
- Constraints for `delivered_at`: When the shipment was delivered, in RFC3339 format.
- Constraints for `external_reference_id`: Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries.
- Constraints for `fulfillment_id`: Fulfillment associated with this shipment.
- Constraints for `metadata`: Caller-owned key-value metadata associated with the shipment.
- Constraints for `order_id`: Order whose items are transported by the shipment.
- Constraints for `packages`: Summaries of the shipment's packages in creation order, returned when the packages relationship is expanded or when the shipment is created with packages.
- Constraints for `return_id`: Return associated with this shipment, when its direction is return.
- Constraints for `return_line_items`: Return lines and quantities allocated to this return shipment.
- Constraints for `shipment_id`: Stable identifier of the shipment.
- Constraints for `shipped_at`: When the shipment was shipped, in RFC3339 format.
- Constraints for `status`: Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`.
- Constraints for `supported_actions`: Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. Items values: `"void"`.
- Constraints for `updated_at`: Last update timestamp.
- Constraints for `version`: Monotonic shipment version for expected_version checks.

### SubscriptionPreviewError.details[].current_resource variant 4

oneOf Package.

- Condition: not (at least one(present(`resource_type`); present(`resource_id`); present(`custom_domain_id`); present(`delivery_revocation_id`))).
- Required: `created_at`, `fulfillment_id`, `order_id`, `package_id`, `shipment_id`, `status`, `supported_actions`, `updated_at`, `version`.
- Optional: `carrier`, `delivered_at`, `dimensions`, `expected_delivery_at`, `external_reference_id`, `external_system`, `label_url`, `metadata`, `order`, `return_id`, `return_line_items`, `service_code`, `shipped_at`, `status_reason`, `tracking_number`, `tracking_url`, `weight`.
- Undeclared: `resource_id`, `resource_type`, `active_hold`, `charges`, `completed_at`, `customer_id`, `delivery_choice_group_id`, `delivery_execution_leg_id`, `delivery_method_id`, `delivery_selection_id`, `device_id`, `digital_details`, `dispatched_at`, `line_items`, `local_delivery_details`, `location_id`, `order_number`, `outcome`, `packages`, `packed_at`, `picked_at`, `pickup_details`, `recipient`, `scheduled_start_at`, `service_details`, `shipment_details`, `shipments`, `terminal_at`, `type`, `direction`, `handed_off_at`, `package_count`, `active_payment_attempt_count`, `custom_domain_id`, `dns_records`, `hostname`, `last_checked_at`, `payment_method_domain_id`, `redirect_expires_at`, `delivery_revocation_id`, `estimated_impact`, `merchant_note`, `reason`, `target`.
- Constraints for `created_at`: Creation timestamp.
- Constraints for `delivered_at`: Package delivery timestamp.
- Constraints for `external_reference_id`: Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries.
- Constraints for `fulfillment_id`: Fulfillment whose items are in the package.
- Constraints for `metadata`: Caller-owned key-value metadata associated with the package.
- Constraints for `order_id`: Order whose items are in the package.
- Constraints for `return_id`: Return this package belongs to. Present only on packages of return shipments.
- Constraints for `return_line_items`: Return line quantities allocated to this parcel. Present only on packages of return shipments.
- Constraints for `shipment_id`: Shipment carrying this package.
- Constraints for `shipped_at`: Package handoff timestamp.
- Constraints for `status`: Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`.
- Constraints for `status_reason`: string. Additional explanation of the package's current status.
- Constraints for `supported_actions`: Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Items values: `"mark_delivered"`, `"mark_delivery_attempted"`, `"mark_exception"`, `"mark_in_transit"`, `"mark_out_for_delivery"`, `"mark_packed"`, `"mark_returned"`, `"mark_shipped"`, `"void"`.
- Constraints for `updated_at`: Last update timestamp.
- Constraints for `version`: Monotonic package version for expected_version checks.

### SubscriptionPreviewError.details[].current_resource variant 5

oneOf Custom domain.

- Condition: not (at least one(present(`resource_type`); present(`resource_id`); present(`fulfillment_id`); present(`shipment_id`); present(`package_id`); present(`delivery_revocation_id`))).
- Required: `active_payment_attempt_count`, `created_at`, `custom_domain_id`, `dns_records`, `hostname`, `last_checked_at`, `payment_method_domain_id`, `redirect_expires_at`, `status`, `status_reason`, `type`, `updated_at`.
- Undeclared: `resource_id`, `resource_type`, `active_hold`, `charges`, `completed_at`, `customer_id`, `delivery_choice_group_id`, `delivery_execution_leg_id`, `delivery_method_id`, `delivery_selection_id`, `device_id`, `digital_details`, `dispatched_at`, `external_reference_id`, `fulfillment_id`, `line_items`, `local_delivery_details`, `location_id`, `metadata`, `order`, `order_id`, `order_number`, `outcome`, `packages`, `packed_at`, `picked_at`, `pickup_details`, `recipient`, `scheduled_start_at`, `service_details`, `shipment_details`, `shipments`, `supported_actions`, `terminal_at`, `version`, `delivered_at`, `direction`, `external_system`, `handed_off_at`, `package_count`, `return_id`, `return_line_items`, `shipment_id`, `shipped_at`, `carrier`, `dimensions`, `expected_delivery_at`, `label_url`, `package_id`, `service_code`, `tracking_number`, `tracking_url`, `weight`, `delivery_revocation_id`, `estimated_impact`, `merchant_note`, `reason`, `target`.
- Constraints for `created_at`: When this domain resource was created, in RFC3339 format.
- Constraints for `status`: Current setup and availability state of the hostname. Archived domains retain their resource identity. Values: `"provisioning"`, `"active"`, `"attention_required"`, `"inactive"`, `"archived"`.
- Constraints for `status_reason`: string or null. Machine-readable detail for the current status. `null` when no reason is reported, including for active and archived domains. Values: `"dns_record_missing"`, `"dns_record_mismatch"`, `"ownership_record_missing"`, `"ownership_record_mismatch"`, `"caa_record_blocks_certificate"`, `"proxied_by_another_provider"`, `"certificate_pending"`, `"custom_domains_inactive"`, `"other"`, `null`.
- Constraints for `type`: Whether the hostname serves checkout pages or the customer account Flint hosts. Values: `"checkout"`, `"customer_account"`.
- Constraints for `updated_at`: When this domain resource was last updated, in RFC3339 format.

### SubscriptionPreviewError.details[].current_resource variant 6

oneOf Delivery revocation.

- Condition: not (at least one(present(`resource_type`); present(`resource_id`); present(`fulfillment_id`); present(`shipment_id`); present(`package_id`); present(`custom_domain_id`))).
- Required: `created_at`, `delivery_revocation_id`, `estimated_impact`, `reason`, `target`.
- Optional: `merchant_note`.
- Undeclared: `resource_id`, `resource_type`, `status`, `active_hold`, `charges`, `completed_at`, `customer_id`, `delivery_choice_group_id`, `delivery_execution_leg_id`, `delivery_method_id`, `delivery_selection_id`, `device_id`, `digital_details`, `dispatched_at`, `external_reference_id`, `fulfillment_id`, `line_items`, `local_delivery_details`, `location_id`, `metadata`, `order`, `order_id`, `order_number`, `outcome`, `packages`, `packed_at`, `picked_at`, `pickup_details`, `recipient`, `scheduled_start_at`, `service_details`, `shipment_details`, `shipments`, `supported_actions`, `terminal_at`, `type`, `updated_at`, `version`, `delivered_at`, `direction`, `external_system`, `handed_off_at`, `package_count`, `return_id`, `return_line_items`, `shipment_id`, `shipped_at`, `carrier`, `dimensions`, `expected_delivery_at`, `label_url`, `package_id`, `service_code`, `status_reason`, `tracking_number`, `tracking_url`, `weight`, `active_payment_attempt_count`, `custom_domain_id`, `dns_records`, `hostname`, `last_checked_at`, `payment_method_domain_id`, `redirect_expires_at`.
- Constraints for `created_at`: When Flint created this permanent fence, as an RFC 3339 timestamp in UTC.

### SubscriptionPreviewError.details[].current_resource variant 2.active_hold

Field definitions: [FulfillmentResponse.data.active_hold](../models/FulfillmentResponse.md#fulfillmentresponsedataactive_hold).

### SubscriptionPreviewError.details[].current_resource variant 2.charges[]

Field definitions: [FulfillmentResponse.data.charges[]](../models/FulfillmentResponse.md#fulfillmentresponsedatacharges).

### SubscriptionPreviewError.details[].current_resource variant 2.digital_details

Field definitions: [FulfillmentResponse.data.digital_details](../models/FulfillmentResponse.md#fulfillmentresponsedatadigital_details).

### SubscriptionPreviewError.details[].current_resource variant 2.line_items[]

Field definitions: [FulfillmentResponse.data.line_items[]](../models/FulfillmentResponse.md#fulfillmentresponsedataline_items).

### SubscriptionPreviewError.details[].current_resource variant 2.local_delivery_details

Field definitions: [FulfillmentResponse.data.local_delivery_details](../models/FulfillmentResponse.md#fulfillmentresponsedatalocal_delivery_details).

### SubscriptionPreviewError.details[].current_resource variant 2.metadata

Field definitions: [FulfillmentResponse.data.metadata](../models/FulfillmentResponse.md#fulfillmentresponsedatametadata).

### SubscriptionPreviewError.details[].current_resource variant 2.order

Declared alternatives: [FulfillmentResponse.data.order](../models/FulfillmentResponse.md#fulfillmentresponsedataorder).

### SubscriptionPreviewError.details[].current_resource variant 2.outcome

Field definitions: [FulfillmentResponse.data.outcome](../models/FulfillmentResponse.md#fulfillmentresponsedataoutcome).

### SubscriptionPreviewError.details[].current_resource variant 2.packages[]

Field definitions: [FulfillmentResponse.data.packages[]](../models/FulfillmentResponse.md#fulfillmentresponsedatapackages).

### SubscriptionPreviewError.details[].current_resource variant 2.pickup_details

Field definitions: [FulfillmentResponse.data.pickup_details](../models/FulfillmentResponse.md#fulfillmentresponsedatapickup_details).

### SubscriptionPreviewError.details[].current_resource variant 2.service_details

Field definitions: [FulfillmentResponse.data.service_details](../models/FulfillmentResponse.md#fulfillmentresponsedataservice_details).

### SubscriptionPreviewError.details[].current_resource variant 2.shipment_details

Field definitions: [FulfillmentResponse.data.shipment_details](../models/FulfillmentResponse.md#fulfillmentresponsedatashipment_details).

### SubscriptionPreviewError.details[].current_resource variant 2.shipments[]

Field definitions: [FulfillmentResponse.data.shipments[]](../models/FulfillmentResponse.md#fulfillmentresponsedatashipments).

### SubscriptionPreviewError.details[].current_resource variant 3.metadata

Field definitions: [ShipmentResponse.data.metadata](../models/ShipmentResponse.md#shipmentresponsedatametadata).

### SubscriptionPreviewError.details[].current_resource variant 3.order

Declared alternatives: [FulfillmentResponse.data.order](../models/FulfillmentResponse.md#fulfillmentresponsedataorder).

### SubscriptionPreviewError.details[].current_resource variant 3.packages[]

Field definitions: [FulfillmentResponse.data.packages[]](../models/FulfillmentResponse.md#fulfillmentresponsedatapackages).

### SubscriptionPreviewError.details[].current_resource variant 3.return_line_items[]

Field definitions: [PackageResponse.data.return_line_items[]](../models/PackageResponse.md#packageresponsedatareturn_line_items).

### SubscriptionPreviewError.details[].current_resource variant 4.metadata

Field definitions: [PackageResponse.data.metadata](../models/PackageResponse.md#packageresponsedatametadata).

### SubscriptionPreviewError.details[].current_resource variant 4.order

Declared alternatives: [FulfillmentResponse.data.order](../models/FulfillmentResponse.md#fulfillmentresponsedataorder).

### SubscriptionPreviewError.details[].current_resource variant 4.return_line_items[]

Field definitions: [PackageResponse.data.return_line_items[]](../models/PackageResponse.md#packageresponsedatareturn_line_items).

### SubscriptionPreviewError.details[].current_resource variant 6.target

Declared alternatives: [DeliveryRevocationResponse.data.target](../models/DeliveryRevocationResponse.md#deliveryrevocationresponsedatatarget).

### SubscriptionPreviewError.details[].quota

Field definitions: [ErrorDetail.quota](../models/ErrorDetail.md#errordetailquota).

### SubscriptionPreviewError.details[].restrictions[]

Field definitions: [GiftCardResponse.data.restrictions[]](../models/GiftCardResponse.md#giftcardresponsedatarestrictions).

### SubscriptionPreviewError.details[].scope_requirement

Field definitions: [ErrorDetail.scope_requirement](../models/ErrorDetail.md#errordetailscope_requirement).

### SubscriptionPreviewError.details[].selectable_resources[]

Field definitions: [ErrorDetail.selectable_resources[]](../models/ErrorDetail.md#errordetailselectable_resources).

