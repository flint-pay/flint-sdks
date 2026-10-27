<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $risk_rule_id
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskRulesGetInput extends Model {
    /** @param array{'risk_rule_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskRulesGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When risk_rule_id is omitted; use hasRiskRuleId() or valueOrDefault().
     */
    public function getRiskRuleId(): string { return $this->get('risk_rule_id'); }
    public function hasRiskRuleId(): bool { return $this->has('risk_rule_id'); }
}
