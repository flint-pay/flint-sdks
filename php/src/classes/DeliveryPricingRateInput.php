<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $currency_options
 * @property-read string $delivery_rate_id
 * @property-read int $priority
 * @property-read mixed $when
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPricingRateInput extends Model {
    /** @param array{'currency_options': array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'delivery_rate_id': string, 'priority': int, 'when': mixed}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPricingRateInput')); }
    /** Shape $ (Value): Map of {@see MoneyValueInput}. Shape $.* (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When currency_options is omitted; use hasCurrencyOptions() or valueOrDefault().
     */
    public function getCurrencyOptions(): array|object { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When delivery_rate_id is omitted; use hasDeliveryRateId() or valueOrDefault().
     */
    public function getDeliveryRateId(): string { return $this->get('delivery_rate_id'); }
    public function hasDeliveryRateId(): bool { return $this->has('delivery_rate_id'); }
    /** Shape $ (Value): integer. Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: int32.
     * @return int
     * @throws SdkError When priority is omitted; use hasPriority() or valueOrDefault().
     */
    public function getPriority(): int { return $this->get('priority'); }
    public function hasPriority(): bool { return $this->has('priority'); }
    /** Shape $ (Value): {@see DeliveryEligibilityExpressionInput} or null. Shape $.anyOf[1] (Value): {@see DeliveryEligibilityExpressionInput}. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. Shape $.anyOf[2] (Value): null.
     * @return mixed
     * @throws SdkError When when is omitted; use hasWhen() or valueOrDefault().
     */
    public function getWhen(): mixed { return $this->get('when'); }
    public function hasWhen(): bool { return $this->has('when'); }
}
