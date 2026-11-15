<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read list<SubscriptionPlanChangeLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $subscription_plan_id
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPlanTermsRequestInput extends Model {
    /** @param array{'billing_interval'?: string, 'billing_interval_count'?: int, 'line_items'?: list<SubscriptionPlanChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'subscription_plan_id': string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPlanTermsRequestInput')); }
    /** Unit of the billing period to subscribe on. Send it with `billing_interval_count`, and only a pair the plan offers in `billing_interval_options`; omit both to use the plan's default pair. Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of `billing_interval` units between charges. Send it with `billing_interval`. Format: int32. minimum: 1. maximum: 365.
     * @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Optional quantities for distinct lines in this plan. Omitted lines keep their plan defaults. Merchants may set any line to 1 through 9,999, regardless of its buyer quantity policy. maxItems: 50. [] (Value): {@see SubscriptionPlanChangeLineItemRequestInput}. Quantity override for a line in the target subscription plan.
     * @return list<SubscriptionPlanChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** ID of the plan to subscribe to. The plan must be active. minLength: 1. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Start the subscription from a subscription plan. Value enum: "subscription_plan".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
