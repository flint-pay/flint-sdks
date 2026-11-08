<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionIntervalOption extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionIntervalOption')); }
    /** Unit of the billing period. Every option bills the same line prices once per period. Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of interval units per billing period, from 1 to 365. Does not multiply line prices. Format: int32. minimum: 1. maximum: 365.
     * @return int
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
}
