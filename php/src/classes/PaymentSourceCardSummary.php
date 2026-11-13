<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $brand
 * @property-read ?PaymentSourceCardPresentDetails $card_present
 * @property-read ?string $last4
 * @property-read ?string $payment_method_id
 * Presence-aware response; omitted optional fields return null. */
final class PaymentSourceCardSummary extends Model {
    /** @param array{'brand'?: string, 'card_present'?: mixed, 'last4'?: string, 'payment_method_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceCardSummary')); }
    /** Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay".
     * @return ?string
     */
    public function getBrand(): ?string { return $this->get('brand'); }
    public function hasBrand(): bool { return $this->has('brand'); }
    /** Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent. Card and wallet details recorded when a payment is presented on a reader.
     * @return ?PaymentSourceCardPresentDetails
     */
    public function getCardPresent(): ?PaymentSourceCardPresentDetails { return $this->get('card_present'); }
    public function hasCardPresent(): bool { return $this->has('card_present'); }
    /** last4
     * @return ?string
     */
    public function getLast4(): ?string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** payment_method_id
     * @return ?string
     */
    public function getPaymentMethodId(): ?string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
}
