<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $currency_options
 * @property-read string $unit
 * @property-read int $unit_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryWeightUnitPriceRequestInput extends Model {
    /** @param array{'currency_options': array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'unit': string, 'unit_quantity': int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryWeightUnitPriceRequestInput')); }
    /**  * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When currency_options is omitted; use hasCurrencyOptions() or valueOrDefault().
     */
    public function getCurrencyOptions(): array|object { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** Weight unit used by unit_quantity. Value enum: "gram", "kilogram", "ounce", "pound".
     * @return string
     * @throws SdkError When unit is omitted; use hasUnit() or valueOrDefault().
     */
    public function getUnit(): string { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When unit_quantity is omitted; use hasUnitQuantity() or valueOrDefault().
     */
    public function getUnitQuantity(): int { return $this->get('unit_quantity'); }
    public function hasUnitQuantity(): bool { return $this->has('unit_quantity'); }
}
