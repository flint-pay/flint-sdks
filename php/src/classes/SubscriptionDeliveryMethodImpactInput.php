<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_id
 * @property-read string $mode
 * @property-read SubscriptionCountsInput|array<array-key, mixed>|\stdClass $no_longer_eligible_counts
 * @property-read list<string> $no_longer_eligible_reasons
 * @property-read SubscriptionCountsInput|array<array-key, mixed>|\stdClass $subscription_counts
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryMethodImpactInput extends Model {
    /** @param array{'delivery_method_id': string, 'mode': string, 'no_longer_eligible_counts': SubscriptionCountsInput|array<array-key, mixed>|\stdClass, 'no_longer_eligible_reasons'?: list<string>, 'subscription_counts': SubscriptionCountsInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMethodImpactInput')); }
    /** ID of the delivery method whose edit was previewed. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Selects the delivery method update preview. Value enum: "delivery_method_update".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Of those, the subscriptions the edit would leave unable to use the method, by status. Counts of subscriptions by status: active, past due, and paused.
     * @return SubscriptionCountsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When no_longer_eligible_counts is omitted; use hasNoLongerEligibleCounts() or valueOrDefault().
     */
    public function getNoLongerEligibleCounts(): mixed { return $this->get('no_longer_eligible_counts'); }
    public function hasNoLongerEligibleCounts(): bool { return $this->has('no_longer_eligible_counts'); }
    /** Distinct delivery eligibility reasons for the subscriptions in no_longer_eligible_counts. Includes method_type_not_allowed when stored items do not allow the method's type. Omitted when no reasons apply. [] enum: "eligibility_no_match", "method_type_not_allowed". [] (Value): string.  Value enum: "eligibility_no_match", "method_type_not_allowed".
     * @return list<string>
     * @throws SdkError When no_longer_eligible_reasons is omitted; use hasNoLongerEligibleReasons() or valueOrDefault().
     */
    public function getNoLongerEligibleReasons(): array { return $this->get('no_longer_eligible_reasons'); }
    public function hasNoLongerEligibleReasons(): bool { return $this->has('no_longer_eligible_reasons'); }
    /** Live subscriptions that use the method now, by status. Counts of subscriptions by status: active, past due, and paused.
     * @return SubscriptionCountsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription_counts is omitted; use hasSubscriptionCounts() or valueOrDefault().
     */
    public function getSubscriptionCounts(): mixed { return $this->get('subscription_counts'); }
    public function hasSubscriptionCounts(): bool { return $this->has('subscription_counts'); }
}
