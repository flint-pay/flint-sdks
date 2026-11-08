<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $collection_strategy
 * @property-read list<string> $components
 * @property-read string $future_requirements
 * @property-read list<string> $targeted_requirements
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionsCreateParams extends Model {
    /** @param array{'collection_strategy'?: string, 'components': list<string>, 'future_requirements'?: string, 'targeted_requirements'?: list<string>, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionsCreateParams')); }
    /** Which requirements the session collects. If omitted, `incremental` for an account that hasn't finished onboarding, otherwise `upfront`. Only `account_onboarding` and `account_management` take it. Value enum: "upfront", "incremental".
     * @return string
     * @throws SdkError When collection_strategy is omitted; use hasCollectionStrategy() or valueOrDefault().
     */
    public function getCollectionStrategy(): string { return $this->get('collection_strategy'); }
    public function hasCollectionStrategy(): bool { return $this->has('collection_strategy'); }
    /** The embedded components the session opens, such as `account_onboarding`. Send each component once. A partner app install token can open only `account_onboarding` and `notification_banner`; another component returns `400 INVALID_REQUEST` with detail `NOT_ALLOWED`. With an API key or CLI login, `payments` also requires `payments.payment_intents.read` and `payments.disputes.write`; without them the request returns `403 INSUFFICIENT_SCOPE`. minItems: 1. maxItems: 7. uniqueItems: true. [] enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner", "payments". [] (Value): string.  Value enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner", "payments".
     * @return list<string>
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Whether the session also collects requirements that will apply later. If omitted, `omit` while onboarding isn't finished or while something is due, otherwise `include`. Only `account_onboarding` and `account_management` take it. Value enum: "omit", "include".
     * @return string
     * @throws SdkError When future_requirements is omitted; use hasFutureRequirements() or valueOrDefault().
     */
    public function getFutureRequirements(): string { return $this->get('future_requirements'); }
    public function hasFutureRequirements(): bool { return $this->has('future_requirements'); }
    /** Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. At most 100 codes, each up to 255 UTF-8 bytes after trimming surrounding whitespace. Only `account_onboarding` takes them. maxItems: 100. [] enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four". [] (Value): string.  Value enum: "additional_account_information", "business_address", "business_description", "business_directors", "business_executives", "business_name", "business_owners", "business_phone", "business_support_phone", "business_support_url", "business_tax_id", "business_verification_document", "business_website", "merchant_category_code", "owner_address", "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four", "payout_destination", "representative_address", "representative_additional_identity_document", "representative_date_of_birth", "representative_email", "representative_first_name", "representative_identity_document", "representative_last_name", "representative_phone", "representative_tax_id", "representative_tax_id_last_four".
     * @return list<string>
     * @throws SdkError When targeted_requirements is omitted; use hasTargetedRequirements() or valueOrDefault().
     */
    public function getTargetedRequirements(): array { return $this->get('targeted_requirements'); }
    public function hasTargetedRequirements(): bool { return $this->has('targeted_requirements'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
