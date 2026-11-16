<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $level
 * @property-read int|null $score
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentReviewRiskPreviousAttributesInput extends Model {
    /** @param array{'level'?: string|null, 'score'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewRiskPreviousAttributesInput')); }
    /** Fraud risk level from the card processor's screening, recorded when the review opened. Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[1] (Value): string. Fraud risk level from the card processor's screening, recorded when the review opened. Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When level is omitted; use hasLevel() or valueOrDefault().
     */
    public function getLevel(): mixed { return $this->get('level'); }
    public function hasLevel(): bool { return $this->has('level'); }
    /** Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. anyOf[1] (Value): integer. Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. Format: int32. minimum: 0. maximum: 99. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When score is omitted; use hasScore() or valueOrDefault().
     */
    public function getScore(): mixed { return $this->get('score'); }
    public function hasScore(): bool { return $this->has('score'); }
}
