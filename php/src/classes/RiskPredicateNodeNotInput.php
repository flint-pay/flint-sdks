<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read RiskPredicateNodeInput|array<array-key, mixed>|\stdClass $not
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskPredicateNodeNotInput extends Model {
    /** @param array{'not': RiskPredicateNodeInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskPredicateNodeNotInput')); }
    /** Shape $ (Value): {@see RiskPredicateNodeInput}. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     * @return RiskPredicateNodeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When not is omitted; use hasNot() or valueOrDefault().
     */
    public function getNot(): mixed { return $this->get('not'); }
    public function hasNot(): bool { return $this->has('not'); }
}
