<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $applicability
 * @property-read list<string> $attributes_used
 * @property-read list<string> $list_aliases_used
 * @property-read string $stage
 * Presence-aware response; omitted optional fields return null. */
final class RiskRuleAnalysis extends Model {
    /** @param array{'applicability': string, 'attributes_used': list<string>, 'list_aliases_used': list<string>, 'stage': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskRuleAnalysis')); }
    /** Value enum: "all_payments", "on_session_only".
     * @return string
     */
    public function getApplicability(): string { return $this->get('applicability'); }
    public function hasApplicability(): bool { return $this->has('applicability'); }
    /**  [] (Value): string.
     * @return list<string>
     */
    public function getAttributesUsed(): array { return $this->get('attributes_used'); }
    public function hasAttributesUsed(): bool { return $this->has('attributes_used'); }
    /**  [] (Value): string.
     * @return list<string>
     */
    public function getListAliasesUsed(): array { return $this->get('list_aliases_used'); }
    public function hasListAliasesUsed(): bool { return $this->has('list_aliases_used'); }
    /** Value enum: "pre_authorization", "post_authorization".
     * @return string
     */
    public function getStage(): string { return $this->get('stage'); }
    public function hasStage(): bool { return $this->has('stage'); }
}
