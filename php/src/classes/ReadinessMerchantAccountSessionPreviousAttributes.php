<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $collection_strategy
 * @property-read list<string>|null $components
 * @property-read string|null $future_requirements
 * @property-read list<string>|null $targeted_requirements
 * Presence-aware response; omitted optional fields return null. */
final class ReadinessMerchantAccountSessionPreviousAttributes extends Model {
    /** @param array{'collection_strategy'?: mixed, 'components'?: mixed, 'future_requirements'?: mixed, 'targeted_requirements'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReadinessMerchantAccountSessionPreviousAttributes')); }
    /** How onboarding collects requirements. upfront asks for everything the account will eventually need; incremental asks only for what is currently due. Value enum: "upfront", "incremental". anyOf[1] (Value): string. How onboarding collects requirements. upfront asks for everything the account will eventually need; incremental asks only for what is currently due. Value enum: "upfront", "incremental". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCollectionStrategy(): string|null { return $this->get('collection_strategy'); }
    public function hasCollectionStrategy(): bool { return $this->has('collection_strategy'); }
    /** Flint components to request. Send this list as components in POST /v1/merchant-account-sessions. [] enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner", "payments". anyOf[1] (Value): Array of string. Flint components to request. Send this list as components in POST /v1/merchant-account-sessions. [] enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner", "payments". anyOf[1][] (Value): string.  Value enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner", "payments". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getComponents(): array|null { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Whether onboarding also collects requirements the processor has scheduled for a future date. include collects them now; omit leaves them until they are due. Value enum: "omit", "include". anyOf[1] (Value): string. Whether onboarding also collects requirements the processor has scheduled for a future date. include collects them now; omit leaves them until they are due. Value enum: "omit", "include". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFutureRequirements(): string|null { return $this->get('future_requirements'); }
    public function hasFutureRequirements(): bool { return $this->has('future_requirements'); }
    /** Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. [] enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four". anyOf[1] (Value): Array of string. Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. [] enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four". anyOf[1][] (Value): string.  Value enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getTargetedRequirements(): array|null { return $this->get('targeted_requirements'); }
    public function hasTargetedRequirements(): bool { return $this->has('targeted_requirements'); }
}
