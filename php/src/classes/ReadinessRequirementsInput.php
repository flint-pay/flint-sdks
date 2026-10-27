<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $current_deadline_at
 * @property-read list<string> $currently_due
 * @property-read string $disabled_reason
 * @property-read list<string> $eventually_due
 * @property-read list<string> $past_due
 * @property-read list<string> $pending_verification
 * @property-read string $rejected_by
 * Presence-aware input; omitted fields throw when accessed. */
final class ReadinessRequirementsInput extends Model {
    /** @param array{'current_deadline_at'?: string|\DateTimeInterface, 'currently_due': list<string>, 'disabled_reason'?: string, 'eventually_due': list<string>, 'past_due': list<string>, 'pending_verification': list<string>, 'rejected_by'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReadinessRequirementsInput')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When current_deadline_at is omitted; use hasCurrentDeadlineAt() or valueOrDefault().
     */
    public function getCurrentDeadlineAt(): string|\DateTimeInterface { return $this->get('current_deadline_at'); }
    public function hasCurrentDeadlineAt(): bool { return $this->has('current_deadline_at'); }
    /** Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. [] enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four". Shape $[] (Value): string.  Value enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four".
     * @return list<string>
     * @throws SdkError When currently_due is omitted; use hasCurrentlyDue() or valueOrDefault().
     */
    public function getCurrentlyDue(): array { return $this->get('currently_due'); }
    public function hasCurrentlyDue(): bool { return $this->has('currently_due'); }
    /** Shape $ (Value): string.  Value enum: "account_attention_required", "account_paused", "account_rejected", "account_requirements_due", "account_under_review", "requirements_past_due", "requirements_pending_verification".
     * @return string
     * @throws SdkError When disabled_reason is omitted; use hasDisabledReason() or valueOrDefault().
     */
    public function getDisabledReason(): string { return $this->get('disabled_reason'); }
    public function hasDisabledReason(): bool { return $this->has('disabled_reason'); }
    /** Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. [] enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four". Shape $[] (Value): string.  Value enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four".
     * @return list<string>
     * @throws SdkError When eventually_due is omitted; use hasEventuallyDue() or valueOrDefault().
     */
    public function getEventuallyDue(): array { return $this->get('eventually_due'); }
    public function hasEventuallyDue(): bool { return $this->has('eventually_due'); }
    /** Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. [] enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four". Shape $[] (Value): string.  Value enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four".
     * @return list<string>
     * @throws SdkError When past_due is omitted; use hasPastDue() or valueOrDefault().
     */
    public function getPastDue(): array { return $this->get('past_due'); }
    public function hasPastDue(): bool { return $this->has('past_due'); }
    /** Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. [] enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four". Shape $[] (Value): string.  Value enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four".
     * @return list<string>
     * @throws SdkError When pending_verification is omitted; use hasPendingVerification() or valueOrDefault().
     */
    public function getPendingVerification(): array { return $this->get('pending_verification'); }
    public function hasPendingVerification(): bool { return $this->has('pending_verification'); }
    /** Shape $ (Value): string.  Value enum: "flint", "payment_processor".
     * @return string
     * @throws SdkError When rejected_by is omitted; use hasRejectedBy() or valueOrDefault().
     */
    public function getRejectedBy(): string { return $this->get('rejected_by'); }
    public function hasRejectedBy(): bool { return $this->has('rejected_by'); }
}
