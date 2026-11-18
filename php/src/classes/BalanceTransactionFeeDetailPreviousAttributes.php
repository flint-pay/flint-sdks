<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $partner_app_id
 * @property-read string|null $platform_fee_id
 * @property-read string|null $type
 * Presence-aware response; omitted optional fields return null. */
final class BalanceTransactionFeeDetailPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'partner_app_id'?: mixed, 'platform_fee_id'?: mixed, 'type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceTransactionFeeDetailPreviousAttributes')); }
    /** This source's share of the payment's original fee_money, in the same currency. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The partner app that charged the platform fee. Present for platform_fee. anyOf[1] (Value): string. The partner app that charged the platform fee. Present for platform_fee. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPartnerAppId(): string|null { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The platform fee charged on this payment. Present for platform_fee. anyOf[1] (Value): string. The platform fee charged on this payment. Present for platform_fee. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPlatformFeeId(): string|null { return $this->get('platform_fee_id'); }
    public function hasPlatformFeeId(): bool { return $this->has('platform_fee_id'); }
    /** Who charged this fee. flint includes Flint's processing and add-on fees; platform_fee is the partner app's fee. Value enum: "flint", "platform_fee". anyOf[1] (Value): string. Who charged this fee. flint includes Flint's processing and add-on fees; platform_fee is the partner app's fee. Value enum: "flint", "platform_fee". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
