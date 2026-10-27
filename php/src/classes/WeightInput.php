<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $unit
 * @property-read int|float $value
 * Presence-aware input; omitted fields throw when accessed. */
final class WeightInput extends Model {
    /** @param array{'unit': string, 'value': int|float}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WeightInput')); }
    /** Shape $ (Value): string. Weight unit. Use gram, kilogram, ounce, or pound. Value enum: "gram", "kilogram", "ounce", "pound".
     * @return string
     * @throws SdkError When unit is omitted; use hasUnit() or valueOrDefault().
     */
    public function getUnit(): string { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** Shape $ (Value): number. Weight measured in the specified unit. maximum: 1000000. exclusiveMinimum: 0. multipleOf: 0.001.
     * @return int|float
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): int|float { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
