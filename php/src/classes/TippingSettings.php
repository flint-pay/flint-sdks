<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $default_enabled
 * @property-read mixed $default_smart_tip_money
 * @property-read float|null $default_tip_percent
 * @property-read bool $is_custom_tip_enabled
 * @property-read bool $is_smart_tips_enabled
 * @property-read list<TippingSettingsSmartTipMoneyOptionsItem> $smart_tip_money_options
 * @property-read list<float> $tip_percent_options
 * Presence-aware response; omitted fields throw when accessed. */
final class TippingSettings extends Model {
    /** @param array{'default_enabled'?: bool, 'default_smart_tip_money': mixed, 'default_tip_percent': float|null, 'is_custom_tip_enabled'?: bool, 'is_smart_tips_enabled'?: bool, 'smart_tip_money_options'?: list<object{'amount': string, 'currency': string}>, 'tip_percent_options'?: list<float>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TippingSettings')); }
    /** @return bool
     * @throws SdkError When default_enabled is omitted; use hasDefaultEnabled() or valueOrDefault().
     */
    public function getDefaultEnabled(): bool { return $this->get('default_enabled'); }
    public function hasDefaultEnabled(): bool { return $this->has('default_enabled'); }
    /** @return mixed
     * @throws SdkError When default_smart_tip_money is omitted; use hasDefaultSmartTipMoney() or valueOrDefault().
     */
    public function getDefaultSmartTipMoney(): mixed { return $this->get('default_smart_tip_money'); }
    public function hasDefaultSmartTipMoney(): bool { return $this->has('default_smart_tip_money'); }
    /** @return float|null
     * @throws SdkError When default_tip_percent is omitted; use hasDefaultTipPercent() or valueOrDefault().
     */
    public function getDefaultTipPercent(): float|null { return $this->get('default_tip_percent'); }
    public function hasDefaultTipPercent(): bool { return $this->has('default_tip_percent'); }
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
    /** @return list<TippingSettingsSmartTipMoneyOptionsItem>
     * @throws SdkError When smart_tip_money_options is omitted; use hasSmartTipMoneyOptions() or valueOrDefault().
     */
    public function getSmartTipMoneyOptions(): array { return $this->get('smart_tip_money_options'); }
    public function hasSmartTipMoneyOptions(): bool { return $this->has('smart_tip_money_options'); }
    /** @return list<float>
     * @throws SdkError When tip_percent_options is omitted; use hasTipPercentOptions() or valueOrDefault().
     */
    public function getTipPercentOptions(): array { return $this->get('tip_percent_options'); }
    public function hasTipPercentOptions(): bool { return $this->has('tip_percent_options'); }
}
