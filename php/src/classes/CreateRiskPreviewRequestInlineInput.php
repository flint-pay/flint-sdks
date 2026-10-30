<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read string $mode
 * @property-read RiskPredicateNodeInput|array<array-key, mixed>|\stdClass $predicate
 * @property-read string $risk_rule_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateRiskPreviewRequestInlineInput extends Model {
    /** @param array{'action': string, 'mode': string, 'predicate': RiskPredicateNodeInput|array<array-key, mixed>|\stdClass, 'risk_rule_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRiskPreviewRequestInlineInput')); }
    /** Value enum: "allow", "block", "review", "require_3ds".
     * @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** What to check: a rule in this request, or a saved rule. Value enum: "inline".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     * @return RiskPredicateNodeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When predicate is omitted; use hasPredicate() or valueOrDefault().
     */
    public function getPredicate(): mixed { return $this->get('predicate'); }
    public function hasPredicate(): bool { return $this->has('predicate'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When risk_rule_id is omitted; use hasRiskRuleId() or valueOrDefault().
     */
    public function getRiskRuleId(): string { return $this->get('risk_rule_id'); }
    public function hasRiskRuleId(): bool { return $this->has('risk_rule_id'); }
}
