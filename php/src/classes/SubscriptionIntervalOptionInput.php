<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionIntervalOptionInput extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionIntervalOptionInput')); }
    /** Unit of the billing period. Together with billing_interval_count it sets the period one charge covers. Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of interval units per billing period, from 1 to 365. It doesn't change the price of one delivery. With a delivery cadence, it changes how many deliveries one charge covers; without one, it doesn't change the charge. Format: int32. minimum: 1. maximum: 365.
     * @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
}
