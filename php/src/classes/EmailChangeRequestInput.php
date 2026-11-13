<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $confirmed
 * @property-read string|\DateTimeInterface $created_at
 * @property-read bool $current_email_confirmation_required
 * @property-read string $customer_id
 * @property-read string $email_change_request_id
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $flint_wallet_outcome
 * @property-read string $new_email
 * Presence-aware input; omitted fields throw when accessed. */
final class EmailChangeRequestInput extends Model {
    /** @param array{'confirmed': bool, 'created_at': string|\DateTimeInterface, 'current_email_confirmation_required': bool, 'customer_id': string, 'email_change_request_id': string, 'expires_at': string|\DateTimeInterface, 'flint_wallet_outcome'?: string, 'new_email': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EmailChangeRequestInput')); }
    /** Whether both addresses have been confirmed, which completes the change.
     * @return bool
     * @throws SdkError When confirmed is omitted; use hasConfirmed() or valueOrDefault().
     */
    public function getConfirmed(): bool { return $this->get('confirmed'); }
    public function hasConfirmed(): bool { return $this->has('confirmed'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Whether the code sent to the current address must also be confirmed. `false` for a customer with no email on file.
     * @return bool
     * @throws SdkError When current_email_confirmation_required is omitted; use hasCurrentEmailConfirmationRequired() or valueOrDefault().
     */
    public function getCurrentEmailConfirmationRequired(): bool { return $this->get('current_email_confirmation_required'); }
    public function hasCurrentEmailConfirmationRequired(): bool { return $this->has('current_email_confirmation_required'); }
    /** ID of the customer whose email is changing. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Unique identifier for this email change request, prefixed `cecr_`. Example: "cecr_01KEZF7C00B8VJX4M828K0430H".
     * @return string
     * @throws SdkError When email_change_request_id is omitted; use hasEmailChangeRequestId() or valueOrDefault().
     */
    public function getEmailChangeRequestId(): string { return $this->get('email_change_request_id'); }
    public function hasEmailChangeRequestId(): bool { return $this->has('email_change_request_id'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Returned only by confirm, to customer sessions that can access cards saved with Flint after a live email-code sign-in at a Flint-hosted account. Omitted when the previous email had no saved cards. Never returned to merchant credentials. Value enum: "moved", "kept", "new_email_has_wallet".
     * @return string
     * @throws SdkError When flint_wallet_outcome is omitted; use hasFlintWalletOutcome() or valueOrDefault().
     */
    public function getFlintWalletOutcome(): string { return $this->get('flint_wallet_outcome'); }
    public function hasFlintWalletOutcome(): bool { return $this->has('flint_wallet_outcome'); }
    /** The address the email is changing to.
     * @return string
     * @throws SdkError When new_email is omitted; use hasNewEmail() or valueOrDefault().
     */
    public function getNewEmail(): string { return $this->get('new_email'); }
    public function hasNewEmail(): bool { return $this->has('new_email'); }
}
