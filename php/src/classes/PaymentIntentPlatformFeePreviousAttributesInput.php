<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|null $partner_app_id
 * @property-read string|null $platform_fee_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $refunded_money
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentPlatformFeePreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'partner_app_id'?: string|null, 'platform_fee_id'?: string|null, 'refunded_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentPlatformFeePreviousAttributesInput')); }
    /** The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture when the merchant's approved cap or Flint's own fees leave less, and it is 0 when Flint canceled the fee before collection. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The partner app that charges the fee. anyOf[1] (Value): string. The partner app that charges the fee. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): mixed { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The platform fee record, which the partner app's owner reads. anyOf[1] (Value): string. The platform fee record, which the partner app's owner reads. Example: "pfee_01KEZF7C00JHAZN19B3MMW0R3A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When platform_fee_id is omitted; use hasPlatformFeeId() or valueOrDefault().
     */
    public function getPlatformFeeId(): mixed { return $this->get('platform_fee_id'); }
    public function hasPlatformFeeId(): bool { return $this->has('platform_fee_id'); }
    /** The fee debited from the platform for returns so far, including refunds the partner app created with `refund_platform_fee: true` and returns of the whole application fee. Matches the platform ledger, including returns awaiting completion; reversals reduce the total. 0 when nothing has been debited. See [Platform fees](/docs/guides/platform-fees). anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
}
