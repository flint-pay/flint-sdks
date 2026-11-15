<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $canceled_at
 * @property-read string|\DateTimeInterface|null $confirmed_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read bool $current_email_confirmation_required
 * @property-read string $customer_id
 * @property-read string $email_change_request_id
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $flint_wallet_outcome
 * @property-read string|null $new_email
 * @property-read string $requested_by
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerEmailChangeRequestInput extends Model {
    /** @param array{'canceled_at': string|\DateTimeInterface|null, 'confirmed_at': string|\DateTimeInterface|null, 'created_at': string|\DateTimeInterface, 'current_email_confirmation_required': bool, 'customer_id': string, 'email_change_request_id': string, 'expires_at': string|\DateTimeInterface, 'flint_wallet_outcome'?: string, 'new_email': string|null, 'requested_by': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerEmailChangeRequestInput')); }
    /** When a person canceled this request or a newer request replaced it. Null when it has not been canceled or replaced. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): string|\DateTimeInterface|null { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** When the customer email changed. Null when the request has not been confirmed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When confirmed_at is omitted; use hasConfirmedAt() or valueOrDefault().
     */
    public function getConfirmedAt(): string|\DateTimeInterface|null { return $this->get('confirmed_at'); }
    public function hasConfirmedAt(): bool { return $this->has('confirmed_at'); }
    /** When Flint recorded the request. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Whether the customer must also confirm a code sent to their current address. False for requests started by store staff or integrations.
     * @return bool
     * @throws SdkError When current_email_confirmation_required is omitted; use hasCurrentEmailConfirmationRequired() or valueOrDefault().
     */
    public function getCurrentEmailConfirmationRequired(): bool { return $this->get('current_email_confirmation_required'); }
    public function hasCurrentEmailConfirmationRequired(): bool { return $this->has('current_email_confirmation_required'); }
    /** Flint ID of the customer whose email would change. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Flint ID of this customer's email change request. Example: "cecr_01KEZF7C00B8VJX4M828K0430H".
     * @return string
     * @throws SdkError When email_change_request_id is omitted; use hasEmailChangeRequestId() or valueOrDefault().
     */
    public function getEmailChangeRequestId(): string { return $this->get('email_change_request_id'); }
    public function hasEmailChangeRequestId(): bool { return $this->has('email_change_request_id'); }
    /** When the request expires if it has not been confirmed or canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
    /** The proposed email address. Null when the request is confirmed, canceled, or expired. Format: email. Example: "buyer@example.com".
     * @return string|null
     * @throws SdkError When new_email is omitted; use hasNewEmail() or valueOrDefault().
     */
    public function getNewEmail(): string|null { return $this->get('new_email'); }
    public function hasNewEmail(): bool { return $this->has('new_email'); }
    /** Who started this email change request. Value enum: "buyer", "merchant", "integration".
     * @return string
     * @throws SdkError When requested_by is omitted; use hasRequestedBy() or valueOrDefault().
     */
    public function getRequestedBy(): string { return $this->get('requested_by'); }
    public function hasRequestedBy(): bool { return $this->has('requested_by'); }
    /** The request's current confirmation state. Value enum: "pending", "confirmed", "canceled", "expired".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
