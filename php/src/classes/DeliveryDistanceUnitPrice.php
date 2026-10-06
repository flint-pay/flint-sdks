<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValue> $currency_options
 * @property-read string $unit
 * @property-read string $unit_quantity
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryDistanceUnitPrice extends Model {
    /** @param array{'currency_options': \stdClass, 'unit': string, 'unit_quantity': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryDistanceUnitPrice')); }
    /** @return array<array-key, MoneyValue>
     * @throws SdkError When currency_options is omitted; use hasCurrencyOptions() or valueOrDefault().
     */
    public function getCurrencyOptions(): array { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** @return string
     * @throws SdkError When unit is omitted; use hasUnit() or valueOrDefault().
     */
    public function getUnit(): string { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** @return string
     * @throws SdkError When unit_quantity is omitted; use hasUnitQuantity() or valueOrDefault().
     */
    public function getUnitQuantity(): string { return $this->get('unit_quantity'); }
    public function hasUnitQuantity(): bool { return $this->has('unit_quantity'); }
}
