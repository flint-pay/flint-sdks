<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read string $billing_starts
 * @property-read list<SubscriptionPlanChangeLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $mode
 * @property-read int $quantity
 * @property-read string $subscription_id
 * @property-read string $subscription_plan_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateSubscriptionPreviewRequestPlanChangeInput extends Model {
    /** @param array{'billing_interval'?: string, 'billing_interval_count'?: int, 'billing_starts': string, 'line_items'?: list<SubscriptionPlanChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'mode': string, 'quantity'?: int, 'subscription_id': string, 'subscription_plan_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateSubscriptionPreviewRequestPlanChangeInput')); }
    /** Send with billing_interval_count to choose a target plan option. Omit both to keep the current interval. Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Required when billing_interval is sent; billing_interval is required when this field is sent. minimum: 1. maximum: 365.
     * @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** now bills a new period with credit for unused paid item time. next_renewal changes the plan immediately and keeps the current paid period and next billing date. Value enum: "now", "next_renewal".
     * @return string
     * @throws SdkError When billing_starts is omitted; use hasBillingStarts() or valueOrDefault().
     */
    public function getBillingStarts(): string { return $this->get('billing_starts'); }
    public function hasBillingStarts(): bool { return $this->has('billing_starts'); }
    /** Optional quantities for target plan lines, with no duplicate IDs. Omitted lines carry their paired current line's quantity, or use the target line's quantity when unpaired. If an adjusted current quantity cannot be paired, send a quantity for every target line. [] (Value): {@see SubscriptionPlanChangeLineItemRequestInput}. Quantity override for a line in the target subscription plan.
     * @return list<SubscriptionPlanChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Value enum: "plan_change".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Omit to keep the current subscription quantity. The target plan must offer the quantity. Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
}
