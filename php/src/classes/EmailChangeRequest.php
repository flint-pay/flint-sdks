<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $confirmed
 * @property-read string $created_at
 * @property-read bool $current_email_confirmation_required
 * @property-read string $customer_id
 * @property-read string $email_change_request_id
 * @property-read string $expires_at
 * @property-read string $new_email
 * Presence-aware response; omitted optional fields return null. */
final class EmailChangeRequest extends Model {
    /** @param array{'confirmed': bool, 'created_at': string, 'current_email_confirmation_required': bool, 'customer_id': string, 'email_change_request_id': string, 'expires_at': string, 'new_email': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EmailChangeRequest')); }
    /** confirmed
     * @return bool
     */
    public function getConfirmed(): bool { return $this->get('confirmed'); }
    public function hasConfirmed(): bool { return $this->has('confirmed'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** current_email_confirmation_required
     * @return bool
     */
    public function getCurrentEmailConfirmationRequired(): bool { return $this->get('current_email_confirmation_required'); }
    public function hasCurrentEmailConfirmationRequired(): bool { return $this->has('current_email_confirmation_required'); }
    /** customer_id
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** email_change_request_id
     * @return string
     */
    public function getEmailChangeRequestId(): string { return $this->get('email_change_request_id'); }
    public function hasEmailChangeRequestId(): bool { return $this->has('email_change_request_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** new_email
     * @return string
     */
    public function getNewEmail(): string { return $this->get('new_email'); }
    public function hasNewEmail(): bool { return $this->has('new_email'); }
}
