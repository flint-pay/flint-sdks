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
 * Presence-aware response; omitted optional fields return null. */
final class CustomerVerification extends Model {
    /** @param array{'channel': string, 'created_at': string, 'customer_id': string, 'customer_verification_id': string, 'email': string, 'expires_at': string, 'purpose': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerVerification')); }
    /** Value enum: "email".
     * @return string
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** customer_id
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** customer_verification_id
     * @return string
     */
    public function getCustomerVerificationId(): string { return $this->get('customer_verification_id'); }
    public function hasCustomerVerificationId(): bool { return $this->has('customer_verification_id'); }
    /** email
     * @return string
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Value enum: "link_guest_purchases".
     * @return string
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
    /** pending while the code can be confirmed; confirmed while an unused proof can link purchases; used after linking; expired when the code or proof expires. Value enum: "pending", "confirmed", "used", "expired".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
