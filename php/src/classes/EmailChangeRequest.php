<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $canceled_at
 * @property-read string|null $confirmed_at
 * @property-read string $created_at
 * @property-read bool $current_email_confirmation_required
 * @property-read string $customer_id
 * @property-read string $email_change_request_id
 * @property-read string $expires_at
 * @property-read ?string $flint_wallet_outcome
 * @property-read string|null $new_email
 * @property-read string $requested_by
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * Presence-aware response; omitted optional fields return null. */
final class EmailChangeRequest extends Model {
    /** @param array{'canceled_at': string|null, 'confirmed_at': string|null, 'created_at': string, 'current_email_confirmation_required': bool, 'customer_id': string, 'email_change_request_id': string, 'expires_at': string, 'flint_wallet_outcome'?: string, 'new_email': string|null, 'requested_by': string, 'status': string, 'supported_actions': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EmailChangeRequest')); }
    /** When a person canceled this request or a newer request replaced it. Null when it has not been canceled or replaced. Format: date-time.
     * @return string|null
     */
    public function getCanceledAt(): string|null { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** When the customer email changed. Null when the request has not been confirmed. Format: date-time.
     * @return string|null
     */
    public function getConfirmedAt(): string|null { return $this->get('confirmed_at'); }
    public function hasConfirmedAt(): bool { return $this->has('confirmed_at'); }
    /** When Flint recorded the request. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Whether the customer must also confirm a code sent to their current address. False for requests started by store staff or integrations.
     * @return bool
     */
    public function getCurrentEmailConfirmationRequired(): bool { return $this->get('current_email_confirmation_required'); }
    public function hasCurrentEmailConfirmationRequired(): bool { return $this->has('current_email_confirmation_required'); }
    /** Flint ID of the customer whose email would change.
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Flint ID of this customer's email change request.
     * @return string
     */
    public function getEmailChangeRequestId(): string { return $this->get('email_change_request_id'); }
    public function hasEmailChangeRequestId(): bool { return $this->has('email_change_request_id'); }
    /** When the request expires if it has not been confirmed or canceled. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Returned only by confirm, to customer sessions that can access cards saved with Flint after a live email-code sign-in at a Flint-hosted account. Omitted when the previous email had no saved cards. Never returned to merchant credentials. Value enum: "moved", "kept", "new_email_has_wallet".
     * @return ?string
     */
    public function getFlintWalletOutcome(): ?string { return $this->get('flint_wallet_outcome'); }
    public function hasFlintWalletOutcome(): bool { return $this->has('flint_wallet_outcome'); }
    /** The proposed email address. Null when the request is confirmed, canceled, or expired. Format: email.
     * @return string|null
     */
    public function getNewEmail(): string|null { return $this->get('new_email'); }
    public function hasNewEmail(): bool { return $this->has('new_email'); }
    /** Who started this email change request. Value enum: "buyer", "merchant", "integration".
     * @return string
     */
    public function getRequestedBy(): string { return $this->get('requested_by'); }
    public function hasRequestedBy(): bool { return $this->has('requested_by'); }
    /** The request's current confirmation state. Value enum: "pending", "confirmed", "canceled", "expired".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions available for this request in its current state. Empty when the request is final. [] enum: "cancel". [] (Value): string.  Value enum: "cancel".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
