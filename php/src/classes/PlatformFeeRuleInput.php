<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object $fixed_fee_money
 * @property-read array{'amount': string, 'currency': string}|object $maximum_fee_money
 * @property-read string $partner_app_id
 * @property-read int|float $percent
 * Presence-aware input; omitted fields throw when accessed. */
final class PlatformFeeRuleInput extends Model {
    /** @param array{'fixed_fee_money'?: array{'amount': string, 'currency': string}|object, 'maximum_fee_money'?: array{'amount': string, 'currency': string}|object, 'partner_app_id': string, 'percent': int|float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeRuleInput')); }
    /** The fixed amount per payment. Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 1000000. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. currency (Required): string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When fixed_fee_money is omitted; use hasFixedFeeMoney() or valueOrDefault().
     */
    public function getFixedFeeMoney(): array|object { return $this->get('fixed_fee_money'); }
    public function hasFixedFeeMoney(): bool { return $this->has('fixed_fee_money'); }
    /** The maximum fee per payment, at least the fixed amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 1000000. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. currency (Required): string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When maximum_fee_money is omitted; use hasMaximumFeeMoney() or valueOrDefault().
     */
    public function getMaximumFeeMoney(): array|object { return $this->get('maximum_fee_money'); }
    public function hasMaximumFeeMoney(): bool { return $this->has('maximum_fee_money'); }
    /** The partner app whose install set the rule. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Percent of the amount collected. Zero requires fixed_fee_money. minimum: 0. maximum: 25. multipleOf: 0.0001.
     * @return int|float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): int|float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
}
