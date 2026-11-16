<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $partner_app_id
 * @property-read string|null $platform_fee_id
 * @property-read MoneyValuePreviousAttributes|null $refunded_money
 * Presence-aware response; omitted optional fields return null. */
final class PaymentIntentPlatformFeePreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'partner_app_id'?: mixed, 'platform_fee_id'?: mixed, 'refunded_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentPlatformFeePreviousAttributes')); }
    /** The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture when the merchant's approved cap or Flint's own fees leave less, and it is 0 when Flint canceled the fee before collection. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The partner app that charges the fee. anyOf[1] (Value): string. The partner app that charges the fee. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPartnerAppId(): string|null { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The platform fee record, which the partner app's owner reads. anyOf[1] (Value): string. The platform fee record, which the partner app's owner reads. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPlatformFeeId(): string|null { return $this->get('platform_fee_id'); }
    public function hasPlatformFeeId(): bool { return $this->has('platform_fee_id'); }
    /** The fee debited from the platform for returns so far, including refunds the partner app created with `refund_platform_fee: true` and returns of the whole application fee. Matches the platform ledger, including returns awaiting completion; reversals reduce the total. 0 when nothing has been debited. See [Platform fees](/docs/guides/platform-fees). anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRefundedMoney(): MoneyValuePreviousAttributes|null { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
}
