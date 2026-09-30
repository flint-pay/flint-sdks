<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_resolution_types
 * @property-read ReturnLineItemDecisionProposalInput|array<array-key, mixed>|\stdClass $decision_proposal
 * @property-read string $eligible_quantity
 * @property-read string|\DateTimeInterface $evaluated_at
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read list<ReturnPolicyAdjustmentProposalInput|array<array-key, mixed>|\stdClass> $policy_adjustment_proposals
 * @property-read string $reason
 * @property-read string $reason_message
 * @property-read string $return_policy_id
 * @property-read string $return_policy_revision_id
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnLineItemEligibilityInput extends Model {
    /** @param array{'allowed_resolution_types': list<string>, 'decision_proposal'?: ReturnLineItemDecisionProposalInput|array<array-key, mixed>|\stdClass, 'eligible_quantity': string, 'evaluated_at'?: string|\DateTimeInterface, 'expires_at'?: string|\DateTimeInterface, 'policy_adjustment_proposals': list<ReturnPolicyAdjustmentProposalInput|array<array-key, mixed>|\stdClass>, 'reason': string, 'reason_message': string, 'return_policy_id'?: string, 'return_policy_revision_id'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnLineItemEligibilityInput')); }
    /** @return list<string>
     * @throws SdkError When allowed_resolution_types is omitted; use hasAllowedResolutionTypes() or valueOrDefault().
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** @return ReturnLineItemDecisionProposalInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When decision_proposal is omitted; use hasDecisionProposal() or valueOrDefault().
     */
    public function getDecisionProposal(): mixed { return $this->get('decision_proposal'); }
    public function hasDecisionProposal(): bool { return $this->has('decision_proposal'); }
    /** @return string
     * @throws SdkError When eligible_quantity is omitted; use hasEligibleQuantity() or valueOrDefault().
     */
    public function getEligibleQuantity(): string { return $this->get('eligible_quantity'); }
    public function hasEligibleQuantity(): bool { return $this->has('eligible_quantity'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): string|\DateTimeInterface { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return list<ReturnPolicyAdjustmentProposalInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When policy_adjustment_proposals is omitted; use hasPolicyAdjustmentProposals() or valueOrDefault().
     */
    public function getPolicyAdjustmentProposals(): array { return $this->get('policy_adjustment_proposals'); }
    public function hasPolicyAdjustmentProposals(): bool { return $this->has('policy_adjustment_proposals'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
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
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
