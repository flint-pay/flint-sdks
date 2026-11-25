<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PlatformFeeRulePreviousAttributesFixedFeeMoney|null $fixed_fee_money
 * @property-read PlatformFeeRulePreviousAttributesMaximumFeeMoney|null $maximum_fee_money
 * @property-read string|null $partner_app_id
 * @property-read float|null $percent
 * Presence-aware response; omitted optional fields return null. */
final class PlatformFeeRulePreviousAttributes extends Model {
    /** @param array{'fixed_fee_money'?: mixed, 'maximum_fee_money'?: mixed, 'partner_app_id'?: mixed, 'percent'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeRulePreviousAttributes')); }
    /** The fixed amount per payment. anyOf[1] (Value): {@see PlatformFeeRulePreviousAttributesFixedFeeMoney}. anyOf[2] (Value): null.
     * @return PlatformFeeRulePreviousAttributesFixedFeeMoney|null
     */
    public function getFixedFeeMoney(): PlatformFeeRulePreviousAttributesFixedFeeMoney|null { return $this->get('fixed_fee_money'); }
    public function hasFixedFeeMoney(): bool { return $this->has('fixed_fee_money'); }
    /** The maximum fee per payment, at least the fixed amount. anyOf[1] (Value): {@see PlatformFeeRulePreviousAttributesMaximumFeeMoney}. anyOf[2] (Value): null.
     * @return PlatformFeeRulePreviousAttributesMaximumFeeMoney|null
     */
    public function getMaximumFeeMoney(): PlatformFeeRulePreviousAttributesMaximumFeeMoney|null { return $this->get('maximum_fee_money'); }
    public function hasMaximumFeeMoney(): bool { return $this->has('maximum_fee_money'); }
    /** The partner app whose install set the rule. anyOf[1] (Value): string. The partner app whose install set the rule. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPartnerAppId(): string|null { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Percent of the amount collected. Zero requires fixed_fee_money. anyOf[1] (Value): number. Percent of the amount collected. Zero requires fixed_fee_money. minimum: 0. maximum: 25. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return float|null
     */
    public function getPercent(): float|null { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
}
