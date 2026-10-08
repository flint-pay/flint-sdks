<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $billing_anchor_day
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read SubscriptionBillingScheduleRequestInput|array<array-key, mixed>|\stdClass $billing_schedule
 * @property-read SubscriptionBillingStartRequestInput|array<array-key, mixed>|\stdClass $billing_start
 * @property-read string $customer_id
 * @property-read SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass $delivery
 * @property-read string $external_reference_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $payment_method_id
 * @property-read int $quantity
 * @property-read SubscriptionServiceLocationRequestInput|array<array-key, mixed>|\stdClass $service_location
 * @property-read string $subscription_plan_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateSubscriptionRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateSubscriptionRequestInput')); }
    /** @return int
     * @throws SdkError When billing_anchor_day is omitted; use hasBillingAnchorDay() or valueOrDefault().
     */
    public function getBillingAnchorDay(): int { return $this->get('billing_anchor_day'); }
    public function hasBillingAnchorDay(): bool { return $this->has('billing_anchor_day'); }
    /** @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** @return SubscriptionBillingScheduleRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When billing_schedule is omitted; use hasBillingSchedule() or valueOrDefault().
     */
    public function getBillingSchedule(): mixed { return $this->get('billing_schedule'); }
    public function hasBillingSchedule(): bool { return $this->has('billing_schedule'); }
    /** @return SubscriptionBillingStartRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When billing_start is omitted; use hasBillingStart() or valueOrDefault().
     */
    public function getBillingStart(): mixed { return $this->get('billing_start'); }
    public function hasBillingStart(): bool { return $this->has('billing_start'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery is omitted; use hasDelivery() or valueOrDefault().
     */
    public function getDelivery(): mixed { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** @return SubscriptionServiceLocationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When service_location is omitted; use hasServiceLocation() or valueOrDefault().
     */
    public function getServiceLocation(): mixed { return $this->get('service_location'); }
    public function hasServiceLocation(): bool { return $this->has('service_location'); }
    /** @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
}
