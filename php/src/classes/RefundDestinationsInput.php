<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $gift_card_redemption
 * @property-read string $payment_intent
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundDestinationsInput extends Model {
    /** @param array{'gift_card_redemption'?: string, 'payment_intent'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundDestinationsInput')); }
    /** Where gift card redemption value is refunded. original credits the original gift card; new_gift_card issues new gift cards, including when the original is closed or cannot accept the full credit. Default: "original". Value enum: "original", "new_gift_card".
     * @return string
     * @throws SdkError When gift_card_redemption is omitted; use hasGiftCardRedemption() or valueOrDefault().
     */
    public function getGiftCardRedemption(): string { return $this->get('gift_card_redemption'); }
    public function hasGiftCardRedemption(): bool { return $this->has('gift_card_redemption'); }
    /** Default destination for every payment intent allocation Flint plans for this refund. original returns value to the payment; new_gift_card issues store credit on new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Default: "original". Value enum: "original", "new_gift_card".
     * @return string
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): string { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
}
