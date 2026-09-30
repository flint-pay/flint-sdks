<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $default_smart_tip_money
 * @property-read int|float $default_tip_percentage
 * @property-read bool $enabled
 * @property-read bool $is_custom_tip_enabled
 * @property-read bool $is_smart_tips_enabled
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $smart_tip_money_options
 * @property-read list<int|float> $tip_percentages
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutTipConfigInput extends Model {
    /** @param array{'default_smart_tip_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'default_tip_percentage'?: int|float, 'enabled'?: bool, 'is_custom_tip_enabled'?: bool, 'is_smart_tips_enabled'?: bool, 'smart_tip_money_options'?: list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'tip_percentages'?: list<int|float>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutTipConfigInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When default_smart_tip_money is omitted; use hasDefaultSmartTipMoney() or valueOrDefault().
     */
    public function getDefaultSmartTipMoney(): mixed { return $this->get('default_smart_tip_money'); }
    public function hasDefaultSmartTipMoney(): bool { return $this->has('default_smart_tip_money'); }
    /** @return int|float
     * @throws SdkError When default_tip_percentage is omitted; use hasDefaultTipPercentage() or valueOrDefault().
     */
    public function getDefaultTipPercentage(): int|float { return $this->get('default_tip_percentage'); }
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
    /** @return list<MoneyValueInput|array<array-key, mixed>|\stdClass>
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
