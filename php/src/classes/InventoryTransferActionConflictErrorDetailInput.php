<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_key_modes
 * @property-read string $available_quantity
 * @property-read string $blocking_resource_count
 * @property-read list<ErrorResourceReferenceInput|array<array-key, mixed>|\stdClass> $blocking_resources
 * @property-read string $capability
 * @property-read array{'amount': string, 'currency': string}|object $capturable_money
 * @property-read string $captured_physical_revision
 * @property-read string $code
 * @property-read string $conflict_type
 * @property-read list<string> $conflicting_fields
 * @property-read string $current_checkout_session_id
 * @property-read array{'amount': string, 'currency': string}|object $current_money
 * @property-read string $current_physical_revision
 * @property-read array{'completed_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'device_id'?: string, 'digital_details'?: DigitalFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'line_items': list<FulfillmentLineItemInput|array<array-key, mixed>|\stdClass>, 'local_delivery_details'?: DeliveryFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'location_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'pickup_details'?: PickupFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'recipient'?: FulfillmentRecipientInput|array<array-key, mixed>|\stdClass, 'service_details'?: ServiceFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'type': string, ...}|object|array{'external_reference_id'?: string, 'external_system'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'return_id'?: string, 'return_line_items'?: list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>, ...}|object|array{'carrier'?: string, 'dimensions'?: ShippingDimensionsInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'external_system'?: string, 'label_url'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'service_code'?: string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: ShippingWeightInput|array<array-key, mixed>|\stdClass, ...}|object $current_resource
 * @property-read string $current_selection_id
 * @property-read string $current_source_observation_sequence
 * @property-read string $current_status
 * @property-read string $current_version
 * @property-read string $demand_key
 * @property-read string $dependency_type
 * @property-read string $eligibility_reason
 * @property-read string $existing_checkout_session_id
 * @property-read array{'amount': string, 'currency': string}|object $expected_attempt_outstanding_money
 * @property-read array{'amount': string, 'currency': string}|object $gap_money
 * @property-read string $inventory_count_line_id
 * @property-read string $inventory_item_id
 * @property-read string $invoice_payment_attempt_id
 * @property-read bool $is_resumable
 * @property-read string $limit
 * @property-read string $location_id
 * @property-read string $location_outcome
 * @property-read array{'amount': string, 'currency': string}|object $maximum_money
 * @property-read string $message
 * @property-read string $order_payment_attempt_id
 * @property-read string $param
 * @property-read string $payment_attempt_status
 * @property-read list<string> $payment_intent_ids
 * @property-read string $payment_method_domain_id
 * @property-read string $payment_option
 * @property-read array{'limit_bytes': string, 'next_expiration_at'?: string|\DateTimeInterface, 'ready_unattached_bytes': string, 'reserved_bytes': string, 'resource': string, 'used_bytes': string, ...}|object $quota
 * @property-read string $reason
 * @property-read array{'missing_or_invalid_fields'?: list<string>, 'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'next_steps'?: string, 'retryable'?: bool, ...}|object $remediation
 * @property-read string $requested_key_mode
 * @property-read string $requested_quantity
 * @property-read array{'amount': string, 'currency': string}|object $required_money
 * @property-read list<string> $risk_rule_ids
 * @property-read string $scope
 * @property-read list<SelectableOrderPaymentIntentInput|array<array-key, mixed>|\stdClass> $selectable_payment_intents
 * @property-read string $shortage_quantity
 * @property-read array{'amount': string, 'currency': string}|object $submitted_money
 * @property-read string $submitted_source_observation_sequence
 * @property-read list<string> $suggestions
 * @property-read list<string> $supported_actions
 * @property-read list<string> $supported_api_versions
 * @property-read array{'amount': string, 'currency': string}|object $tip_capable_money
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransferActionConflictErrorDetailInput extends Model {
    /** @param array{'allowed_key_modes'?: list<string>, 'available_quantity'?: string, 'blocking_resource_count'?: string, 'blocking_resources'?: list<ErrorResourceReferenceInput|array<array-key, mixed>|\stdClass>, 'capability'?: string, 'capturable_money'?: array{'amount': string, 'currency': string}|object, 'captured_physical_revision'?: string, 'code': string, 'conflict_type'?: string, 'conflicting_fields'?: list<string>, 'current_checkout_session_id'?: string, 'current_money'?: array{'amount': string, 'currency': string}|object, 'current_physical_revision'?: string, 'current_resource'?: array{'completed_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'device_id'?: string, 'digital_details'?: DigitalFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'line_items': list<FulfillmentLineItemInput|array<array-key, mixed>|\stdClass>, 'local_delivery_details'?: DeliveryFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'location_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'pickup_details'?: PickupFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'recipient'?: FulfillmentRecipientInput|array<array-key, mixed>|\stdClass, 'service_details'?: ServiceFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'type': string, ...}|object|array{'external_reference_id'?: string, 'external_system'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'return_id'?: string, 'return_line_items'?: list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>, ...}|object|array{'carrier'?: string, 'dimensions'?: ShippingDimensionsInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'external_system'?: string, 'label_url'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'service_code'?: string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: ShippingWeightInput|array<array-key, mixed>|\stdClass, ...}|object, 'current_selection_id'?: string, 'current_source_observation_sequence'?: string, 'current_status': string, 'current_version': string, 'demand_key'?: string, 'dependency_type'?: string, 'eligibility_reason'?: string, 'existing_checkout_session_id'?: string, 'expected_attempt_outstanding_money'?: array{'amount': string, 'currency': string}|object, 'gap_money'?: array{'amount': string, 'currency': string}|object, 'inventory_count_line_id'?: string, 'inventory_item_id'?: string, 'invoice_payment_attempt_id'?: string, 'is_resumable'?: bool, 'limit'?: string, 'location_id'?: string, 'location_outcome'?: string, 'maximum_money'?: array{'amount': string, 'currency': string}|object, 'message': string, 'order_payment_attempt_id'?: string, 'param': string, 'payment_attempt_status'?: string, 'payment_intent_ids'?: list<string>, 'payment_method_domain_id'?: string, 'payment_option'?: string, 'quota'?: array{'limit_bytes': string, 'next_expiration_at'?: string|\DateTimeInterface, 'ready_unattached_bytes': string, 'reserved_bytes': string, 'resource': string, 'used_bytes': string, ...}|object, 'reason'?: string, 'remediation'?: array{'missing_or_invalid_fields'?: list<string>, 'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'next_steps'?: string, 'retryable'?: bool, ...}|object, 'requested_key_mode'?: string, 'requested_quantity'?: string, 'required_money'?: array{'amount': string, 'currency': string}|object, 'risk_rule_ids'?: list<string>, 'scope'?: string, 'selectable_payment_intents'?: list<SelectableOrderPaymentIntentInput|array<array-key, mixed>|\stdClass>, 'shortage_quantity'?: string, 'submitted_money'?: array{'amount': string, 'currency': string}|object, 'submitted_source_observation_sequence'?: string, 'suggestions'?: list<string>, 'supported_actions': list<string>, 'supported_api_versions'?: list<string>, 'tip_capable_money'?: array{'amount': string, 'currency': string}|object, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferActionConflictErrorDetailInput')); }
    /** @return list<string>
     * @throws SdkError When allowed_key_modes is omitted; use hasAllowedKeyModes() or valueOrDefault().
     */
    public function getAllowedKeyModes(): array { return $this->get('allowed_key_modes'); }
    public function hasAllowedKeyModes(): bool { return $this->has('allowed_key_modes'); }
    /** @return string
     * @throws SdkError When available_quantity is omitted; use hasAvailableQuantity() or valueOrDefault().
     */
    public function getAvailableQuantity(): string { return $this->get('available_quantity'); }
    public function hasAvailableQuantity(): bool { return $this->has('available_quantity'); }
    /** @return string
     * @throws SdkError When blocking_resource_count is omitted; use hasBlockingResourceCount() or valueOrDefault().
     */
    public function getBlockingResourceCount(): string { return $this->get('blocking_resource_count'); }
    public function hasBlockingResourceCount(): bool { return $this->has('blocking_resource_count'); }
    /** @return list<ErrorResourceReferenceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When blocking_resources is omitted; use hasBlockingResources() or valueOrDefault().
     */
    public function getBlockingResources(): array { return $this->get('blocking_resources'); }
    public function hasBlockingResources(): bool { return $this->has('blocking_resources'); }
    /** @return string
     * @throws SdkError When capability is omitted; use hasCapability() or valueOrDefault().
     */
    public function getCapability(): string { return $this->get('capability'); }
    public function hasCapability(): bool { return $this->has('capability'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When capturable_money is omitted; use hasCapturableMoney() or valueOrDefault().
     */
    public function getCapturableMoney(): array|object { return $this->get('capturable_money'); }
    public function hasCapturableMoney(): bool { return $this->has('capturable_money'); }
    /** @return string
     * @throws SdkError When captured_physical_revision is omitted; use hasCapturedPhysicalRevision() or valueOrDefault().
     */
    public function getCapturedPhysicalRevision(): string { return $this->get('captured_physical_revision'); }
    public function hasCapturedPhysicalRevision(): bool { return $this->has('captured_physical_revision'); }
    /** @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** @return string
     * @throws SdkError When conflict_type is omitted; use hasConflictType() or valueOrDefault().
     */
    public function getConflictType(): string { return $this->get('conflict_type'); }
    public function hasConflictType(): bool { return $this->has('conflict_type'); }
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
    /** @return string
     * @throws SdkError When current_physical_revision is omitted; use hasCurrentPhysicalRevision() or valueOrDefault().
     */
    public function getCurrentPhysicalRevision(): string { return $this->get('current_physical_revision'); }
    public function hasCurrentPhysicalRevision(): bool { return $this->has('current_physical_revision'); }
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
     * @throws SdkError When current_source_observation_sequence is omitted; use hasCurrentSourceObservationSequence() or valueOrDefault().
     */
    public function getCurrentSourceObservationSequence(): string { return $this->get('current_source_observation_sequence'); }
    public function hasCurrentSourceObservationSequence(): bool { return $this->has('current_source_observation_sequence'); }
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
    /** @return string
     * @throws SdkError When demand_key is omitted; use hasDemandKey() or valueOrDefault().
     */
    public function getDemandKey(): string { return $this->get('demand_key'); }
    public function hasDemandKey(): bool { return $this->has('demand_key'); }
    /** @return string
     * @throws SdkError When dependency_type is omitted; use hasDependencyType() or valueOrDefault().
     */
    public function getDependencyType(): string { return $this->get('dependency_type'); }
    public function hasDependencyType(): bool { return $this->has('dependency_type'); }
    /** @return string
     * @throws SdkError When eligibility_reason is omitted; use hasEligibilityReason() or valueOrDefault().
     */
    public function getEligibilityReason(): string { return $this->get('eligibility_reason'); }
    public function hasEligibilityReason(): bool { return $this->has('eligibility_reason'); }
    /** @return string
     * @throws SdkError When existing_checkout_session_id is omitted; use hasExistingCheckoutSessionId() or valueOrDefault().
     */
    public function getExistingCheckoutSessionId(): string { return $this->get('existing_checkout_session_id'); }
    public function hasExistingCheckoutSessionId(): bool { return $this->has('existing_checkout_session_id'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When expected_attempt_outstanding_money is omitted; use hasExpectedAttemptOutstandingMoney() or valueOrDefault().
     */
    public function getExpectedAttemptOutstandingMoney(): array|object { return $this->get('expected_attempt_outstanding_money'); }
    public function hasExpectedAttemptOutstandingMoney(): bool { return $this->has('expected_attempt_outstanding_money'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When gap_money is omitted; use hasGapMoney() or valueOrDefault().
     */
    public function getGapMoney(): array|object { return $this->get('gap_money'); }
    public function hasGapMoney(): bool { return $this->has('gap_money'); }
    /** @return string
     * @throws SdkError When inventory_count_line_id is omitted; use hasInventoryCountLineId() or valueOrDefault().
     */
    public function getInventoryCountLineId(): string { return $this->get('inventory_count_line_id'); }
    public function hasInventoryCountLineId(): bool { return $this->has('inventory_count_line_id'); }
    /** @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** @return string
     * @throws SdkError When invoice_payment_attempt_id is omitted; use hasInvoicePaymentAttemptId() or valueOrDefault().
     */
    public function getInvoicePaymentAttemptId(): string { return $this->get('invoice_payment_attempt_id'); }
    public function hasInvoicePaymentAttemptId(): bool { return $this->has('invoice_payment_attempt_id'); }
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
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return string
     * @throws SdkError When location_outcome is omitted; use hasLocationOutcome() or valueOrDefault().
     */
    public function getLocationOutcome(): string { return $this->get('location_outcome'); }
    public function hasLocationOutcome(): bool { return $this->has('location_outcome'); }
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
    /** @return string
     * @throws SdkError When order_payment_attempt_id is omitted; use hasOrderPaymentAttemptId() or valueOrDefault().
     */
    public function getOrderPaymentAttemptId(): string { return $this->get('order_payment_attempt_id'); }
    public function hasOrderPaymentAttemptId(): bool { return $this->has('order_payment_attempt_id'); }
    /** @return string
     * @throws SdkError When param is omitted; use hasParam() or valueOrDefault().
     */
    public function getParam(): string { return $this->get('param'); }
    public function hasParam(): bool { return $this->has('param'); }
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
     * @throws SdkError When payment_method_domain_id is omitted; use hasPaymentMethodDomainId() or valueOrDefault().
     */
    public function getPaymentMethodDomainId(): string { return $this->get('payment_method_domain_id'); }
    public function hasPaymentMethodDomainId(): bool { return $this->has('payment_method_domain_id'); }
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
    /** @return array{'missing_or_invalid_fields'?: list<string>, 'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'next_steps'?: string, 'retryable'?: bool, ...}|object
     * @throws SdkError When remediation is omitted; use hasRemediation() or valueOrDefault().
     */
    public function getRemediation(): array|object { return $this->get('remediation'); }
    public function hasRemediation(): bool { return $this->has('remediation'); }
    /** @return string
     * @throws SdkError When requested_key_mode is omitted; use hasRequestedKeyMode() or valueOrDefault().
     */
    public function getRequestedKeyMode(): string { return $this->get('requested_key_mode'); }
    public function hasRequestedKeyMode(): bool { return $this->has('requested_key_mode'); }
    /** @return string
     * @throws SdkError When requested_quantity is omitted; use hasRequestedQuantity() or valueOrDefault().
     */
    public function getRequestedQuantity(): string { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When required_money is omitted; use hasRequiredMoney() or valueOrDefault().
     */
    public function getRequiredMoney(): array|object { return $this->get('required_money'); }
    public function hasRequiredMoney(): bool { return $this->has('required_money'); }
    /** @return list<string>
     * @throws SdkError When risk_rule_ids is omitted; use hasRiskRuleIds() or valueOrDefault().
     */
    public function getRiskRuleIds(): array { return $this->get('risk_rule_ids'); }
    public function hasRiskRuleIds(): bool { return $this->has('risk_rule_ids'); }
    /** @return string
     * @throws SdkError When scope is omitted; use hasScope() or valueOrDefault().
     */
    public function getScope(): string { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
    /** @return list<SelectableOrderPaymentIntentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When selectable_payment_intents is omitted; use hasSelectablePaymentIntents() or valueOrDefault().
     */
    public function getSelectablePaymentIntents(): array { return $this->get('selectable_payment_intents'); }
    public function hasSelectablePaymentIntents(): bool { return $this->has('selectable_payment_intents'); }
    /** @return string
     * @throws SdkError When shortage_quantity is omitted; use hasShortageQuantity() or valueOrDefault().
     */
    public function getShortageQuantity(): string { return $this->get('shortage_quantity'); }
    public function hasShortageQuantity(): bool { return $this->has('shortage_quantity'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When submitted_money is omitted; use hasSubmittedMoney() or valueOrDefault().
     */
    public function getSubmittedMoney(): array|object { return $this->get('submitted_money'); }
    public function hasSubmittedMoney(): bool { return $this->has('submitted_money'); }
    /** @return string
     * @throws SdkError When submitted_source_observation_sequence is omitted; use hasSubmittedSourceObservationSequence() or valueOrDefault().
     */
    public function getSubmittedSourceObservationSequence(): string { return $this->get('submitted_source_observation_sequence'); }
    public function hasSubmittedSourceObservationSequence(): bool { return $this->has('submitted_source_observation_sequence'); }
    /** @return list<string>
     * @throws SdkError When suggestions is omitted; use hasSuggestions() or valueOrDefault().
     */
    public function getSuggestions(): array { return $this->get('suggestions'); }
    public function hasSuggestions(): bool { return $this->has('suggestions'); }
    /** @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** @return list<string>
     * @throws SdkError When supported_api_versions is omitted; use hasSupportedApiVersions() or valueOrDefault().
     */
    public function getSupportedApiVersions(): array { return $this->get('supported_api_versions'); }
    public function hasSupportedApiVersions(): bool { return $this->has('supported_api_versions'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When tip_capable_money is omitted; use hasTipCapableMoney() or valueOrDefault().
     */
    public function getTipCapableMoney(): array|object { return $this->get('tip_capable_money'); }
    public function hasTipCapableMoney(): bool { return $this->has('tip_capable_money'); }
}
