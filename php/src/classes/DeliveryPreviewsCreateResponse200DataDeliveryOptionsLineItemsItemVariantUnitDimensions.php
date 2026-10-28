<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read float $height
 * @property-read float $length
 * @property-read string $unit
 * @property-read float $width
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitDimensions extends Model {
    /** @param array{'height': float, 'length': float, 'unit': string, 'width': float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitDimensions')); }
    /** Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     * @return float
     */
    public function getHeight(): float { return $this->get('height'); }
    public function hasHeight(): bool { return $this->has('height'); }
    /** Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     * @return float
     */
    public function getLength(): float { return $this->get('length'); }
    public function hasLength(): bool { return $this->has('length'); }
    /** Shape $ (Value): string. Length unit for length, width, and height. Use millimeter, centimeter, or inch. Value enum: "millimeter", "centimeter", "inch".
     * @return string
     */
    public function getUnit(): string { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** Shape $ (Value): number. Distance along this dimension, in the specified unit. maximum: 100000. exclusiveMinimum: 0. multipleOf: 0.001.
     * @return float
     */
    public function getWidth(): float { return $this->get('width'); }
    public function hasWidth(): bool { return $this->has('width'); }
}
