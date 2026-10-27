<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $level
 * @property-read int $score
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentReviewRiskInput extends Model {
    /** @param array{'level': string, 'score'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewRiskInput')); }
    /** Shape $ (Value): string.  Value enum: "normal", "elevated", "highest", "not_assessed".
     * @return string
     * @throws SdkError When level is omitted; use hasLevel() or valueOrDefault().
     */
    public function getLevel(): string { return $this->get('level'); }
    public function hasLevel(): bool { return $this->has('level'); }
    /** Shape $ (Value): integer. Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. Format: int32. minimum: 0. maximum: 99.
     * @return int
     * @throws SdkError When score is omitted; use hasScore() or valueOrDefault().
     */
    public function getScore(): int { return $this->get('score'); }
    public function hasScore(): bool { return $this->has('score'); }
}
