<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $unit
 * @property-read float|null $value
 * Presence-aware response; omitted optional fields return null. */
final class WeightPreviousAttributes extends Model {
    /** @param array{'unit'?: mixed, 'value'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WeightPreviousAttributes')); }
    /** Weight unit. Use gram, kilogram, ounce, or pound. Value enum: "gram", "kilogram", "ounce", "pound". anyOf[1] (Value): string. Weight unit. Use gram, kilogram, ounce, or pound. Value enum: "gram", "kilogram", "ounce", "pound". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUnit(): string|null { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** Weight measured in the specified unit. anyOf[1] (Value): number. Weight measured in the specified unit. maximum: 1000000. exclusiveMinimum: 0. multipleOf: 0.001. anyOf[2] (Value): null.
     * @return float|null
     */
    public function getValue(): float|null { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
