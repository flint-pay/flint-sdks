<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read string $description
 * @property-read string $expected_version
 * @property-read array{'all': list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass>}|object|array{'not': RiskPredicateNodeInput|array<array-key, mixed>|\stdClass}|object|array{'attribute': string, 'operator': string, 'value': string|int|bool}|object|array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'attribute': string, 'operator': string}|object|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|object|array{'attribute': string, 'list_alias': string, 'operator': string}|object|array{'attribute': string, 'operator': string}|object $predicate
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateRiskRuleRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateRiskRuleRequestInput')); }
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
    /** Shape $ (Value): integer string. Optional risk rule version last read by the caller. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): {@see RiskPredicateNodeInput}. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     * @return array{'all': list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass>}|object|array{'not': RiskPredicateNodeInput|array<array-key, mixed>|\stdClass}|object|array{'attribute': string, 'operator': string, 'value': string|int|bool}|object|array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'attribute': string, 'operator': string}|object|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|object|array{'attribute': string, 'list_alias': string, 'operator': string}|object|array{'attribute': string, 'operator': string}|object
     * @throws SdkError When predicate is omitted; use hasPredicate() or valueOrDefault().
     */
    public function getPredicate(): mixed { return $this->get('predicate'); }
    public function hasPredicate(): bool { return $this->has('predicate'); }
    /** Shape $ (Value): string.  Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
