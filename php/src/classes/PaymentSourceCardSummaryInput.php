<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $brand
 * @property-read PaymentSourceCardPresentDetailsInput|array<array-key, mixed>|\stdClass $card_present
 * @property-read string|null $country
 * @property-read string|null $funding
 * @property-read string $last4
 * @property-read string $payment_method_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceCardSummaryInput extends Model {
    /** @param array{'brand'?: string, 'card_present'?: PaymentSourceCardPresentDetailsInput|array<array-key, mixed>|\stdClass, 'country': string|null, 'funding': string|null, 'last4'?: string, 'payment_method_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceCardSummaryInput')); }
    /** The card network. Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay".
     * @return string
     * @throws SdkError When brand is omitted; use hasBrand() or valueOrDefault().
     */
    public function getBrand(): string { return $this->get('brand'); }
    public function hasBrand(): bool { return $this->has('brand'); }
    /** Details of a card read on a reader, present once the card was read. Card-present cards are not saved, so payment_method_id is absent. Card and wallet details recorded when a payment is presented on a reader.
     * @return PaymentSourceCardPresentDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When card_present is omitted; use hasCardPresent() or valueOrDefault().
     */
    public function getCardPresent(): mixed { return $this->get('card_present'); }
    public function hasCardPresent(): bool { return $this->has('card_present'); }
    /** ISO 3166-1 alpha-2 issuing country. `null` when the issuing country was not recorded, including older payments. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US".
     * @return string|null
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string|null { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** How the card is funded. `null` when no recognized funding type was recorded. Value enum: "credit", "debit", "prepaid", null.
     * @return string|null
     * @throws SdkError When funding is omitted; use hasFunding() or valueOrDefault().
     */
    public function getFunding(): string|null { return $this->get('funding'); }
    public function hasFunding(): bool { return $this->has('funding'); }
    /** Last four digits of the card number.
     * @return string
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** ID of the saved Flint payment method for this card. Absent when the card isn't saved, as with a card read on a reader. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
}
