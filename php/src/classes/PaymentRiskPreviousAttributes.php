<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $evaluated_at
 * @property-read string|null $level
 * @property-read string|null $matched_risk_rule_id
 * @property-read string|null $outcome
 * @property-read string|null $outcome_reason
 * @property-read string|null $payment_review_id
 * @property-read int|null $score
 * @property-read string|null $statement
 * Presence-aware response; omitted optional fields return null. */
final class PaymentRiskPreviousAttributes extends Model {
    /** @param array{'evaluated_at'?: mixed, 'level'?: mixed, 'matched_risk_rule_id'?: mixed, 'outcome'?: mixed, 'outcome_reason'?: mixed, 'payment_review_id'?: mixed, 'score'?: mixed, 'statement'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentRiskPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEvaluatedAt(): string|null { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** Fraud risk level from the card processor's screening of the payment intent's latest payment attempt. Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[1] (Value): string. Fraud risk level from the card processor's screening of the payment intent's latest payment attempt. Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLevel(): string|null { return $this->get('level'); }
    public function hasLevel(): bool { return $this->has('level'); }
    /** The risk rule that decided the outcome. Absent when no risk rule did. anyOf[1] (Value): string. The risk rule that decided the outcome. Absent when no risk rule did. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMatchedRiskRuleId(): string|null { return $this->get('matched_risk_rule_id'); }
    public function hasMatchedRiskRuleId(): bool { return $this->has('matched_risk_rule_id'); }
    /** What the risk evaluation decided about the payment intent's latest payment attempt. `null` when the evaluation has no outcome to report, such as when the attempt was canceled. Value enum: "authorized", "manual_review", "blocked", "issuer_declined", "invalid", null. anyOf[1] (Value): string. What the risk evaluation decided about the payment intent's latest payment attempt. `null` when the evaluation has no outcome to report, such as when the attempt was canceled. Value enum: "authorized", "manual_review", "blocked", "issuer_declined", "invalid", null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOutcome(): string|null { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** Why the evaluation reached its outcome. `null` when the evaluation has no reason to report, such as an authorized payment that raised no flags. Value enum: "highest_risk", "elevated_risk", "low_authorization_probability", "risk_rule", "risk_policy", null. anyOf[1] (Value): string. Why the evaluation reached its outcome. `null` when the evaluation has no reason to report, such as an authorized payment that raised no flags. Value enum: "highest_risk", "elevated_risk", "low_authorization_probability", "risk_rule", "risk_policy", null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOutcomeReason(): string|null { return $this->get('outcome_reason'); }
    public function hasOutcomeReason(): bool { return $this->has('outcome_reason'); }
    /** The payment review opened for the attempt. Present only when the outcome is manual_review. anyOf[1] (Value): string. The payment review opened for the attempt. Present only when the outcome is manual_review. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentReviewId(): string|null { return $this->get('payment_review_id'); }
    public function hasPaymentReviewId(): bool { return $this->has('payment_review_id'); }
    /** Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. anyOf[1] (Value): integer. Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. Format: int32. minimum: 0. maximum: 99. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getScore(): int|null { return $this->get('score'); }
    public function hasScore(): bool { return $this->has('score'); }
    /** A plain-language summary of the evaluation. anyOf[1] (Value): string. A plain-language summary of the evaluation. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatement(): string|null { return $this->get('statement'); }
    public function hasStatement(): bool { return $this->has('statement'); }
}
