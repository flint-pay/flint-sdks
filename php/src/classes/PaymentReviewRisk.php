<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $level
 * @property-read ?int $score
 * Presence-aware response; omitted optional fields return null. */
final class PaymentReviewRisk extends Model {
    /** @param array{'level': string, 'score'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewRisk')); }
    /** Value enum: "normal", "elevated", "highest", "not_assessed".
     * @return string
     */
    public function getLevel(): string { return $this->get('level'); }
    public function hasLevel(): bool { return $this->has('level'); }
    /** Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. Format: int32. minimum: 0. maximum: 99.
     * @return ?int
     */
    public function getScore(): ?int { return $this->get('score'); }
    public function hasScore(): bool { return $this->has('score'); }
}
