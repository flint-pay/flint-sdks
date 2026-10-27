<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read bool $cancel_at_period_end
 * @property-read SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass $delivery
 * @property-read string $expected_version
 * @property-read string $payment_method_id
 * @property-read int $quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateMeSubscriptionRequestInput extends Model {
    /** @param array{'billing_interval'?: string, 'billing_interval_count'?: int, 'cancel_at_period_end'?: bool, 'delivery'?: SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass, 'expected_version'?: string, 'payment_method_id'?: string, 'quantity'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateMeSubscriptionRequestInput')); }
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Shape $ (Value): integer. minimum: 1. maximum: 365.
     * @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Shape $ (Value): boolean.  Value enum: false.
     * @return bool
     * @throws SdkError When cancel_at_period_end is omitted; use hasCancelAtPeriodEnd() or valueOrDefault().
     */
    public function getCancelAtPeriodEnd(): bool { return $this->get('cancel_at_period_end'); }
    public function hasCancelAtPeriodEnd(): bool { return $this->has('cancel_at_period_end'); }
    /** Shape $ (Value): {@see SubscriptionDeliveryRequestInput}. The delivery preference to set on a subscription: delivery method, type, destination, and recipient.
     * @return SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery is omitted; use hasDelivery() or valueOrDefault().
     */
    public function getDelivery(): mixed { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
