<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $fixed_fee_currency_options
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $maximum_fee_currency_options
 * @property-read int|float $percent
 * Presence-aware input; omitted fields throw when accessed. */
final class PlatformFeeCapRequestInput extends Model {
    /** @param array{'fixed_fee_currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'maximum_fee_currency_options': array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'percent': int|float}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeCapRequestInput')); }
    /** The fixed part of the cap per payment, keyed by currency code, added to the percentage part: 30 USD minor units with percent 1 is 1% + 0.30 USD. Optional. Each is from 1 minor unit to the same currency's maximum, and a currency needs a maximum to have one; otherwise INVALID_REQUEST with INVALID_VALUE on the entry. Each key must equal its Money's currency. Only USD today. * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When fixed_fee_currency_options is omitted; use hasFixedFeeCurrencyOptions() or valueOrDefault().
     */
    public function getFixedFeeCurrencyOptions(): array|object { return $this->get('fixed_fee_currency_options'); }
    public function hasFixedFeeCurrencyOptions(): bool { return $this->has('fixed_fee_currency_options'); }
    /** The maximum fee on one payment, keyed by currency code: from 1 to 1,000,000 minor units ($0.01 to $10,000.00). Each key must equal its Money's currency. Only USD today. minProperties: 1. * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When maximum_fee_currency_options is omitted; use hasMaximumFeeCurrencyOptions() or valueOrDefault().
     */
    public function getMaximumFeeCurrencyOptions(): array|object { return $this->get('maximum_fee_currency_options'); }
    public function hasMaximumFeeCurrencyOptions(): bool { return $this->has('maximum_fee_currency_options'); }
    /** The percentage part of the cap, in percent: from 0 to 25, with up to four decimal places. 2.5 means 2.5%. 0 needs a fixed part in every currency with a maximum, so the cap is a flat fee per payment; otherwise INVALID_REQUEST with INVALID_VALUE on the maximum of the currency without one. minimum: 0. maximum: 25. multipleOf: 0.0001.
     * @return int|float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): int|float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
}
