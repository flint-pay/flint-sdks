<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read string $applicability
 * @property-read string|null $archived_at
 * @property-read list<string> $attributes_used
 * @property-read string $created_at
 * @property-read string $created_by
 * @property-read string $description
 * @property-read bool $editable
 * @property-read bool $enabled
 * @property-read string $origin
 * @property-read mixed $predicate
 * @property-read string $risk_rule_id
 * @property-read string $stage
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class RiskRule extends Model {
    /** @param array{'action': string, 'applicability': string, 'archived_at': string|null, 'attributes_used': list<string>, 'created_at': string, 'created_by': string, 'description': string, 'editable': bool, 'enabled': bool, 'origin': string, 'predicate': mixed, 'risk_rule_id': string, 'stage': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskRule')); }
    /** @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** @return string
     * @throws SdkError When applicability is omitted; use hasApplicability() or valueOrDefault().
     */
    public function getApplicability(): string { return $this->get('applicability'); }
    public function hasApplicability(): bool { return $this->has('applicability'); }
    /** @return string|null
     * @throws SdkError When archived_at is omitted; use hasArchivedAt() or valueOrDefault().
     */
    public function getArchivedAt(): string|null { return $this->get('archived_at'); }
    public function hasArchivedAt(): bool { return $this->has('archived_at'); }
    /** @return list<string>
     * @throws SdkError When attributes_used is omitted; use hasAttributesUsed() or valueOrDefault().
     */
    public function getAttributesUsed(): array { return $this->get('attributes_used'); }
    public function hasAttributesUsed(): bool { return $this->has('attributes_used'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When created_by is omitted; use hasCreatedBy() or valueOrDefault().
     */
    public function getCreatedBy(): string { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return bool
     * @throws SdkError When editable is omitted; use hasEditable() or valueOrDefault().
     */
    public function getEditable(): bool { return $this->get('editable'); }
    public function hasEditable(): bool { return $this->has('editable'); }
    /** @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** @return string
     * @throws SdkError When origin is omitted; use hasOrigin() or valueOrDefault().
     */
    public function getOrigin(): string { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** @return mixed
     * @throws SdkError When predicate is omitted; use hasPredicate() or valueOrDefault().
     */
    public function getPredicate(): mixed { return $this->get('predicate'); }
    public function hasPredicate(): bool { return $this->has('predicate'); }
    /** @return string
     * @throws SdkError When risk_rule_id is omitted; use hasRiskRuleId() or valueOrDefault().
     */
    public function getRiskRuleId(): string { return $this->get('risk_rule_id'); }
    public function hasRiskRuleId(): bool { return $this->has('risk_rule_id'); }
    /** @return string
     * @throws SdkError When stage is omitted; use hasStage() or valueOrDefault().
     */
    public function getStage(): string { return $this->get('stage'); }
    public function hasStage(): bool { return $this->has('stage'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
