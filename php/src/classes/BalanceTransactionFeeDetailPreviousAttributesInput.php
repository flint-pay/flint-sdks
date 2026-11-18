<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|null $partner_app_id
 * @property-read string|null $platform_fee_id
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class BalanceTransactionFeeDetailPreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'partner_app_id'?: string|null, 'platform_fee_id'?: string|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceTransactionFeeDetailPreviousAttributesInput')); }
    /** This source's share of the payment's original fee_money, in the same currency. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The partner app that charged the platform fee. Present for platform_fee. anyOf[1] (Value): string. The partner app that charged the platform fee. Present for platform_fee. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): mixed { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The platform fee charged on this payment. Present for platform_fee. anyOf[1] (Value): string. The platform fee charged on this payment. Present for platform_fee. Example: "pfee_01KEZF7C00JHAZN19B3MMW0R3A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When platform_fee_id is omitted; use hasPlatformFeeId() or valueOrDefault().
     */
    public function getPlatformFeeId(): mixed { return $this->get('platform_fee_id'); }
    public function hasPlatformFeeId(): bool { return $this->has('platform_fee_id'); }
    /** Who charged this fee. flint includes Flint's processing and add-on fees; platform_fee is the partner app's fee. Value enum: "flint", "platform_fee". anyOf[1] (Value): string. Who charged this fee. flint includes Flint's processing and add-on fees; platform_fee is the partner app's fee. Value enum: "flint", "platform_fee". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
