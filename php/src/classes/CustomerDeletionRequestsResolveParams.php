<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $decision
 * @property-read string $decision_reason
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerDeletionRequestsResolveParams extends Model {
    /** @param array{'decision': string, 'decision_reason'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestsResolveParams')); }
    /** Whether to erase the customer's personal data or keep the customer as is. Value enum: "approve", "reject".
     * @return string
     * @throws SdkError When decision is omitted; use hasDecision() or valueOrDefault().
     */
    public function getDecision(): string { return $this->get('decision'); }
    public function hasDecision(): bool { return $this->has('decision'); }
    /** Optional plain-text explanation visible to the buyer. Only allowed when decision is reject. Trimmed before storage; must contain 1 to 500 characters after trimming. `null` is not allowed. Reasons are erased if the customer is later deleted. minLength: 1.
     * @return string
     * @throws SdkError When decision_reason is omitted; use hasDecisionReason() or valueOrDefault().
     */
    public function getDecisionReason(): string { return $this->get('decision_reason'); }
    public function hasDecisionReason(): bool { return $this->has('decision_reason'); }
}
