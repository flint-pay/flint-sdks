<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null $currency_options
 * @property-read string|null $delivery_rate_id
 * @property-read int|null $priority
 * @property-read DeliveryEligibilityExpressionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null $when
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPricingRatePreviousAttributesInput extends Model {
    /** @param array{'currency_options'?: array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null, 'delivery_rate_id'?: string|null, 'priority'?: int|null, 'when'?: DeliveryEligibilityExpressionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPricingRatePreviousAttributesInput')); }
    /** Price by ISO 4217 currency code. Each key must equal the currency of its Money value. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributesInput}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null
     * @throws SdkError When currency_options is omitted; use hasCurrencyOptions() or valueOrDefault().
     */
    public function getCurrencyOptions(): mixed { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** ID of this rate. Flint assigns it. anyOf[1] (Value): string. ID of this rate. Flint assigns it. Example: "drate_01KEZF7C00FD0B4QEC0M00MJ4S". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_rate_id is omitted; use hasDeliveryRateId() or valueOrDefault().
     */
    public function getDeliveryRateId(): mixed { return $this->get('delivery_rate_id'); }
    public function hasDeliveryRateId(): bool { return $this->has('delivery_rate_id'); }
    /** Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. anyOf[1] (Value): integer. Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When priority is omitted; use hasPriority() or valueOrDefault().
     */
    public function getPriority(): mixed { return $this->get('priority'); }
    public function hasPriority(): bool { return $this->has('priority'); }
    /** Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression. anyOf[1] (Value): ({@see DeliveryEligibilityExpressionPreviousAttributesInput} or null). Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression. anyOf[1].anyOf[1] (Value): {@see DeliveryEligibilityExpressionPreviousAttributesInput}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return DeliveryEligibilityExpressionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null
     * @throws SdkError When when is omitted; use hasWhen() or valueOrDefault().
     */
    public function getWhen(): mixed { return $this->get('when'); }
    public function hasWhen(): bool { return $this->has('when'); }
}
