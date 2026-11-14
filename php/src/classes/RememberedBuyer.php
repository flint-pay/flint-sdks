<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $code_channel
 * @property-read string $created_at
 * @property-read string $email
 * @property-read string $expires_at
 * @property-read string $last_used_at
 * @property-read string $remembered_buyer_id
 * @property-read list<string> $supported_actions
 * Presence-aware response; omitted optional fields return null. */
final class RememberedBuyer extends Model {
    /** @param array{'code_channel': string|null, 'created_at': string, 'email': string, 'expires_at': string, 'last_used_at': string, 'remembered_buyer_id': string, 'supported_actions': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RememberedBuyer')); }
    /** Lookup only: how recognition would send a code at this checkout, without considering caps. Null when the checkout cannot request a code or has nothing saved to open. Value enum: "email", "sms", null.
     * @return string|null
     */
    public function getCodeChannel(): string|null { return $this->get('code_channel'); }
    public function hasCodeChannel(): bool { return $this->has('code_channel'); }
    /** When the buyer was first remembered on this device. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Always masked to the first character and domain, such as m•••@gmail.com.
     * @return string
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** 90 days after the last confirmed code. Lookups and code requests do not renew it. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** When a code was last confirmed on the device or requested from it. Format: date-time.
     * @return string
     */
    public function getLastUsedAt(): string { return $this->get('last_used_at'); }
    public function hasLastUsedAt(): bool { return $this->has('last_used_at'); }
    /** ID of the remembered identity. Token replacement keeps this ID.
     * @return string
     */
    public function getRememberedBuyerId(): string { return $this->get('remembered_buyer_id'); }
    public function hasRememberedBuyerId(): bool { return $this->has('remembered_buyer_id'); }
    /** Contains revoke while the identity works; empty in a revoke response. [] enum: "revoke". [] (Value): string.  Value enum: "revoke".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
