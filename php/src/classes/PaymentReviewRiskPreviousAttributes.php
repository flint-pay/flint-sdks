<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $level
 * @property-read int|null $score
 * Presence-aware response; omitted optional fields return null. */
final class PaymentReviewRiskPreviousAttributes extends Model {
    /** @param array{'level'?: mixed, 'score'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewRiskPreviousAttributes')); }
    /** Fraud risk level from the card processor's screening, recorded when the review opened. Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[1] (Value): string. Fraud risk level from the card processor's screening, recorded when the review opened. Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLevel(): string|null { return $this->get('level'); }
    public function hasLevel(): bool { return $this->has('level'); }
    /** Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. anyOf[1] (Value): integer. Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. Format: int32. minimum: 0. maximum: 99. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getScore(): int|null { return $this->get('score'); }
    public function hasScore(): bool { return $this->has('score'); }
}
