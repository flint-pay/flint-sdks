<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $billing_anchor_day
 * @property-read SubscriptionBillingScheduleRequestInput|array<array-key, mixed>|\stdClass $billing_schedule
 * @property-read SubscriptionBillingStartRequestInput|array<array-key, mixed>|\stdClass $billing_start
 * @property-read string $customer_id
 * @property-read SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass $delivery
 * @property-read string $external_reference_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $payment_method_id
 * @property-read SubscriptionServiceLocationRequestInput|array<array-key, mixed>|\stdClass $service_location
 * @property-read SubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass $terms
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateSubscriptionRequestInput extends Model {
    /** @param array{'billing_anchor_day'?: int, 'billing_schedule'?: SubscriptionBillingScheduleRequestInput|array<array-key, mixed>|\stdClass, 'billing_start': SubscriptionBillingStartRequestInput|array<array-key, mixed>|\stdClass, 'customer_id': string, 'delivery'?: SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'payment_method_id'?: string, 'service_location'?: SubscriptionServiceLocationRequestInput|array<array-key, mixed>|\stdClass, 'terms': SubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateSubscriptionRequestInput')); }
    /** Shape $ (Value): integer. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
     * @return int
     * @throws SdkError When billing_anchor_day is omitted; use hasBillingAnchorDay() or valueOrDefault().
     */
    public function getBillingAnchorDay(): int { return $this->get('billing_anchor_day'); }
    public function hasBillingAnchorDay(): bool { return $this->has('billing_anchor_day'); }
    /** Shape $ (Value): {@see SubscriptionBillingScheduleRequestInput}. Who owns the billing schedule when creating a subscription: Flint or an external system.
     * @return SubscriptionBillingScheduleRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When billing_schedule is omitted; use hasBillingSchedule() or valueOrDefault().
     */
    public function getBillingSchedule(): mixed { return $this->get('billing_schedule'); }
    public function hasBillingSchedule(): bool { return $this->has('billing_schedule'); }
    /** Shape $ (Value): {@see SubscriptionBillingStartRequestInput}. How billing begins. Send exactly one closed tagged-union branch.
     * @return SubscriptionBillingStartRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When billing_start is omitted; use hasBillingStart() or valueOrDefault().
     */
    public function getBillingStart(): mixed { return $this->get('billing_start'); }
    public function hasBillingStart(): bool { return $this->has('billing_start'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): {@see SubscriptionDeliveryRequestInput}. The delivery preference to set on a subscription: delivery method, type, destination, and recipient.
     * @return SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery is omitted; use hasDelivery() or valueOrDefault().
     */
    public function getDelivery(): mixed { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string. minLength: 1.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Shape $ (Value): {@see SubscriptionServiceLocationRequestInput}. Where a subscription's service is delivered: a saved customer address by ID, or a new address.
     * @return SubscriptionServiceLocationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When service_location is omitted; use hasServiceLocation() or valueOrDefault().
     */
    public function getServiceLocation(): mixed { return $this->get('service_location'); }
    public function hasServiceLocation(): bool { return $this->has('service_location'); }
    /** Shape $ (Value): {@see SubscriptionTermsRequestInput}. Subscription terms from either a subscription plan or subscription offers, selected by `type`.
     * @return SubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When terms is omitted; use hasTerms() or valueOrDefault().
     */
    public function getTerms(): mixed { return $this->get('terms'); }
    public function hasTerms(): bool { return $this->has('terms'); }
}
