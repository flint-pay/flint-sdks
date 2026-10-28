<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass> $any
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskPredicateNodeAnyInput extends Model {
    /** @param array{'any': list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskPredicateNodeAnyInput')); }
    /** Shape $ (Value): Array of {@see RiskPredicateNodeInput}. minItems: 1. maxItems: 50. Shape $[] (Value): {@see RiskPredicateNodeInput}. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     * @return list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When any is omitted; use hasAny() or valueOrDefault().
     */
    public function getAny(): array { return $this->get('any'); }
    public function hasAny(): bool { return $this->has('any'); }
}
