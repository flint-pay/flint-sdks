<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass> $all
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskPredicateNodeAllInput extends Model {
    /** @param array{'all': list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskPredicateNodeAllInput')); }
    /** minItems: 1. maxItems: 50. [] (Value): {@see RiskPredicateNodeInput}. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     * @return list<RiskPredicateNodeInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When all is omitted; use hasAll() or valueOrDefault().
     */
    public function getAll(): array { return $this->get('all'); }
    public function hasAll(): bool { return $this->has('all'); }
}
