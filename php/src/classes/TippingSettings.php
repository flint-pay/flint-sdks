<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?bool $custom_tip_enabled
 * @property-read ?bool $default_enabled
 * @property-read mixed $default_smart_tip_money
 * @property-read float|null $default_tip_percent
 * @property-read ?list<TippingSettingsSmartTipMoneyOptionsItem> $smart_tip_money_options
 * @property-read ?bool $smart_tips_enabled
 * @property-read ?list<float> $tip_percent_options
 * Presence-aware response; omitted optional fields return null. */
final class TippingSettings extends Model {
    /** @param array{'custom_tip_enabled'?: bool, 'default_enabled'?: bool, 'default_smart_tip_money': mixed, 'default_tip_percent': float|null, 'smart_tip_money_options'?: list<object{'amount': string, 'currency': string}>, 'smart_tips_enabled'?: bool, 'tip_percent_options'?: list<float>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TippingSettings')); }
    /** Whether buyers can enter a custom tip amount.
     * @return ?bool
     */
    public function getCustomTipEnabled(): ?bool { return $this->get('custom_tip_enabled'); }
    public function hasCustomTipEnabled(): bool { return $this->has('custom_tip_enabled'); }
    /** default_enabled
     * @return ?bool
     */
    public function getDefaultEnabled(): ?bool { return $this->get('default_enabled'); }
    public function hasDefaultEnabled(): bool { return $this->has('default_enabled'); }
    /** Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its amount and currency must match one of the effective smart_tip_money_options. Null means no preselection is set; effective settings use Flint's default. anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[1].amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. anyOf[1].currency (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getDefaultSmartTipMoney(): mixed { return $this->get('default_smart_tip_money'); }
    public function hasDefaultSmartTipMoney(): bool { return $this->has('default_smart_tip_money'); }
    /** The preselected tip percent, from 1 through 100 with at most four decimal places. It must match one of the effective tip_percent_options. Null means no preselection is set; effective settings use Flint's default. minimum: 1. maximum: 100. multipleOf: 0.0001.
     * @return float|null
     */
    public function getDefaultTipPercent(): float|null { return $this->get('default_tip_percent'); }
    public function hasDefaultTipPercent(): bool { return $this->has('default_tip_percent'); }
    /** minItems: 3. maxItems: 3. [] (Value): {@see TippingSettingsSmartTipMoneyOptionsItem}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?list<TippingSettingsSmartTipMoneyOptionsItem>
     */
    public function getSmartTipMoneyOptions(): ?array { return $this->get('smart_tip_money_options'); }
    public function hasSmartTipMoneyOptions(): bool { return $this->has('smart_tip_money_options'); }
    /** Whether checkout offers fixed tip amounts instead of tip percentages.
     * @return ?bool
     */
    public function getSmartTipsEnabled(): ?bool { return $this->get('smart_tips_enabled'); }
    public function hasSmartTipsEnabled(): bool { return $this->has('smart_tips_enabled'); }
    /** Three tip percents to offer, each from 1 through 100 with at most four decimal places. minItems: 3. maxItems: 3. [] (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     * @return ?list<float>
     */
    public function getTipPercentOptions(): ?array { return $this->get('tip_percent_options'); }
    public function hasTipPercentOptions(): bool { return $this->has('tip_percent_options'); }
}
