<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'applicability': string, 'attributes_used': list<string>, 'list_aliases_used': list<string>, 'stage': string, ...}|object|null $analysis
 * @property-read bool $is_valid
 * @property-read list<RiskRuleIssueInput|array<array-key, mixed>|\stdClass> $issues
 * @property-read list<ResponseWarningInput|array<array-key, mixed>|\stdClass> $warnings
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskPreviewInput extends Model {
    /** @param array{'analysis': array{'applicability': string, 'attributes_used': list<string>, 'list_aliases_used': list<string>, 'stage': string, ...}|object|null, 'is_valid': bool, 'issues': list<RiskRuleIssueInput|array<array-key, mixed>|\stdClass>, 'warnings': list<ResponseWarningInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskPreviewInput')); }
    /** Rule analysis. Null when the proposed rule is invalid. anyOf[1] (Value): {@see RiskRuleAnalysisInput}. What a valid risk rule uses: its evaluation stage, the attributes and list aliases it references, and which payments it applies to. anyOf[2] (Value): null.
     * @return array{'applicability': string, 'attributes_used': list<string>, 'list_aliases_used': list<string>, 'stage': string, ...}|object|null
     * @throws SdkError When analysis is omitted; use hasAnalysis() or valueOrDefault().
     */
    public function getAnalysis(): mixed { return $this->get('analysis'); }
    public function hasAnalysis(): bool { return $this->has('analysis'); }
    /** Whether the proposed rule is valid.
     * @return bool
     * @throws SdkError When is_valid is omitted; use hasIsValid() or valueOrDefault().
     */
    public function getIsValid(): bool { return $this->get('is_valid'); }
    public function hasIsValid(): bool { return $this->has('is_valid'); }
    /** Every rule validation issue in validation order. Empty when the rule is valid. [] (Value): {@see RiskRuleIssueInput}. A problem that stops a saved or proposed risk rule from running, with a `code`, a message, and the `path` to the part of the rule at fault.
     * @return list<RiskRuleIssueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When issues is omitted; use hasIssues() or valueOrDefault().
     */
    public function getIssues(): array { return $this->get('issues'); }
    public function hasIssues(): bool { return $this->has('issues'); }
    /** Advisory warnings. Empty when the proposed rule is invalid. [] (Value): {@see ResponseWarningInput}. A non-blocking condition reported with a response. The `code` identifies the condition and `severity` says how urgent it is.
     * @return list<ResponseWarningInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When warnings is omitted; use hasWarnings() or valueOrDefault().
     */
    public function getWarnings(): array { return $this->get('warnings'); }
    public function hasWarnings(): bool { return $this->has('warnings'); }
}
