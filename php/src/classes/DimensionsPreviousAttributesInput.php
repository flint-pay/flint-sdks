<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|float|null $height
 * @property-read int|float|null $length
 * @property-read string|null $unit
 * @property-read int|float|null $width
 * Presence-aware input; omitted fields throw when accessed. */
final class DimensionsPreviousAttributesInput extends Model {
    /** @param array{'height'?: int|float|null, 'length'?: int|float|null, 'unit'?: string|null, 'width'?: int|float|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DimensionsPreviousAttributesInput')); }
    /** Distance along this dimension, in the specified unit. anyOf[1] (Value): number. Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0. multipleOf: 0.001. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When height is omitted; use hasHeight() or valueOrDefault().
     */
    public function getHeight(): mixed { return $this->get('height'); }
    public function hasHeight(): bool { return $this->has('height'); }
    /** Distance along this dimension, in the specified unit. anyOf[1] (Value): number. Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0. multipleOf: 0.001. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When length is omitted; use hasLength() or valueOrDefault().
     */
    public function getLength(): mixed { return $this->get('length'); }
    public function hasLength(): bool { return $this->has('length'); }
    /** Length unit for length, width, and height. Use millimeter, centimeter, or inch. Value enum: "millimeter", "centimeter", "inch". anyOf[1] (Value): string. Length unit for length, width, and height. Use millimeter, centimeter, or inch. Value enum: "millimeter", "centimeter", "inch". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When unit is omitted; use hasUnit() or valueOrDefault().
     */
    public function getUnit(): mixed { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** Distance along this dimension, in the specified unit. anyOf[1] (Value): number. Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0. multipleOf: 0.001. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When width is omitted; use hasWidth() or valueOrDefault().
     */
    public function getWidth(): mixed { return $this->get('width'); }
    public function hasWidth(): bool { return $this->has('width'); }
}
