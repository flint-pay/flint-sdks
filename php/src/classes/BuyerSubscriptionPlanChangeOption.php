<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_starts
 * @property-read BuyerExpandedSubscriptionPlanSummary $subscription_plan
 * @property-read string $subscription_plan_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerSubscriptionPlanChangeOption extends Model {
    /** @param array{'billing_starts': string, 'subscription_plan': mixed, 'subscription_plan_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionPlanChangeOption')); }
    /** The store's billing timing for this target: now collects a new period with unused-time credit; next_renewal changes the plan now and keeps the current paid period and next billing date; period_end keeps the current plan until the next charged renewal; prorated_now charges the difference for the rest of the current period and keeps the period and anchor. Value enum: "now", "next_renewal", "period_end", "prorated_now".
     * @return string
     */
    public function getBillingStarts(): string { return $this->get('billing_starts'); }
    public function hasBillingStarts(): bool { return $this->has('billing_starts'); }
    /** The target plan's current summary. A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length, status, and line items.
     * @return BuyerExpandedSubscriptionPlanSummary
     */
    public function getSubscriptionPlan(): BuyerExpandedSubscriptionPlanSummary { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** The target subscription plan. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
}
