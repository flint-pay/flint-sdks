<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $channel
 * @property-read string $created_at
 * @property-read string $customer_id
 * @property-read string $customer_verification_id
 * @property-read string $email
 * @property-read string $expires_at
 * @property-read string $purpose
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * Presence-aware response; omitted optional fields return null. */
final class CustomerVerification extends Model {
    /** @param array{'channel': string, 'created_at': string, 'customer_id': string, 'customer_verification_id': string, 'email': string, 'expires_at': string, 'purpose': string, 'status': string, 'supported_actions': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerVerification')); }
    /** How the code was delivered. Value enum: "email".
     * @return string
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ID of the customer whose email this verification proves.
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Unique identifier for this customer verification, prefixed `cver_`.
     * @return string
     */
    public function getCustomerVerificationId(): string { return $this->get('customer_verification_id'); }
    public function hasCustomerVerificationId(): bool { return $this->has('customer_verification_id'); }
    /** The email address that received the code: the customer's email when the verification was created.
     * @return string
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** What the verification is for. Value enum: "link_guest_purchases".
     * @return string
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
    /** pending while the code can be confirmed; confirmed while an unused proof can link purchases; used after linking; expired when the code or proof expires. Value enum: "pending", "confirmed", "used", "expired".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains confirm while the code is pending; empty once confirmed, used, expired, or out of attempts. Expiry is evaluated when Flint serves the response. [] enum: "confirm". [] (Value): string.  Value enum: "confirm".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
