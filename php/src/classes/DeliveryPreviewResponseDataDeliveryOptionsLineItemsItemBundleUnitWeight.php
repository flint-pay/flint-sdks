<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $unit
 * @property-read float $value
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitWeight extends Model {
    /** @param array{'unit': string, 'value': float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitWeight')); }
    /** Weight unit. Use gram, kilogram, ounce, or pound. Value enum: "gram", "kilogram", "ounce", "pound".
     * @return string
     */
    public function getUnit(): string { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** Weight measured in the specified unit. maximum: 1000000. exclusiveMinimum: 0. multipleOf: 0.001.
     * @return float
     */
    public function getValue(): float { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
