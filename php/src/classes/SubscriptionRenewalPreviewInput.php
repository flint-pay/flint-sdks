<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $billing_at_if_resumed_now
 * @property-read string $mode
 * @property-read SubscriptionRenewalEstimateInput|array<array-key, mixed>|\stdClass $renewal
 * @property-read string $subscription_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionRenewalPreviewInput extends Model {
    /** @param array{'billing_at_if_resumed_now'?: string|\DateTimeInterface, 'mode': string, 'renewal': SubscriptionRenewalEstimateInput|array<array-key, mixed>|\stdClass, 'subscription_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionRenewalPreviewInput')); }
    /** Estimated next billing time if the subscriber resumes now and still has paid time left. Omitted when that estimate does not apply. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When billing_at_if_resumed_now is omitted; use hasBillingAtIfResumedNow() or valueOrDefault().
     */
    public function getBillingAtIfResumedNow(): string|\DateTimeInterface { return $this->get('billing_at_if_resumed_now'); }
    public function hasBillingAtIfResumedNow(): bool { return $this->has('billing_at_if_resumed_now'); }
    /** The kind of subscription preview. Value enum: "next_renewal".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Estimated charge for the subscription's next renewal. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax.
     * @return SubscriptionRenewalEstimateInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When renewal is omitted; use hasRenewal() or valueOrDefault().
     */
    public function getRenewal(): mixed { return $this->get('renewal'); }
    public function hasRenewal(): bool { return $this->has('renewal'); }
    /** ID of the subscription the next renewal was estimated for. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}
