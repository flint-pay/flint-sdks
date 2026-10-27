<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|float $height
 * @property-read int|float $length
 * @property-read string $unit
 * @property-read int|float $width
 * Presence-aware input; omitted fields throw when accessed. */
final class DimensionsInput extends Model {
    /** @param array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DimensionsInput')); }
    /** Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     * @return int|float
     * @throws SdkError When height is omitted; use hasHeight() or valueOrDefault().
     */
    public function getHeight(): int|float { return $this->get('height'); }
    public function hasHeight(): bool { return $this->has('height'); }
    /** Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     * @return int|float
     * @throws SdkError When length is omitted; use hasLength() or valueOrDefault().
     */
    public function getLength(): int|float { return $this->get('length'); }
    public function hasLength(): bool { return $this->has('length'); }
    /** Shape $ (Value): string. Length unit for length, width, and height. Use millimeter, centimeter, or inch. Value enum: "millimeter", "centimeter", "inch".
     * @return string
     * @throws SdkError When unit is omitted; use hasUnit() or valueOrDefault().
     */
    public function getUnit(): string { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     * @return int|float
     * @throws SdkError When width is omitted; use hasWidth() or valueOrDefault().
     */
    public function getWidth(): int|float { return $this->get('width'); }
    public function hasWidth(): bool { return $this->has('width'); }
}
