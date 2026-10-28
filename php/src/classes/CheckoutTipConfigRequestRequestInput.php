<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $custom_tip_enabled
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $default_smart_tip_money
 * @property-read int|float $default_tip_percent
 * @property-read bool $enabled
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $smart_tip_money_options
 * @property-read bool $smart_tips_enabled
 * @property-read list<int|float> $tip_percent_options
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutTipConfigRequestRequestInput extends Model {
    /** @param array{'custom_tip_enabled'?: bool, 'default_smart_tip_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'default_tip_percent'?: int|float, 'enabled'?: bool, 'smart_tip_money_options'?: list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'smart_tips_enabled'?: bool, 'tip_percent_options'?: list<int|float>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutTipConfigRequestRequestInput')); }
    /** Shape $ (Value): boolean. Whether buyers can enter a custom tip amount.
     * @return bool
     * @throws SdkError When custom_tip_enabled is omitted; use hasCustomTipEnabled() or valueOrDefault().
     */
    public function getCustomTipEnabled(): bool { return $this->get('custom_tip_enabled'); }
    public function hasCustomTipEnabled(): bool { return $this->has('custom_tip_enabled'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The preselected fixed tip, with a positive amount in the same currency as smart_tip_money_options. Its amount and currency must match one of the effective smart_tip_money_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When default_smart_tip_money is omitted; use hasDefaultSmartTipMoney() or valueOrDefault().
     */
    public function getDefaultSmartTipMoney(): mixed { return $this->get('default_smart_tip_money'); }
    public function hasDefaultSmartTipMoney(): bool { return $this->has('default_smart_tip_money'); }
    /** Shape $ (Value): number. The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. minimum: 1. maximum: 100. multipleOf: 0.0001.
     * @return int|float
     * @throws SdkError When default_tip_percent is omitted; use hasDefaultTipPercent() or valueOrDefault().
     */
    public function getDefaultTipPercent(): int|float { return $this->get('default_tip_percent'); }
    public function hasDefaultTipPercent(): bool { return $this->has('default_tip_percent'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Shape $ (Value): Array of {@see MoneyValueInput}. Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. Shape $[] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return list<MoneyValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When smart_tip_money_options is omitted; use hasSmartTipMoneyOptions() or valueOrDefault().
     */
    public function getSmartTipMoneyOptions(): array { return $this->get('smart_tip_money_options'); }
    public function hasSmartTipMoneyOptions(): bool { return $this->has('smart_tip_money_options'); }
    /** Shape $ (Value): boolean. Whether checkout offers fixed tip amounts instead of tip percentages.
     * @return bool
     * @throws SdkError When smart_tips_enabled is omitted; use hasSmartTipsEnabled() or valueOrDefault().
     */
    public function getSmartTipsEnabled(): bool { return $this->get('smart_tips_enabled'); }
    public function hasSmartTipsEnabled(): bool { return $this->has('smart_tips_enabled'); }
    /** Shape $ (Value): Array of number. Three tip percents to offer, each from 1 through 100 with at most four decimal places. Shape $[] (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     * @return list<int|float>
     * @throws SdkError When tip_percent_options is omitted; use hasTipPercentOptions() or valueOrDefault().
     */
    public function getTipPercentOptions(): array { return $this->get('tip_percent_options'); }
    public function hasTipPercentOptions(): bool { return $this->has('tip_percent_options'); }
}
