<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null $currency_options
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryFixedPricingStrategyPreviousAttributesInput extends Model {
    /** @param array{'currency_options'?: array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryFixedPricingStrategyPreviousAttributesInput')); }
    /** Price by ISO 4217 currency code. Each key must equal the currency of its Money value. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributesInput}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null
     * @throws SdkError When currency_options is omitted; use hasCurrencyOptions() or valueOrDefault().
     */
    public function getCurrencyOptions(): mixed { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
}
