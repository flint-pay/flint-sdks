<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?array<array-key, MoneyValue> $fixed_fee_currency_options
 * @property-read array<array-key, MoneyValue> $maximum_fee_currency_options
 * @property-read float $percent
 * Presence-aware response; omitted optional fields return null. */
final class PlatformFeeCap extends Model {
    /** @param array{'fixed_fee_currency_options'?: \stdClass, 'maximum_fee_currency_options': \stdClass, 'percent': float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeCap')); }
    /** The fixed part of the cap per payment, keyed by currency code, added to the percentage part. Omitted when no currency has one. Only USD today. * (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, MoneyValue>
     */
    public function getFixedFeeCurrencyOptions(): ?array { return $this->get('fixed_fee_currency_options'); }
    public function hasFixedFeeCurrencyOptions(): bool { return $this->has('fixed_fee_currency_options'); }
    /** The maximum fee on one payment, keyed by currency code. Only USD today. * (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValue>
     */
    public function getMaximumFeeCurrencyOptions(): array { return $this->get('maximum_fee_currency_options'); }
    public function hasMaximumFeeCurrencyOptions(): bool { return $this->has('maximum_fee_currency_options'); }
    /** The percentage part of the cap, in percent: 2.5 means 2.5%. 0 when the cap is a fixed part alone. minimum: 0. maximum: 25. multipleOf: 0.0001.
     * @return float
     */
    public function getPercent(): float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
}
