<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read string $applicability
 * @property-read string|\DateTimeInterface|null $archived_at
 * @property-read list<string> $attributes_used
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null $created_by
 * @property-read string $description
 * @property-read list<RiskRuleIssueInput|array<array-key, mixed>|\stdClass> $issues
 * @property-read string $origin
 * @property-read RiskPredicateNodeInput|array<array-key, mixed>|\stdClass $predicate
 * @property-read string $risk_rule_id
 * @property-read string $stage
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskRuleInput extends Model {
    /** @param array{'action': string, 'applicability': string, 'archived_at': string|\DateTimeInterface|null, 'attributes_used': list<string>, 'created_at': string|\DateTimeInterface, 'created_by': array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null, 'description': string, 'issues': list<RiskRuleIssueInput|array<array-key, mixed>|\stdClass>, 'origin': string, 'predicate': RiskPredicateNodeInput|array<array-key, mixed>|\stdClass, 'risk_rule_id': string, 'stage': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskRuleInput')); }
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds".
     * @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** Shape $ (Value): string.  Value enum: "all_payments", "on_session_only".
     * @return string
     * @throws SdkError When applicability is omitted; use hasApplicability() or valueOrDefault().
     */
    public function getApplicability(): string { return $this->get('applicability'); }
    public function hasApplicability(): bool { return $this->has('applicability'); }
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When archived_at is omitted; use hasArchivedAt() or valueOrDefault().
     */
    public function getArchivedAt(): string|\DateTimeInterface|null { return $this->get('archived_at'); }
    public function hasArchivedAt(): bool { return $this->has('archived_at'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When attributes_used is omitted; use hasAttributesUsed() or valueOrDefault().
     */
    public function getAttributesUsed(): array { return $this->get('attributes_used'); }
    public function hasAttributesUsed(): bool { return $this->has('attributes_used'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see ResourceReferenceInput} or null. The credential that created this rule. Null when Flint created it, as for Flint's default rules. The reference may name an API key in the other mode. Shape $.anyOf[1] (Value): {@see ResourceReferenceInput}. A reference to another resource by `resource_type` and `resource_id`. Shape $.anyOf[2] (Value): null.
     * @return array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null
     * @throws SdkError When created_by is omitted; use hasCreatedBy() or valueOrDefault().
     */
    public function getCreatedBy(): mixed { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): Array of {@see RiskRuleIssueInput}. Problems that stop Flint from evaluating this rule. Empty when the rule can run. An active rule with issues is skipped on every payment and protects nothing until you fix it. An inactive rule with issues can't be activated until you fix it. Shape $[] (Value): {@see RiskRuleIssueInput}. A problem that stops a saved or proposed risk rule from running, with a `code`, a message, and the `path` to the part of the rule at fault.
     * @return list<RiskRuleIssueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When issues is omitted; use hasIssues() or valueOrDefault().
     */
    public function getIssues(): array { return $this->get('issues'); }
    public function hasIssues(): bool { return $this->has('issues'); }
    /** Shape $ (Value): string.  Value enum: "system_default", "merchant".
     * @return string
     * @throws SdkError When origin is omitted; use hasOrigin() or valueOrDefault().
     */
    public function getOrigin(): string { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** Shape $ (Value): {@see RiskPredicateNodeInput}. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     * @return RiskPredicateNodeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When predicate is omitted; use hasPredicate() or valueOrDefault().
     */
    public function getPredicate(): mixed { return $this->get('predicate'); }
    public function hasPredicate(): bool { return $this->has('predicate'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When risk_rule_id is omitted; use hasRiskRuleId() or valueOrDefault().
     */
    public function getRiskRuleId(): string { return $this->get('risk_rule_id'); }
    public function hasRiskRuleId(): bool { return $this->has('risk_rule_id'); }
    /** Shape $ (Value): string.  Value enum: "pre_authorization", "post_authorization".
     * @return string
     * @throws SdkError When stage is omitted; use hasStage() or valueOrDefault().
     */
    public function getStage(): string { return $this->get('stage'); }
    public function hasStage(): bool { return $this->has('stage'); }
    /** Shape $ (Value): string.  Value enum: "active", "inactive", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
