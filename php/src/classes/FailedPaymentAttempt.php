<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $buyer_email
 * @property-read ?string $buyer_ip_address
 * @property-read ?string $card_brand
 * @property-read ?string $card_country
 * @property-read ?string $card_fingerprint
 * @property-read ?string $card_last4
 * @property-read string $created_at
 * @property-read string $decline_code
 * @property-read string $payment_attempt_id
 * Presence-aware response; omitted optional fields return null. */
final class FailedPaymentAttempt extends Model {
    /** @param array{'buyer_email'?: string, 'buyer_ip_address'?: string, 'card_brand'?: string, 'card_country'?: string, 'card_fingerprint'?: string, 'card_last4'?: string, 'created_at': string, 'decline_code': string, 'payment_attempt_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FailedPaymentAttempt')); }
    /** Email used for risk evaluation at admission.
     * @return ?string
     */
    public function getBuyerEmail(): ?string { return $this->get('buyer_email'); }
    public function hasBuyerEmail(): bool { return $this->has('buyer_email'); }
    /** Canonical buyer IP stored at admission. API-key relays must supply a trusted buyer_ip_address.
     * @return ?string
     */
    public function getBuyerIpAddress(): ?string { return $this->get('buyer_ip_address'); }
    public function hasBuyerIpAddress(): bool { return $this->has('buyer_ip_address'); }
    /** Card brand recorded before authorization, when available.
     * @return ?string
     */
    public function getCardBrand(): ?string { return $this->get('card_brand'); }
    public function hasCardBrand(): bool { return $this->has('card_brand'); }
    /** Card issuing country, when provided by the processor. Not the buyer IP's country.
     * @return ?string
     */
    public function getCardCountry(): ?string { return $this->get('card_country'); }
    public function hasCardCountry(): bool { return $this->has('card_country'); }
    /** Merchant/environment-scoped fingerprint used by risk card-fingerprint lists. Never a raw provider fingerprint.
     * @return ?string
     */
    public function getCardFingerprint(): ?string { return $this->get('card_fingerprint'); }
    public function hasCardFingerprint(): bool { return $this->has('card_fingerprint'); }
    /** Last four card digits recorded before authorization. Not a unique card identity.
     * @return ?string
     */
    public function getCardLast4(): ?string { return $this->get('card_last4'); }
    public function hasCardLast4(): bool { return $this->has('card_last4'); }
    /** UTC time the attempt was created. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Stable decline code recorded for this attempt.
     * @return string
     */
    public function getDeclineCode(): string { return $this->get('decline_code'); }
    public function hasDeclineCode(): bool { return $this->has('decline_code'); }
    /** Identity of the failed attempt.
     * @return string
     */
    public function getPaymentAttemptId(): string { return $this->get('payment_attempt_id'); }
    public function hasPaymentAttemptId(): bool { return $this->has('payment_attempt_id'); }
}
