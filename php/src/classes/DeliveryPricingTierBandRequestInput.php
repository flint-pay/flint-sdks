<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $currency_options
 * @property-read int $from
 * @property-read int $to
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPricingTierBandRequestInput extends Model {
    /** @param array{'currency_options': array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'from': int, 'to'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPricingTierBandRequestInput')); }
    /**  * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When currency_options is omitted; use hasCurrencyOptions() or valueOrDefault().
     */
    public function getCurrencyOptions(): array|object { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** Format: int64.
     * @return int
     * @throws SdkError When from is omitted; use hasFrom() or valueOrDefault().
     */
    public function getFrom(): int { return $this->get('from'); }
    public function hasFrom(): bool { return $this->has('from'); }
    /** Format: int64.
     * @return int
     * @throws SdkError When to is omitted; use hasTo() or valueOrDefault().
     */
    public function getTo(): int { return $this->get('to'); }
    public function hasTo(): bool { return $this->has('to'); }
}
