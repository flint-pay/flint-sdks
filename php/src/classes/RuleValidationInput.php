<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AnalysisInput|array<array-key, mixed>|\stdClass $analysis
 * @property-read list<RuleWarningInput|array<array-key, mixed>|\stdClass> $warnings
 * Presence-aware input; omitted fields throw when accessed. */
final class RuleValidationInput extends Model {
    /** @param array{'analysis': AnalysisInput|array<array-key, mixed>|\stdClass, 'warnings': list<RuleWarningInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RuleValidationInput')); }
    /** @return AnalysisInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When analysis is omitted; use hasAnalysis() or valueOrDefault().
     */
    public function getAnalysis(): mixed { return $this->get('analysis'); }
    public function hasAnalysis(): bool { return $this->has('analysis'); }
    /** @return list<RuleWarningInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When warnings is omitted; use hasWarnings() or valueOrDefault().
     */
    public function getWarnings(): array { return $this->get('warnings'); }
    public function hasWarnings(): bool { return $this->has('warnings'); }
}
