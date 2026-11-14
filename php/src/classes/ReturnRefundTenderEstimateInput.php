<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $gift_card_id
 * @property-read string $payment_intent_id
 * @property-read string $tender_type
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnRefundTenderEstimateInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_id'?: string, 'payment_intent_id': string, 'tender_type': string, ...}|object|array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_id': string, 'payment_intent_id'?: string, 'tender_type': string, ...}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnRefundTenderEstimateInput')); }
    /** Estimated amount returned to this destination. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Original gift card. Present for gift_card_redemption tenders. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Original payment intent. Present for payment_intent tenders. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Original payment destination receiving this estimated refund: a payment intent or a gift card redemption. Value enum: "payment_intent", "gift_card_redemption".
     * @return string
     * @throws SdkError When tender_type is omitted; use hasTenderType() or valueOrDefault().
     */
    public function getTenderType(): string { return $this->get('tender_type'); }
    public function hasTenderType(): bool { return $this->has('tender_type'); }
}
