<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValue> $currency_options
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryFixedPricingStrategyRequest extends Model {
    /** @param array{'currency_options': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryFixedPricingStrategyRequest')); }
    /** @return array<array-key, MoneyValue>
     * @throws SdkError When currency_options is omitted; use hasCurrencyOptions() or valueOrDefault().
     */
    public function getCurrencyOptions(): array { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
}
