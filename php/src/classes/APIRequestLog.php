<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_request_log_id
 * @property-read ?ResourceReference $caller
 * @property-read ?string $client_request_id
 * @property-read ?string $client_trace_id
 * @property-read string $created_at
 * @property-read ?string $customer_id
 * @property-read ?string $error_code
 * @property-read ?string $error_summary
 * @property-read ?string $error_type
 * @property-read ?list<string> $expand
 * @property-read string $http_method
 * @property-read int $latency_milliseconds
 * @property-read ?string $partner_app_id
 * @property-read string $path
 * @property-read ?string $recommended_action
 * @property-read ?string $reference_url
 * @property-read string $request_id
 * @property-read ?string $requested_api_version
 * @property-read ?string $requested_api_version_source
 * @property-read ?string $resource_id
 * @property-read ?string $resource_type
 * @property-read ?string $retry
 * @property-read string $route_pattern
 * @property-read ?string $served_api_version
 * @property-read int $status_code
 * Presence-aware response; omitted optional fields return null. */
final class APIRequestLog extends Model {
    /** @param array{'api_request_log_id': string, 'caller'?: mixed, 'client_request_id'?: string, 'client_trace_id'?: string, 'created_at': string, 'customer_id'?: string, 'error_code'?: string, 'error_summary'?: string, 'error_type'?: string, 'expand'?: list<string>, 'http_method': string, 'latency_milliseconds': int, 'partner_app_id'?: string, 'path': string, 'recommended_action'?: string, 'reference_url'?: string, 'request_id': string, 'requested_api_version'?: string, 'requested_api_version_source'?: string, 'resource_id'?: string, 'resource_type'?: string, 'retry'?: string, 'route_pattern': string, 'served_api_version'?: string, 'status_code': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('APIRequestLog')); }
    /** Stable identifier of this log entry.
     * @return string
     */
    public function getApiRequestLogId(): string { return $this->get('api_request_log_id'); }
    public function hasApiRequestLogId(): bool { return $this->has('api_request_log_id'); }
    /** Who made this request. An API key, workload token, or partner app token records that API key, workload identity, or partner app installation. A Dashboard write, CLI login, or onboarding session records the user. A buyer checkout request records the checkout session. A buyer account request records the customer session. A request made with invoice access records the invoice. Absent when Flint cannot attribute the request. A reference to another resource by `resource_type` and `resource_id`.
     * @return ?ResourceReference
     */
    public function getCaller(): ?ResourceReference { return $this->get('caller'); }
    public function hasCaller(): bool { return $this->has('caller'); }
    /** The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent none. minLength: 1. maxLength: 128. pattern: ^[\x21-\x7E]+$.
     * @return ?string
     */
    public function getClientRequestId(): ?string { return $this->get('client_request_id'); }
    public function hasClientRequestId(): bool { return $this->has('client_request_id'); }
    /** The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent. pattern: ^[0-9a-f]{32}$.
     * @return ?string
     */
    public function getClientTraceId(): ?string { return $this->get('client_trace_id'); }
    public function hasClientTraceId(): bool { return $this->has('client_trace_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The customer whose customer session made this request; `caller` is the session. Absent for every other caller. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** The response's top-level error `code`. Absent for successful requests.
     * @return ?string
     */
    public function getErrorCode(): ?string { return $this->get('error_code'); }
    public function hasErrorCode(): bool { return $this->has('error_code'); }
    /** A concise explanation of why the request failed.
     * @return ?string
     */
    public function getErrorSummary(): ?string { return $this->get('error_summary'); }
    public function hasErrorSummary(): bool { return $this->has('error_summary'); }
    /** The error envelope's `type` for this response. Value enum: "authentication_error", "authorization_error", "validation_error", "not_found_error", "conflict_error", "rate_limit_error", "external_service_error", "timeout_error", "unavailable_error", "internal_error", "protocol_error".
     * @return ?string
     */
    public function getErrorType(): ?string { return $this->get('error_type'); }
    public function hasErrorType(): bool { return $this->has('error_type'); }
    /** Normalized expand paths Flint applied. Absent when the request did not use expand. [] (Value): string.
     * @return ?list<string>
     */
    public function getExpand(): ?array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
    /** HTTP method of the request.
     * @return string
     */
    public function getHttpMethod(): string { return $this->get('http_method'); }
    public function hasHttpMethod(): bool { return $this->has('http_method'); }
    /** Time Flint spent handling the request, in milliseconds. Format: int64.
     * @return int
     */
    public function getLatencyMilliseconds(): int { return $this->get('latency_milliseconds'); }
    public function hasLatencyMilliseconds(): bool { return $this->has('latency_milliseconds'); }
    /** The partner app whose partner app token made this request; `caller` is the install. Absent for every other caller. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getPartnerAppId(): ?string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Request path as sent, with real IDs, such as /v1/orders/ord_123.
     * @return string
     */
    public function getPath(): string { return $this->get('path'); }
    public function hasPath(): bool { return $this->has('path'); }
    /** The next step to resolve this failure.
     * @return ?string
     */
    public function getRecommendedAction(): ?string { return $this->get('recommended_action'); }
    public function hasRecommendedAction(): bool { return $this->has('recommended_action'); }
    /** A Flint guide that explains this failure. Absent when no guide applies. Format: uri.
     * @return ?string
     */
    public function getReferenceUrl(): ?string { return $this->get('reference_url'); }
    public function hasReferenceUrl(): bool { return $this->has('reference_url'); }
    /** Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * @return string
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
    /** The API version Flint resolved for the request.
     * @return ?string
     */
    public function getRequestedApiVersion(): ?string { return $this->get('requested_api_version'); }
    public function hasRequestedApiVersion(): bool { return $this->has('requested_api_version'); }
    /** Where `requested_api_version` came from. Absent when Flint did not record one. Value enum: "header", "partner_app", "merchant", "current".
     * @return ?string
     */
    public function getRequestedApiVersionSource(): ?string { return $this->get('requested_api_version_source'); }
    public function hasRequestedApiVersionSource(): bool { return $this->has('requested_api_version_source'); }
    /** The ID of the resource the request is about, when Flint can attribute it to one. A failed create can have a `resource_type` and no ID.
     * @return ?string
     */
    public function getResourceId(): ?string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** The kind of resource the request is about, when Flint can attribute it to one. Value enum: "api_key", "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component", "category", "checkout_session", "checkout_session_customer_verification", "credit_note", "credit_note_allocation", "custom_domain", "customer", "customer_address", "customer_deletion_request", "customer_email_preferences", "customer_session", "customer_tax_exemption", "customer_verification", "delivery_choice_group", "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone", "demo_session", "device", "discount", "dispute", "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment", "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count", "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation", "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location", "merchant", "merchant_billing_balance", "merchant_billing_entry", "merchant_billing_invoice", "merchant_signup", "modifier", "modifier_group", "modifier_set", "order", "order_charge", "order_edit", "order_line_item", "order_line_item_modifier", "order_payment_attempt", "package", "package_item", "partner_app", "partner_app_credential", "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review", "payment_split", "payout", "payout_destination", "payout_settings", "platform_fee", "platform_fee_balance_transaction", "platform_fee_payout", "price_list", "price_list_price", "product", "product_option", "product_option_value", "product_variant", "promotion", "promotion_code", "purchase_refund_allocation", "reader", "refund", "refund_allocation", "refund_line_item_adjustment", "remembered_buyer", "report", "report_download", "return", "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy", "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item", "subscription_offer", "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item", "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket", "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     * @return ?string
     */
    public function getResourceType(): ?string { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Value enum: "same_request", "after_refresh", "none".
     * @return ?string
     */
    public function getRetry(): ?string { return $this->get('retry'); }
    public function hasRetry(): bool { return $this->has('retry'); }
    /** The matched route as a method and path template, such as `POST /v1/orders`.
     * @return string
     */
    public function getRoutePattern(): string { return $this->get('route_pattern'); }
    public function hasRoutePattern(): bool { return $this->has('route_pattern'); }
    /** The API version Flint used to encode the response.
     * @return ?string
     */
    public function getServedApiVersion(): ?string { return $this->get('served_api_version'); }
    public function hasServedApiVersion(): bool { return $this->has('served_api_version'); }
    /** HTTP status Flint returned. Format: int32.
     * @return int
     */
    public function getStatusCode(): int { return $this->get('status_code'); }
    public function hasStatusCode(): bool { return $this->has('status_code'); }
}
