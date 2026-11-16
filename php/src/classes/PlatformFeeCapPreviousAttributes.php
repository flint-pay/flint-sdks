<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValuePreviousAttributes>|null $fixed_fee_currency_options
 * @property-read array<array-key, MoneyValuePreviousAttributes>|null $maximum_fee_currency_options
 * @property-read float|null $percent
 * Presence-aware response; omitted optional fields return null. */
final class PlatformFeeCapPreviousAttributes extends Model {
    /** @param array{'fixed_fee_currency_options'?: mixed, 'maximum_fee_currency_options'?: mixed, 'percent'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeCapPreviousAttributes')); }
    /** The fixed part of the cap per payment, keyed by currency code, added to the percentage part. Omitted when no currency has one. Only USD today. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributes>|null
     */
    public function getFixedFeeCurrencyOptions(): array|null { return $this->get('fixed_fee_currency_options'); }
    public function hasFixedFeeCurrencyOptions(): bool { return $this->has('fixed_fee_currency_options'); }
    /** The maximum fee on one payment, keyed by currency code. Only USD today. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributes>|null
     */
    public function getMaximumFeeCurrencyOptions(): array|null { return $this->get('maximum_fee_currency_options'); }
    public function hasMaximumFeeCurrencyOptions(): bool { return $this->has('maximum_fee_currency_options'); }
    /** The percentage part of the cap, in percent: 2.5 means 2.5%. 0 when the cap is a fixed part alone. anyOf[1] (Value): number. The percentage part of the cap, in percent: 2.5 means 2.5%. 0 when the cap is a fixed part alone. minimum: 0. maximum: 25. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return float|null
     */
    public function getPercent(): float|null { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
}
