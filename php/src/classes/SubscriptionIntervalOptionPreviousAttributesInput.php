<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $billing_interval
 * @property-read int|null $billing_interval_count
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionIntervalOptionPreviousAttributesInput extends Model {
    /** @param array{'billing_interval'?: string|null, 'billing_interval_count'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionIntervalOptionPreviousAttributesInput')); }
    /** Unit of the billing period. Together with billing_interval_count it sets the period one charge covers. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[1] (Value): string. Unit of the billing period. Together with billing_interval_count it sets the period one charge covers. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): mixed { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of interval units per billing period, from 1 to 365. It doesn't change the price of one delivery. With a delivery cadence, it changes how many deliveries one charge covers; without one, it doesn't change the charge. anyOf[1] (Value): integer. Number of interval units per billing period, from 1 to 365. It doesn't change the price of one delivery. With a delivery cadence, it changes how many deliveries one charge covers; without one, it doesn't change the charge. Format: int32. minimum: 1. maximum: 365. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): mixed { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
}
