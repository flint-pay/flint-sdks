<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $custom_tip_enabled
 * @property-read MoneyValuePreviousAttributes|null $default_smart_tip_money
 * @property-read float|null $default_tip_percent
 * @property-read bool|null $enabled
 * @property-read list<MoneyValuePreviousAttributes>|null $smart_tip_money_options
 * @property-read bool|null $smart_tips_enabled
 * @property-read list<float>|null $tip_percent_options
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutTipConfigPreviousAttributes extends Model {
    /** @param array{'custom_tip_enabled'?: mixed, 'default_smart_tip_money'?: mixed, 'default_tip_percent'?: mixed, 'enabled'?: mixed, 'smart_tip_money_options'?: mixed, 'smart_tips_enabled'?: mixed, 'tip_percent_options'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutTipConfigPreviousAttributes')); }
    /** Whether buyers can enter a custom tip amount. anyOf[1] (Value): boolean. Whether buyers can enter a custom tip amount. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getCustomTipEnabled(): bool|null { return $this->get('custom_tip_enabled'); }
    public function hasCustomTipEnabled(): bool { return $this->has('custom_tip_enabled'); }
    /** The preselected fixed tip, with a positive amount in the same currency as smart_tip_money_options. Its amount and currency must match one of the effective smart_tip_money_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDefaultSmartTipMoney(): MoneyValuePreviousAttributes|null { return $this->get('default_smart_tip_money'); }
    public function hasDefaultSmartTipMoney(): bool { return $this->has('default_smart_tip_money'); }
    /** The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. anyOf[1] (Value): number. The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. minimum: 1. maximum: 100. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return float|null
     */
    public function getDefaultTipPercent(): float|null { return $this->get('default_tip_percent'); }
    public function hasDefaultTipPercent(): bool { return $this->has('default_tip_percent'); }
    /** Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it. anyOf[1] (Value): boolean. Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getEnabled(): bool|null { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. anyOf[1] (Value): Array of {@see MoneyValuePreviousAttributes}. Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. anyOf[1][] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<MoneyValuePreviousAttributes>|null
     */
    public function getSmartTipMoneyOptions(): array|null { return $this->get('smart_tip_money_options'); }
    public function hasSmartTipMoneyOptions(): bool { return $this->has('smart_tip_money_options'); }
    /** Whether checkout offers fixed tip amounts instead of tip percentages. anyOf[1] (Value): boolean. Whether checkout offers fixed tip amounts instead of tip percentages. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getSmartTipsEnabled(): bool|null { return $this->get('smart_tips_enabled'); }
    public function hasSmartTipsEnabled(): bool { return $this->has('smart_tips_enabled'); }
    /** Three tip percents to offer, each from 1 through 100 with at most four decimal places. anyOf[1] (Value): Array of number. Three tip percents to offer, each from 1 through 100 with at most four decimal places. anyOf[1][] (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return list<float>|null
     */
    public function getTipPercentOptions(): array|null { return $this->get('tip_percent_options'); }
    public function hasTipPercentOptions(): bool { return $this->has('tip_percent_options'); }
}
