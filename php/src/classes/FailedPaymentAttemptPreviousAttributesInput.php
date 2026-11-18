<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $buyer_email
 * @property-read string|null $buyer_ip_address
 * @property-read string|null $card_brand
 * @property-read string|null $card_country
 * @property-read string|null $card_fingerprint
 * @property-read string|null $card_last4
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $decline_code
 * @property-read string|null $payment_attempt_id
 * Presence-aware input; omitted fields throw when accessed. */
final class FailedPaymentAttemptPreviousAttributesInput extends Model {
    /** @param array{'buyer_email'?: string|null, 'buyer_ip_address'?: string|null, 'card_brand'?: string|null, 'card_country'?: string|null, 'card_fingerprint'?: string|null, 'card_last4'?: string|null, 'created_at'?: string|\DateTimeInterface|null, 'decline_code'?: string|null, 'payment_attempt_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FailedPaymentAttemptPreviousAttributesInput')); }
    /** Email used for risk evaluation at admission. anyOf[1] (Value): string. Email used for risk evaluation at admission. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When buyer_email is omitted; use hasBuyerEmail() or valueOrDefault().
     */
    public function getBuyerEmail(): mixed { return $this->get('buyer_email'); }
    public function hasBuyerEmail(): bool { return $this->has('buyer_email'); }
    /** Canonical buyer IP stored at admission. API-key relays must supply a trusted buyer_ip_address. anyOf[1] (Value): string. Canonical buyer IP stored at admission. API-key relays must supply a trusted buyer_ip_address. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When buyer_ip_address is omitted; use hasBuyerIpAddress() or valueOrDefault().
     */
    public function getBuyerIpAddress(): mixed { return $this->get('buyer_ip_address'); }
    public function hasBuyerIpAddress(): bool { return $this->has('buyer_ip_address'); }
    /** Card brand recorded before authorization, when available. anyOf[1] (Value): string. Card brand recorded before authorization, when available. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When card_brand is omitted; use hasCardBrand() or valueOrDefault().
     */
    public function getCardBrand(): mixed { return $this->get('card_brand'); }
    public function hasCardBrand(): bool { return $this->has('card_brand'); }
    /** Card issuing country, when provided by the processor. Not the buyer IP's country. anyOf[1] (Value): string. Card issuing country, when provided by the processor. Not the buyer IP's country. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When card_country is omitted; use hasCardCountry() or valueOrDefault().
     */
    public function getCardCountry(): mixed { return $this->get('card_country'); }
    public function hasCardCountry(): bool { return $this->has('card_country'); }
    /** Merchant/environment-scoped fingerprint used by risk card-fingerprint lists. Never a raw provider fingerprint. anyOf[1] (Value): string. Merchant/environment-scoped fingerprint used by risk card-fingerprint lists. Never a raw provider fingerprint. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When card_fingerprint is omitted; use hasCardFingerprint() or valueOrDefault().
     */
    public function getCardFingerprint(): mixed { return $this->get('card_fingerprint'); }
    public function hasCardFingerprint(): bool { return $this->has('card_fingerprint'); }
    /** Last four card digits recorded before authorization. Not a unique card identity. anyOf[1] (Value): string. Last four card digits recorded before authorization. Not a unique card identity. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When card_last4 is omitted; use hasCardLast4() or valueOrDefault().
     */
    public function getCardLast4(): mixed { return $this->get('card_last4'); }
    public function hasCardLast4(): bool { return $this->has('card_last4'); }
    /** UTC time the attempt was created. anyOf[1] (Value): string. UTC time the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Stable decline code recorded for this attempt. anyOf[1] (Value): string. Stable decline code recorded for this attempt. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When decline_code is omitted; use hasDeclineCode() or valueOrDefault().
     */
    public function getDeclineCode(): mixed { return $this->get('decline_code'); }
    public function hasDeclineCode(): bool { return $this->has('decline_code'); }
    /** Identity of the failed attempt. anyOf[1] (Value): string. Identity of the failed attempt. Example: "pia_01KEZF7C00CGGHWWR7KPCGNJRM". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_attempt_id is omitted; use hasPaymentAttemptId() or valueOrDefault().
     */
    public function getPaymentAttemptId(): mixed { return $this->get('payment_attempt_id'); }
    public function hasPaymentAttemptId(): bool { return $this->has('payment_attempt_id'); }
}
