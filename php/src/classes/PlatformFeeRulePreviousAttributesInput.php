<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount'?: string|null, 'currency'?: string|null, ...}|object|null $fixed_fee_money
 * @property-read array{'amount'?: string|null, 'currency'?: string|null, ...}|object|null $maximum_fee_money
 * @property-read string|null $partner_app_id
 * @property-read int|float|null $percent
 * Presence-aware input; omitted fields throw when accessed. */
final class PlatformFeeRulePreviousAttributesInput extends Model {
    /** @param array{'fixed_fee_money'?: array{'amount'?: string|null, 'currency'?: string|null, ...}|object|null, 'maximum_fee_money'?: array{'amount'?: string|null, 'currency'?: string|null, ...}|object|null, 'partner_app_id'?: string|null, 'percent'?: int|float|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeRulePreviousAttributesInput')); }
    /** The fixed amount per payment. anyOf[1] (Value): object and {@see MoneyValuePreviousAttributesInput}. anyOf[1].amount (Optional): (integer string or null). Amount in the currency's minor unit, such as cents for USD. anyOf[1].amount.anyOf[1] (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 1000000. anyOf[1].amount.anyOf[2] (Value): null. anyOf[1].amount.anyOf[1] (Value): integer string. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. anyOf[1].currency (Optional): string or null. Three-letter uppercase ISO 4217 currency code for this amount, such as USD. anyOf[1].currency.anyOf[1] (Value): string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[1].currency.anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return array{'amount'?: string|null, 'currency'?: string|null, ...}|object|null
     * @throws SdkError When fixed_fee_money is omitted; use hasFixedFeeMoney() or valueOrDefault().
     */
    public function getFixedFeeMoney(): mixed { return $this->get('fixed_fee_money'); }
    public function hasFixedFeeMoney(): bool { return $this->has('fixed_fee_money'); }
    /** The maximum fee per payment, at least the fixed amount. anyOf[1] (Value): object and {@see MoneyValuePreviousAttributesInput}. anyOf[1].amount (Optional): (integer string or null). Amount in the currency's minor unit, such as cents for USD. anyOf[1].amount.anyOf[1] (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 1000000. anyOf[1].amount.anyOf[2] (Value): null. anyOf[1].amount.anyOf[1] (Value): integer string. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. anyOf[1].currency (Optional): string or null. Three-letter uppercase ISO 4217 currency code for this amount, such as USD. anyOf[1].currency.anyOf[1] (Value): string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[1].currency.anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return array{'amount'?: string|null, 'currency'?: string|null, ...}|object|null
     * @throws SdkError When maximum_fee_money is omitted; use hasMaximumFeeMoney() or valueOrDefault().
     */
    public function getMaximumFeeMoney(): mixed { return $this->get('maximum_fee_money'); }
    public function hasMaximumFeeMoney(): bool { return $this->has('maximum_fee_money'); }
    /** The partner app whose install set the rule. anyOf[1] (Value): string. The partner app whose install set the rule. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): mixed { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Percent of the amount collected. Zero requires fixed_fee_money. anyOf[1] (Value): number. Percent of the amount collected. Zero requires fixed_fee_money. minimum: 0. maximum: 25. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): mixed { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
}
