<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_starts
 * @property-read BuyerExpandedSubscriptionPlanSummaryInput|array<array-key, mixed>|\stdClass $subscription_plan
 * @property-read string $subscription_plan_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerSubscriptionPlanChangeOptionInput extends Model {
    /** @param array{'billing_starts': string, 'subscription_plan': BuyerExpandedSubscriptionPlanSummaryInput|array<array-key, mixed>|\stdClass, 'subscription_plan_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionPlanChangeOptionInput')); }
    /** The store's billing timing for this target: now collects a new period with unused-time credit; next_renewal changes the plan now and keeps the current paid period and next billing date; period_end keeps the current plan until the next charged renewal; prorated_now charges the difference for the rest of the current period and keeps the period and anchor. Value enum: "now", "next_renewal", "period_end", "prorated_now".
     * @return string
     * @throws SdkError When billing_starts is omitted; use hasBillingStarts() or valueOrDefault().
     */
    public function getBillingStarts(): string { return $this->get('billing_starts'); }
    public function hasBillingStarts(): bool { return $this->has('billing_starts'); }
    /** The target plan's current summary. A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length, status, and line items.
     * @return BuyerExpandedSubscriptionPlanSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription_plan is omitted; use hasSubscriptionPlan() or valueOrDefault().
     */
    public function getSubscriptionPlan(): mixed { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** The target subscription plan. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
}
