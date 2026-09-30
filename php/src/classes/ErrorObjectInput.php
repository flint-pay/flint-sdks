<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $capability
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $capturable_money
 * @property-read string $code
 * @property-read list<CheckoutSessionRevisionConflictDetailInput|array<array-key, mixed>|\stdClass> $conflict_details
 * @property-read list<string> $conflicting_fields
 * @property-read string $current_checkout_session_id
 * @property-read array{'amount': string, 'currency': string}|object $current_money
 * @property-read array{'completed_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'device_id'?: string, 'digital_details'?: DigitalFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'line_items': list<FulfillmentLineItemInput|array<array-key, mixed>|\stdClass>, 'local_delivery_details'?: DeliveryFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'location_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'pickup_details'?: PickupFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'recipient'?: FulfillmentRecipientInput|array<array-key, mixed>|\stdClass, 'service_details'?: ServiceFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'type': string, ...}|object|array{'external_reference_id'?: string, 'external_system'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'return_id'?: string, 'return_line_items'?: list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>, ...}|object|array{'carrier'?: string, 'dimensions'?: ShippingDimensionsInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'external_system'?: string, 'label_url'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'service_code'?: string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: ShippingWeightInput|array<array-key, mixed>|\stdClass, ...}|object $current_resource
 * @property-read string $current_selection_id
 * @property-read string $current_status
 * @property-read string $current_version
 * @property-read list<ErrorDetailInput|array<array-key, mixed>|\stdClass> $details
 * @property-read string $doc_url
 * @property-read string $error_source
 * @property-read string $existing_checkout_session_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_attempt_outstanding_money
 * @property-read array{'amount': string, 'currency': string}|object $gap_money
 * @property-read bool $is_resumable
 * @property-read string $limit
 * @property-read array{'amount': string, 'currency': string}|object $maximum_money
 * @property-read string $message
 * @property-read list<string> $missing_scopes
 * @property-read string $param
 * @property-read string $payment_attempt_id
 * @property-read string $payment_attempt_status
 * @property-read list<string> $payment_intent_ids
 * @property-read string $payment_option
 * @property-read array{'limit_bytes': string, 'next_expiration_at'?: string|\DateTimeInterface, 'ready_unattached_bytes': string, 'reserved_bytes': string, 'resource': string, 'used_bytes': string, ...}|object $quota
 * @property-read string $reason
 * @property-read ErrorRemediationInput|array<array-key, mixed>|\stdClass $remediation
 * @property-read string $request_id
 * @property-read string $request_log_url
 * @property-read array{'amount': string, 'currency': string}|object $required_money
 * @property-read array{'mode': string, 'scopes': list<string>, ...}|object $scope_requirement
 * @property-read list<SelectableOrderPaymentIntentInput|array<array-key, mixed>|\stdClass> $selectable_payment_intents
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $submitted_money
 * @property-read list<string> $supported_actions
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tip_capable_money
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class ErrorObjectInput extends Model {
    /** @param array{'capability'?: string, 'capturable_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'code': string, 'conflict_details'?: list<CheckoutSessionRevisionConflictDetailInput|array<array-key, mixed>|\stdClass>, 'conflicting_fields'?: list<string>, 'current_checkout_session_id'?: string, 'current_money'?: array{'amount': string, 'currency': string}|object, 'current_resource'?: array{'completed_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'device_id'?: string, 'digital_details'?: DigitalFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'line_items': list<FulfillmentLineItemInput|array<array-key, mixed>|\stdClass>, 'local_delivery_details'?: DeliveryFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'location_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'pickup_details'?: PickupFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'recipient'?: FulfillmentRecipientInput|array<array-key, mixed>|\stdClass, 'service_details'?: ServiceFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'type': string, ...}|object|array{'external_reference_id'?: string, 'external_system'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'return_id'?: string, 'return_line_items'?: list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>, ...}|object|array{'carrier'?: string, 'dimensions'?: ShippingDimensionsInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'external_system'?: string, 'label_url'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'service_code'?: string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: ShippingWeightInput|array<array-key, mixed>|\stdClass, ...}|object, 'current_selection_id'?: string, 'current_status'?: string, 'current_version'?: string, 'details'?: list<ErrorDetailInput|array<array-key, mixed>|\stdClass>, 'doc_url': string, 'error_source': string, 'existing_checkout_session_id'?: string, 'expected_attempt_outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'gap_money'?: array{'amount': string, 'currency': string}|object, 'is_resumable'?: bool, 'limit'?: string, 'maximum_money'?: array{'amount': string, 'currency': string}|object, 'message': string, 'missing_scopes'?: list<string>, 'param'?: string, 'payment_attempt_id'?: string, 'payment_attempt_status'?: string, 'payment_intent_ids'?: list<string>, 'payment_option'?: string, 'quota'?: array{'limit_bytes': string, 'next_expiration_at'?: string|\DateTimeInterface, 'ready_unattached_bytes': string, 'reserved_bytes': string, 'resource': string, 'used_bytes': string, ...}|object, 'reason'?: string, 'remediation'?: ErrorRemediationInput|array<array-key, mixed>|\stdClass, 'request_id'?: string, 'request_log_url'?: string, 'required_money'?: array{'amount': string, 'currency': string}|object, 'scope_requirement'?: array{'mode': string, 'scopes': list<string>, ...}|object, 'selectable_payment_intents'?: list<SelectableOrderPaymentIntentInput|array<array-key, mixed>|\stdClass>, 'submitted_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'supported_actions'?: list<string>, 'tip_capable_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ErrorObjectInput')); }
    /** @return string
     * @throws SdkError When capability is omitted; use hasCapability() or valueOrDefault().
     */
    public function getCapability(): string { return $this->get('capability'); }
    public function hasCapability(): bool { return $this->has('capability'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When capturable_money is omitted; use hasCapturableMoney() or valueOrDefault().
     */
    public function getCapturableMoney(): mixed { return $this->get('capturable_money'); }
    public function hasCapturableMoney(): bool { return $this->has('capturable_money'); }
    /** @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** @return list<CheckoutSessionRevisionConflictDetailInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When conflict_details is omitted; use hasConflictDetails() or valueOrDefault().
     */
    public function getConflictDetails(): array { return $this->get('conflict_details'); }
    public function hasConflictDetails(): bool { return $this->has('conflict_details'); }
    /** @return list<string>
     * @throws SdkError When conflicting_fields is omitted; use hasConflictingFields() or valueOrDefault().
     */
    public function getConflictingFields(): array { return $this->get('conflicting_fields'); }
    public function hasConflictingFields(): bool { return $this->has('conflicting_fields'); }
    /** @return string
     * @throws SdkError When current_checkout_session_id is omitted; use hasCurrentCheckoutSessionId() or valueOrDefault().
     */
    public function getCurrentCheckoutSessionId(): string { return $this->get('current_checkout_session_id'); }
    public function hasCurrentCheckoutSessionId(): bool { return $this->has('current_checkout_session_id'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When current_money is omitted; use hasCurrentMoney() or valueOrDefault().
     */
    public function getCurrentMoney(): array|object { return $this->get('current_money'); }
    public function hasCurrentMoney(): bool { return $this->has('current_money'); }
    /** @return array{'completed_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'device_id'?: string, 'digital_details'?: DigitalFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'line_items': list<FulfillmentLineItemInput|array<array-key, mixed>|\stdClass>, 'local_delivery_details'?: DeliveryFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'location_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'pickup_details'?: PickupFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'recipient'?: FulfillmentRecipientInput|array<array-key, mixed>|\stdClass, 'service_details'?: ServiceFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'type': string, ...}|object|array{'external_reference_id'?: string, 'external_system'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'return_id'?: string, 'return_line_items'?: list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>, ...}|object|array{'carrier'?: string, 'dimensions'?: ShippingDimensionsInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'external_system'?: string, 'label_url'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'service_code'?: string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: ShippingWeightInput|array<array-key, mixed>|\stdClass, ...}|object
     * @throws SdkError When current_resource is omitted; use hasCurrentResource() or valueOrDefault().
     */
    public function getCurrentResource(): mixed { return $this->get('current_resource'); }
    public function hasCurrentResource(): bool { return $this->has('current_resource'); }
    /** @return string
     * @throws SdkError When current_selection_id is omitted; use hasCurrentSelectionId() or valueOrDefault().
     */
    public function getCurrentSelectionId(): string { return $this->get('current_selection_id'); }
    public function hasCurrentSelectionId(): bool { return $this->has('current_selection_id'); }
    /** @return string
     * @throws SdkError When current_status is omitted; use hasCurrentStatus() or valueOrDefault().
     */
    public function getCurrentStatus(): string { return $this->get('current_status'); }
    public function hasCurrentStatus(): bool { return $this->has('current_status'); }
    /** @return string
     * @throws SdkError When current_version is omitted; use hasCurrentVersion() or valueOrDefault().
     */
    public function getCurrentVersion(): string { return $this->get('current_version'); }
    public function hasCurrentVersion(): bool { return $this->has('current_version'); }
    /** @return list<ErrorDetailInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When details is omitted; use hasDetails() or valueOrDefault().
     */
    public function getDetails(): array { return $this->get('details'); }
    public function hasDetails(): bool { return $this->has('details'); }
    /** @return string
     * @throws SdkError When doc_url is omitted; use hasDocUrl() or valueOrDefault().
     */
    public function getDocUrl(): string { return $this->get('doc_url'); }
    public function hasDocUrl(): bool { return $this->has('doc_url'); }
    /** @return string
     * @throws SdkError When error_source is omitted; use hasErrorSource() or valueOrDefault().
     */
    public function getErrorSource(): string { return $this->get('error_source'); }
    public function hasErrorSource(): bool { return $this->has('error_source'); }
    /** @return string
     * @throws SdkError When existing_checkout_session_id is omitted; use hasExistingCheckoutSessionId() or valueOrDefault().
     */
    public function getExistingCheckoutSessionId(): string { return $this->get('existing_checkout_session_id'); }
    public function hasExistingCheckoutSessionId(): bool { return $this->has('existing_checkout_session_id'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When expected_attempt_outstanding_money is omitted; use hasExpectedAttemptOutstandingMoney() or valueOrDefault().
     */
    public function getExpectedAttemptOutstandingMoney(): mixed { return $this->get('expected_attempt_outstanding_money'); }
    public function hasExpectedAttemptOutstandingMoney(): bool { return $this->has('expected_attempt_outstanding_money'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When gap_money is omitted; use hasGapMoney() or valueOrDefault().
     */
    public function getGapMoney(): array|object { return $this->get('gap_money'); }
    public function hasGapMoney(): bool { return $this->has('gap_money'); }
    /** @return bool
     * @throws SdkError When is_resumable is omitted; use hasIsResumable() or valueOrDefault().
     */
    public function getIsResumable(): bool { return $this->get('is_resumable'); }
    public function hasIsResumable(): bool { return $this->has('is_resumable'); }
    /** @return string
     * @throws SdkError When limit is omitted; use hasLimit() or valueOrDefault().
     */
    public function getLimit(): string { return $this->get('limit'); }
    public function hasLimit(): bool { return $this->has('limit'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When maximum_money is omitted; use hasMaximumMoney() or valueOrDefault().
     */
    public function getMaximumMoney(): array|object { return $this->get('maximum_money'); }
    public function hasMaximumMoney(): bool { return $this->has('maximum_money'); }
    /** @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** @return list<string>
     * @throws SdkError When missing_scopes is omitted; use hasMissingScopes() or valueOrDefault().
     */
    public function getMissingScopes(): array { return $this->get('missing_scopes'); }
    public function hasMissingScopes(): bool { return $this->has('missing_scopes'); }
    /** @return string
     * @throws SdkError When param is omitted; use hasParam() or valueOrDefault().
     */
    public function getParam(): string { return $this->get('param'); }
    public function hasParam(): bool { return $this->has('param'); }
    /** @return string
     * @throws SdkError When payment_attempt_id is omitted; use hasPaymentAttemptId() or valueOrDefault().
     */
    public function getPaymentAttemptId(): string { return $this->get('payment_attempt_id'); }
    public function hasPaymentAttemptId(): bool { return $this->has('payment_attempt_id'); }
    /** @return string
     * @throws SdkError When payment_attempt_status is omitted; use hasPaymentAttemptStatus() or valueOrDefault().
     */
    public function getPaymentAttemptStatus(): string { return $this->get('payment_attempt_status'); }
    public function hasPaymentAttemptStatus(): bool { return $this->has('payment_attempt_status'); }
    /** @return list<string>
     * @throws SdkError When payment_intent_ids is omitted; use hasPaymentIntentIds() or valueOrDefault().
     */
    public function getPaymentIntentIds(): array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** @return string
     * @throws SdkError When payment_option is omitted; use hasPaymentOption() or valueOrDefault().
     */
    public function getPaymentOption(): string { return $this->get('payment_option'); }
    public function hasPaymentOption(): bool { return $this->has('payment_option'); }
    /** @return array{'limit_bytes': string, 'next_expiration_at'?: string|\DateTimeInterface, 'ready_unattached_bytes': string, 'reserved_bytes': string, 'resource': string, 'used_bytes': string, ...}|object
     * @throws SdkError When quota is omitted; use hasQuota() or valueOrDefault().
     */
    public function getQuota(): array|object { return $this->get('quota'); }
    public function hasQuota(): bool { return $this->has('quota'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return ErrorRemediationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When remediation is omitted; use hasRemediation() or valueOrDefault().
     */
    public function getRemediation(): mixed { return $this->get('remediation'); }
    public function hasRemediation(): bool { return $this->has('remediation'); }
    /** @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
    /** @return string
     * @throws SdkError When request_log_url is omitted; use hasRequestLogUrl() or valueOrDefault().
     */
    public function getRequestLogUrl(): string { return $this->get('request_log_url'); }
    public function hasRequestLogUrl(): bool { return $this->has('request_log_url'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When required_money is omitted; use hasRequiredMoney() or valueOrDefault().
     */
    public function getRequiredMoney(): array|object { return $this->get('required_money'); }
    public function hasRequiredMoney(): bool { return $this->has('required_money'); }
    /** @return array{'mode': string, 'scopes': list<string>, ...}|object
     * @throws SdkError When scope_requirement is omitted; use hasScopeRequirement() or valueOrDefault().
     */
    public function getScopeRequirement(): array|object { return $this->get('scope_requirement'); }
    public function hasScopeRequirement(): bool { return $this->has('scope_requirement'); }
    /** @return list<SelectableOrderPaymentIntentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When selectable_payment_intents is omitted; use hasSelectablePaymentIntents() or valueOrDefault().
     */
    public function getSelectablePaymentIntents(): array { return $this->get('selectable_payment_intents'); }
    public function hasSelectablePaymentIntents(): bool { return $this->has('selectable_payment_intents'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When submitted_money is omitted; use hasSubmittedMoney() or valueOrDefault().
     */
    public function getSubmittedMoney(): mixed { return $this->get('submitted_money'); }
    public function hasSubmittedMoney(): bool { return $this->has('submitted_money'); }
    /** @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip_capable_money is omitted; use hasTipCapableMoney() or valueOrDefault().
     */
    public function getTipCapableMoney(): mixed { return $this->get('tip_capable_money'); }
    public function hasTipCapableMoney(): bool { return $this->has('tip_capable_money'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
