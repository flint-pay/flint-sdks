<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $collection_strategy
 * @property-read list<string> $components
 * @property-read string $future_requirements
 * @property-read list<string> $targeted_requirements
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionCreateRequestInput extends Model {
    /** @param array{'collection_strategy'?: string, 'components': list<string>, 'future_requirements'?: string, 'targeted_requirements'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionCreateRequestInput')); }
    /** Shape $ (Value): string.  Value enum: "upfront", "incremental".
     * @return string
     * @throws SdkError When collection_strategy is omitted; use hasCollectionStrategy() or valueOrDefault().
     */
    public function getCollectionStrategy(): string { return $this->get('collection_strategy'); }
    public function hasCollectionStrategy(): bool { return $this->has('collection_strategy'); }
    /** Shape $ (Value): Array of string. minItems: 1. maxItems: 6. uniqueItems: true. [] enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner". Shape $[] (Value): string.  Value enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner".
     * @return list<string>
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Shape $ (Value): string.  Value enum: "omit", "include".
     * @return string
     * @throws SdkError When future_requirements is omitted; use hasFutureRequirements() or valueOrDefault().
     */
    public function getFutureRequirements(): string { return $this->get('future_requirements'); }
    public function hasFutureRequirements(): bool { return $this->has('future_requirements'); }
    /** Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. [] enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four". Shape $[] (Value): string.  Value enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four".
     * @return list<string>
     * @throws SdkError When targeted_requirements is omitted; use hasTargetedRequirements() or valueOrDefault().
     */
    public function getTargetedRequirements(): array { return $this->get('targeted_requirements'); }
    public function hasTargetedRequirements(): bool { return $this->has('targeted_requirements'); }
}
