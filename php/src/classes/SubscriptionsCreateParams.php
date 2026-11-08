<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $billing_anchor_day
 * @property-read SubscriptionBillingScheduleRequestInput|array<array-key, mixed>|\stdClass $billing_schedule
 * @property-read SubscriptionBillingStartRequestInput|array<array-key, mixed>|\stdClass $billing_start
 * @property-read string $customer_id
 * @property-read SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass $delivery
 * @property-read array{'cycle_count': int, 'type': string}|object|array{'end_date': string, 'timezone'?: string, 'type': string}|object|null $end_after
 * @property-read string $external_reference_id
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $payment_method_id
 * @property-read list<SubscriptionPromotionRequestInput|array<array-key, mixed>|\stdClass> $promotions
 * @property-read bool $prorate_first_period
 * @property-read SubscriptionServiceLocationRequestInput|array<array-key, mixed>|\stdClass $service_location
 * @property-read SubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass $terms
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionsCreateParams extends Model {
    /** @param array{'billing_anchor_day'?: int, 'billing_schedule'?: SubscriptionBillingScheduleRequestInput|array<array-key, mixed>|\stdClass, 'billing_start': SubscriptionBillingStartRequestInput|array<array-key, mixed>|\stdClass, 'customer_id': string, 'delivery'?: SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass, 'end_after'?: array{'cycle_count': int, 'type': string}|object|array{'end_date': string, 'timezone'?: string, 'type': string}|object|null, 'external_reference_id'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'payment_method_id'?: string, 'promotions'?: list<SubscriptionPromotionRequestInput|array<array-key, mixed>|\stdClass>, 'prorate_first_period'?: bool, 'service_location'?: SubscriptionServiceLocationRequestInput|array<array-key, mixed>|\stdClass, 'terms': SubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionsCreateParams')); }
    /** UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
     * @return int
     * @throws SdkError When billing_anchor_day is omitted; use hasBillingAnchorDay() or valueOrDefault().
     */
    public function getBillingAnchorDay(): int { return $this->get('billing_anchor_day'); }
    public function hasBillingAnchorDay(): bool { return $this->has('billing_anchor_day'); }
    /** Who sets billing dates: `flint` computes each next billing date; `external` waits for you to set `next_billing_at`. Omit it to use your subscription settings' `default_billing_schedule_owner`. Who owns the billing schedule when creating a subscription: Flint or an external system.
     * @return SubscriptionBillingScheduleRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When billing_schedule is omitted; use hasBillingSchedule() or valueOrDefault().
     */
    public function getBillingSchedule(): mixed { return $this->get('billing_schedule'); }
    public function hasBillingSchedule(): bool { return $this->has('billing_schedule'); }
    /** When billing begins. `immediate` starts now; `scheduled` starts at `starts_at` and charges nothing before then; `imported` continues a period the buyer already paid elsewhere, from `period_started_at`, without charging. Each type takes only its own fields. How billing begins. Send exactly one closed tagged-union branch.
     * @return SubscriptionBillingStartRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When billing_start is omitted; use hasBillingStart() or valueOrDefault().
     */
    public function getBillingStart(): mixed { return $this->get('billing_start'); }
    public function hasBillingStart(): bool { return $this->has('billing_start'); }
    /** The customer to bill. The payment method must belong to this customer. minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** The delivery preference to set on a subscription: delivery method, type, destination, and recipient.
     * @return SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery is omitted; use hasDelivery() or valueOrDefault().
     */
    public function getDelivery(): mixed { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** Automatic end condition. Omit it to inherit the plan default; send null for no automatic end. Imported subscriptions accept the same condition. anyOf[1] (Value): {@see SubscriptionEndAfterRequestInput}. An automatic end condition to assign to a subscription, measured by charged billing cycles or a local calendar date. anyOf[2] (Value): null.
     * @return array{'cycle_count': int, 'type': string}|object|array{'end_date': string, 'timezone'?: string, 'type': string}|object|null
     * @throws SdkError When end_after is omitted; use hasEndAfter() or valueOrDefault().
     */
    public function getEndAfter(): mixed { return $this->get('end_after'); }
    public function hasEndAfter(): bool { return $this->has('end_after'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Saved payment method for renewals. Omit it to use the customer's default. A free trial without an upfront charge or an imported paid period may start without either; other starts require a card. An explicit method must belong to the customer, be active, and allow charges without the buyer present. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Promotions to attach with their current terms frozen. Duplicate promotions are invalid. An offer's own promotion attaches automatically; listing it again returns already_applied. maxItems: 5. uniqueItems: true. [] (Value): {@see SubscriptionPromotionRequestInput}. A promotion to attach when creating or importing a subscription.
     * @return list<SubscriptionPromotionRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When promotions is omitted; use hasPromotions() or valueOrDefault().
     */
    public function getPromotions(): array { return $this->get('promotions'); }
    public function hasPromotions(): bool { return $this->has('promotions'); }
    /** Prorate the first paid period to the next billing anchor. Requires `billing_anchor_day`, a monthly or yearly interval, `billing_schedule.owner: flint`, and no shipping. Imported billing starts are not allowed. Trials and scheduled starts prorate from their first paid start; setup fees remain full. Default: false.
     * @return bool
     * @throws SdkError When prorate_first_period is omitted; use hasProrateFirstPeriod() or valueOrDefault().
     */
    public function getProrateFirstPeriod(): bool { return $this->get('prorate_first_period'); }
    public function hasProrateFirstPeriod(): bool { return $this->has('prorate_first_period'); }
    /** Where a subscription's service is delivered: a saved customer address by ID, or a new address.
     * @return SubscriptionServiceLocationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When service_location is omitted; use hasServiceLocation() or valueOrDefault().
     */
    public function getServiceLocation(): mixed { return $this->get('service_location'); }
    public function hasServiceLocation(): bool { return $this->has('service_location'); }
    /** Subscription terms from either a subscription plan or subscription offers, selected by `type`.
     * @return SubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When terms is omitted; use hasTerms() or valueOrDefault().
     */
    public function getTerms(): mixed { return $this->get('terms'); }
    public function hasTerms(): bool { return $this->has('terms'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
