<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $evaluated_at
 * @property-read string $level
 * @property-read ?string $matched_risk_rule_id
 * @property-read string|null $outcome
 * @property-read string|null $outcome_reason
 * @property-read ?string $payment_review_id
 * @property-read ?int $score
 * @property-read string $statement
 * Presence-aware response; omitted optional fields return null. */
final class PaymentRisk extends Model {
    /** @param array{'evaluated_at': string, 'level': string, 'matched_risk_rule_id'?: string, 'outcome'?: string|null, 'outcome_reason'?: string|null, 'payment_review_id'?: string, 'score'?: int, 'statement': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentRisk')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** Value enum: "normal", "elevated", "highest", "not_assessed".
     * @return string
     */
    public function getLevel(): string { return $this->get('level'); }
    public function hasLevel(): bool { return $this->has('level'); }
    /** matched_risk_rule_id
     * @return ?string
     */
    public function getMatchedRiskRuleId(): ?string { return $this->get('matched_risk_rule_id'); }
    public function hasMatchedRiskRuleId(): bool { return $this->has('matched_risk_rule_id'); }
    /** Value enum: "authorized", "manual_review", "blocked", "issuer_declined", "invalid", null.
     * @return string|null
     */
    public function getOutcome(): string|null { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** Value enum: "highest_risk", "elevated_risk", "low_authorization_probability", "risk_rule", "risk_policy", null.
     * @return string|null
     */
    public function getOutcomeReason(): string|null { return $this->get('outcome_reason'); }
    public function hasOutcomeReason(): bool { return $this->has('outcome_reason'); }
    /** payment_review_id
     * @return ?string
     */
    public function getPaymentReviewId(): ?string { return $this->get('payment_review_id'); }
    public function hasPaymentReviewId(): bool { return $this->has('payment_review_id'); }
    /** Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. Format: int32. minimum: 0. maximum: 99.
     * @return ?int
     */
    public function getScore(): ?int { return $this->get('score'); }
    public function hasScore(): bool { return $this->has('score'); }
    /** statement
     * @return string
     */
    public function getStatement(): string { return $this->get('statement'); }
    public function hasStatement(): bool { return $this->has('statement'); }
}
