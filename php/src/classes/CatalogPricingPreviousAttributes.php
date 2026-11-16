<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $minimum_quantity
 * @property-read string|null $price_list_id
 * @property-read string|null $source
 * Presence-aware response; omitted optional fields return null. */
final class CatalogPricingPreviousAttributes extends Model {
    /** @param array{'minimum_quantity'?: mixed, 'price_list_id'?: mixed, 'source'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CatalogPricingPreviousAttributes')); }
    /** Minimum quantity of the applied break. Null when the base price applies. anyOf[1] (Value): integer. Minimum quantity of the applied break. Null when the base price applies. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMinimumQuantity(): int|null { return $this->get('minimum_quantity'); }
    public function hasMinimumQuantity(): bool { return $this->has('minimum_quantity'); }
    /** Price list providing the selected schedule. Null when the variant's default schedule applies. anyOf[1] (Value): string. Price list providing the selected schedule. Null when the variant's default schedule applies. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPriceListId(): string|null { return $this->get('price_list_id'); }
    public function hasPriceListId(): bool { return $this->has('price_list_id'); }
    /** Source of the selected schedule. New source values may be added. Value enum: "variant", "price_list". anyOf[1] (Value): string. Source of the selected schedule. New source values may be added. Value enum: "variant", "price_list". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSource(): string|null { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
