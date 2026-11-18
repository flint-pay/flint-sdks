<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $brand
 * @property-read PaymentSourceCardPresentDetailsPreviousAttributes|null $card_present
 * @property-read string|null $country
 * @property-read string|null $funding
 * @property-read string|null $last4
 * @property-read string|null $payment_method_id
 * Presence-aware response; omitted optional fields return null. */
final class PaymentSourceCardSummaryPreviousAttributes extends Model {
    /** @param array{'brand'?: mixed, 'card_present'?: mixed, 'country'?: mixed, 'funding'?: mixed, 'last4'?: mixed, 'payment_method_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceCardSummaryPreviousAttributes')); }
    /** The card network. Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay". anyOf[1] (Value): string. The card network. Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBrand(): string|null { return $this->get('brand'); }
    public function hasBrand(): bool { return $this->has('brand'); }
    /** Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent. anyOf[1] (Value): {@see PaymentSourceCardPresentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentSourceCardPresentDetailsPreviousAttributes|null
     */
    public function getCardPresent(): PaymentSourceCardPresentDetailsPreviousAttributes|null { return $this->get('card_present'); }
    public function hasCardPresent(): bool { return $this->has('card_present'); }
    /** ISO 3166-1 alpha-2 issuing country. `null` when the issuing country was not recorded, including older payments. anyOf[1] (Value): string. ISO 3166-1 alpha-2 issuing country. `null` when the issuing country was not recorded, including older payments. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCountry(): string|null { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** How the card is funded. `null` when no recognized funding type was recorded. Value enum: "credit", "debit", "prepaid", null. anyOf[1] (Value): string. How the card is funded. `null` when no recognized funding type was recorded. Value enum: "credit", "debit", "prepaid", null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFunding(): string|null { return $this->get('funding'); }
    public function hasFunding(): bool { return $this->has('funding'); }
    /** Last four digits of the card number. anyOf[1] (Value): string. Last four digits of the card number. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLast4(): string|null { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. anyOf[1] (Value): string. ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentMethodId(): string|null { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
}
