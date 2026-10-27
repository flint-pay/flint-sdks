<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $acceptance_decision_reason
 * @property-read string $acceptance_decision_reason_message
 * @property-read string $acceptance_status
 * @property-read string $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class DecideReturnInspectionLineItemRequestInput extends Model {
    /** @param array{'acceptance_decision_reason': string, 'acceptance_decision_reason_message'?: string, 'acceptance_status': string, 'expected_version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DecideReturnInspectionLineItemRequestInput')); }
    /** Shape $ (Value): string.  Value enum: "inspection_result", "return_policy", "manual_review", "other".
     * @return string
     * @throws SdkError When acceptance_decision_reason is omitted; use hasAcceptanceDecisionReason() or valueOrDefault().
     */
    public function getAcceptanceDecisionReason(): string { return $this->get('acceptance_decision_reason'); }
    public function hasAcceptanceDecisionReason(): bool { return $this->has('acceptance_decision_reason'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When acceptance_decision_reason_message is omitted; use hasAcceptanceDecisionReasonMessage() or valueOrDefault().
     */
    public function getAcceptanceDecisionReasonMessage(): string { return $this->get('acceptance_decision_reason_message'); }
    public function hasAcceptanceDecisionReasonMessage(): bool { return $this->has('acceptance_decision_reason_message'); }
    /** Shape $ (Value): string.  Value enum: "accepted", "rejected", "review_required".
     * @return string
     * @throws SdkError When acceptance_status is omitted; use hasAcceptanceStatus() or valueOrDefault().
     */
    public function getAcceptanceStatus(): string { return $this->get('acceptance_status'); }
    public function hasAcceptanceStatus(): bool { return $this->has('acceptance_status'); }
    /** Shape $ (Value): integer string. Optional version of the return inspection. A stale value returns VERSION_CONFLICT with the inspection ID and its current version. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
