<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<string> $allowed_key_modes
 * @property-read ?array<array-key, SignedMoney> $available_by_source_type
 * @property-read ?string $available_quantity
 * @property-read ?string $blocking_resource_count
 * @property-read ?list<ErrorResourceReference> $blocking_resources
 * @property-read ?string $capability
 * @property-read ?MoneyValue $capturable_money
 * @property-read ?string $captured_physical_version
 * @property-read ?string $closed_reason
 * @property-read string $code
 * @property-read ?MoneyValue $collected_money
 * @property-read ?string $conflict_type
 * @property-read ?list<string> $conflicting_fields
 * @property-read ?string $current_api_version
 * @property-read ?string $current_checkout_session_id
 * @property-read string|null $current_delivery_selection_id
 * @property-read ?string $current_interval
 * @property-read ?MoneyValue $current_money
 * @property-read ?string $current_physical_version
 * @property-read mixed $current_resource
 * @property-read ?string $current_selection_id
 * @property-read ?string $current_source_observation_sequence
 * @property-read ?string $current_status
 * @property-read ?string $current_version
 * @property-read ?string $delivery_method_id
 * @property-read ?string $demand_key
 * @property-read ?string $demo_session_id
 * @property-read ?string $dependency_type
 * @property-read ?string $eligibility_reason
 * @property-read ?string $existing_checkout_session_id
 * @property-read ?MoneyValue $expected_attempt_outstanding_money
 * @property-read ?string $failure_category
 * @property-read ?string $failure_code
 * @property-read ?MoneyValue $gap_money
 * @property-read ?string $inactive_message
 * @property-read ?string $inventory_count_line_id
 * @property-read ?string $inventory_item_id
 * @property-read ?string $invoice_payment_attempt_id
 * @property-read ?bool $is_resumable
 * @property-read ?string $limit
 * @property-read ?string $line_item_key
 * @property-read ?string $location_id
 * @property-read ?string $location_outcome
 * @property-read ?MoneyValue $maximum_money
 * @property-read string $message
 * @property-read ?list<string> $missing_scopes
 * @property-read ?string $order_charge_id
 * @property-read ?string $order_id
 * @property-read ?string $order_line_item_id
 * @property-read ?string $order_payment_attempt_id
 * @property-read ?string $param
 * @property-read ?string $payment_attempt_status
 * @property-read ?list<string> $payment_intent_ids
 * @property-read ?string $payment_method_domain_id
 * @property-read ?string $payment_option
 * @property-read ?string $payout_terms_expires_at
 * @property-read ?string $previous_key_expires_at
 * @property-read ?string $product_id
 * @property-read ?QuotaDetails $quota
 * @property-read ?string $reason
 * @property-read ?ErrorRemediation $remediation
 * @property-read ?string $requested_key_mode
 * @property-read ?string $requested_quantity
 * @property-read ?MoneyValue $required_money
 * @property-read ?MoneyValue $requoted_shipping_money
 * @property-read ?MoneyValue $requoted_tax_money
 * @property-read ?string $resource_id
 * @property-read ?string $resource_type
 * @property-read ?string $return_resolution_id
 * @property-read ?list<string> $risk_rule_ids
 * @property-read ?string $scope
 * @property-read ?ScopeRequirement $scope_requirement
 * @property-read ?list<SelectableMerchant> $selectable_merchants
 * @property-read ?list<SelectableOrderPaymentIntent> $selectable_payment_intents
 * @property-read ?MoneyValue $shipping_money
 * @property-read ?string $shortage_quantity
 * @property-read ?MoneyValue $submitted_money
 * @property-read ?string $submitted_source_observation_sequence
 * @property-read ?string $subscription_delivery_migration_id
 * @property-read ?string $subscription_offer_id
 * @property-read ?string $subscription_plan_line_item_id
 * @property-read ?list<string> $suggestions
 * @property-read ?list<string> $supported_actions
 * @property-read ?list<string> $supported_api_versions
 * @property-read ?string $surface
 * @property-read ?MoneyValue $tax_money
 * @property-read ?MoneyValue $tip_capable_money
 * @property-read ?string $unavailable_reason
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class ErrorDetail extends Model {
    /** @param array{'allowed_key_modes'?: list<string>, 'available_by_source_type'?: \stdClass, 'available_quantity'?: string, 'blocking_resource_count'?: string, 'blocking_resources'?: list<mixed>, 'capability'?: string, 'capturable_money'?: mixed, 'captured_physical_version'?: string, 'closed_reason'?: string, 'code': string, 'collected_money'?: mixed, 'conflict_type'?: string, 'conflicting_fields'?: list<string>, 'current_api_version'?: string, 'current_checkout_session_id'?: string, 'current_delivery_selection_id'?: string|null, 'current_interval'?: string, 'current_money'?: mixed, 'current_physical_version'?: string, 'current_resource'?: mixed, 'current_selection_id'?: string, 'current_source_observation_sequence'?: string, 'current_status'?: string, 'current_version'?: string, 'delivery_method_id'?: string, 'demand_key'?: string, 'demo_session_id'?: string, 'dependency_type'?: string, 'eligibility_reason'?: string, 'existing_checkout_session_id'?: string, 'expected_attempt_outstanding_money'?: mixed, 'failure_category'?: string, 'failure_code'?: string, 'gap_money'?: mixed, 'inactive_message'?: string, 'inventory_count_line_id'?: string, 'inventory_item_id'?: string, 'invoice_payment_attempt_id'?: string, 'is_resumable'?: bool, 'limit'?: string, 'line_item_key'?: string, 'location_id'?: string, 'location_outcome'?: string, 'maximum_money'?: mixed, 'message': string, 'missing_scopes'?: list<string>, 'order_charge_id'?: string, 'order_id'?: string, 'order_line_item_id'?: string, 'order_payment_attempt_id'?: string, 'param'?: string, 'payment_attempt_status'?: string, 'payment_intent_ids'?: list<string>, 'payment_method_domain_id'?: string, 'payment_option'?: string, 'payout_terms_expires_at'?: string, 'previous_key_expires_at'?: string, 'product_id'?: string, 'quota'?: mixed, 'reason'?: string, 'remediation'?: mixed, 'requested_key_mode'?: string, 'requested_quantity'?: string, 'required_money'?: mixed, 'requoted_shipping_money'?: mixed, 'requoted_tax_money'?: mixed, 'resource_id'?: string, 'resource_type'?: string, 'return_resolution_id'?: string, 'risk_rule_ids'?: list<string>, 'scope'?: string, 'scope_requirement'?: mixed, 'selectable_merchants'?: list<mixed>, 'selectable_payment_intents'?: list<mixed>, 'shipping_money'?: mixed, 'shortage_quantity'?: string, 'submitted_money'?: mixed, 'submitted_source_observation_sequence'?: string, 'subscription_delivery_migration_id'?: string, 'subscription_offer_id'?: string, 'subscription_plan_line_item_id'?: string, 'suggestions'?: list<string>, 'supported_actions'?: list<string>, 'supported_api_versions'?: list<string>, 'surface'?: string, 'tax_money'?: mixed, 'tip_capable_money'?: mixed, 'unavailable_reason'?: string, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ErrorDetail')); }
    /** Shape $ (Value): Array of string. API key modes in which this scope may be granted. [] enum: "live", "test". Shape $[] (Value): string.  Value enum: "live", "test".
     * @return ?list<string>
     */
    public function getAllowedKeyModes(): ?array { return $this->get('allowed_key_modes'); }
    public function hasAllowedKeyModes(): bool { return $this->has('allowed_key_modes'); }
    /** Shape $ (Value): Map of {@see SignedMoney}. Signed available amounts grouped by balance source type on INSUFFICIENT_AVAILABLE_BALANCE. Keys are an open set; US accounts use card and bank_account. An empty object means no per-source amounts are reported. Shape $.* (Value): {@see SignedMoney}. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, SignedMoney>
     */
    public function getAvailableBySourceType(): ?array { return $this->get('available_by_source_type'); }
    public function hasAvailableBySourceType(): bool { return $this->has('available_by_source_type'); }
    /** Shape $ (Value): integer string. Whole-number quantity currently available for the requested operation; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return ?string
     */
    public function getAvailableQuantity(): ?string { return $this->get('available_quantity'); }
    public function hasAvailableQuantity(): bool { return $this->has('available_quantity'); }
    /** Shape $ (Value): integer string. On RESOURCE_IN_USE, INVOICE_ISSUE_IN_PROGRESS, CREDIT_NOTE_ISSUE_IN_PROGRESS, ORDER_PAYMENT_ATTEMPT_ACTIVE, INVOICE_PAYMENT_ATTEMPT_ACTIVE, INVOICE_PAYMENT_PROCESSING, PAYMENT_OPERATION_IN_PROGRESS, PAYMENT_CONFIRM_IN_PROGRESS, PAYMENT_REVIEW_OPEN, PAYMENT_IN_PROGRESS, ORDER_ALREADY_HAS_ACTIVE_INVOICE, ORDER_HAS_OPEN_CHECKOUT, ORDER_HAS_ACTIVE_PAYMENT_INTENT, ORDER_ALREADY_HAS_PAYMENTS, ORDER_ALREADY_HAS_REFUNDS, ORDER_HAS_MANUAL_PAYMENTS, INVOICE_PAYMENT_RESOLVING, INVOICE_LOCKED_ORDER_FINANCIALS, PAYMENT_ATTEMPT_REQUIRES_CAPTURE, ORDER_COLLECTION_IN_PROGRESS, ORDER_COLLECTION_ALREADY_ACTIVE, ORDER_CUSTOMER_CHECKOUT_ACTIVE, CHECKOUT_SESSION_CURRENT_CHANGED, INVOICE_CHECKOUT_REPLACEMENT_NOT_ALLOWED, ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE, CHECKOUT_SPLIT_PAYMENT_UNSUPPORTED, the total number of blocking resources. blocking_resources lists up to 25 of them. Manual payment conflicts identify their owning invoices. On CHECKOUT_SESSION_CURRENT_CHANGED, blockers are present only when the current session is known. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return ?string
     */
    public function getBlockingResourceCount(): ?string { return $this->get('blocking_resource_count'); }
    public function hasBlockingResourceCount(): bool { return $this->has('blocking_resource_count'); }
    /** Shape $ (Value): Array of {@see ErrorResourceReference}. On RESOURCE_IN_USE, FULFILLMENT_METHOD_UNAVAILABLE, RETURN_LINE_CANCELLATION_CONFLICT, ORDER_PAYMENT_ATTEMPT_ACTIVE, INVOICE_PAYMENT_ATTEMPT_ACTIVE, INVOICE_PAYMENT_PROCESSING, PAYMENT_OPERATION_IN_PROGRESS, PAYMENT_CONFIRM_IN_PROGRESS, PAYMENT_REVIEW_OPEN, PAYMENT_IN_PROGRESS, SUBSCRIPTION_PAYMENT_RETRY_IN_PROGRESS, INVOICE_ISSUE_IN_PROGRESS, CREDIT_NOTE_ISSUE_IN_PROGRESS, ORDER_ALREADY_HAS_ACTIVE_INVOICE, ORDER_HAS_OPEN_CHECKOUT, ORDER_HAS_ACTIVE_PAYMENT_INTENT, ORDER_ALREADY_HAS_PAYMENTS, ORDER_ALREADY_HAS_REFUNDS, ORDER_HAS_MANUAL_PAYMENTS, INVOICE_PAYMENT_RESOLVING, INVOICE_LOCKED_ORDER_FINANCIALS, PAYMENT_ATTEMPT_REQUIRES_CAPTURE, ORDER_COLLECTION_IN_PROGRESS, ORDER_COLLECTION_ALREADY_ACTIVE, ORDER_CUSTOMER_CHECKOUT_ACTIVE, CHECKOUT_SESSION_CURRENT_CHANGED, INVOICE_CHECKOUT_REPLACEMENT_NOT_ALLOWED, ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE, CHECKOUT_SPLIT_PAYMENT_UNSUPPORTED, resources that must transition or be corrected before the operation can succeed. Invoice and order dependency conflicts list up to 25 resources; blocking_resource_count is the total when present. Buyer credentials do not receive merchant-only blocking resources. Manual payment conflicts identify their owning invoices. On CHECKOUT_SESSION_CURRENT_CHANGED, blockers are present only when the current session is known. Shape $[] (Value): {@see ErrorResourceReference}. A reference to a public resource named in an error, with its type, ID, and current status when available.
     * @return ?list<ErrorResourceReference>
     */
    public function getBlockingResources(): ?array { return $this->get('blocking_resources'); }
    public function hasBlockingResources(): bool { return $this->has('blocking_resources'); }
    /** Shape $ (Value): string. Flint capability associated with this error, when applicable. Value enum: "accept_card_payments", "save_payment_methods", "accept_affirm_payments", "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts", "manage_payout_destinations", "manage_payout_settings".
     * @return ?string
     */
    public function getCapability(): ?string { return $this->get('capability'); }
    public function hasCapability(): bool { return $this->has('capability'); }
    /** Shape $ (Value): {@see MoneyValue}. On CAPTURE_AMOUNT_EXCEEDS_CAPTURABLE, the most you can capture now. Retry with an amount at or below it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getCapturableMoney(): ?MoneyValue { return $this->get('capturable_money'); }
    public function hasCapturableMoney(): bool { return $this->has('capturable_money'); }
    /** Shape $ (Value): integer string. Physical basis submitted with the observation, or saved on the count line when apply refuses it. Read the current level and physically recount this item before replacing the basis. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return ?string
     */
    public function getCapturedPhysicalVersion(): ?string { return $this->get('captured_physical_version'); }
    public function hasCapturedPhysicalVersion(): bool { return $this->has('captured_physical_version'); }
    /** Shape $ (Value): string. How the inventory reservation ended. Present for INVENTORY_RESERVATION_CLOSED. Value enum: "consumed", "released", "expired", "reallocated", "mixed".
     * @return ?string
     */
    public function getClosedReason(): ?string { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** Shape $ (Value): string. Stable Flint error code for this item. Under INVALID_REQUEST, one of REQUIRED, INVALID_VALUE, UNKNOWN_FIELD, NOT_ALLOWED. Every value is listed in the operation's x-flint-error-codes. Value enum: "ACCESS_LINK_CUSTOMER_REQUIRED", "ACCESS_LINK_MERCHANT_HOSTED", "ACCOUNT_SETUP_CONFIGURATION_CONFLICT", "ACCOUNT_SETUP_REPAIR_REQUIRED", "ACCOUNT_SETUP_UNAVAILABLE", "ACH_TRANSACTION_PURPOSE_UNRESOLVED", "ACTION_NOT_ALLOWED", "ACTIVE_DEMO_SESSION_EXISTS", "ACTIVE_LINE_ITEM_SOURCE_CHANGE", "ACTIVE_OPTION_SELECTOR_COLLAPSE", "AFFIRM_REFUND_RETRY_NOT_ALLOWED", "ALREADY_EXISTS", "AMOUNT_EXCEEDS_BALANCE", "AMOUNT_EXCEEDS_REFUNDABLE", "AMOUNT_MISMATCH", "AMOUNT_NOT_ADJUSTABLE", "API_KEY_ALREADY_REVOKED", "API_KEY_CHANGED", "API_VERSION_RETIRED", "AUTHENTICATION_REQUIRED", "AUTOMATIC_PAYOUT_NOT_CANCELABLE", "AUTOMATIC_PROMOTIONS_DISABLED", "AUTOMATIC_TAX_CONNECTION_REQUIRED", "AUTOMATIC_TAX_ORIGIN_ADDRESS_REQUIRED", "AUTOMATIC_TAX_UNAVAILABLE", "BILLING_INTERVAL_CHANGE_NOT_ALLOWED", "BUNDLE_COMPONENT_PRODUCT_NOT_ACTIVE", "BUNDLE_COMPONENT_VARIANT_NOT_ACTIVE", "BUNDLE_NOT_SELLABLE", "CANCEL_IMMEDIATELY_NOT_ALLOWED", "CAPABILITIES_IMMUTABLE", "CAPABILITY_NOT_REQUESTED", "CAPTURE_AMOUNT_EXCEEDS_CAPTURABLE", "CATALOG_INVENTORY_RELATIONSHIP_INVALID", "CATALOG_LINE_ITEM_CURRENCY_CHANGED", "CATALOG_LINE_ITEM_SOURCE_CHANGED", "CHECKOUT_CREDENTIAL_CHANGED", "CHECKOUT_CUSTOMER_ALREADY_AUTHORIZED", "CHECKOUT_CUSTOMER_CHANGED", "CHECKOUT_SESSION_CURRENT_CHANGED", "CHECKOUT_SESSION_EXPIRED", "CHECKOUT_SESSION_MODIFIERS_READ_ONLY", "CHECKOUT_SESSION_NOT_OPEN", "CHECKOUT_SESSION_SCOPE_MISMATCH", "CHECKOUT_SPLIT_PAYMENT_UNSUPPORTED", "CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED", "CHECKOUT_TAX_CALCULATION_LIMIT_REACHED", "CONCURRENT_MODIFICATION", "CONFIRMATION_TOKEN_ALREADY_USED", "CONFIRMATION_TOKEN_EXPIRED", "COUNTRY_IMMUTABLE", "CREDIT_NOTE_ALLOCATION_ALREADY_REVERSED", "CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE", "CREDIT_NOTE_AMOUNT_EXCEEDS_CREDITABLE", "CREDIT_NOTE_ISSUE_IN_PROGRESS", "CREDIT_NOTE_NOT_DRAFT", "CREDIT_NOTE_NOT_ISSUED", "CREDIT_NOTE_REFUND_EXCEEDS_BALANCE", "CUSTOMER_DELETION_ALREADY_APPROVED", "CUSTOMER_DELETION_BLOCKED", "CUSTOMER_DELETION_PROCESSING", "CUSTOMER_DELETION_REQUEST_NOT_PENDING", "CUSTOMER_DELETION_STATE_CHANGED", "CUSTOMER_EMAIL_BUYER_MANAGED", "CUSTOMER_EMAIL_REQUIRED", "CUSTOMER_PAYMENT_TERM_UNAVAILABLE", "CUSTOMER_VERIFICATION_ALREADY_CONFIRMED", "CUSTOMER_VERIFICATION_ATTEMPTS_EXHAUSTED", "CUSTOMER_VERIFICATION_EMAIL_CHANGED", "CUSTOMER_VERIFICATION_EXPIRED", "CUSTOMER_VERIFICATION_LIMIT_REACHED", "CUSTOMER_VERIFICATION_NOT_CONFIRMED", "CUSTOMER_VERIFICATION_NOT_OFFERED", "CUSTOMER_VERIFICATION_NOT_SENT", "CUSTOMER_VERIFICATION_TEXT_UNAVAILABLE", "CUSTOMER_VERIFICATION_USED", "CUSTOM_DOMAIN_NOT_VERIFIED", "CUSTOM_DOMAIN_SUBSCRIPTION_REQUIRED", "CUSTOM_DOMAIN_UNAVAILABLE", "DEFAULT_ENVIRONMENT_REQUIRED", "DEFAULT_PAYMENT_METHOD_CONFLICT", "DEFAULT_PAYOUT_DESTINATIONS_MANAGED_EXTERNALLY", "DEFAULT_PAYOUT_DESTINATION_INVALID", "DEFAULT_PAYOUT_DESTINATION_REPLACEMENT_REQUIRED", "DEFAULT_PAYOUT_DESTINATION_REQUIRED", "DEFAULT_SANDBOX_CANNOT_BE_ARCHIVED", "DEFAULT_SANDBOX_CANNOT_BE_RESET", "DELIVERY_CALCULATION_EXPIRED", "DELIVERY_COMMERCE_TREATMENT_UNSUPPORTED", "DELIVERY_DEPENDENCY_REVOKED", "DELIVERY_DESTINATION_CONTROLLED_BY_SELECTION", "DELIVERY_DESTINATION_FROZEN", "DELIVERY_ELIGIBILITY_CONTEXT_CHANGED", "DELIVERY_EXTERNAL_REFERENCE_REUSED", "DELIVERY_GROUPING_UNSUPPORTED", "DELIVERY_OPTION_ALREADY_SELECTED", "DELIVERY_OPTION_EXPIRED", "DELIVERY_PICKUP_AVAILABILITY_CHANGED", "DELIVERY_PICKUP_LOCATION_UNAVAILABLE", "DELIVERY_PREVIEW_REQUIRES_CHECKOUT", "DELIVERY_QUOTE_BASIS_INVALID", "DELIVERY_QUOTE_EXPIRED", "DELIVERY_QUOTE_INCOMPLETE", "DELIVERY_QUOTE_INPUT_CHANGED", "DELIVERY_QUOTE_REVOKED", "DELIVERY_QUOTE_STALE", "DELIVERY_RATE_CALLBACK_SECRET_ROTATION_OVERLAP_ACTIVE", "DELIVERY_REQUOTE_REQUIRED", "DELIVERY_RESOURCE_VERSION_CONFLICT", "DELIVERY_SELECTION_CHANGED", "DELIVERY_SELECTION_EXPIRED", "DELIVERY_SELECTION_NOT_MUTABLE_AFTER_PAYMENT", "DELIVERY_SELECTION_REPLACEMENT_LIMIT_REACHED", "DELIVERY_STATE_CONFLICT", "DELIVERY_UPDATE_NOT_ALLOWED", "DELIVERY_WINDOW_EXPIRED", "DEMO_SESSION_NOT_CURRENT", "DEMO_SESSION_SECRET_REPLAY_EXPIRED", "DEVICE_ARCHIVED", "DEVICE_LOCATION_MISMATCH", "DISCOUNT_NOT_REMOVABLE", "DUPLICATE_CODE", "EMAIL_ALREADY_LINKED", "EMAIL_CHANGE_ALREADY_CONFIRMED", "EMAIL_CHANGE_ATTEMPTS_EXHAUSTED", "EMAIL_CHANGE_CONFIRMATION_EXPIRED", "EMAIL_CHANGE_SUPERSEDED", "EMAIL_PREFERENCE_LINK_INVALID", "EVENT_SOLD_OUT", "EVENT_TICKETS_INSUFFICIENT", "EXTERNAL_PAID_ORDER_ALLOWANCE_EXHAUSTED", "EXTERNAL_SERVICE_ERROR", "FILE_NOT_UPLOADED", "FLAT_TAX_PAYMENT_ATTRIBUTION_UNAVAILABLE", "FLAT_TAX_REFUND_STATE_INVALID", "FORBIDDEN", "FULFILLMENT_ACTIVE_SHIPMENT_EXECUTION", "FULFILLMENT_APPROVAL_REQUIRED", "FULFILLMENT_CHANGED", "FULFILLMENT_COMPLETED", "FULFILLMENT_COMPLETED_DETAILS_REPLACEMENT", "FULFILLMENT_COMPLETION_TIMESTAMP_REQUIRES_COMPLETE", "FULFILLMENT_CONFIGURATION_ACTION_REQUIRED", "FULFILLMENT_EVENT_DEDUPE_CONFLICT", "FULFILLMENT_EVENT_SUBJECT_INVALID", "FULFILLMENT_INACTIVE", "FULFILLMENT_METHOD_ASSIGNMENT_UNSATISFIABLE", "FULFILLMENT_METHOD_UNAVAILABLE", "FULFILLMENT_PROFILE_REVISION_UNUSABLE", "FULFILLMENT_PROFILE_UNAVAILABLE", "FULFILLMENT_QUANTITY_EXCEEDS_AVAILABLE", "FULFILLMENT_QUANTITY_EXCEEDS_LINE_ITEM", "FULFILLMENT_SELECTION_REQUIRED", "FULFILLMENT_SHIPMENT_NOT_VOIDABLE", "FULFILLMENT_STATUS_CONFLICT", "GIFT_CARD_ALLOCATION_CHANGED", "GIFT_CARD_BUYER_EMAIL_REQUIRED", "GIFT_CARD_CHALLENGE_REQUIRED", "GIFT_CARD_FUNDING_LIMIT_EXCEEDED", "GIFT_CARD_INSUFFICIENT_VALUE", "GIFT_CARD_PURCHASE_CONFLICT", "GIFT_CARD_PURCHASE_LIMIT_EXCEEDED", "GIFT_CARD_PURCHASE_REFUND_CONFLICT", "GIFT_CARD_REFUND_DESTINATION_REQUIRED", "GIFT_CARD_STATE_CONFLICT", "IDEMPOTENCY_KEY_IN_PROGRESS", "IDEMPOTENCY_KEY_REUSED", "IDEMPOTENCY_RECOVERY_REQUIRED", "IDENTITY_VERIFICATION_REQUIRED", "IMAGE_ASSET_NOT_ATTACHABLE", "IMAGE_INGESTION_EXPIRED", "IMAGE_INGESTION_IN_PROGRESS", "IMAGE_INGESTION_RESTART_REQUIRED", "IMAGE_NOT_ATTACHABLE", "IMAGE_OWNER_NOT_MUTABLE", "IMAGE_PROCESSING_CAPACITY_EXCEEDED", "IMAGE_PROCESSING_FAILED", "IMAGE_PROCESSING_TIMEOUT", "IMAGE_REVISION_MISMATCH", "IMAGE_SOURCE_TIMEOUT", "IMAGE_SOURCE_UNAVAILABLE", "IMAGE_STORAGE_QUOTA_EXCEEDED", "INITIAL_API_KEY_ALREADY_CREATED", "INSTANT_PAYOUTS_UNAVAILABLE", "INSUFFICIENT_AVAILABLE_BALANCE", "INSUFFICIENT_SCOPE", "INTERNAL_ERROR", "INVALID_CREDENTIAL", "INVALID_INVOICE_LATE_FEE_AMOUNT", "INVALID_MERCHANT_SELECTION", "INVALID_ORDER_STATUS", "INVALID_REQUEST", "INVALID_STATUS_TRANSITION", "INVALID_VALUE", "INVENTORY_COUNT_INCOMPLETE", "INVENTORY_INSUFFICIENT", "INVENTORY_ITEM_INACTIVE", "INVENTORY_ITEM_UNAVAILABLE", "INVENTORY_LOCATION_ALLOCATION_DISABLED", "INVENTORY_LOCATION_INELIGIBLE", "INVENTORY_POLICY_UNAVAILABLE", "INVENTORY_QUANTITY_CONFLICT", "INVENTORY_RECEIPT_CONFLICT", "INVENTORY_ROUTING_LOCATION_LIMIT_EXCEEDED", "INVENTORY_SHORTAGE", "INVENTORY_SOURCE_SEQUENCE_CHANGED", "INVENTORY_TRANSFER_LINE_CONFLICT", "INVENTORY_UNAVAILABLE", "INVOICE_AUTOPAY_PAYMENT_METHOD_REQUIRED", "INVOICE_BALANCE_CHANGED", "INVOICE_CHECKOUT_REPLACEMENT_NOT_ALLOWED", "INVOICE_COLLECTION_BLOCKED", "INVOICE_COLLECTION_CHANGED", "INVOICE_COLLECTION_MODE_UNSUPPORTED", "INVOICE_ISSUE_IN_PROGRESS", "INVOICE_LATE_FEE_NOT_COLLECTIBLE", "INVOICE_LATE_FEE_NOT_DUE", "INVOICE_LATE_FEE_POLICY_REQUIRED", "INVOICE_LINK_UNAVAILABLE", "INVOICE_LOCKED_ORDER_FINANCIALS", "INVOICE_NOT_COLLECTIBLE", "INVOICE_NOT_CREDITABLE", "INVOICE_NOT_DRAFT", "INVOICE_NOT_ISSUED", "INVOICE_NOT_MARKABLE_UNCOLLECTIBLE", "INVOICE_NOT_REVERSIBLE", "INVOICE_NOT_VOIDABLE", "INVOICE_PAYMENT_ALREADY_SETTLED", "INVOICE_PAYMENT_ATTEMPT_ACTIVE", "INVOICE_PAYMENT_NOT_APPLIED", "INVOICE_PAYMENT_PROCESSING", "INVOICE_PAYMENT_RESOLVING", "INVOICE_PAYMENT_TERM_CURRENCY_MISMATCH", "INVOICE_PAYMENT_TERM_UNAVAILABLE", "INVOICE_REMINDER_CHANGED", "INVOICE_SCHEDULE_ENTRY_NOT_COLLECTIBLE", "INVOICE_TAX_SNAPSHOT_MISSING", "INVOICE_TAX_SNAPSHOT_STALE", "ITEMS_REQUIRED", "LIMIT_EXCEEDED", "LIMIT_REACHED", "LINE_ITEM_REFUND_QUANTITY_EXCEEDS_REFUNDABLE", "LIST_RESERVED", "LOCATION_NOT_ACTIVE", "LOCATION_UNAVAILABLE", "MAX_COMPLETIONS_BELOW_COMPLETED", "MAX_TOTAL_QUANTITY_BELOW_SOLD", "MERCHANT_ACCOUNT_DOMAIN_NOT_VERIFIED", "MERCHANT_ACCOUNT_NOT_READY", "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_REPAIR_REQUIRED", "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_REQUIRED", "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_UNAVAILABLE", "MERCHANT_ACCOUNT_SESSION_CONTROLLER_MISMATCH", "MERCHANT_ACCOUNT_SESSION_INELIGIBLE", "MERCHANT_ACCOUNT_SESSION_PROVIDER_GRANT_MISMATCH", "MERCHANT_ACCOUNT_SESSION_TARGETED_REMEDIATION_UNAVAILABLE", "MERCHANT_ACCOUNT_SESSION_UNMAPPABLE_REQUIREMENT_ID", "MERCHANT_BILLING_SUSPENDED", "MERCHANT_NOT_READY", "MERCHANT_ONBOARDING_REQUIRED", "MERCHANT_PROCESSING_RESTRICTED", "MERCHANT_SELECTION_REQUIRED", "MERCHANT_UNDER_REVIEW", "METHOD_NOT_ALLOWED", "MODIFIER_GROUP_UNAVAILABLE", "MONEY_MOVEMENT_OPERATION_BLOCKED", "MONEY_MOVEMENT_PROVIDER_NOT_CONFIGURED", "MULTIPLE_IDENTITIES_FOUND", "NEW_ACCOUNT_PAYOUT_TERMS_ACTIVE", "NOTHING_TO_REFUND", "NOTHING_TO_REFUND_FOR_CHARGE", "NOTHING_TO_REFUND_FOR_LINE_ITEM", "NOTHING_TO_REFUND_FOR_TAX_BREAKDOWN", "NOT_ALLOWED", "NO_DISCOUNTABLE_BALANCE", "NO_PAYMENTS_FOR_ORDER", "ONBOARDING_CONTROLLER_VERSION_UNSUPPORTED", "ONBOARDING_PROFILE_PROVIDER_MANAGED", "OPERATION_IN_PROGRESS", "ORDER_ALREADY_HAS_ACTIVE_INVOICE", "ORDER_ALREADY_HAS_PAYMENTS", "ORDER_ALREADY_HAS_REFUNDS", "ORDER_ALREADY_PAID", "ORDER_CHANGED_REFRESH_REQUIRED", "ORDER_CHECKOUT_SESSION_CHANGED", "ORDER_COLLECTION_ALREADY_ACTIVE", "ORDER_COLLECTION_IN_PROGRESS", "ORDER_CONFLICT", "ORDER_CUSTOMER_ALREADY_SET", "ORDER_CUSTOMER_CHECKOUT_ACTIVE", "ORDER_CUSTOMER_NOT_UPDATABLE_AFTER_PAYMENT", "ORDER_DELIVERY_DESTINATION_REPRICE_REQUIRED", "ORDER_FINANCIAL_MUTATION_NOT_ALLOWED", "ORDER_HAS_ACTIVE_PAYMENT_INTENT", "ORDER_HAS_COLLECTED_MONEY", "ORDER_HAS_MANUAL_PAYMENTS", "ORDER_HAS_NO_LINE_ITEMS", "ORDER_HAS_NO_REFUNDABLE_CHARGES", "ORDER_HAS_NO_REFUNDABLE_LINE_ITEMS", "ORDER_HAS_OPEN_CHECKOUT", "ORDER_INVENTORY_EXCEPTION_NOT_RESOLVABLE", "ORDER_INVENTORY_EXCEPTION_UNRESOLVED", "ORDER_NOT_FULFILLABLE", "ORDER_NOT_OPEN", "ORDER_PAYMENT_ATTEMPT_ACTIVE", "ORDER_PAYMENT_CUSTOMER_MISMATCH", "ORDER_PAYMENT_INTENT_CREATE_IN_PROGRESS", "ORDER_PAYMENT_INTENT_CREATE_REQUIRES_REVIEW", "ORDER_PAYMENT_LEG_ALREADY_SETTLED", "ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE", "ORDER_RECEIPT_EMAIL_ON_FILE", "ORDER_RECEIPT_EMAIL_UNAVAILABLE", "ORDER_RECEIPT_MERCHANT_MANAGED", "ORDER_RECEIPT_NOT_AVAILABLE", "ORDER_RECEIPT_RECIPIENT_LIMIT_REACHED", "ORDER_RECONCILIATION_REQUIRED", "ORDER_TAX_NOT_READY", "ORDER_TAX_NOT_UPDATABLE", "ORDER_TOTALS_UNAVAILABLE", "ORDER_TOTAL_BELOW_NET_COLLECTED", "ORGANIZATION_CYCLE", "ORGANIZATION_NOT_ACTIVE", "PACKAGE_CHANGED", "PACKAGE_PARENT_CHANGED", "PAID_LINE_ITEM_MODIFIER_CHANGE_FORBIDDEN", "PAID_LINE_ITEM_PRICE_CHANGE_FORBIDDEN", "PAID_LINE_ITEM_QUANTITY_CHANGE_FORBIDDEN", "PAID_LINE_ITEM_QUANTITY_DECREASE_FORBIDDEN", "PAID_LINE_ITEM_REMOVAL_FORBIDDEN", "PAID_LINE_ITEM_TAX_CHANGE_FORBIDDEN", "PAUSE_NOT_ALLOWED", "PAYMENT_ACTION_WINDOW_TOO_SHORT", "PAYMENT_ALREADY_SETTLED", "PAYMENT_AMOUNT_CHANGED", "PAYMENT_ATTEMPT_ACTIVE", "PAYMENT_ATTEMPT_MISMATCH", "PAYMENT_ATTEMPT_NOT_CANCELABLE", "PAYMENT_ATTEMPT_NOT_RESUMABLE", "PAYMENT_ATTEMPT_REQUIRES_CAPTURE", "PAYMENT_CONFIRMATION_STATE_CHANGED", "PAYMENT_CONFIRM_IN_PROGRESS", "PAYMENT_INTENT_DISPUTED", "PAYMENT_INTENT_LIMIT_REACHED", "PAYMENT_IN_PROGRESS", "PAYMENT_LEG_SELECTION_REQUIRED", "PAYMENT_LINK_CHANGED_RETRY", "PAYMENT_LINK_FULFILLMENT_UNAVAILABLE", "PAYMENT_LINK_INACTIVE", "PAYMENT_LINK_MAX_COMPLETIONS_REACHED", "PAYMENT_LINK_RESOLUTION_CONTEXT_REFRESH_REQUIRED", "PAYMENT_LINK_RESOLUTION_REPLAY_UNAVAILABLE", "PAYMENT_LINK_SALES_ENDED", "PAYMENT_METHOD_CUSTOMER_MISMATCH", "PAYMENT_METHOD_DOMAIN_OPERATION_IN_PROGRESS", "PAYMENT_METHOD_HAS_ACTIVE_SUBSCRIPTIONS", "PAYMENT_METHOD_NOT_ACTIVE", "PAYMENT_METHOD_NOT_READY", "PAYMENT_METHOD_ON_SESSION_ONLY", "PAYMENT_METHOD_REQUIRED", "PAYMENT_METHOD_SAVE_EMAIL_UNAVAILABLE", "PAYMENT_METHOD_SAVE_NOT_PENDING", "PAYMENT_METHOD_SAVE_NOT_READY", "PAYMENT_NOT_REQUIRED", "PAYMENT_OPERATION_IN_PROGRESS", "PAYMENT_OPTION_LIMIT_EXCEEDED", "PAYMENT_OPTION_NOT_READY", "PAYMENT_OPTION_UNAVAILABLE", "PAYMENT_PROCESSING_NOT_ENABLED", "PAYMENT_PROCESSING_UNAVAILABLE", "PAYMENT_PROCESSOR_REJECTED", "PAYMENT_PROCESSOR_UNAVAILABLE", "PAYMENT_REVIEW_OPEN", "PAYMENT_SOURCE_UNAVAILABLE", "PAYOUTS_NOT_ENABLED", "PAYOUT_DELAY_PROVIDER_CONTROLLED", "PAYOUT_DESTINATIONS_MANAGEMENT_UNAVAILABLE", "PAYOUT_FEE_NOT_DETERMINABLE", "PAYOUT_NOT_CANCELABLE", "PAYOUT_SETTINGS_MANAGED_EXTERNALLY", "PAYOUT_SETTINGS_MANAGEMENT_UNAVAILABLE", "PAYOUT_STATUS_NOT_CANCELABLE", "PLAN_NOT_ACTIVE", "PROCESSING_FEE_PRICING_NOT_AUTHORIZED", "PROCESSOR_NOT_CONFIGURED", "PROFILE_UPDATE_STATUS_UNKNOWN", "PROMOTION_CODES_DISABLED", "PROMOTION_DECLINED", "PROMOTION_HAS_ACTIVE_SUBSCRIPTION_OFFERS", "PROMOTION_NOT_REDEEMABLE", "PROMOTION_SHAPE_IMMUTABLE", "PROVIDER_ACCOUNT_CLEANUP_REQUIRED", "QUANTITY_CHANGE_NOT_ALLOWED", "QUANTITY_NOT_ADJUSTABLE", "RATE_LIMIT_EXCEEDED", "REFUND_ADJUSTMENT_PAYMENT_INTENT_NOT_REFUNDABLE", "REFUND_ADJUSTMENT_REFUND_EXCEEDS_PAYMENT_INTENT_REFUNDABLE", "REFUND_ADJUSTMENT_REFUND_EXCEEDS_REMAINING", "REFUND_SUBMISSION_DEADLINE_EXPIRED", "REFUND_TENDER_CAPACITY_CONFLICT", "REPORT_DOWNLOAD_EXPIRED", "REQUEST_BLOCKED", "REQUEST_BODY_TOO_LARGE", "REQUEST_CANCELED", "REQUEST_TIMEOUT", "REQUIRED", "RESOURCE_IN_USE", "RESOURCE_NOT_FOUND", "RETURN_CHECKOUT_REQUIRED", "RETURN_COMPLETION_BLOCKED", "RETURN_DISPOSITION_QUANTITY_EXCEEDED", "RETURN_FULFILLMENT_ALLOCATION_AMBIGUOUS", "RETURN_INSPECTION_QUANTITY_EXCEEDED", "RETURN_LINE_CANCELLATION_CONFLICT", "RETURN_POLICY_CONFLICT", "RETURN_RECEIPT_QUANTITY_EXCEEDED", "RETURN_SELF_SERVICE_NOT_ALLOWED", "RETURN_SHIPMENT_QUANTITY_EXCEEDS_AVAILABLE", "RETURN_VALUE_EXCEEDED", "RETURN_VERSION_CONFLICT", "RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_FLOW", "RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_OPTION", "RISK_RULE_LIMIT_REACHED", "ROUTE_NOT_FOUND", "RULE_RESERVED", "SANDBOX_ARCHIVED", "SANDBOX_INACTIVE", "SAVE_PAYMENT_METHOD_CODE_LIMIT_REACHED", "SAVE_PAYMENT_METHOD_NOT_OFFERED", "SAVE_PAYMENT_METHOD_VERIFICATION_REQUIRED", "SENSITIVE_IDEMPOTENCY_RESULT_INVALID", "SERVICE_UNAVAILABLE", "SETUP_SOURCE_NON_ZERO_ORDER", "SHIPMENT_CHANGED", "SHIPMENT_PACKAGE_ITEM_QUANTITY_EXCEEDS_FULFILLMENT", "SHIPMENT_PACKAGE_NOT_VOIDABLE", "SKIP_LIMIT_REACHED", "SKIP_NOT_ALLOWED", "STANDARD_PAYOUTS_UNAVAILABLE", "STANDARD_PAYOUT_REQUIRES_MANUAL_SCHEDULE", "SUBSCRIPTION_DELIVERY_LINES_NOT_COMBINABLE", "SUBSCRIPTION_DELIVERY_MIGRATION_IN_PROGRESS", "SUBSCRIPTION_DELIVERY_MIGRATION_TARGET_UNAVAILABLE", "SUBSCRIPTION_DELIVERY_PROFILE_ACTION_REQUIRED", "SUBSCRIPTION_DELIVERY_PROFILE_MISSING", "SUBSCRIPTION_DELIVERY_UNAVAILABLE", "SUBSCRIPTION_NEXT_BILLING_AT_BEFORE_PERIOD_START", "SUBSCRIPTION_NEXT_BILLING_AT_TOO_FAR", "SUBSCRIPTION_OFFER_ARCHIVED", "SUBSCRIPTION_OFFER_NOT_ACTIVE", "SUBSCRIPTION_OFFER_PROMOTION_UNAVAILABLE", "SUBSCRIPTION_OFFER_TARGET_CONFLICT", "SUBSCRIPTION_PAYMENT_RETRY_IN_PROGRESS", "SUBSCRIPTION_PAYMENT_RETRY_LIMIT_REACHED", "SUBSCRIPTION_START_OVERRIDE_NOT_ALLOWED", "SWAP_NOT_ALLOWED", "TAX_BREAKDOWN_REFUND_EXCEEDS_REMAINING", "TAX_CATEGORY_REQUIRED", "TEST_PROCESSOR_NOT_CONFIGURED", "TICKET_PREFIX_LOCKED", "TIP_ALLOCATION_CAPACITY_EXCEEDED", "UNKNOWN_FIELD", "UNSUPPORTED_CONTENT_TYPE", "UNSUPPORTED_PROCESSOR", "VARIANT_NOT_SELLABLE", "VERSION_CONFLICT", "WEBHOOK_DELIVERY_IN_FLIGHT", "WEBHOOK_ENDPOINT_NOT_ACTIVE", "WEBHOOK_ENDPOINT_NOT_SUBSCRIBED", "WEBHOOK_EVENT_PAYLOAD_EXPIRED", "WORKLOAD_IDENTITY_LIMIT_REACHED".
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Shape $ (Value): {@see MoneyValue}. On ORDER_HAS_COLLECTED_MONEY, collected money still refundable through POST /v1/refunds with order_id, after pending refunds. Refund it before closing or send collected_money_behavior: keep. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getCollectedMoney(): ?MoneyValue { return $this->get('collected_money'); }
    public function hasCollectedMoney(): bool { return $this->has('collected_money'); }
    /** Shape $ (Value): string. Which inventory count check failed for this line. Sent on VERSION_CONFLICT for physical observations and INVENTORY_SOURCE_SEQUENCE_CHANGED. Value enum: "physical_version", "source_observation_sequence".
     * @return ?string
     */
    public function getConflictType(): ?string { return $this->get('conflict_type'); }
    public function hasConflictType(): bool { return $this->has('conflict_type'); }
    /** Shape $ (Value): Array of string. Request field paths that conflict with each other or with the rest of the request. Sent on INVALID_REQUEST with detail NOT_ALLOWED for conflicting payment inputs, and with detail INVALID_VALUE when entries in one product create repeat an option name, identifier, or selected option combination. Shape $[] (Value): string.
     * @return ?list<string>
     */
    public function getConflictingFields(): ?array { return $this->get('conflicting_fields'); }
    public function hasConflictingFields(): bool { return $this->has('conflicting_fields'); }
    /** Shape $ (Value): string. Current API version pin on VERSION_CONFLICT when expected_api_version is stale.
     * @return ?string
     */
    public function getCurrentApiVersion(): ?string { return $this->get('current_api_version'); }
    public function hasCurrentApiVersion(): bool { return $this->has('current_api_version'); }
    /** Shape $ (Value): string. On CHECKOUT_SESSION_CURRENT_CHANGED, the ID of the checkout session that is current. The request named an earlier one.
     * @return ?string
     */
    public function getCurrentCheckoutSessionId(): ?string { return $this->get('current_checkout_session_id'); }
    public function hasCurrentCheckoutSessionId(): bool { return $this->has('current_checkout_session_id'); }
    /** Shape $ (Value): string or null. Current effective delivery selection ID on VERSION_CONFLICT when expected_delivery_selection_id is stale. Present as null when no delivery selection is current.
     * @return string|null
     */
    public function getCurrentDeliverySelectionId(): string|null { return $this->get('current_delivery_selection_id'); }
    public function hasCurrentDeliverySelectionId(): bool { return $this->has('current_delivery_selection_id'); }
    /** Shape $ (Value): string. Current payout schedule interval on STANDARD_PAYOUT_REQUIRES_MANUAL_SCHEDULE. Change the payout schedule to manual before creating a standard payout. Value enum: "daily", "weekly", "monthly".
     * @return ?string
     */
    public function getCurrentInterval(): ?string { return $this->get('current_interval'); }
    public function hasCurrentInterval(): bool { return $this->has('current_interval'); }
    /** Shape $ (Value): {@see MoneyValue}. Current money amount counted toward the threshold, when the error is threshold-based. On ORDER_CHANGED_REFRESH_REQUIRED and PAYMENT_LEG_SELECTION_REQUIRED, the order's current outstanding balance. On ORDER_TOTAL_BELOW_NET_COLLECTED, what the change would leave: the order total, or the total without its unpaid tip when items and charges would fall below the money collected for them. On CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE, the outstanding balance the allocation would leave. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getCurrentMoney(): ?MoneyValue { return $this->get('current_money'); }
    public function hasCurrentMoney(): bool { return $this->has('current_money'); }
    /** Shape $ (Value): integer string. Current physical version of the inventory level. This is a physical-value assertion, not the resource version in current_version. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return ?string
     */
    public function getCurrentPhysicalVersion(): ?string { return $this->get('current_physical_version'); }
    public function hasCurrentPhysicalVersion(): bool { return $this->has('current_physical_version'); }
    /** Shape $ (Value): {@see ErrorResourceReference} or {@see Fulfillment} or {@see Shipment} or {@see Package} or {@see CustomDomain}. The existing resource reference or custom domain on ALREADY_EXISTS, or the current fulfillment, shipment, or package when a conditional write conflicts with resource state. Shape $.oneOf[1] (Value): {@see ErrorResourceReference}. A reference to a public resource named in an error, with its type, ID, and current status when available. Shape $.oneOf[2] (Value): {@see Fulfillment}. Work required to deliver an order's items. Shape $.oneOf[3] (Value): {@see Shipment}. A shipment carrying fulfilled order items. Shape $.oneOf[4] (Value): {@see Package}. A package within a shipment. Shape $.oneOf[5] (Value): {@see CustomDomain}. A merchant hostname for hosted checkout or customer account pages.
     * @return mixed
     */
    public function getCurrentResource(): mixed { return $this->get('current_resource'); }
    public function hasCurrentResource(): bool { return $this->has('current_resource'); }
    /** Shape $ (Value): string. Current effective delivery selection ID returned with a selection concurrency conflict.
     * @return ?string
     */
    public function getCurrentSelectionId(): ?string { return $this->get('current_selection_id'); }
    public function hasCurrentSelectionId(): bool { return $this->has('current_selection_id'); }
    /** Shape $ (Value): integer string. Latest accepted absolute source sequence for this item and Location. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return ?string
     */
    public function getCurrentSourceObservationSequence(): ?string { return $this->get('current_source_observation_sequence'); }
    public function hasCurrentSourceObservationSequence(): bool { return $this->has('current_source_observation_sequence'); }
    /** Shape $ (Value): string. Current lifecycle status of the resource when the requested mutation is not allowed.
     * @return ?string
     */
    public function getCurrentStatus(): ?string { return $this->get('current_status'); }
    public function hasCurrentStatus(): bool { return $this->has('current_status'); }
    /** Shape $ (Value): integer string. Current version of the resource when a write that depends on its version or status is rejected. Sent on VERSION_CONFLICT and other stale-basis conflicts such as ORDER_CHANGED_REFRESH_REQUIRED, and on status conflicts such as ACTION_NOT_ALLOWED. On ORDER_CHANGED_REFRESH_REQUIRED, send the order version as expected_version. Read the resource again before you retry. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return ?string
     */
    public function getCurrentVersion(): ?string { return $this->get('current_version'); }
    public function hasCurrentVersion(): bool { return $this->has('current_version'); }
    /** Shape $ (Value): string. Delivery method this failure concerns. On SUBSCRIPTION_DELIVERY_UNAVAILABLE, the method that cannot currently serve the subscription.
     * @return ?string
     */
    public function getDeliveryMethodId(): ?string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Shape $ (Value): string. Key of the inventory demand this failure concerns. Sent on INVENTORY_INSUFFICIENT, and on INVENTORY_LOCATION_INELIGIBLE when one demand cannot use the Location.
     * @return ?string
     */
    public function getDemandKey(): ?string { return $this->get('demand_key'); }
    public function hasDemandKey(): bool { return $this->has('demand_key'); }
    /** Shape $ (Value): string. On ACTIVE_DEMO_SESSION_EXISTS and DEMO_SESSION_SECRET_REPLAY_EXPIRED, the ID of this client's current demo session. Send it to POST /v1/demo-sessions/reset to replace that session.
     * @return ?string
     */
    public function getDemoSessionId(): ?string { return $this->get('demo_session_id'); }
    public function hasDemoSessionId(): bool { return $this->has('demo_session_id'); }
    /** Shape $ (Value): string. Stable dependency category blocking a Location lifecycle transition. Value enum: "devices", "fulfillment", "inventory_allocation_policies", "inventory_claims", "inventory_counts", "inventory_levels", "inventory_transfers", "settings".
     * @return ?string
     */
    public function getDependencyType(): ?string { return $this->get('dependency_type'); }
    public function hasDependencyType(): bool { return $this->has('dependency_type'); }
    /** Shape $ (Value): string. On INVENTORY_LOCATION_INELIGIBLE, why the Location in location_id cannot supply the demand. Value enum: "location_not_active", "inventory_allocation_inactive", "forced_location_mismatch", "fulfillment_incompatible", "split_prohibited", "insufficient_quantity".
     * @return ?string
     */
    public function getEligibilityReason(): ?string { return $this->get('eligibility_reason'); }
    public function hasEligibilityReason(): bool { return $this->has('eligibility_reason'); }
    /** Shape $ (Value): string. ID of the open checkout session that already owns the order. Sent on CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED, ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE, and ORDER_CUSTOMER_CHECKOUT_ACTIVE. Recover the session from this field, not from message.
     * @return ?string
     */
    public function getExistingCheckoutSessionId(): ?string { return $this->get('existing_checkout_session_id'); }
    public function hasExistingCheckoutSessionId(): bool { return $this->has('existing_checkout_session_id'); }
    /** Shape $ (Value): {@see MoneyValue}. On ORDER_CHANGED_REFRESH_REQUIRED when you resume a payment attempt, the outstanding balance the attempt started with. expected_outstanding_money must match it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getExpectedAttemptOutstandingMoney(): ?MoneyValue { return $this->get('expected_attempt_outstanding_money'); }
    public function hasExpectedAttemptOutstandingMoney(): bool { return $this->has('expected_attempt_outstanding_money'); }
    /** Shape $ (Value): string. Delivery pricing failure category on SUBSCRIPTION_DELIVERY_UNAVAILABLE, when the rate cannot be calculated. Value enum: "dependency_failure", "timeout", "malformed_response", "callback_transport_failure", "callback_circuit_open", "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure", "option_lifetime_too_short", "geography_failure", "routing_failure", "invalid_configuration", "invalid_buyer_input", "address_verification_failed", "address_could_not_be_verified".
     * @return ?string
     */
    public function getFailureCategory(): ?string { return $this->get('failure_category'); }
    public function hasFailureCategory(): bool { return $this->has('failure_category'); }
    /** Shape $ (Value): string. Decline reason for a failed payment, from the same vocabulary as the payment's last_payment_error.code. Unrecognized provider reasons are payment_failed. Value enum: "card_declined", "insufficient_funds", "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized", "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required", "payment_blocked", "expired_card", "incorrect_cvc", "lost_card", "stolen_card", "do_not_honor", "fraudulent", "processing_error", "payment_method_unavailable", "payment_method_declined", "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable", "payment_failed".
     * @return ?string
     */
    public function getFailureCode(): ?string { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** Shape $ (Value): {@see MoneyValue}. Additional money amount needed to satisfy the threshold, when the error is threshold-based. On ORDER_TOTAL_BELOW_NET_COLLECTED, how far current_money falls below required_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getGapMoney(): ?MoneyValue { return $this->get('gap_money'); }
    public function hasGapMoney(): bool { return $this->has('gap_money'); }
    /** Shape $ (Value): string. Merchant-provided buyer-facing text on PAYMENT_LINK_INACTIVE. Present only when the merchant set an inactive message.
     * @return ?string
     */
    public function getInactiveMessage(): ?string { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** Shape $ (Value): string. Inventory count line this conflict concerns. Sent on VERSION_CONFLICT for physical observations and INVENTORY_SOURCE_SEQUENCE_CHANGED.
     * @return ?string
     */
    public function getInventoryCountLineId(): ?string { return $this->get('inventory_count_line_id'); }
    public function hasInventoryCountLineId(): bool { return $this->has('inventory_count_line_id'); }
    /** Shape $ (Value): string. Inventory item this failure concerns. Sent on INVENTORY_INSUFFICIENT, INVENTORY_LOCATION_INELIGIBLE, VERSION_CONFLICT for physical observations, and INVENTORY_SOURCE_SEQUENCE_CHANGED.
     * @return ?string
     */
    public function getInventoryItemId(): ?string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Shape $ (Value): string. ID of the invoice payment attempt this error concerns. On INVOICE_PAYMENT_ATTEMPT_ACTIVE and INVOICE_PAYMENT_PROCESSING, the invoice's open payment attempt.
     * @return ?string
     */
    public function getInvoicePaymentAttemptId(): ?string { return $this->get('invoice_payment_attempt_id'); }
    public function hasInvoicePaymentAttemptId(): bool { return $this->has('invoice_payment_attempt_id'); }
    /** Shape $ (Value): boolean. Whether the payment attempt identified by order_payment_attempt_id or invoice_payment_attempt_id can be resumed. On order payment attempt errors, if false, read payment_attempt_status before starting another payment. Invoice payment attempt errors always send false.
     * @return ?bool
     */
    public function getIsResumable(): ?bool { return $this->get('is_resumable'); }
    public function hasIsResumable(): bool { return $this->has('is_resumable'); }
    /** Shape $ (Value): integer string. The limit that was reached. On RISK_RULE_LIMIT_REACHED, the most enabled risk rules in the environment. On PAYMENT_INTENT_LIMIT_REACHED, the most payment intents an order can have over its lifetime. On SUBSCRIPTION_PAYMENT_RETRY_LIMIT_REACHED, the most payment retries a subscription allows in one billing period. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return ?string
     */
    public function getLimit(): ?string { return $this->get('limit'); }
    public function hasLimit(): bool { return $this->has('limit'); }
    /** Shape $ (Value): string. Key of the line item whose modifiers changed: the payment link line item key when the checkout came from a payment link, otherwise the order line item ID.
     * @return ?string
     */
    public function getLineItemKey(): ?string { return $this->get('line_item_key'); }
    public function hasLineItemKey(): bool { return $this->has('line_item_key'); }
    /** Shape $ (Value): string. Location this failure concerns. Sent on INVENTORY_LOCATION_INELIGIBLE, VERSION_CONFLICT for physical observations, INVENTORY_SOURCE_SEQUENCE_CHANGED, PICKUP_LOCATION_INACTIVE, PICKUP_LOCATION_INVENTORY_UNAVAILABLE, PICKUP_LOCATION_GEOGRAPHY_UNAVAILABLE, and PICKUP_LOCATION_DEPENDENCY_FAILURE.
     * @return ?string
     */
    public function getLocationId(): ?string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): string. On INVENTORY_LOCATION_INELIGIBLE, the routing outcome for the Location in location_id: for the demand in demand_key when present, otherwise for every demand. Value enum: "ineligible".
     * @return ?string
     */
    public function getLocationOutcome(): ?string { return $this->get('location_outcome'); }
    public function hasLocationOutcome(): bool { return $this->has('location_outcome'); }
    /** Shape $ (Value): {@see MoneyValue}. Maximum money amount accepted by the failed validation, calculated from the current resource state. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getMaximumMoney(): ?MoneyValue { return $this->get('maximum_money'); }
    public function hasMaximumMoney(): bool { return $this->has('maximum_money'); }
    /** Shape $ (Value): string. Human-readable explanation of this failure for your logs. The wording can change, so branch on code.
     * @return string
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Shape $ (Value): Array of string. Unsatisfied entries from scope_requirement after write-implies-read evaluation. Shape $[] (Value): string.
     * @return ?list<string>
     */
    public function getMissingScopes(): ?array { return $this->get('missing_scopes'); }
    public function hasMissingScopes(): bool { return $this->has('missing_scopes'); }
    /** Shape $ (Value): string. Existing order charge this failure concerns. Set when the order charge is already on the order; when the request body does not contain it, param is omitted and details name the affected fields relative to this order charge. pattern: ^och_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getOrderChargeId(): ?string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** Shape $ (Value): string. Renewal order whose payment attempt failed.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string. Existing order line item this failure concerns. Set when the order line item is already on the order; when the request body does not contain it, param is omitted and details name the affected fields relative to this order line item. pattern: ^li_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getOrderLineItemId(): ?string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Shape $ (Value): string. ID of the order payment attempt this error concerns. On ORDER_PAYMENT_ATTEMPT_ACTIVE, the order's active payment attempt. On PAYMENT_ATTEMPT_NOT_RESUMABLE, the order payment attempt that can no longer be resumed. On INVALID_REQUEST with param order_payment_attempt_id, the order payment attempt that owns the payment intent.
     * @return ?string
     */
    public function getOrderPaymentAttemptId(): ?string { return $this->get('order_payment_attempt_id'); }
    public function hasOrderPaymentAttemptId(): bool { return $this->has('order_payment_attempt_id'); }
    /** Shape $ (Value): string. Public JSON request field path associated with this failure. Always present on INVALID_REQUEST details; body for a whole-body failure, or the header name for a header.
     * @return ?string
     */
    public function getParam(): ?string { return $this->get('param'); }
    public function hasParam(): bool { return $this->has('param'); }
    /** Shape $ (Value): string. Status of the payment attempt identified by order_payment_attempt_id or invoice_payment_attempt_id when the error was returned. Value enum: "open", "requires_action", "processing", "requires_capture", "requires_retry", "finalizing", "partially_succeeded", "succeeded", "failed", "canceled", "expired".
     * @return ?string
     */
    public function getPaymentAttemptStatus(): ?string { return $this->get('payment_attempt_status'); }
    public function hasPaymentAttemptStatus(): bool { return $this->has('payment_attempt_status'); }
    /** Shape $ (Value): Array of string. Payment intent IDs this error concerns. On ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE and CHECKOUT_SPLIT_PAYMENT_UNSUPPORTED, the order's unpaid payment intents, which you can cancel to collect the order through hosted checkout. On INVALID_REQUEST with param payment_intent_id, the selected payment intent that this order does not own. Shape $[] (Value): string.
     * @return ?list<string>
     */
    public function getPaymentIntentIds(): ?array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** Shape $ (Value): string. On ALREADY_EXISTS, the ID of the payment method domain already registered for this domain_name. Use it instead of registering the domain again.
     * @return ?string
     */
    public function getPaymentMethodDomainId(): ?string { return $this->get('payment_method_domain_id'); }
    public function hasPaymentMethodDomainId(): bool { return $this->has('payment_method_domain_id'); }
    /** Shape $ (Value): string. Flint payment option associated with this error, when the error is about a specific requested or selected payment option. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return ?string
     */
    public function getPaymentOption(): ?string { return $this->get('payment_option'); }
    public function hasPaymentOption(): bool { return $this->has('payment_option'); }
    /** Shape $ (Value): string. RFC 3339 timestamp in UTC when the new account payout terms end on NEW_ACCOUNT_PAYOUT_TERMS_ACTIVE. Sent at second precision. Choose an allowed schedule or delay, or make the change after this time. Format: date-time.
     * @return ?string
     */
    public function getPayoutTermsExpiresAt(): ?string { return $this->get('payout_terms_expires_at'); }
    public function hasPayoutTermsExpiresAt(): bool { return $this->has('payout_terms_expires_at'); }
    /** Shape $ (Value): string. RFC 3339 timestamp when the previous signing key expires on DELIVERY_RATE_CALLBACK_SECRET_ROTATION_OVERLAP_ACTIVE. Retry after this time, or revoke the current key before rotating if it leaked. Format: date-time.
     * @return ?string
     */
    public function getPreviousKeyExpiresAt(): ?string { return $this->get('previous_key_expires_at'); }
    public function hasPreviousKeyExpiresAt(): bool { return $this->has('previous_key_expires_at'); }
    /** Shape $ (Value): string. Product associated with the error.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): {@see QuotaDetails}. Structured resource quota state when the error is caused by quota exhaustion. Storage usage and limits for a resource, returned in the error details when an image quota is exhausted.
     * @return ?QuotaDetails
     */
    public function getQuota(): ?QuotaDetails { return $this->get('quota'); }
    public function hasQuota(): bool { return $this->has('quota'); }
    /** Shape $ (Value): string. Stable Flint reason associated with this error. When code is ACTION_NOT_ALLOWED, one of: already_applied, archived, authorization_expired, bank_return_not_contestable, cancellation_scheduled, configuration_required, credit_exceeds_charge, credit_note_tax_reconciliation_required, customer_account_mode_conflict, delivery_hold, delivery_requirement_changes, derived_from_packages, destination_not_served, dispute_payment_unavailable, existing_order_checkout, external_billing_schedule, field_locked, image_ingestion_restart_required, in_progress, initial_payment_pending, inventory_wait, invoice_finalized, managed_by_owner, managed_externally, merchant_hosted_customer_accounts, merchant_managed_receipts, method_unavailable, not_itemized, not_offered, not_paused, offer_subscription, on_hold, order_owned, payment_collected, payment_disputed, payment_required, payout_delay, payout_frequency, period_end_unavailable, reconciliation_required, refund_created, refund_unavailable, return_checkout, return_tax_mismatch, status_not_reached, store_credit_unavailable, subscription_terms_locked, terminal_status, test_event, trial_in_progress, unsupported_state, verification_required. When code is ALREADY_EXISTS, one of: hardware_fingerprint_already_exists. When code is CHECKOUT_SESSION_MODIFIERS_READ_ONLY, one of: existing_order_checkout, invoice_finalized, subscription_terms_locked. When code is CONCURRENT_MODIFICATION, one of: credit_note_creditable_value_changed, credit_note_refund_retry_exhausted. When code is DELIVERY_REQUOTE_REQUIRED, one of: calculation_expired, caller_rates_required, destination_changed, option_expired, quote_expired, quote_revoked, quote_stale, selection_changed, selection_expired, window_expired. When code is EXTERNAL_SERVICE_ERROR, one of: image_ingestion_restart_required, rate_unavailable. When code is FORBIDDEN, one of: checkout_launch_token_restricted, checkout_recovery_attempt_mismatch, checkout_recovery_restricted, checkout_session_order_mismatch, checkout_session_payment_required, demo_session_route_not_allowed, direct_owner_required, environment_mismatch, expansion_not_permitted, live_mode_required, merchant_access_required, merchant_credential_required, merchant_role_insufficient, not_checkout_session, not_permitted, oauth_context_mismatch, organization_live_mode_required, organization_membership_required, organization_role_insufficient, owner_workflow_required, partner_app_management_requires_live_key, request_blocked, role_not_assignable, sandbox_management_requires_live_key, sandbox_not_accessible, sandbox_selection_forbidden, self_role_edit_forbidden. When code is FULFILLMENT_METHOD_UNAVAILABLE, one of: active, archived, inactive, invalid_configuration, not_found, not_publishable, revision_unavailable, unsupported_evaluation_schema. When code is GIFT_CARD_CHALLENGE_REQUIRED, one of: page_origin_required, proof_rejected, proof_required. When code is GIFT_CARD_FUNDING_LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily, merchant_adjustments_daily, merchant_imports_daily. When code is IMAGE_INGESTION_EXPIRED, one of: image_ingestion_restart_required. When code is IMAGE_INGESTION_IN_PROGRESS, one of: image_ingestion_restart_required. When code is IMAGE_INGESTION_RESTART_REQUIRED, one of: image_ingestion_restart_required. When code is IMAGE_PROCESSING_CAPACITY_EXCEEDED, one of: image_ingestion_restart_required. When code is IMAGE_PROCESSING_FAILED, one of: image_ingestion_restart_required. When code is IMAGE_PROCESSING_TIMEOUT, one of: image_ingestion_restart_required. When code is IMAGE_SOURCE_TIMEOUT, one of: image_ingestion_restart_required. When code is IMAGE_SOURCE_UNAVAILABLE, one of: image_ingestion_restart_required. When code is IMAGE_STORAGE_QUOTA_EXCEEDED, one of: image_ingestion_restart_required. When code is INTERNAL_ERROR, one of: image_ingestion_restart_required, repair_required. When code is INVALID_CREDENTIAL, one of: expired, malformed, mode_mismatch, revoked, session_ended, unknown, wrong_credential_type. When code is INVALID_REQUEST, one of: image_ingestion_restart_required. When code is INVENTORY_INSUFFICIENT, one of: location_ineligible, location_limit. When code is LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily, merchant_adjustments_daily, merchant_imports_daily. When code is LIMIT_REACHED, one of: checkout_tax_calculations, consecutive_skips, daily_gift_card_purchases, delivery_selection_replacements, enabled_risk_rules, external_paid_orders, image_storage, monthly_tax_calculations, payment_intents_per_order, payment_link_completions, payment_retries_per_period, receipt_recipients, saved_card_codes, verification_attempts, verification_codes, workload_identities. When code is MERCHANT_NOT_READY, one of: account_sessions_unavailable, account_setup_repair_required, account_setup_unavailable, billing_suspended, capability_blocked, capability_not_requested, capability_pending, capability_unavailable, default_environment_required, disabled_by_merchant_settings, disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled, onboarding_required, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable, pricing_not_authorized, processing_not_enabled, processing_restricted, processor_not_configured, requirements_due, tax_category_required, under_review. When code is MONEY_MOVEMENT_OPERATION_BLOCKED, one of: capability_blocked, capability_pending, disabled_by_merchant_settings, disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable, requirements_due. When code is ORDER_DELIVERY_DESTINATION_REPRICE_REQUIRED, one of: method_unavailable, shipping_changed, tax_changed. When code is ORDER_TAX_NOT_READY, one of: return_tax_mismatch. When code is PAYMENT_INTENT_DISPUTED, one of: payment_disputed. When code is PAYMENT_OPTION_NOT_READY, one of: amount_out_of_range, bounded_inventory_guarantee_not_supported, capability_blocked, capability_pending, checkout_order_ownership_required, country_not_supported, country_required, currency_not_supported, disabled_by_merchant_settings, disabled_by_platform_policy, limited_benefit_capacity_not_supported, manual_capture_not_supported, merchant_account_action_required, merchant_payments_disabled, not_supported, off_session_not_supported, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, recurring_ach_not_supported, recurring_not_supported, redirects_required, requirements_due, source_delayed_settlement_not_supported, source_not_supported, split_payment_not_supported, surface_not_supported, unsupported_use. When code is PAYMENT_OPTION_UNAVAILABLE, one of: action_window_too_short, amount_out_of_range, capability_blocked, capability_pending, disabled_by_merchant_settings, disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable, requirements_due, risk_action_unsupported, transaction_purpose_unresolved. When code is PAYMENT_PROCESSING_UNAVAILABLE, one of: capability_blocked, capability_pending, disabled_by_merchant_settings, disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled, payment_account_context_invalid, payment_account_setup_incomplete, payment_option_access_not_provisioned, payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable, requirements_due. When code is PROMOTION_DECLINED, one of: already_applied, automatic_disabled, buy_item_missing, code_invalid, code_required, codes_disabled, currency_mismatch, exhausted, expired, inactive, max_promotions_reached, minimum_not_met, no_discountable_balance, not_combinable, not_eligible, not_yet_started, superseded, superseded_by_better_offer, superseded_by_higher_priority, unknown_type. When code is PROMOTION_NOT_REDEEMABLE, one of: already_applied, automatic_disabled, buy_item_missing, code_invalid, code_required, codes_disabled, currency_mismatch, exhausted, expired, inactive, max_promotions_reached, minimum_not_met, no_discountable_balance, not_combinable, not_eligible, not_yet_started, superseded, superseded_by_better_offer, superseded_by_higher_priority, unknown_type. When code is REQUEST_TIMEOUT, one of: image_ingestion_restart_required. When code is RESOURCE_IN_USE, one of: selected_by_active_variants. When code is RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_FLOW, one of: allow, block, require_3ds, review. When code is RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_OPTION, one of: allow, block, require_3ds, review. When code is SAVE_PAYMENT_METHOD_NOT_OFFERED, one of: card_unavailable, customer_unavailable, ineligible_origin, merchant_hosted_customer_accounts, not_checkout_session, partial_payment, return_checkout, session_not_open, setting_off, subscription_checkout. When code is SERVICE_UNAVAILABLE, one of: image_ingestion_restart_required, outcome_unknown, repair_required. When code is SUBSCRIPTION_DELIVERY_UNAVAILABLE, one of: configuration_required, destination_not_served, method_unavailable, rate_unavailable. When code is SUBSCRIPTION_OFFER_PROMOTION_UNAVAILABLE, one of: already_applied, archived, automatic_disabled, buy_item_missing, code_invalid, code_required, codes_disabled, currency_mismatch, exhausted, expired, inactive, max_promotions_reached, minimum_not_met, no_discountable_balance, not_combinable, not_eligible, not_yet_started, superseded, superseded_by_better_offer, superseded_by_higher_priority, unknown_type. Additional reasons may be added. Value enum: "account_sessions_unavailable", "account_setup_repair_required", "account_setup_unavailable", "action_window_too_short", "active", "allow", "already_applied", "amount_out_of_range", "archived", "authorization_expired", "automatic_disabled", "bank_return_not_contestable", "billing_suspended", "block", "bounded_inventory_guarantee_not_supported", "buy_item_missing", "buyer_daily", "calculation_expired", "caller_rates_required", "cancellation_scheduled", "capability_blocked", "capability_not_requested", "capability_pending", "capability_unavailable", "card_balance", "card_daily", "card_unavailable", "checkout_launch_token_restricted", "checkout_order_ownership_required", "checkout_recovery_attempt_mismatch", "checkout_recovery_restricted", "checkout_session_order_mismatch", "checkout_session_payment_required", "checkout_tax_calculations", "code_invalid", "code_required", "codes_disabled", "configuration_required", "consecutive_skips", "country_not_supported", "country_required", "credit_exceeds_charge", "credit_note_creditable_value_changed", "credit_note_refund_retry_exhausted", "credit_note_tax_reconciliation_required", "currency_mismatch", "currency_not_supported", "customer_account_mode_conflict", "customer_unavailable", "daily_gift_card_purchases", "default_environment_required", "delivery_hold", "delivery_requirement_changes", "delivery_selection_replacements", "demo_session_route_not_allowed", "derived_from_packages", "destination_changed", "destination_not_served", "direct_owner_required", "disabled_by_merchant_settings", "disabled_by_platform_policy", "dispute_payment_unavailable", "enabled_risk_rules", "environment_mismatch", "exhausted", "existing_order_checkout", "expansion_not_permitted", "expired", "external_billing_schedule", "external_paid_orders", "field_locked", "hardware_fingerprint_already_exists", "image_ingestion_restart_required", "image_storage", "in_progress", "inactive", "ineligible_origin", "initial_payment_pending", "invalid_configuration", "inventory_wait", "invoice_finalized", "limited_benefit_capacity_not_supported", "live_mode_required", "location_ineligible", "location_limit", "malformed", "managed_by_owner", "managed_externally", "manual_capture_not_supported", "max_promotions_reached", "merchant_access_required", "merchant_account_action_required", "merchant_adjustments_daily", "merchant_credential_required", "merchant_hosted_customer_accounts", "merchant_imports_daily", "merchant_managed_receipts", "merchant_payments_disabled", "merchant_role_insufficient", "method_unavailable", "minimum_not_met", "mode_mismatch", "monthly_tax_calculations", "no_discountable_balance", "not_checkout_session", "not_combinable", "not_eligible", "not_found", "not_itemized", "not_offered", "not_paused", "not_permitted", "not_publishable", "not_supported", "not_yet_started", "oauth_context_mismatch", "off_session_not_supported", "offer_subscription", "on_hold", "onboarding_required", "option_expired", "order_owned", "organization_live_mode_required", "organization_membership_required", "organization_role_insufficient", "outcome_unknown", "owner_workflow_required", "page_origin_required", "partial_payment", "partner_app_management_requires_live_key", "payment_account_context_invalid", "payment_account_setup_incomplete", "payment_collected", "payment_disputed", "payment_intents_per_order", "payment_link_completions", "payment_option_access_not_provisioned", "payment_option_activation_pending", "payment_option_not_available", "payment_option_not_in_plan", "payment_required", "payment_retries_per_period", "payout_delay", "payout_frequency", "period_end_unavailable", "platform_funding_unavailable", "pricing_not_authorized", "processing_not_enabled", "processing_restricted", "processor_not_configured", "proof_rejected", "proof_required", "quote_expired", "quote_revoked", "quote_stale", "rate_unavailable", "receipt_recipients", "reconciliation_required", "recurring_ach_not_supported", "recurring_not_supported", "redirects_required", "refund_created", "refund_unavailable", "repair_required", "request_blocked", "require_3ds", "requirements_due", "return_checkout", "return_tax_mismatch", "review", "revision_unavailable", "revoked", "risk_action_unsupported", "role_not_assignable", "sandbox_management_requires_live_key", "sandbox_not_accessible", "sandbox_selection_forbidden", "saved_card_codes", "selected_by_active_variants", "selection_changed", "selection_expired", "self_role_edit_forbidden", "session_ended", "session_not_open", "setting_off", "shipping_changed", "source_delayed_settlement_not_supported", "source_not_supported", "split_payment_not_supported", "status_not_reached", "store_credit_unavailable", "subscription_checkout", "subscription_terms_locked", "superseded", "superseded_by_better_offer", "superseded_by_higher_priority", "surface_not_supported", "tax_category_required", "tax_changed", "terminal_status", "test_event", "transaction_purpose_unresolved", "trial_in_progress", "under_review", "unknown", "unknown_type", "unsupported_evaluation_schema", "unsupported_state", "unsupported_use", "verification_attempts", "verification_codes", "verification_required", "window_expired", "workload_identities", "wrong_credential_type".
     * @return ?string
     */
    public function getReason(): ?string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): {@see ErrorRemediation}. Recovery guidance for this failure: whether retrying can succeed and what to do next. Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested actions.
     * @return ?ErrorRemediation
     */
    public function getRemediation(): ?ErrorRemediation { return $this->get('remediation'); }
    public function hasRemediation(): bool { return $this->has('remediation'); }
    /** Shape $ (Value): string. API key mode requested for the rejected scope grant. Value enum: "live", "test".
     * @return ?string
     */
    public function getRequestedKeyMode(): ?string { return $this->get('requested_key_mode'); }
    public function hasRequestedKeyMode(): bool { return $this->has('requested_key_mode'); }
    /** Shape $ (Value): integer string. Whole-number quantity submitted by the caller when a quantity-bearing operation conflicts with current capacity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return ?string
     */
    public function getRequestedQuantity(): ?string { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Shape $ (Value): {@see MoneyValue}. Money amount required to satisfy a minimum threshold, when the error is threshold-based. On ORDER_TOTAL_BELOW_NET_COLLECTED, the money already collected for the order. On CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE, the order's unpaid tip the invoice must keep outstanding. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getRequiredMoney(): ?MoneyValue { return $this->get('required_money'); }
    public function hasRequiredMoney(): bool { return $this->has('required_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Shipping total computed for the new destination, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getRequotedShippingMoney(): ?MoneyValue { return $this->get('requoted_shipping_money'); }
    public function hasRequotedShippingMoney(): bool { return $this->has('requoted_shipping_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Tax total computed for the new destination, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getRequotedTaxMoney(): ?MoneyValue { return $this->get('requoted_tax_money'); }
    public function hasRequotedTaxMoney(): bool { return $this->has('requoted_tax_money'); }
    /** Shape $ (Value): string. ID of the referenced public resource, when available.
     * @return ?string
     */
    public function getResourceId(): ?string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** Shape $ (Value): string. Public resource named by RESOURCE_NOT_FOUND or a generic conflict: a ResourceType value, or resource when the resource has no public type.
     * @return ?string
     */
    public function getResourceType(): ?string { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** Shape $ (Value): string. On RETURN_CHECKOUT_REQUIRED, the return resolution whose balance the order collects. Create the checkout session with POST /v1/return-resolutions/{return_resolution_id}/checkout-session instead.
     * @return ?string
     */
    public function getReturnResolutionId(): ?string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Shape $ (Value): Array of string. On RESOURCE_IN_USE, the enabled risk rules that reference the list. Archive or disable them before you archive the list. Shape $[] (Value): string.
     * @return ?list<string>
     */
    public function getRiskRuleIds(): ?array { return $this->get('risk_rule_ids'); }
    public function hasRiskRuleIds(): bool { return $this->has('risk_rule_ids'); }
    /** Shape $ (Value): string. Canonical public scope rejected by validation, when the detail concerns one scope.
     * @return ?string
     */
    public function getScope(): ?string { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
    /** Shape $ (Value): {@see ScopeRequirement}. Complete route or delegation scope requirement for an INSUFFICIENT_SCOPE error. The scopes an authorization decision required and whether `all` or `any` of them were needed, returned in error details.
     * @return ?ScopeRequirement
     */
    public function getScopeRequirement(): ?ScopeRequirement { return $this->get('scope_requirement'); }
    public function hasScopeRequirement(): bool { return $this->has('scope_requirement'); }
    /** Shape $ (Value): Array of {@see SelectableMerchant}. Merchants available to this developer identity when code is MERCHANT_SELECTION_REQUIRED or INVALID_MERCHANT_SELECTION. Retry with one of the returned merchant_id values. Shape $[] (Value): {@see SelectableMerchant}. A merchant the caller can pick from, with its ID and business name, returned in error details when a merchant must be chosen.
     * @return ?list<SelectableMerchant>
     */
    public function getSelectableMerchants(): ?array { return $this->get('selectable_merchants'); }
    public function hasSelectableMerchants(): bool { return $this->has('selectable_merchants'); }
    /** Shape $ (Value): Array of {@see SelectableOrderPaymentIntent}. On PAYMENT_LEG_SELECTION_REQUIRED, the order's payment intents you can choose from. Retry with a payment_intents selection built from these. Shape $[] (Value): {@see SelectableOrderPaymentIntent}. A payment intent on an order the caller can pick, with its amount, status, and last payment error.
     * @return ?list<SelectableOrderPaymentIntent>
     */
    public function getSelectablePaymentIntents(): ?array { return $this->get('selectable_payment_intents'); }
    public function hasSelectablePaymentIntents(): bool { return $this->has('selectable_payment_intents'); }
    /** Shape $ (Value): {@see MoneyValue}. Committed shipping total on the paid order when its destination cannot change without repricing. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getShippingMoney(): ?MoneyValue { return $this->get('shipping_money'); }
    public function hasShippingMoney(): bool { return $this->has('shipping_money'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return ?string
     */
    public function getShortageQuantity(): ?string { return $this->get('shortage_quantity'); }
    public function hasShortageQuantity(): bool { return $this->has('shortage_quantity'); }
    /** Shape $ (Value): {@see MoneyValue}. Amount from your request that failed the check. On TIP_ALLOCATION_CAPACITY_EXCEEDED, the unpaid tip the payment would have to carry. On ORDER_CHANGED_REFRESH_REQUIRED, the expected_outstanding_money you sent, or the total of the selected payment legs when they do not fit the outstanding balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getSubmittedMoney(): ?MoneyValue { return $this->get('submitted_money'); }
    public function hasSubmittedMoney(): bool { return $this->has('submitted_money'); }
    /** Shape $ (Value): integer string. Absolute source sequence submitted for this inventory count line. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return ?string
     */
    public function getSubmittedSourceObservationSequence(): ?string { return $this->get('submitted_source_observation_sequence'); }
    public function hasSubmittedSourceObservationSequence(): bool { return $this->has('submitted_source_observation_sequence'); }
    /** Shape $ (Value): string. Subscription delivery migration associated with the error.
     * @return ?string
     */
    public function getSubscriptionDeliveryMigrationId(): ?string { return $this->get('subscription_delivery_migration_id'); }
    public function hasSubscriptionDeliveryMigrationId(): bool { return $this->has('subscription_delivery_migration_id'); }
    /** Shape $ (Value): string. Subscription offer associated with the error.
     * @return ?string
     */
    public function getSubscriptionOfferId(): ?string { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
    /** Shape $ (Value): string. Subscription plan line item associated with the error.
     * @return ?string
     */
    public function getSubscriptionPlanLineItemId(): ?string { return $this->get('subscription_plan_line_item_id'); }
    public function hasSubscriptionPlanLineItemId(): bool { return $this->has('subscription_plan_line_item_id'); }
    /** Shape $ (Value): Array of string. Concrete corrective actions for this validation error. Shape $[] (Value): string.
     * @return ?list<string>
     */
    public function getSuggestions(): ?array { return $this->get('suggestions'); }
    public function hasSuggestions(): bool { return $this->has('suggestions'); }
    /** Shape $ (Value): Array of string. Actions accepted for the current resource state. Shape $[] (Value): string.
     * @return ?list<string>
     */
    public function getSupportedActions(): ?array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Shape $ (Value): Array of string. On INVALID_REQUEST with param Flint-Version, and on API_VERSION_RETIRED, the API versions you can use now. Shape $[] (Value): string.
     * @return ?list<string>
     */
    public function getSupportedApiVersions(): ?array { return $this->get('supported_api_versions'); }
    public function hasSupportedApiVersions(): bool { return $this->has('supported_api_versions'); }
    /** Shape $ (Value): string. On CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED, the current surface of the checkout session in existing_checkout_session_id: hosted or embedded. Request this surface to keep using that session.
     * @return ?string
     */
    public function getSurface(): ?string { return $this->get('surface'); }
    public function hasSurface(): bool { return $this->has('surface'); }
    /** Shape $ (Value): {@see MoneyValue}. Committed tax total on a paid order when its destination cannot change without repricing. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getTaxMoney(): ?MoneyValue { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Shape $ (Value): {@see MoneyValue}. On TIP_ALLOCATION_CAPACITY_EXCEEDED, the largest tip the payment can carry: the balance left to collect. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getTipCapableMoney(): ?MoneyValue { return $this->get('tip_capable_money'); }
    public function hasTipCapableMoney(): bool { return $this->has('tip_capable_money'); }
    /** Shape $ (Value): string. Delivery eligibility reason on SUBSCRIPTION_DELIVERY_UNAVAILABLE, when the selected method is unavailable. Value enum: "destination_not_served", "pickup_unavailable", "no_window_available", "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable", "inventory_unavailable".
     * @return ?string
     */
    public function getUnavailableReason(): ?string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
    /** Shape $ (Value): string. Variant associated with the error.
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
