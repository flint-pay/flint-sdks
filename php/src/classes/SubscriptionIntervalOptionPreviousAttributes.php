<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $billing_interval
 * @property-read int|null $billing_interval_count
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionIntervalOptionPreviousAttributes extends Model {
    /** @param array{'billing_interval'?: mixed, 'billing_interval_count'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionIntervalOptionPreviousAttributes')); }
    /** Unit of the billing period. Together with billing_interval_count it sets the period one charge covers. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[1] (Value): string. Unit of the billing period. Together with billing_interval_count it sets the period one charge covers. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBillingInterval(): string|null { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of interval units per billing period, from 1 to 365. It doesn't change the price of one delivery. With a delivery cadence, it changes how many deliveries one charge covers; without one, it doesn't change the charge. anyOf[1] (Value): integer. Number of interval units per billing period, from 1 to 365. It doesn't change the price of one delivery. With a delivery cadence, it changes how many deliveries one charge covers; without one, it doesn't change the charge. Format: int32. minimum: 1. maximum: 365. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getBillingIntervalCount(): int|null { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
}
