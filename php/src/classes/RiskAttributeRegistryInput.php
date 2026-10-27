<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<RiskAttributeInput|array<array-key, mixed>|\stdClass> $attributes
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskAttributeRegistryInput extends Model {
    /** @param array{'attributes': list<RiskAttributeInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskAttributeRegistryInput')); }
    /** Shape $ (Value): Array of {@see RiskAttributeInput}. Shape $[] (Value): {@see RiskAttributeInput}. One attribute a risk rule can test, with its value type, allowed operators, and whether it is currently available.
     * @return list<RiskAttributeInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When attributes is omitted; use hasAttributes() or valueOrDefault().
     */
    public function getAttributes(): array { return $this->get('attributes'); }
    public function hasAttributes(): bool { return $this->has('attributes'); }
}
