<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $destination
 * @property-read string $gift_card_id
 * @property-read string $order_id
 * @property-read string $payment_intent_id
 * @property-read string $tender_type
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnRefundTenderEstimateInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'destination'?: string, 'gift_card_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'tender_type': string, ...}|object|array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'destination'?: string, 'gift_card_id': string, 'order_id'?: string, 'payment_intent_id'?: string, 'tender_type': string, ...}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnRefundTenderEstimateInput')); }
    /** Estimated amount returned to this destination. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Where this share would go. Present on resolution previews. Value enum: "original", "new_gift_card".
     * @return string
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): string { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** Original gift card. Present for gift_card_redemption tenders. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** The order that collected this tender when refunding an exchange replacement. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Original payment intent. Present for payment_intent tenders. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Original tender that funds this share of the estimate. Value enum: "payment_intent", "gift_card_redemption".
     * @return string
     * @throws SdkError When tender_type is omitted; use hasTenderType() or valueOrDefault().
     */
    public function getTenderType(): string { return $this->get('tender_type'); }
    public function hasTenderType(): bool { return $this->has('tender_type'); }
}
