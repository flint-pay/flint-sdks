<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<RiskPredicateNodeRequestInput|array<array-key, mixed>|\stdClass> $all
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskPredicateNodeAllRequestInput extends Model {
    /** @param array{'all': list<RiskPredicateNodeRequestInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskPredicateNodeAllRequestInput')); }
    /** Predicates that must all match. minItems: 1. maxItems: 50. [] (Value): {@see RiskPredicateNodeRequestInput}. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     * @return list<RiskPredicateNodeRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When all is omitted; use hasAll() or valueOrDefault().
     */
    public function getAll(): array { return $this->get('all'); }
    public function hasAll(): bool { return $this->has('all'); }
}
