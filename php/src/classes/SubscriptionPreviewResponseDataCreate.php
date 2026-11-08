<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<SubscriptionPreviewError> $errors
 * @property-read SubscriptionChargeEstimate|null $first_charge
 * @property-read SubscriptionChargeEstimate|null $first_period_charge
 * @property-read bool $is_valid
 * @property-read string $mode
 * @property-read SubscriptionChargeEstimate|null $recurring
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPreviewResponseDataCreate extends Model {
    /** @param array{'errors': list<mixed>, 'first_charge': mixed, 'first_period_charge': mixed, 'is_valid': bool, 'mode': string, 'recurring': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPreviewResponseDataCreate')); }
    /** Validation failures for the proposed subscription; [] when the inputs are valid and priceable. [] (Value): {@see SubscriptionPreviewError}. An error found while previewing a subscription, with a `code`, message, and the parameter at fault.
     * @return list<SubscriptionPreviewError>
     */
    public function getErrors(): array { return $this->get('errors'); }
    public function hasErrors(): bool { return $this->has('errors'); }
    /** The first Flint collection, priced as billing collects it: trial end without a setup fee, now for a setup fee (or the scheduled start), or imported-period end. With `prorate_first_period` and no setup fee, it's the prorated first period. `null` when validation prevents pricing. anyOf[1] (Value): {@see SubscriptionChargeEstimate}. Estimated subscription collection, including items, discounts, shipping, and tax. Total excludes tax that cannot yet be calculated. anyOf[2] (Value): null.
     * @return SubscriptionChargeEstimate|null
     */
    public function getFirstCharge(): SubscriptionChargeEstimate|null { return $this->get('first_charge'); }
    public function hasFirstCharge(): bool { return $this->has('first_charge'); }
    /** The prorated first period, when billing collects it as its own order after a setup fee in `first_charge`. `null` when no proration was requested, when the prorated period is already included in `first_charge`, when the first paid start is on the anchor day so there is no prorated period, or when validation prevents pricing. anyOf[1] (Value): {@see SubscriptionChargeEstimate}. Estimated subscription collection, including items, discounts, shipping, and tax. Total excludes tax that cannot yet be calculated. anyOf[2] (Value): null.
     * @return SubscriptionChargeEstimate|null
     */
    public function getFirstPeriodCharge(): SubscriptionChargeEstimate|null { return $this->get('first_period_charge'); }
    public function hasFirstPeriodCharge(): bool { return $this->has('first_period_charge'); }
    /** Whether the inputs are valid and priceable. This does not mean the subscription is ready to pay.
     * @return bool
     */
    public function getIsValid(): bool { return $this->get('is_valid'); }
    public function hasIsValid(): bool { return $this->has('is_valid'); }
    /** The kind of subscription preview. Value enum: "create".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** The first normal full-period collection, without setup fees. With `prorate_first_period`, it's cycle 2, billed at the end of the prorated period. `null` when validation prevents pricing. anyOf[1] (Value): {@see SubscriptionChargeEstimate}. Estimated subscription collection, including items, discounts, shipping, and tax. Total excludes tax that cannot yet be calculated. anyOf[2] (Value): null.
     * @return SubscriptionChargeEstimate|null
     */
    public function getRecurring(): SubscriptionChargeEstimate|null { return $this->get('recurring'); }
    public function hasRecurring(): bool { return $this->has('recurring'); }
}
