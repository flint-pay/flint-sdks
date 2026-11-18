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
 * @property-read string|null $created_at
 * @property-read string|null $decline_code
 * @property-read string|null $payment_attempt_id
 * Presence-aware response; omitted optional fields return null. */
final class FailedPaymentAttemptPreviousAttributes extends Model {
    /** @param array{'buyer_email'?: mixed, 'buyer_ip_address'?: mixed, 'card_brand'?: mixed, 'card_country'?: mixed, 'card_fingerprint'?: mixed, 'card_last4'?: mixed, 'created_at'?: mixed, 'decline_code'?: mixed, 'payment_attempt_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FailedPaymentAttemptPreviousAttributes')); }
    /** Email used for risk evaluation at admission. anyOf[1] (Value): string. Email used for risk evaluation at admission. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBuyerEmail(): string|null { return $this->get('buyer_email'); }
    public function hasBuyerEmail(): bool { return $this->has('buyer_email'); }
    /** Canonical buyer IP stored at admission. API-key relays must supply a trusted buyer_ip_address. anyOf[1] (Value): string. Canonical buyer IP stored at admission. API-key relays must supply a trusted buyer_ip_address. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBuyerIpAddress(): string|null { return $this->get('buyer_ip_address'); }
    public function hasBuyerIpAddress(): bool { return $this->has('buyer_ip_address'); }
    /** Card brand recorded before authorization, when available. anyOf[1] (Value): string. Card brand recorded before authorization, when available. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCardBrand(): string|null { return $this->get('card_brand'); }
    public function hasCardBrand(): bool { return $this->has('card_brand'); }
    /** Card issuing country, when provided by the processor. Not the buyer IP's country. anyOf[1] (Value): string. Card issuing country, when provided by the processor. Not the buyer IP's country. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCardCountry(): string|null { return $this->get('card_country'); }
    public function hasCardCountry(): bool { return $this->has('card_country'); }
    /** Merchant/environment-scoped fingerprint used by risk card-fingerprint lists. Never a raw provider fingerprint. anyOf[1] (Value): string. Merchant/environment-scoped fingerprint used by risk card-fingerprint lists. Never a raw provider fingerprint. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCardFingerprint(): string|null { return $this->get('card_fingerprint'); }
    public function hasCardFingerprint(): bool { return $this->has('card_fingerprint'); }
    /** Last four card digits recorded before authorization. Not a unique card identity. anyOf[1] (Value): string. Last four card digits recorded before authorization. Not a unique card identity. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCardLast4(): string|null { return $this->get('card_last4'); }
    public function hasCardLast4(): bool { return $this->has('card_last4'); }
    /** UTC time the attempt was created. anyOf[1] (Value): string. UTC time the attempt was created. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Stable decline code recorded for this attempt. anyOf[1] (Value): string. Stable decline code recorded for this attempt. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeclineCode(): string|null { return $this->get('decline_code'); }
    public function hasDeclineCode(): bool { return $this->has('decline_code'); }
    /** Identity of the failed attempt. anyOf[1] (Value): string. Identity of the failed attempt. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentAttemptId(): string|null { return $this->get('payment_attempt_id'); }
    public function hasPaymentAttemptId(): bool { return $this->has('payment_attempt_id'); }
}
