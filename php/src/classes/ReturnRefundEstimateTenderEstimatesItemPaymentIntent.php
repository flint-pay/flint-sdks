<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnRefundEstimateTenderEstimatesItemPaymentIntentAmountMoney $amount_money
 * @property-read ?string $gift_card_id
 * @property-read string $payment_intent_id
 * @property-read string $tender_type
 * Presence-aware response; omitted optional fields return null. */
final class ReturnRefundEstimateTenderEstimatesItemPaymentIntent extends Model {
    /** @param array{'amount_money': mixed, 'gift_card_id'?: string, 'payment_intent_id': string, 'tender_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnRefundEstimateTenderEstimatesItemPaymentIntent')); }
    /** Estimated amount returned to this destination. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ReturnRefundEstimateTenderEstimatesItemPaymentIntentAmountMoney
     */
    public function getAmountMoney(): ReturnRefundEstimateTenderEstimatesItemPaymentIntentAmountMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Original gift card. Present for gift_card_redemption tenders.
     * @return ?string
     */
    public function getGiftCardId(): ?string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Original payment intent. Present for payment_intent tenders.
     * @return string
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Original payment destination receiving this estimated refund: a payment intent or a gift card redemption. Value enum: "payment_intent".
     * @return string
     */
    public function getTenderType(): string { return $this->get('tender_type'); }
    public function hasTenderType(): bool { return $this->has('tender_type'); }
}
