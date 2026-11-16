<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $brand
 * @property-read PaymentSourceCardPresentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $card_present
 * @property-read string|null $last4
 * @property-read string|null $payment_method_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceCardSummaryPreviousAttributesInput extends Model {
    /** @param array{'brand'?: string|null, 'card_present'?: PaymentSourceCardPresentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'last4'?: string|null, 'payment_method_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceCardSummaryPreviousAttributesInput')); }
    /** The card network. Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay". anyOf[1] (Value): string. The card network. Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When brand is omitted; use hasBrand() or valueOrDefault().
     */
    public function getBrand(): mixed { return $this->get('brand'); }
    public function hasBrand(): bool { return $this->has('brand'); }
    /** Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent. anyOf[1] (Value): {@see PaymentSourceCardPresentDetailsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PaymentSourceCardPresentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When card_present is omitted; use hasCardPresent() or valueOrDefault().
     */
    public function getCardPresent(): mixed { return $this->get('card_present'); }
    public function hasCardPresent(): bool { return $this->has('card_present'); }
    /** Last four digits of the card number. anyOf[1] (Value): string. Last four digits of the card number. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): mixed { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. anyOf[1] (Value): string. ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): mixed { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
}
