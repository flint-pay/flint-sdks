<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object $amount_money
 * @property-read string $destination
 * @property-read string $gift_card_redemption_id
 * @property-read string $payment_intent_id
 * @property-read string $tender_type
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundTenderAllocationRequestInput extends Model {
    /** @param array{'amount_money': array{'amount': string, 'currency': string}|object, 'destination'?: string, 'gift_card_redemption_id'?: string, 'payment_intent_id': string, 'tender_type': string}|object|array{'amount_money': array{'amount': string, 'currency': string}|object, 'destination'?: string, 'gift_card_redemption_id': string, 'payment_intent_id'?: string, 'tender_type': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundTenderAllocationRequestInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): array|object { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Default: "original". Value enum: "original", "new_gift_card".
     * @return string
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): string { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** Shape $ (Value): string. The captured redemption to refund. Required for tender_type gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When gift_card_redemption_id is omitted; use hasGiftCardRedemptionId() or valueOrDefault().
     */
    public function getGiftCardRedemptionId(): string { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string.  Value enum: "payment_intent", "gift_card_redemption".
     * @return string
     * @throws SdkError When tender_type is omitted; use hasTenderType() or valueOrDefault().
     */
    public function getTenderType(): string { return $this->get('tender_type'); }
    public function hasTenderType(): bool { return $this->has('tender_type'); }
}
