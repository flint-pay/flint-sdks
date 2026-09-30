<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_resolution_types
 * @property-read string $approval_mode
 * @property-read string $automatic_resolution_type
 * @property-read string $completion_mode
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface $effective_at
 * @property-read string $eligibility_result
 * @property-read string $ineligibility_reason
 * @property-read bool $is_inspection_required
 * @property-read bool $is_merchandise_return_required
 * @property-read int $priority
 * @property-read string $receipt_disposition_mode
 * @property-read string $receiving_location_id
 * @property-read string $refund_timing
 * @property-read string $resolution_mode
 * @property-read string $resolution_selection_mode
 * @property-read ReturnRestockingFeePolicyInput|array<array-key, mixed>|\stdClass $restocking_fee
 * @property-read string $return_policy_id
 * @property-read string $return_policy_revision_id
 * @property-read ReturnShippingPolicyInput|array<array-key, mixed>|\stdClass $return_shipping
 * @property-read ReturnWindowInput|array<array-key, mixed>|\stdClass $return_window
 * @property-read ReturnPolicyScopeInput|array<array-key, mixed>|\stdClass $scope
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPolicyRevisionInput extends Model {
    /** @param array{'allowed_resolution_types': list<string>, 'approval_mode': string, 'automatic_resolution_type'?: string, 'completion_mode'?: string, 'created_at': string|\DateTimeInterface, 'effective_at'?: string|\DateTimeInterface, 'eligibility_result': string, 'ineligibility_reason'?: string, 'is_inspection_required'?: bool, 'is_merchandise_return_required': bool, 'priority': int, 'receipt_disposition_mode': string, 'receiving_location_id'?: string, 'refund_timing'?: string, 'resolution_mode'?: string, 'resolution_selection_mode'?: string, 'restocking_fee'?: ReturnRestockingFeePolicyInput|array<array-key, mixed>|\stdClass, 'return_policy_id': string, 'return_policy_revision_id': string, 'return_shipping'?: ReturnShippingPolicyInput|array<array-key, mixed>|\stdClass, 'return_window'?: ReturnWindowInput|array<array-key, mixed>|\stdClass, 'scope': ReturnPolicyScopeInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyRevisionInput')); }
    /** @return list<string>
     * @throws SdkError When allowed_resolution_types is omitted; use hasAllowedResolutionTypes() or valueOrDefault().
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** @return string
     * @throws SdkError When approval_mode is omitted; use hasApprovalMode() or valueOrDefault().
     */
    public function getApprovalMode(): string { return $this->get('approval_mode'); }
    public function hasApprovalMode(): bool { return $this->has('approval_mode'); }
    /** @return string
     * @throws SdkError When automatic_resolution_type is omitted; use hasAutomaticResolutionType() or valueOrDefault().
     */
    public function getAutomaticResolutionType(): string { return $this->get('automatic_resolution_type'); }
    public function hasAutomaticResolutionType(): bool { return $this->has('automatic_resolution_type'); }
    /** @return string
     * @throws SdkError When completion_mode is omitted; use hasCompletionMode() or valueOrDefault().
     */
    public function getCompletionMode(): string { return $this->get('completion_mode'); }
    public function hasCompletionMode(): bool { return $this->has('completion_mode'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When effective_at is omitted; use hasEffectiveAt() or valueOrDefault().
     */
    public function getEffectiveAt(): string|\DateTimeInterface { return $this->get('effective_at'); }
    public function hasEffectiveAt(): bool { return $this->has('effective_at'); }
    /** @return string
     * @throws SdkError When eligibility_result is omitted; use hasEligibilityResult() or valueOrDefault().
     */
    public function getEligibilityResult(): string { return $this->get('eligibility_result'); }
    public function hasEligibilityResult(): bool { return $this->has('eligibility_result'); }
    /** @return string
     * @throws SdkError When ineligibility_reason is omitted; use hasIneligibilityReason() or valueOrDefault().
     */
    public function getIneligibilityReason(): string { return $this->get('ineligibility_reason'); }
    public function hasIneligibilityReason(): bool { return $this->has('ineligibility_reason'); }
    /** @return bool
     * @throws SdkError When is_inspection_required is omitted; use hasIsInspectionRequired() or valueOrDefault().
     */
    public function getIsInspectionRequired(): bool { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** @return bool
     * @throws SdkError When is_merchandise_return_required is omitted; use hasIsMerchandiseReturnRequired() or valueOrDefault().
     */
    public function getIsMerchandiseReturnRequired(): bool { return $this->get('is_merchandise_return_required'); }
    public function hasIsMerchandiseReturnRequired(): bool { return $this->has('is_merchandise_return_required'); }
    /** @return int
     * @throws SdkError When priority is omitted; use hasPriority() or valueOrDefault().
     */
    public function getPriority(): int { return $this->get('priority'); }
    public function hasPriority(): bool { return $this->has('priority'); }
    /** @return string
     * @throws SdkError When receipt_disposition_mode is omitted; use hasReceiptDispositionMode() or valueOrDefault().
     */
    public function getReceiptDispositionMode(): string { return $this->get('receipt_disposition_mode'); }
    public function hasReceiptDispositionMode(): bool { return $this->has('receipt_disposition_mode'); }
    /** @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** @return string
     * @throws SdkError When refund_timing is omitted; use hasRefundTiming() or valueOrDefault().
     */
    public function getRefundTiming(): string { return $this->get('refund_timing'); }
    public function hasRefundTiming(): bool { return $this->has('refund_timing'); }
    /** @return string
     * @throws SdkError When resolution_mode is omitted; use hasResolutionMode() or valueOrDefault().
     */
    public function getResolutionMode(): string { return $this->get('resolution_mode'); }
    public function hasResolutionMode(): bool { return $this->has('resolution_mode'); }
    /** @return string
     * @throws SdkError When resolution_selection_mode is omitted; use hasResolutionSelectionMode() or valueOrDefault().
     */
    public function getResolutionSelectionMode(): string { return $this->get('resolution_selection_mode'); }
    public function hasResolutionSelectionMode(): bool { return $this->has('resolution_selection_mode'); }
    /** @return ReturnRestockingFeePolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When restocking_fee is omitted; use hasRestockingFee() or valueOrDefault().
     */
    public function getRestockingFee(): mixed { return $this->get('restocking_fee'); }
    public function hasRestockingFee(): bool { return $this->has('restocking_fee'); }
    /** @return string
     * @throws SdkError When return_policy_id is omitted; use hasReturnPolicyId() or valueOrDefault().
     */
    public function getReturnPolicyId(): string { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** @return string
     * @throws SdkError When return_policy_revision_id is omitted; use hasReturnPolicyRevisionId() or valueOrDefault().
     */
    public function getReturnPolicyRevisionId(): string { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** @return ReturnShippingPolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When return_shipping is omitted; use hasReturnShipping() or valueOrDefault().
     */
    public function getReturnShipping(): mixed { return $this->get('return_shipping'); }
    public function hasReturnShipping(): bool { return $this->has('return_shipping'); }
    /** @return ReturnWindowInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When return_window is omitted; use hasReturnWindow() or valueOrDefault().
     */
    public function getReturnWindow(): mixed { return $this->get('return_window'); }
    public function hasReturnWindow(): bool { return $this->has('return_window'); }
    /** @return ReturnPolicyScopeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When scope is omitted; use hasScope() or valueOrDefault().
     */
    public function getScope(): mixed { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
}
