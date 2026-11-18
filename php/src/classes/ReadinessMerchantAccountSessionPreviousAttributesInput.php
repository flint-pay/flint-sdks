<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $collection_strategy
 * @property-read list<string>|null $components
 * @property-read string|null $future_requirements
 * @property-read list<string>|null $targeted_requirements
 * Presence-aware input; omitted fields throw when accessed. */
final class ReadinessMerchantAccountSessionPreviousAttributesInput extends Model {
    /** @param array{'collection_strategy'?: string|null, 'components'?: list<string>|null, 'future_requirements'?: string|null, 'targeted_requirements'?: list<string>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReadinessMerchantAccountSessionPreviousAttributesInput')); }
    /** How onboarding collects requirements. upfront asks for everything the account will eventually need; incremental asks only for what is currently due. Value enum: "upfront", "incremental". anyOf[1] (Value): string. How onboarding collects requirements. upfront asks for everything the account will eventually need; incremental asks only for what is currently due. Value enum: "upfront", "incremental". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When collection_strategy is omitted; use hasCollectionStrategy() or valueOrDefault().
     */
    public function getCollectionStrategy(): mixed { return $this->get('collection_strategy'); }
    public function hasCollectionStrategy(): bool { return $this->has('collection_strategy'); }
    /** Flint components to request. Send this list as components in POST /v1/merchant-account-sessions. [] enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner", "payments". anyOf[1] (Value): Array of string. Flint components to request. Send this list as components in POST /v1/merchant-account-sessions. [] enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner", "payments". anyOf[1][] (Value): string.  Value enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner", "payments". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): mixed { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Whether onboarding also collects requirements the processor has scheduled for a future date. include collects them now; omit leaves them until they are due. Value enum: "omit", "include". anyOf[1] (Value): string. Whether onboarding also collects requirements the processor has scheduled for a future date. include collects them now; omit leaves them until they are due. Value enum: "omit", "include". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When future_requirements is omitted; use hasFutureRequirements() or valueOrDefault().
     */
    public function getFutureRequirements(): mixed { return $this->get('future_requirements'); }
    public function hasFutureRequirements(): bool { return $this->has('future_requirements'); }
    /** Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. [] enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_email", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "payout_destination_ownership_document", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[1] (Value): Array of string. Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. [] enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_email", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "payout_destination_ownership_document", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[1][] (Value): string.  Value enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_email", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "payout_destination_ownership_document", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four", "terms_acceptance", "statement_descriptor". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When targeted_requirements is omitted; use hasTargetedRequirements() or valueOrDefault().
     */
    public function getTargetedRequirements(): mixed { return $this->get('targeted_requirements'); }
    public function hasTargetedRequirements(): bool { return $this->has('targeted_requirements'); }
}
