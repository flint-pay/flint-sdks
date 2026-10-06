<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $maximum_fee_currency_options
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $minimum_fee_currency_options
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryCallerSuppliedPricingStrategyRequestInput extends Model {
    /** @param array{'maximum_fee_currency_options': array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'minimum_fee_currency_options': array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryCallerSuppliedPricingStrategyRequestInput')); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When maximum_fee_currency_options is omitted; use hasMaximumFeeCurrencyOptions() or valueOrDefault().
     */
    public function getMaximumFeeCurrencyOptions(): array|object { return $this->get('maximum_fee_currency_options'); }
    public function hasMaximumFeeCurrencyOptions(): bool { return $this->has('maximum_fee_currency_options'); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When minimum_fee_currency_options is omitted; use hasMinimumFeeCurrencyOptions() or valueOrDefault().
     */
    public function getMinimumFeeCurrencyOptions(): array|object { return $this->get('minimum_fee_currency_options'); }
    public function hasMinimumFeeCurrencyOptions(): bool { return $this->has('minimum_fee_currency_options'); }
}
