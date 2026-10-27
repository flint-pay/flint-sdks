<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read RiskRuleAnalysis|null $analysis
 * @property-read bool $is_valid
 * @property-read list<RiskRuleIssue> $issues
 * @property-read list<ResponseWarning> $warnings
 * Presence-aware response; omitted optional fields return null. */
final class RiskPreview extends Model {
    /** @param array{'analysis': mixed, 'is_valid': bool, 'issues': list<mixed>, 'warnings': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskPreview')); }
    /** Shape $ (Value): {@see RiskRuleAnalysis} or null. Rule analysis. Null when the proposed rule is invalid. Shape $.anyOf[1] (Value): {@see RiskRuleAnalysis}. What a valid risk rule uses: its evaluation stage, the attributes and list aliases it references, and which payments it applies to. Shape $.anyOf[2] (Value): null.
     * @return RiskRuleAnalysis|null
     */
    public function getAnalysis(): RiskRuleAnalysis|null { return $this->get('analysis'); }
    public function hasAnalysis(): bool { return $this->has('analysis'); }
    /** Shape $ (Value): boolean. Whether the proposed rule is valid.
     * @return bool
     */
    public function getIsValid(): bool { return $this->get('is_valid'); }
    public function hasIsValid(): bool { return $this->has('is_valid'); }
    /** Shape $ (Value): Array of {@see RiskRuleIssue}. Every rule validation issue in validation order. Empty when the rule is valid. Shape $[] (Value): {@see RiskRuleIssue}. A problem that stops a saved or proposed risk rule from running, with a `code`, a message, and the `path` to the part of the rule at fault.
     * @return list<RiskRuleIssue>
     */
    public function getIssues(): array { return $this->get('issues'); }
    public function hasIssues(): bool { return $this->has('issues'); }
    /** Shape $ (Value): Array of {@see ResponseWarning}. Advisory warnings. Empty when the proposed rule is invalid. Shape $[] (Value): {@see ResponseWarning}. A non-blocking condition reported with a response. The `code` identifies the condition and `severity` says how urgent it is.
     * @return list<ResponseWarning>
     */
    public function getWarnings(): array { return $this->get('warnings'); }
    public function hasWarnings(): bool { return $this->has('warnings'); }
}
