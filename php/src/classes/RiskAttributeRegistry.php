<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<RiskAttribute> $attributes
 * Presence-aware response; omitted optional fields return null. */
final class RiskAttributeRegistry extends Model {
    /** @param array{'attributes': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskAttributeRegistry')); }
    /** Shape $ (Value): Array of {@see RiskAttribute}. Shape $[] (Value): {@see RiskAttribute}. One attribute a risk rule can test, with its value type, allowed operators, and whether it is currently available.
     * @return list<RiskAttribute>
     */
    public function getAttributes(): array { return $this->get('attributes'); }
    public function hasAttributes(): bool { return $this->has('attributes'); }
}
