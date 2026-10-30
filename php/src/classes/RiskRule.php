<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read string $applicability
 * @property-read string|null $archived_at
 * @property-read list<string> $attributes_used
 * @property-read string $created_at
 * @property-read ResourceReference|null $created_by
 * @property-read string $description
 * @property-read list<RiskRuleIssue> $issues
 * @property-read string $origin
 * @property-read mixed $predicate
 * @property-read string $risk_rule_id
 * @property-read string $stage
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class RiskRule extends Model {
    /** @param array{'action': string, 'applicability': string, 'archived_at': string|null, 'attributes_used': list<string>, 'created_at': string, 'created_by': mixed, 'description': string, 'issues': list<mixed>, 'origin': string, 'predicate': mixed, 'risk_rule_id': string, 'stage': string, 'status': string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskRule')); }
    /** Value enum: "allow", "block", "review", "require_3ds".
     * @return string
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** Value enum: "all_payments", "on_session_only".
     * @return string
     */
    public function getApplicability(): string { return $this->get('applicability'); }
    public function hasApplicability(): bool { return $this->has('applicability'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|null
     */
    public function getArchivedAt(): string|null { return $this->get('archived_at'); }
    public function hasArchivedAt(): bool { return $this->has('archived_at'); }
    /**  [] (Value): string.
     * @return list<string>
     */
    public function getAttributesUsed(): array { return $this->get('attributes_used'); }
    public function hasAttributesUsed(): bool { return $this->has('attributes_used'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The credential that created this rule. Null when Flint created it, as for Flint's default rules. The reference may name an API key in the other mode. anyOf[1] (Value): {@see ResourceReference}. A reference to another resource by `resource_type` and `resource_id`. anyOf[2] (Value): null.
     * @return ResourceReference|null
     */
    public function getCreatedBy(): ResourceReference|null { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** Your note on what the rule is for. Leading and trailing whitespace is trimmed.
     * @return string
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Problems that stop Flint from evaluating this rule. Empty when the rule can run. An active rule with issues is skipped on every payment and protects nothing until you fix it. An inactive rule with issues can't be activated until you fix it. [] (Value): {@see RiskRuleIssue}. A problem that stops a saved or proposed risk rule from running, with a `code`, a message, and the `path` to the part of the rule at fault.
     * @return list<RiskRuleIssue>
     */
    public function getIssues(): array { return $this->get('issues'); }
    public function hasIssues(): bool { return $this->has('issues'); }
    /** Value enum: "system_default", "merchant".
     * @return string
     */
    public function getOrigin(): string { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     * @return mixed
     */
    public function getPredicate(): mixed { return $this->get('predicate'); }
    public function hasPredicate(): bool { return $this->has('predicate'); }
    /** risk_rule_id
     * @return string
     */
    public function getRiskRuleId(): string { return $this->get('risk_rule_id'); }
    public function hasRiskRuleId(): bool { return $this->has('risk_rule_id'); }
    /** Value enum: "pre_authorization", "post_authorization".
     * @return string
     */
    public function getStage(): string { return $this->get('stage'); }
    public function hasStage(): bool { return $this->has('stage'); }
    /** Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Increases on every change to the rule. Send it as expected_version to avoid overwriting someone else's change. Format: int64.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
