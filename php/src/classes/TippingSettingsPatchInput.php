<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $custom_tip_enabled
 * @property-read bool $default_enabled
 * @property-read array{'amount': string, 'currency': string}|object|null $default_smart_tip_money
 * @property-read int|float|null $default_tip_percent
 * @property-read list<array{'amount': string, 'currency': string}|object> $smart_tip_money_options
 * @property-read bool $smart_tips_enabled
 * @property-read list<int|float> $tip_percent_options
 * Presence-aware input; omitted fields throw when accessed. */
final class TippingSettingsPatchInput extends Model {
    /** @param array{'custom_tip_enabled'?: bool, 'default_enabled'?: bool, 'default_smart_tip_money'?: array{'amount': string, 'currency': string}|object|null, 'default_tip_percent'?: int|float|null, 'smart_tip_money_options'?: list<array{'amount': string, 'currency': string}|object>, 'smart_tips_enabled'?: bool, 'tip_percent_options'?: list<int|float>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TippingSettingsPatchInput')); }
    /** Whether buyers can enter a custom tip amount.
     * @return bool
     * @throws SdkError When custom_tip_enabled is omitted; use hasCustomTipEnabled() or valueOrDefault().
     */
    public function getCustomTipEnabled(): bool { return $this->get('custom_tip_enabled'); }
    public function hasCustomTipEnabled(): bool { return $this->has('custom_tip_enabled'); }
    /** default_enabled
     * @return bool
     * @throws SdkError When default_enabled is omitted; use hasDefaultEnabled() or valueOrDefault().
     */
    public function getDefaultEnabled(): bool { return $this->get('default_enabled'); }
    public function hasDefaultEnabled(): bool { return $this->has('default_enabled'); }
    /** Replaced as a whole: send every field you want to keep. Omit to preserve the current value. Send null to clear the preselection and use Flint's default. When replacing presets, explicitly replace or clear a preselection that is no longer offered. anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[1].amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. anyOf[1].currency (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When default_smart_tip_money is omitted; use hasDefaultSmartTipMoney() or valueOrDefault().
     */
    public function getDefaultSmartTipMoney(): mixed { return $this->get('default_smart_tip_money'); }
    public function hasDefaultSmartTipMoney(): bool { return $this->has('default_smart_tip_money'); }
    /** Omit to preserve the current value. Send null to clear the preselection and use Flint's default. When replacing presets, explicitly replace or clear a preselection that is no longer offered. minimum: 1. maximum: 100. multipleOf: 0.0001.
     * @return int|float|null
     * @throws SdkError When default_tip_percent is omitted; use hasDefaultTipPercent() or valueOrDefault().
     */
    public function getDefaultTipPercent(): int|float|null { return $this->get('default_tip_percent'); }
    public function hasDefaultTipPercent(): bool { return $this->has('default_tip_percent'); }
    /** minItems: 3. maxItems: 3. [] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. [].amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. [].currency (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return list<array{'amount': string, 'currency': string}|object>
     * @throws SdkError When smart_tip_money_options is omitted; use hasSmartTipMoneyOptions() or valueOrDefault().
     */
    public function getSmartTipMoneyOptions(): array { return $this->get('smart_tip_money_options'); }
    public function hasSmartTipMoneyOptions(): bool { return $this->has('smart_tip_money_options'); }
    /** Whether checkout offers fixed tip amounts instead of tip percentages.
     * @return bool
     * @throws SdkError When smart_tips_enabled is omitted; use hasSmartTipsEnabled() or valueOrDefault().
     */
    public function getSmartTipsEnabled(): bool { return $this->get('smart_tips_enabled'); }
    public function hasSmartTipsEnabled(): bool { return $this->has('smart_tips_enabled'); }
    /** Three tip percents to offer, each from 1 through 100 with at most four decimal places. minItems: 3. maxItems: 3. [] (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     * @return list<int|float>
     * @throws SdkError When tip_percent_options is omitted; use hasTipPercentOptions() or valueOrDefault().
     */
    public function getTipPercentOptions(): array { return $this->get('tip_percent_options'); }
    public function hasTipPercentOptions(): bool { return $this->has('tip_percent_options'); }
}
