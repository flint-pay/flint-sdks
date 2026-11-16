<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null $fixed_fee_currency_options
 * @property-read array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null $maximum_fee_currency_options
 * @property-read int|float|null $percent
 * Presence-aware input; omitted fields throw when accessed. */
final class PlatformFeeCapPreviousAttributesInput extends Model {
    /** @param array{'fixed_fee_currency_options'?: array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null, 'maximum_fee_currency_options'?: array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null, 'percent'?: int|float|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeCapPreviousAttributesInput')); }
    /** The fixed part of the cap per payment, keyed by currency code, added to the percentage part. Omitted when no currency has one. Only USD today. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributesInput}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null
     * @throws SdkError When fixed_fee_currency_options is omitted; use hasFixedFeeCurrencyOptions() or valueOrDefault().
     */
    public function getFixedFeeCurrencyOptions(): mixed { return $this->get('fixed_fee_currency_options'); }
    public function hasFixedFeeCurrencyOptions(): bool { return $this->has('fixed_fee_currency_options'); }
    /** The maximum fee on one payment, keyed by currency code. Only USD today. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributesInput}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null
     * @throws SdkError When maximum_fee_currency_options is omitted; use hasMaximumFeeCurrencyOptions() or valueOrDefault().
     */
    public function getMaximumFeeCurrencyOptions(): mixed { return $this->get('maximum_fee_currency_options'); }
    public function hasMaximumFeeCurrencyOptions(): bool { return $this->has('maximum_fee_currency_options'); }
    /** The percentage part of the cap, in percent: 2.5 means 2.5%. 0 when the cap is a fixed part alone. anyOf[1] (Value): number. The percentage part of the cap, in percent: 2.5 means 2.5%. 0 when the cap is a fixed part alone. minimum: 0. maximum: 25. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): mixed { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
}
