<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $level
 * @property-read int|null $score
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicReviewRiskInput extends Model {
    /** @param array{'level': string, 'score': int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicReviewRiskInput')); }
    /** @return string
     * @throws SdkError When level is omitted; use hasLevel() or valueOrDefault().
     */
    public function getLevel(): string { return $this->get('level'); }
    public function hasLevel(): bool { return $this->has('level'); }
    /** @return int|null
     * @throws SdkError When score is omitted; use hasScore() or valueOrDefault().
     */
    public function getScore(): int|null { return $this->get('score'); }
    public function hasScore(): bool { return $this->has('score'); }
}
