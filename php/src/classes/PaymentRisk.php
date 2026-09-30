<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $evaluated_at
 * @property-read string $level
 * @property-read string $matched_risk_rule_id
 * @property-read string|null $outcome
 * @property-read string|null $outcome_reason
 * @property-read string $review_id
 * @property-read int $score
 * @property-read string $statement
 * Presence-aware response; omitted fields throw when accessed. */
final class PaymentRisk extends Model {
    /** @param array{'evaluated_at': string, 'level': string, 'matched_risk_rule_id'?: string, 'outcome'?: string|null, 'outcome_reason'?: string|null, 'review_id'?: string, 'score'?: int, 'statement': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentRisk')); }
    /** @return string
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** @return string
     * @throws SdkError When level is omitted; use hasLevel() or valueOrDefault().
     */
    public function getLevel(): string { return $this->get('level'); }
    public function hasLevel(): bool { return $this->has('level'); }
    /** @return string
     * @throws SdkError When matched_risk_rule_id is omitted; use hasMatchedRiskRuleId() or valueOrDefault().
     */
    public function getMatchedRiskRuleId(): string { return $this->get('matched_risk_rule_id'); }
    public function hasMatchedRiskRuleId(): bool { return $this->has('matched_risk_rule_id'); }
    /** @return string|null
     * @throws SdkError When outcome is omitted; use hasOutcome() or valueOrDefault().
     */
    public function getOutcome(): string|null { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** @return string|null
     * @throws SdkError When outcome_reason is omitted; use hasOutcomeReason() or valueOrDefault().
     */
    public function getOutcomeReason(): string|null { return $this->get('outcome_reason'); }
    public function hasOutcomeReason(): bool { return $this->has('outcome_reason'); }
    /** @return string
     * @throws SdkError When review_id is omitted; use hasReviewId() or valueOrDefault().
     */
    public function getReviewId(): string { return $this->get('review_id'); }
    public function hasReviewId(): bool { return $this->has('review_id'); }
    /** @return int
     * @throws SdkError When score is omitted; use hasScore() or valueOrDefault().
     */
    public function getScore(): int { return $this->get('score'); }
    public function hasScore(): bool { return $this->has('score'); }
    /** @return string
     * @throws SdkError When statement is omitted; use hasStatement() or valueOrDefault().
     */
    public function getStatement(): string { return $this->get('statement'); }
    public function hasStatement(): bool { return $this->has('statement'); }
}
