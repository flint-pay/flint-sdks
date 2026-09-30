<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $default_smart_tip_money
 * @property-read float $default_tip_percentage
 * @property-read bool $enabled
 * @property-read bool $is_custom_tip_enabled
 * @property-read bool $is_smart_tips_enabled
 * @property-read list<MoneyValue> $smart_tip_money_options
 * @property-read list<float> $tip_percentages
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutTipConfig extends Model {
    /** @param array{'default_smart_tip_money'?: mixed, 'default_tip_percentage'?: float, 'enabled'?: bool, 'is_custom_tip_enabled'?: bool, 'is_smart_tips_enabled'?: bool, 'smart_tip_money_options'?: list<mixed>, 'tip_percentages'?: list<float>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutTipConfig')); }
    /** @return MoneyValue
     * @throws SdkError When default_smart_tip_money is omitted; use hasDefaultSmartTipMoney() or valueOrDefault().
     */
    public function getDefaultSmartTipMoney(): MoneyValue { return $this->get('default_smart_tip_money'); }
    public function hasDefaultSmartTipMoney(): bool { return $this->has('default_smart_tip_money'); }
    /** @return float
     * @throws SdkError When default_tip_percentage is omitted; use hasDefaultTipPercentage() or valueOrDefault().
     */
    public function getDefaultTipPercentage(): float { return $this->get('default_tip_percentage'); }
    public function hasDefaultTipPercentage(): bool { return $this->has('default_tip_percentage'); }
    /** @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** @return bool
     * @throws SdkError When is_custom_tip_enabled is omitted; use hasIsCustomTipEnabled() or valueOrDefault().
     */
    public function getIsCustomTipEnabled(): bool { return $this->get('is_custom_tip_enabled'); }
    public function hasIsCustomTipEnabled(): bool { return $this->has('is_custom_tip_enabled'); }
    /** @return bool
     * @throws SdkError When is_smart_tips_enabled is omitted; use hasIsSmartTipsEnabled() or valueOrDefault().
     */
    public function getIsSmartTipsEnabled(): bool { return $this->get('is_smart_tips_enabled'); }
    public function hasIsSmartTipsEnabled(): bool { return $this->has('is_smart_tips_enabled'); }
    /** @return list<MoneyValue>
     * @throws SdkError When smart_tip_money_options is omitted; use hasSmartTipMoneyOptions() or valueOrDefault().
     */
    public function getSmartTipMoneyOptions(): array { return $this->get('smart_tip_money_options'); }
    public function hasSmartTipMoneyOptions(): bool { return $this->has('smart_tip_money_options'); }
    /** @return list<float>
     * @throws SdkError When tip_percentages is omitted; use hasTipPercentages() or valueOrDefault().
     */
    public function getTipPercentages(): array { return $this->get('tip_percentages'); }
    public function hasTipPercentages(): bool { return $this->has('tip_percentages'); }
}
