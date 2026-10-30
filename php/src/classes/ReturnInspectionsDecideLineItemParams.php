<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $acceptance_decision_reason
 * @property-read string $acceptance_decision_reason_message
 * @property-read string $acceptance_status
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnInspectionsDecideLineItemParams extends Model {
    /** @param array{'acceptance_decision_reason': string, 'acceptance_decision_reason_message'?: string, 'acceptance_status': string, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionsDecideLineItemParams')); }
    /** Value enum: "inspection_result", "return_policy", "manual_review", "other".
     * @return string
     * @throws SdkError When acceptance_decision_reason is omitted; use hasAcceptanceDecisionReason() or valueOrDefault().
     */
    public function getAcceptanceDecisionReason(): string { return $this->get('acceptance_decision_reason'); }
    public function hasAcceptanceDecisionReason(): bool { return $this->has('acceptance_decision_reason'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When acceptance_decision_reason_message is omitted; use hasAcceptanceDecisionReasonMessage() or valueOrDefault().
     */
    public function getAcceptanceDecisionReasonMessage(): string { return $this->get('acceptance_decision_reason_message'); }
    public function hasAcceptanceDecisionReasonMessage(): bool { return $this->has('acceptance_decision_reason_message'); }
    /** Value enum: "accepted", "rejected".
     * @return string
     * @throws SdkError When acceptance_status is omitted; use hasAcceptanceStatus() or valueOrDefault().
     */
    public function getAcceptanceStatus(): string { return $this->get('acceptance_status'); }
    public function hasAcceptanceStatus(): bool { return $this->has('acceptance_status'); }
    /** Optional version of the return inspection. A stale value returns VERSION_CONFLICT with the inspection ID and its current version. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
