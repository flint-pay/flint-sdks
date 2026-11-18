<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $buyer_email
 * @property-read string $buyer_ip_address
 * @property-read string $card_brand
 * @property-read string $card_country
 * @property-read string $card_fingerprint
 * @property-read string $card_last4
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $decline_code
 * @property-read string $payment_attempt_id
 * Presence-aware input; omitted fields throw when accessed. */
final class FailedPaymentAttemptInput extends Model {
    /** @param array{'buyer_email'?: string, 'buyer_ip_address'?: string, 'card_brand'?: string, 'card_country'?: string, 'card_fingerprint'?: string, 'card_last4'?: string, 'created_at': string|\DateTimeInterface, 'decline_code': string, 'payment_attempt_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FailedPaymentAttemptInput')); }
    /** Email used for risk evaluation at admission.
     * @return string
     * @throws SdkError When buyer_email is omitted; use hasBuyerEmail() or valueOrDefault().
     */
    public function getBuyerEmail(): string { return $this->get('buyer_email'); }
    public function hasBuyerEmail(): bool { return $this->has('buyer_email'); }
    /** Canonical buyer IP stored at admission. API-key relays must supply a trusted buyer_ip_address.
     * @return string
     * @throws SdkError When buyer_ip_address is omitted; use hasBuyerIpAddress() or valueOrDefault().
     */
    public function getBuyerIpAddress(): string { return $this->get('buyer_ip_address'); }
    public function hasBuyerIpAddress(): bool { return $this->has('buyer_ip_address'); }
    /** Card brand recorded before authorization, when available.
     * @return string
     * @throws SdkError When card_brand is omitted; use hasCardBrand() or valueOrDefault().
     */
    public function getCardBrand(): string { return $this->get('card_brand'); }
    public function hasCardBrand(): bool { return $this->has('card_brand'); }
    /** Card issuing country, when provided by the processor. Not the buyer IP's country.
     * @return string
     * @throws SdkError When card_country is omitted; use hasCardCountry() or valueOrDefault().
     */
    public function getCardCountry(): string { return $this->get('card_country'); }
    public function hasCardCountry(): bool { return $this->has('card_country'); }
    /** Merchant/environment-scoped fingerprint used by risk card-fingerprint lists. Never a raw provider fingerprint.
     * @return string
     * @throws SdkError When card_fingerprint is omitted; use hasCardFingerprint() or valueOrDefault().
     */
    public function getCardFingerprint(): string { return $this->get('card_fingerprint'); }
    public function hasCardFingerprint(): bool { return $this->has('card_fingerprint'); }
    /** Last four card digits recorded before authorization. Not a unique card identity.
     * @return string
     * @throws SdkError When card_last4 is omitted; use hasCardLast4() or valueOrDefault().
     */
    public function getCardLast4(): string { return $this->get('card_last4'); }
    public function hasCardLast4(): bool { return $this->has('card_last4'); }
    /** UTC time the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Stable decline code recorded for this attempt.
     * @return string
     * @throws SdkError When decline_code is omitted; use hasDeclineCode() or valueOrDefault().
     */
    public function getDeclineCode(): string { return $this->get('decline_code'); }
    public function hasDeclineCode(): bool { return $this->has('decline_code'); }
    /** Identity of the failed attempt. Example: "pia_01KEZF7C00CGGHWWR7KPCGNJRM".
     * @return string
     * @throws SdkError When payment_attempt_id is omitted; use hasPaymentAttemptId() or valueOrDefault().
     */
    public function getPaymentAttemptId(): string { return $this->get('payment_attempt_id'); }
    public function hasPaymentAttemptId(): bool { return $this->has('payment_attempt_id'); }
}
