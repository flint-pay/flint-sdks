<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?PlatformFeeRuleFixedFeeMoney $fixed_fee_money
 * @property-read ?PlatformFeeRuleMaximumFeeMoney $maximum_fee_money
 * @property-read string $partner_app_id
 * @property-read float $percent
 * Presence-aware response; omitted optional fields return null. */
final class PlatformFeeRule extends Model {
    /** @param array{'fixed_fee_money'?: object{'amount': string, 'currency': string}, 'maximum_fee_money'?: object{'amount': string, 'currency': string}, 'partner_app_id': string, 'percent': float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeRule')); }
    /** The fixed amount per payment. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?PlatformFeeRuleFixedFeeMoney
     */
    public function getFixedFeeMoney(): ?PlatformFeeRuleFixedFeeMoney { return $this->get('fixed_fee_money'); }
    public function hasFixedFeeMoney(): bool { return $this->has('fixed_fee_money'); }
    /** The maximum fee per payment, at least the fixed amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?PlatformFeeRuleMaximumFeeMoney
     */
    public function getMaximumFeeMoney(): ?PlatformFeeRuleMaximumFeeMoney { return $this->get('maximum_fee_money'); }
    public function hasMaximumFeeMoney(): bool { return $this->has('maximum_fee_money'); }
    /** The partner app whose install set the rule.
     * @return string
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Percent of the amount collected. Zero requires fixed_fee_money. minimum: 0. maximum: 25. multipleOf: 0.0001.
     * @return float
     */
    public function getPercent(): float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
}
