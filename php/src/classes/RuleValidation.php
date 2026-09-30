<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Analysis $analysis
 * @property-read list<RuleWarning> $warnings
 * Presence-aware response; omitted fields throw when accessed. */
final class RuleValidation extends Model {
    /** @param array{'analysis': mixed, 'warnings': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RuleValidation')); }
    /** @return Analysis
     * @throws SdkError When analysis is omitted; use hasAnalysis() or valueOrDefault().
     */
    public function getAnalysis(): Analysis { return $this->get('analysis'); }
    public function hasAnalysis(): bool { return $this->has('analysis'); }
    /** @return list<RuleWarning>
     * @throws SdkError When warnings is omitted; use hasWarnings() or valueOrDefault().
     */
    public function getWarnings(): array { return $this->get('warnings'); }
    public function hasWarnings(): bool { return $this->has('warnings'); }
}
