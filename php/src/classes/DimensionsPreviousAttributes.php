<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read float|null $height
 * @property-read float|null $length
 * @property-read string|null $unit
 * @property-read float|null $width
 * Presence-aware response; omitted optional fields return null. */
final class DimensionsPreviousAttributes extends Model {
    /** @param array{'height'?: mixed, 'length'?: mixed, 'unit'?: mixed, 'width'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DimensionsPreviousAttributes')); }
    /** Distance along this dimension, in the specified unit. anyOf[1] (Value): number. Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0. multipleOf: 0.001. anyOf[2] (Value): null.
     * @return float|null
     */
    public function getHeight(): float|null { return $this->get('height'); }
    public function hasHeight(): bool { return $this->has('height'); }
    /** Distance along this dimension, in the specified unit. anyOf[1] (Value): number. Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0. multipleOf: 0.001. anyOf[2] (Value): null.
     * @return float|null
     */
    public function getLength(): float|null { return $this->get('length'); }
    public function hasLength(): bool { return $this->has('length'); }
    /** Length unit for length, width, and height. Use millimeter, centimeter, or inch. Value enum: "millimeter", "centimeter", "inch". anyOf[1] (Value): string. Length unit for length, width, and height. Use millimeter, centimeter, or inch. Value enum: "millimeter", "centimeter", "inch". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUnit(): string|null { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** Distance along this dimension, in the specified unit. anyOf[1] (Value): number. Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0. multipleOf: 0.001. anyOf[2] (Value): null.
     * @return float|null
     */
    public function getWidth(): float|null { return $this->get('width'); }
    public function hasWidth(): bool { return $this->has('width'); }
}
