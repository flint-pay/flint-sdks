<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read string $description
 * @property-read array{'all': list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass>}|object|array{'not': RiskPredicateNodeInput|array<array-key, mixed>|\stdClass}|object|array{'attribute': string, 'operator': string, 'value': string|int|bool}|object|array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'attribute': string, 'operator': string}|object|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|object|array{'attribute': string, 'list_alias': string, 'operator': string}|object|array{'attribute': string, 'operator': string}|object $predicate
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateRiskRuleRequestInput extends Model {
    /** @param array{'action': string, 'description': string, 'predicate': array{'all': list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass>}|object|array{'not': RiskPredicateNodeInput|array<array-key, mixed>|\stdClass}|object|array{'attribute': string, 'operator': string, 'value': string|int|bool}|object|array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'attribute': string, 'operator': string}|object|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|object|array{'attribute': string, 'list_alias': string, 'operator': string}|object|array{'attribute': string, 'operator': string}|object, 'status'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRiskRuleRequestInput')); }
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds".
     * @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): {@see RiskPredicateNodeInput}. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     * @return array{'all': list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass>}|object|array{'not': RiskPredicateNodeInput|array<array-key, mixed>|\stdClass}|object|array{'attribute': string, 'operator': string, 'value': string|int|bool}|object|array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'attribute': string, 'operator': string}|object|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|object|array{'attribute': string, 'list_alias': string, 'operator': string}|object|array{'attribute': string, 'operator': string}|object
     * @throws SdkError When predicate is omitted; use hasPredicate() or valueOrDefault().
     */
    public function getPredicate(): mixed { return $this->get('predicate'); }
    public function hasPredicate(): bool { return $this->has('predicate'); }
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
