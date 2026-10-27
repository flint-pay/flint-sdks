<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $mode
 * @property-read SubscriptionRenewalEstimateInput|array<array-key, mixed>|\stdClass $renewal
 * @property-read string $subscription_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionRenewalPreviewInput extends Model {
    /** @param array{'mode': string, 'renewal': SubscriptionRenewalEstimateInput|array<array-key, mixed>|\stdClass, 'subscription_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionRenewalPreviewInput')); }
    /** Shape $ (Value): string.  Value enum: "next_renewal".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): {@see SubscriptionRenewalEstimateInput}. Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax.
     * @return SubscriptionRenewalEstimateInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When renewal is omitted; use hasRenewal() or valueOrDefault().
     */
    public function getRenewal(): mixed { return $this->get('renewal'); }
    public function hasRenewal(): bool { return $this->has('renewal'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}
