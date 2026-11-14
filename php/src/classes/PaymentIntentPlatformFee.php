<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $partner_app_id
 * @property-read string $platform_fee_id
 * @property-read MoneyValue $refunded_money
 * Presence-aware response; omitted optional fields return null. */
final class PaymentIntentPlatformFee extends Model {
    /** @param array{'amount_money': mixed, 'partner_app_id': string, 'platform_fee_id': string, 'refunded_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentPlatformFee')); }
    /** The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture when the merchant's approved cap or Flint's own fees leave less, and it is 0 when Flint canceled the fee before collection. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The partner app that charges the fee.
     * @return string
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The platform fee record, which the partner app's owner reads.
     * @return string
     */
    public function getPlatformFeeId(): string { return $this->get('platform_fee_id'); }
    public function hasPlatformFeeId(): bool { return $this->has('platform_fee_id'); }
    /** The fee returned to the merchant so far: by refunds the partner app created with `refund_platform_fee: true`, each returned once its payment refund succeeds, and by Flint's returns of the whole application fee. 0 when nothing was returned. See [Platform fees](/docs/guides/platform-fees). Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
}
