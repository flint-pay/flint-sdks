<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null $currency_options
 * @property-read int|null $from
 * @property-read int|null $to
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPricingTierBandPreviousAttributesInput extends Model {
    /** @param array{'currency_options'?: array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null, 'from'?: int|null, 'to'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPricingTierBandPreviousAttributesInput')); }
    /** Price by ISO 4217 currency code. Each key must equal the currency of its Money value. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributesInput}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null
     * @throws SdkError When currency_options is omitted; use hasCurrencyOptions() or valueOrDefault().
     */
    public function getCurrencyOptions(): mixed { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** Inclusive lower bound. The first band starts at 0; every later band starts at the previous band's `to`. anyOf[1] (Value): integer. Inclusive lower bound. The first band starts at 0; every later band starts at the previous band's `to`. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When from is omitted; use hasFrom() or valueOrDefault().
     */
    public function getFrom(): mixed { return $this->get('from'); }
    public function hasFrom(): bool { return $this->has('from'); }
    /** Exclusive upper bound. Required for every band except the final band, where it must be omitted. anyOf[1] (Value): integer. Exclusive upper bound. Required for every band except the final band, where it must be omitted. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When to is omitted; use hasTo() or valueOrDefault().
     */
    public function getTo(): mixed { return $this->get('to'); }
    public function hasTo(): bool { return $this->has('to'); }
}
