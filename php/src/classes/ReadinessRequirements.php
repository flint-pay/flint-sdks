<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $currently_due
 * @property-read ?string $disabled_reason
 * @property-read ?string $due_at
 * @property-read list<ReadinessRequirementError> $errors
 * @property-read list<string> $eventually_due
 * @property-read list<string> $past_due
 * @property-read list<string> $pending_verification
 * @property-read ?string $rejected_by
 * @property-read list<string> $upcoming_due
 * @property-read ?string $upcoming_due_at
 * Presence-aware response; omitted optional fields return null. */
final class ReadinessRequirements extends Model {
    /** @param array{'currently_due': list<string>, 'disabled_reason'?: string, 'due_at'?: string, 'errors': list<mixed>, 'eventually_due': list<string>, 'past_due': list<string>, 'pending_verification': list<string>, 'rejected_by'?: string, 'upcoming_due': list<string>, 'upcoming_due_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReadinessRequirements')); }
    /** Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. [] enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_email", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "payout_destination_ownership_document", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". [] (Value): string.  Value enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_email", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "payout_destination_ownership_document", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor".
     * @return list<string>
     */
    public function getCurrentlyDue(): array { return $this->get('currently_due'); }
    public function hasCurrentlyDue(): bool { return $this->has('currently_due'); }
    /** Why the account is disabled. Omitted when it isn't. Value enum: "account_attention_required", "account_paused", "account_rejected", "account_requirements_due", "account_under_review", "requirements_past_due", "requirements_pending_verification".
     * @return ?string
     */
    public function getDisabledReason(): ?string { return $this->get('disabled_reason'); }
    public function hasDisabledReason(): bool { return $this->has('disabled_reason'); }
    /** Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. Format: date-time.
     * @return ?string
     */
    public function getDueAt(): ?string { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Verification failures and how to resolve them. Empty when no failures are reported. Ordered by past-due requirements, then currently due, then other requirements; unique by requirement and code. A failure can name a requirement outside the due lists. [] (Value): {@see ReadinessRequirementError}. A verification failure with a suggested correction.
     * @return list<ReadinessRequirementError>
     */
    public function getErrors(): array { return $this->get('errors'); }
    public function hasErrors(): bool { return $this->has('errors'); }
    /** Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. [] enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_email", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "payout_destination_ownership_document", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". [] (Value): string.  Value enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_email", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "payout_destination_ownership_document", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor".
     * @return list<string>
     */
    public function getEventuallyDue(): array { return $this->get('eventually_due'); }
    public function hasEventuallyDue(): bool { return $this->has('eventually_due'); }
    /** Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. [] enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_email", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "payout_destination_ownership_document", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". [] (Value): string.  Value enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_email", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "payout_destination_ownership_document", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor".
     * @return list<string>
     */
    public function getPastDue(): array { return $this->get('past_due'); }
    public function hasPastDue(): bool { return $this->has('past_due'); }
    /** Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. [] enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_email", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "payout_destination_ownership_document", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". [] (Value): string.  Value enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_email", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "payout_destination_ownership_document", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor".
     * @return list<string>
     */
    public function getPendingVerification(): array { return $this->get('pending_verification'); }
    public function hasPendingVerification(): bool { return $this->has('pending_verification'); }
    /** Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Value enum: "flint", "payment_processor".
     * @return ?string
     */
    public function getRejectedBy(): ?string { return $this->get('rejected_by'); }
    public function hasRejectedBy(): bool { return $this->has('rejected_by'); }
    /** Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information. [] (Value): string.
     * @return list<string>
     */
    public function getUpcomingDue(): array { return $this->get('upcoming_due'); }
    public function hasUpcomingDue(): bool { return $this->has('upcoming_due'); }
    /** Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. Format: date-time.
     * @return ?string
     */
    public function getUpcomingDueAt(): ?string { return $this->get('upcoming_due_at'); }
    public function hasUpcomingDueAt(): bool { return $this->has('upcoming_due_at'); }
}
