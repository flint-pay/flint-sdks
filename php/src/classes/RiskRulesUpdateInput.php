<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $risk_rule_id
 * @property-read mixed $body
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskRulesUpdateInput extends Model {
    /** @param array{'risk_rule_id': string, 'body': mixed}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskRulesUpdateInput')); }
    /** Flint risk rule ID. Example: "rule_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When risk_rule_id is omitted; use hasRiskRuleId() or valueOrDefault().
     */
    public function getRiskRuleId(): string { return $this->get('risk_rule_id'); }
    public function hasRiskRuleId(): bool { return $this->has('risk_rule_id'); }
    /** The request body for: Update a risk rule.
     * @return mixed
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
