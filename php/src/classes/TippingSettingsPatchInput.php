<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $default_enabled
 * @property-read array{'amount': string, 'currency': string}|object|null $default_smart_tip_money
 * @property-read int|float|null $default_tip_percentage
 * @property-read bool $is_custom_tip_enabled
 * @property-read bool $is_smart_tips_enabled
 * @property-read list<array{'amount': string, 'currency': string}|object> $smart_tip_money_options
 * @property-read list<int|float> $tip_percentages
 * Presence-aware input; omitted fields throw when accessed. */
final class TippingSettingsPatchInput extends Model {
    /** @param array{'default_enabled'?: bool, 'default_smart_tip_money'?: array{'amount': string, 'currency': string}|object|null, 'default_tip_percentage'?: int|float|null, 'is_custom_tip_enabled'?: bool, 'is_smart_tips_enabled'?: bool, 'smart_tip_money_options'?: list<array{'amount': string, 'currency': string}|object>, 'tip_percentages'?: list<int|float>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TippingSettingsPatchInput')); }
    /** @return bool
     * @throws SdkError When default_enabled is omitted; use hasDefaultEnabled() or valueOrDefault().
     */
    public function getDefaultEnabled(): bool { return $this->get('default_enabled'); }
    public function hasDefaultEnabled(): bool { return $this->has('default_enabled'); }
    /** @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When default_smart_tip_money is omitted; use hasDefaultSmartTipMoney() or valueOrDefault().
     */
    public function getDefaultSmartTipMoney(): mixed { return $this->get('default_smart_tip_money'); }
    public function hasDefaultSmartTipMoney(): bool { return $this->has('default_smart_tip_money'); }
    /** @return int|float|null
     * @throws SdkError When default_tip_percentage is omitted; use hasDefaultTipPercentage() or valueOrDefault().
     */
    public function getDefaultTipPercentage(): int|float|null { return $this->get('default_tip_percentage'); }
    public function hasDefaultTipPercentage(): bool { return $this->has('default_tip_percentage'); }
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
    /** @return list<array{'amount': string, 'currency': string}|object>
     * @throws SdkError When smart_tip_money_options is omitted; use hasSmartTipMoneyOptions() or valueOrDefault().
     */
    public function getSmartTipMoneyOptions(): array { return $this->get('smart_tip_money_options'); }
    public function hasSmartTipMoneyOptions(): bool { return $this->has('smart_tip_money_options'); }
    /** @return list<int|float>
     * @throws SdkError When tip_percentages is omitted; use hasTipPercentages() or valueOrDefault().
     */
    public function getTipPercentages(): array { return $this->get('tip_percentages'); }
    public function hasTipPercentages(): bool { return $this->has('tip_percentages'); }
}
