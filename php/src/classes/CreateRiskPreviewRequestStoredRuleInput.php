<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $action
 * @property-read string $mode
 * @property-read array{'all': list<RiskPredicateNodeRequestInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<RiskPredicateNodeRequestInput|array<array-key, mixed>|\stdClass>}|object|array{'not': RiskPredicateNodeRequestInput|array<array-key, mixed>|\stdClass}|object|array{'attribute': string, 'operator': string, 'value': string|int|bool}|object|array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'attribute': string, 'operator': string}|object|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|object|array{'attribute': string, 'list_alias': string, 'operator': string}|object|array{'attribute': string, 'operator': string}|object|null $predicate
 * @property-read string $risk_rule_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateRiskPreviewRequestStoredRuleInput extends Model {
    /** @param array{'action'?: string|null, 'mode': string, 'predicate'?: array{'all': list<RiskPredicateNodeRequestInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<RiskPredicateNodeRequestInput|array<array-key, mixed>|\stdClass>}|object|array{'not': RiskPredicateNodeRequestInput|array<array-key, mixed>|\stdClass}|object|array{'attribute': string, 'operator': string, 'value': string|int|bool}|object|array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'attribute': string, 'operator': string}|object|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|object|array{'attribute': string, 'list_alias': string, 'operator': string}|object|array{'attribute': string, 'operator': string}|object|null, 'risk_rule_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRiskPreviewRequestStoredRuleInput')); }
    /** Action to preview. In stored_rule mode, omitted or null keeps the saved action. Value enum: "allow", "block", "review", "require_3ds", null.
     * @return string|null
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string|null { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** What to check: a rule in this request, or a saved rule. Value enum: "stored_rule".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate. anyOf[1] (Value): {@see RiskPredicateNodeRequestInput}. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. anyOf[2] (Value): null.
     * @return array{'all': list<RiskPredicateNodeRequestInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<RiskPredicateNodeRequestInput|array<array-key, mixed>|\stdClass>}|object|array{'not': RiskPredicateNodeRequestInput|array<array-key, mixed>|\stdClass}|object|array{'attribute': string, 'operator': string, 'value': string|int|bool}|object|array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'attribute': string, 'operator': string}|object|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|object|array{'attribute': string, 'list_alias': string, 'operator': string}|object|array{'attribute': string, 'operator': string}|object|null
     * @throws SdkError When predicate is omitted; use hasPredicate() or valueOrDefault().
     */
    public function getPredicate(): mixed { return $this->get('predicate'); }
    public function hasPredicate(): bool { return $this->has('predicate'); }
    /** ID of the saved rule to check. minLength: 1. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
     * @return string
     * @throws SdkError When risk_rule_id is omitted; use hasRiskRuleId() or valueOrDefault().
     */
    public function getRiskRuleId(): string { return $this->get('risk_rule_id'); }
    public function hasRiskRuleId(): bool { return $this->has('risk_rule_id'); }
}
