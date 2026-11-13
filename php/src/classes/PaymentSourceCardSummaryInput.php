<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $brand
 * @property-read PaymentSourceCardPresentDetailsInput|array<array-key, mixed>|\stdClass $card_present
 * @property-read string $last4
 * @property-read string $payment_method_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceCardSummaryInput extends Model {
    /** @param array{'brand'?: string, 'card_present'?: PaymentSourceCardPresentDetailsInput|array<array-key, mixed>|\stdClass, 'last4'?: string, 'payment_method_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceCardSummaryInput')); }
    /** Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay".
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
    /** last4
     * @return string
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
}
