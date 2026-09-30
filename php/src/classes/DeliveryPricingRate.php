<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValue> $currency_options
 * @property-read string $delivery_rate_id
 * @property-read int $priority
 * @property-read \stdClass $when
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryPricingRate extends Model {
    /** @param array{'currency_options': \stdClass, 'delivery_rate_id': string, 'priority': int, 'when'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPricingRate')); }
    /** @return array<array-key, MoneyValue>
     * @throws SdkError When currency_options is omitted; use hasCurrencyOptions() or valueOrDefault().
     */
    public function getCurrencyOptions(): array { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** @return string
     * @throws SdkError When delivery_rate_id is omitted; use hasDeliveryRateId() or valueOrDefault().
     */
    public function getDeliveryRateId(): string { return $this->get('delivery_rate_id'); }
    public function hasDeliveryRateId(): bool { return $this->has('delivery_rate_id'); }
    /** @return int
     * @throws SdkError When priority is omitted; use hasPriority() or valueOrDefault().
     */
    public function getPriority(): int { return $this->get('priority'); }
    public function hasPriority(): bool { return $this->has('priority'); }
    /** @return \stdClass
     * @throws SdkError When when is omitted; use hasWhen() or valueOrDefault().
     */
    public function getWhen(): \stdClass { return $this->get('when'); }
    public function hasWhen(): bool { return $this->has('when'); }
}
