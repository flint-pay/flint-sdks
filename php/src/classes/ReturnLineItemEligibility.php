<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_resolution_types
 * @property-read ReturnLineItemDecisionProposal $decision_proposal
 * @property-read string $eligible_quantity
 * @property-read string $evaluated_at
 * @property-read string $expires_at
 * @property-read list<ReturnPolicyAdjustmentProposal> $policy_adjustment_proposals
 * @property-read string $reason
 * @property-read string $reason_message
 * @property-read string $return_policy_id
 * @property-read string $return_policy_revision_id
 * @property-read string $status
 * Presence-aware response; omitted fields throw when accessed. */
final class ReturnLineItemEligibility extends Model {
    /** @param array{'allowed_resolution_types': list<string>, 'decision_proposal'?: mixed, 'eligible_quantity': string, 'evaluated_at'?: string, 'expires_at'?: string, 'policy_adjustment_proposals': list<mixed>, 'reason': string, 'reason_message': string, 'return_policy_id'?: string, 'return_policy_revision_id'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnLineItemEligibility')); }
    /** @return list<string>
     * @throws SdkError When allowed_resolution_types is omitted; use hasAllowedResolutionTypes() or valueOrDefault().
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** @return ReturnLineItemDecisionProposal
     * @throws SdkError When decision_proposal is omitted; use hasDecisionProposal() or valueOrDefault().
     */
    public function getDecisionProposal(): ReturnLineItemDecisionProposal { return $this->get('decision_proposal'); }
    public function hasDecisionProposal(): bool { return $this->has('decision_proposal'); }
    /** @return string
     * @throws SdkError When eligible_quantity is omitted; use hasEligibleQuantity() or valueOrDefault().
     */
    public function getEligibleQuantity(): string { return $this->get('eligible_quantity'); }
    public function hasEligibleQuantity(): bool { return $this->has('eligible_quantity'); }
    /** @return string
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** @return string
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return list<ReturnPolicyAdjustmentProposal>
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
