<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string> $caller_type
 * @property-read string $caller_id
 * @property-read string $request_id
 * @property-read string $client_request_id
 * @property-read string $client_trace_id
 * @property-read list<string> $http_method
 * @property-read string $path_query
 * @property-read list<string> $resource_type
 * @property-read string $resource_id
 * @property-read list<string> $status_bucket
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * Presence-aware input; omitted fields throw when accessed. */
final class DeveloperListCurrentAPIKeyRequestLogsInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'caller_type'?: list<string>, 'caller_id'?: string, 'request_id'?: string, 'client_request_id'?: string, 'client_trace_id'?: string, 'http_method'?: list<string>, 'path_query'?: string, 'resource_type'?: list<string>, 'resource_id'?: string, 'status_bucket'?: list<string>, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeveloperListCurrentAPIKeyRequestLogsInput')); }
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "api_key", "user", "partner_app_install", "checkout_session", "customer_session", "invoice", "workload_identity". Shape $[] (Value): string.  Value enum: "api_key", "user", "partner_app_install", "checkout_session", "customer_session", "invoice", "workload_identity".
     * @return list<string>
     * @throws SdkError When caller_type is omitted; use hasCallerType() or valueOrDefault().
     */
    public function getCallerType(): array { return $this->get('caller_type'); }
    public function hasCallerType(): bool { return $this->has('caller_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When caller_id is omitted; use hasCallerId() or valueOrDefault().
     */
    public function getCallerId(): string { return $this->get('caller_id'); }
    public function hasCallerId(): bool { return $this->has('caller_id'); }
    /** Shape $ (Value): string. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 128. pattern: ^[\x21-\x7E]+$.
     * @return string
     * @throws SdkError When client_request_id is omitted; use hasClientRequestId() or valueOrDefault().
     */
    public function getClientRequestId(): string { return $this->get('client_request_id'); }
    public function hasClientRequestId(): bool { return $this->has('client_request_id'); }
    /** Shape $ (Value): string. pattern: ^[0-9a-f]{32}$.
     * @return string
     * @throws SdkError When client_trace_id is omitted; use hasClientTraceId() or valueOrDefault().
     */
    public function getClientTraceId(): string { return $this->get('client_trace_id'); }
    public function hasClientTraceId(): bool { return $this->has('client_trace_id'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "CONNECT", "TRACE". Shape $[] (Value): string.  Value enum: "GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "CONNECT", "TRACE".
     * @return list<string>
     * @throws SdkError When http_method is omitted; use hasHttpMethod() or valueOrDefault().
     */
    public function getHttpMethod(): array { return $this->get('http_method'); }
    public function hasHttpMethod(): bool { return $this->has('http_method'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When path_query is omitted; use hasPathQuery() or valueOrDefault().
     */
    public function getPathQuery(): string { return $this->get('path_query'); }
    public function hasPathQuery(): bool { return $this->has('path_query'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "api_key", "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component", "category", "checkout_session", "checkout_session_customer_verification", "credit_note", "credit_note_allocation", "custom_domain", "customer", "customer_address", "customer_deletion_request", "customer_session", "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone", "device", "discount", "dispute", "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "inventory_adjustment", "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count", "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation", "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location", "merchant", "merchant_billing_balance", "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt", "organization", "package", "package_item", "partner_app", "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review", "payout", "payout_destination", "payout_settings", "product", "product_option", "product_option_value", "product_variant", "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment", "report", "report_download", "return", "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy", "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item", "subscription_offer", "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item", "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity". Shape $[] (Value): string.  Value enum: "api_key", "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component", "category", "checkout_session", "checkout_session_customer_verification", "credit_note", "credit_note_allocation", "custom_domain", "customer", "customer_address", "customer_deletion_request", "customer_session", "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone", "device", "discount", "dispute", "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "inventory_adjustment", "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count", "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation", "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location", "merchant", "merchant_billing_balance", "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt", "organization", "package", "package_item", "partner_app", "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review", "payout", "payout_destination", "payout_settings", "product", "product_option", "product_option_value", "product_variant", "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment", "report", "report_download", "return", "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy", "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item", "subscription_offer", "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item", "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     * @return list<string>
     * @throws SdkError When resource_type is omitted; use hasResourceType() or valueOrDefault().
     */
    public function getResourceType(): array { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When resource_id is omitted; use hasResourceId() or valueOrDefault().
     */
    public function getResourceId(): string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "success", "client_error", "server_error". Shape $[] (Value): string.  Value enum: "success", "client_error", "server_error".
     * @return list<string>
     * @throws SdkError When status_bucket is omitted; use hasStatusBucket() or valueOrDefault().
     */
    public function getStatusBucket(): array { return $this->get('status_bucket'); }
    public function hasStatusBucket(): bool { return $this->has('status_bucket'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_after is omitted; use hasCreatedAfter() or valueOrDefault().
     */
    public function getCreatedAfter(): string|\DateTimeInterface { return $this->get('created_after'); }
    public function hasCreatedAfter(): bool { return $this->has('created_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_before is omitted; use hasCreatedBefore() or valueOrDefault().
     */
    public function getCreatedBefore(): string|\DateTimeInterface { return $this->get('created_before'); }
    public function hasCreatedBefore(): bool { return $this->has('created_before'); }
}
