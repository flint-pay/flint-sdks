<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read ?string $partner_app_id
 * @property-read ?string $platform_fee_id
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class BalanceTransactionFeeDetail extends Model {
    /** @param array{'amount_money': mixed, 'partner_app_id'?: string, 'platform_fee_id'?: string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceTransactionFeeDetail')); }
    /** This source's share of the payment's original fee_money, in the same currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The partner app that charged the platform fee. Present for platform_fee.
     * @return ?string
     */
    public function getPartnerAppId(): ?string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The platform fee charged on this payment. Present for platform_fee.
     * @return ?string
     */
    public function getPlatformFeeId(): ?string { return $this->get('platform_fee_id'); }
    public function hasPlatformFeeId(): bool { return $this->has('platform_fee_id'); }
    /** Who charged this fee. flint includes Flint's processing and add-on fees; platform_fee is the partner app's fee. Value enum: "flint", "platform_fee".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
