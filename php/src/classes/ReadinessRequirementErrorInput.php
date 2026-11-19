<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $message
 * @property-read string $requirement
 * @property-read string $resolution
 * Presence-aware input; omitted fields throw when accessed. */
final class ReadinessRequirementErrorInput extends Model {
    /** @param array{'code': string, 'message': string, 'requirement': string, 'resolution': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReadinessRequirementErrorInput')); }
    /** Flint verification failure code. New codes may be added; use message and resolution for unknown codes. Value enum: "statement_descriptor_mismatch", "statement_descriptor_rejected", "tax_id_mismatch", "identity_mismatch", "document_unreadable", "document_expired", "document_mismatch", "document_rejected", "invalid_value", "terms_reacceptance_required", "profile_field_rejected", "verification_failed".
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** What could not be verified.
     * @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Value enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_email", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "payout_destination_ownership_document", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor".
     * @return string
     * @throws SdkError When requirement is omitted; use hasRequirement() or valueOrDefault().
     */
    public function getRequirement(): string { return $this->get('requirement'); }
    public function hasRequirement(): bool { return $this->has('requirement'); }
    /** What the merchant should do to resolve the requirement.
     * @return string
     * @throws SdkError When resolution is omitted; use hasResolution() or valueOrDefault().
     */
    public function getResolution(): string { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
}
