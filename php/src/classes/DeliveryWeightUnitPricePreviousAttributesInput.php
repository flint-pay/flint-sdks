<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null $currency_options
 * @property-read string|null $unit
 * @property-read int|null $unit_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryWeightUnitPricePreviousAttributesInput extends Model {
    /** @param array{'currency_options'?: array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null, 'unit'?: string|null, 'unit_quantity'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryWeightUnitPricePreviousAttributesInput')); }
    /** Price by ISO 4217 currency code. Each key must equal the currency of its Money value. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributesInput}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null
     * @throws SdkError When currency_options is omitted; use hasCurrencyOptions() or valueOrDefault().
     */
    public function getCurrencyOptions(): mixed { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** Weight unit used by unit_quantity. Value enum: "gram", "kilogram", "ounce", "pound". anyOf[1] (Value): string. Weight unit used by unit_quantity. Value enum: "gram", "kilogram", "ounce", "pound". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When unit is omitted; use hasUnit() or valueOrDefault().
     */
    public function getUnit(): mixed { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Format: int64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When unit_quantity is omitted; use hasUnitQuantity() or valueOrDefault().
     */
    public function getUnitQuantity(): mixed { return $this->get('unit_quantity'); }
    public function hasUnitQuantity(): bool { return $this->has('unit_quantity'); }
}
