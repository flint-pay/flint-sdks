<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreateReturnPreviewResponseDataResolutionResolutionTenderEstimatesItemPaymentIntentAmountMoney $amount_money
 * @property-read ?string $destination
 * @property-read ?string $gift_card_id
 * @property-read ?string $order_id
 * @property-read string $payment_intent_id
 * @property-read string $tender_type
 * Presence-aware response; omitted optional fields return null. */
final class CreateReturnPreviewResponseDataResolutionResolutionTenderEstimatesItemPaymentIntent extends Model {
    /** @param array{'amount_money': mixed, 'destination'?: string, 'gift_card_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'tender_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnPreviewResponseDataResolutionResolutionTenderEstimatesItemPaymentIntent')); }
    /** Estimated amount returned to this destination. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateReturnPreviewResponseDataResolutionResolutionTenderEstimatesItemPaymentIntentAmountMoney
     */
    public function getAmountMoney(): CreateReturnPreviewResponseDataResolutionResolutionTenderEstimatesItemPaymentIntentAmountMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Where this share would go. Present on resolution previews. Value enum: "original", "new_gift_card".
     * @return ?string
     */
    public function getDestination(): ?string { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** Original gift card. Present for gift_card_redemption tenders.
     * @return ?string
     */
    public function getGiftCardId(): ?string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** The order that collected this tender when refunding an exchange replacement. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Original payment intent. Present for payment_intent tenders.
     * @return string
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Original tender that funds this share of the estimate. Value enum: "payment_intent".
     * @return string
     */
    public function getTenderType(): string { return $this->get('tender_type'); }
    public function hasTenderType(): bool { return $this->has('tender_type'); }
}
