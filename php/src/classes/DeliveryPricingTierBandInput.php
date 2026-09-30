<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $currency_options
 * @property-read string $from
 * @property-read string $to
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPricingTierBandInput extends Model {
    /** @param array{'currency_options': array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'from': string, 'to'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPricingTierBandInput')); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When currency_options is omitted; use hasCurrencyOptions() or valueOrDefault().
     */
    public function getCurrencyOptions(): array|object { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** @return string
     * @throws SdkError When from is omitted; use hasFrom() or valueOrDefault().
     */
    public function getFrom(): string { return $this->get('from'); }
    public function hasFrom(): bool { return $this->has('from'); }
    /** @return string
     * @throws SdkError When to is omitted; use hasTo() or valueOrDefault().
     */
    public function getTo(): string { return $this->get('to'); }
    public function hasTo(): bool { return $this->has('to'); }
}
