<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?bool $custom_tip_enabled
 * @property-read ?MoneyValue $default_smart_tip_money
 * @property-read ?float $default_tip_percent
 * @property-read ?bool $enabled
 * @property-read ?list<MoneyValue> $smart_tip_money_options
 * @property-read ?bool $smart_tips_enabled
 * @property-read ?list<float> $tip_percent_options
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutTipConfig extends Model {
    /** @param array{'custom_tip_enabled'?: bool, 'default_smart_tip_money'?: mixed, 'default_tip_percent'?: float, 'enabled'?: bool, 'smart_tip_money_options'?: list<mixed>, 'smart_tips_enabled'?: bool, 'tip_percent_options'?: list<float>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutTipConfig')); }
    /** Whether buyers can enter a custom tip amount.
     * @return ?bool
     */
    public function getCustomTipEnabled(): ?bool { return $this->get('custom_tip_enabled'); }
    public function hasCustomTipEnabled(): bool { return $this->has('custom_tip_enabled'); }
    /** The preselected fixed tip, with a positive amount in the same currency as smart_tip_money_options. Its amount and currency must match one of the effective smart_tip_money_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getDefaultSmartTipMoney(): ?MoneyValue { return $this->get('default_smart_tip_money'); }
    public function hasDefaultSmartTipMoney(): bool { return $this->has('default_smart_tip_money'); }
    /** The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. minimum: 1. maximum: 100. multipleOf: 0.0001.
     * @return ?float
     */
    public function getDefaultTipPercent(): ?float { return $this->get('default_tip_percent'); }
    public function hasDefaultTipPercent(): bool { return $this->has('default_tip_percent'); }
    /** Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it.
     * @return ?bool
     */
    public function getEnabled(): ?bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. [] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?list<MoneyValue>
     */
    public function getSmartTipMoneyOptions(): ?array { return $this->get('smart_tip_money_options'); }
    public function hasSmartTipMoneyOptions(): bool { return $this->has('smart_tip_money_options'); }
    /** Whether checkout offers fixed tip amounts instead of tip percentages.
     * @return ?bool
     */
    public function getSmartTipsEnabled(): ?bool { return $this->get('smart_tips_enabled'); }
    public function hasSmartTipsEnabled(): bool { return $this->has('smart_tips_enabled'); }
    /** Three tip percents to offer, each from 1 through 100 with at most four decimal places. [] (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     * @return ?list<float>
     */
    public function getTipPercentOptions(): ?array { return $this->get('tip_percent_options'); }
    public function hasTipPercentOptions(): bool { return $this->has('tip_percent_options'); }
}
