<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PostalAddress $address
 * @property-read string $api_version
 * @property-read string $api_version_changed_at
 * @property-read string $api_version_pinned_at
 * @property-read string $api_version_previous
 * @property-read string $api_version_rollback_expires_at
 * @property-read list<Banner> $banners
 * @property-read string $business_name
 * @property-read string $business_type
 * @property-read string $created_at
 * @property-read string $current_deadline_at
 * @property-read string $email
 * @property-read bool $has_past_due
 * @property-read Image $icon
 * @property-read Image $logo
 * @property-read string $merchant_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $observed_at
 * @property-read string $onboarding_status
 * @property-read ExpandedOrganizationSummary|null $organization
 * @property-read string $organization_id
 * @property-read MerchantReadinessAxis $payments
 * @property-read MerchantReadinessAxis $payouts
 * @property-read string $phone
 * @property-read string $reporting_timezone
 * @property-read MerchantReadinessRequirements $requirements
 * @property-read string $status
 * @property-read string $status_reason
 * @property-read string $support_email
 * @property-read string $support_phone
 * @property-read string $support_url
 * @property-read string $updated_at
 * @property-read string $version
 * @property-read string $website_url
 * Presence-aware response; omitted fields throw when accessed. */
final class Merchant extends Model {
    /** @param array{'address'?: mixed, 'api_version'?: string, 'api_version_changed_at'?: string, 'api_version_pinned_at'?: string, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string, 'banners'?: list<mixed>, 'business_name'?: string, 'business_type'?: string, 'created_at'?: string, 'current_deadline_at'?: string, 'email': string, 'has_past_due': bool, 'icon'?: object{'alt'?: string, 'external_reference_id'?: string, 'height': int, 'url': string, 'width': int}, 'logo'?: mixed, 'merchant_id': string, 'metadata'?: \stdClass, 'observed_at': string, 'onboarding_status': string, 'organization'?: mixed, 'organization_id'?: string, 'payments': object{'next_actions': list<mixed>, 'status': string, 'status_reason'?: string|null}, 'payouts': object{'next_actions': list<mixed>, 'status': string, 'status_reason'?: string|null}, 'phone'?: string, 'reporting_timezone'?: string, 'requirements': object{'current_deadline_at'?: string, 'currently_due': list<string>, 'disabled_reason'?: string|null, 'eventually_due': list<string>, 'past_due': list<string>, 'pending_verification': list<string>}, 'status': string, 'status_reason'?: string, 'support_email'?: string, 'support_phone'?: string, 'support_url'?: string, 'updated_at'?: string, 'version': string, 'website_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Merchant')); }
    /** @return PostalAddress
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): PostalAddress { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** @return string
     * @throws SdkError When api_version_changed_at is omitted; use hasApiVersionChangedAt() or valueOrDefault().
     */
    public function getApiVersionChangedAt(): string { return $this->get('api_version_changed_at'); }
    public function hasApiVersionChangedAt(): bool { return $this->has('api_version_changed_at'); }
    /** @return string
     * @throws SdkError When api_version_pinned_at is omitted; use hasApiVersionPinnedAt() or valueOrDefault().
     */
    public function getApiVersionPinnedAt(): string { return $this->get('api_version_pinned_at'); }
    public function hasApiVersionPinnedAt(): bool { return $this->has('api_version_pinned_at'); }
    /** @return string
     * @throws SdkError When api_version_previous is omitted; use hasApiVersionPrevious() or valueOrDefault().
     */
    public function getApiVersionPrevious(): string { return $this->get('api_version_previous'); }
    public function hasApiVersionPrevious(): bool { return $this->has('api_version_previous'); }
    /** @return string
     * @throws SdkError When api_version_rollback_expires_at is omitted; use hasApiVersionRollbackExpiresAt() or valueOrDefault().
     */
    public function getApiVersionRollbackExpiresAt(): string { return $this->get('api_version_rollback_expires_at'); }
    public function hasApiVersionRollbackExpiresAt(): bool { return $this->has('api_version_rollback_expires_at'); }
    /** @return list<Banner>
     * @throws SdkError When banners is omitted; use hasBanners() or valueOrDefault().
     */
    public function getBanners(): array { return $this->get('banners'); }
    public function hasBanners(): bool { return $this->has('banners'); }
    /** @return string
     * @throws SdkError When business_name is omitted; use hasBusinessName() or valueOrDefault().
     */
    public function getBusinessName(): string { return $this->get('business_name'); }
    public function hasBusinessName(): bool { return $this->has('business_name'); }
    /** @return string
     * @throws SdkError When business_type is omitted; use hasBusinessType() or valueOrDefault().
     */
    public function getBusinessType(): string { return $this->get('business_type'); }
    public function hasBusinessType(): bool { return $this->has('business_type'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When current_deadline_at is omitted; use hasCurrentDeadlineAt() or valueOrDefault().
     */
    public function getCurrentDeadlineAt(): string { return $this->get('current_deadline_at'); }
    public function hasCurrentDeadlineAt(): bool { return $this->has('current_deadline_at'); }
    /** @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** @return bool
     * @throws SdkError When has_past_due is omitted; use hasHasPastDue() or valueOrDefault().
     */
    public function getHasPastDue(): bool { return $this->get('has_past_due'); }
    public function hasHasPastDue(): bool { return $this->has('has_past_due'); }
    /** @return Image
     * @throws SdkError When icon is omitted; use hasIcon() or valueOrDefault().
     */
    public function getIcon(): Image { return $this->get('icon'); }
    public function hasIcon(): bool { return $this->has('icon'); }
    /** @return Image
     * @throws SdkError When logo is omitted; use hasLogo() or valueOrDefault().
     */
    public function getLogo(): Image { return $this->get('logo'); }
    public function hasLogo(): bool { return $this->has('logo'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): string { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** @return string
     * @throws SdkError When onboarding_status is omitted; use hasOnboardingStatus() or valueOrDefault().
     */
    public function getOnboardingStatus(): string { return $this->get('onboarding_status'); }
    public function hasOnboardingStatus(): bool { return $this->has('onboarding_status'); }
    /** @return ExpandedOrganizationSummary|null
     * @throws SdkError When organization is omitted; use hasOrganization() or valueOrDefault().
     */
    public function getOrganization(): ExpandedOrganizationSummary|null { return $this->get('organization'); }
    public function hasOrganization(): bool { return $this->has('organization'); }
    /** @return string
     * @throws SdkError When organization_id is omitted; use hasOrganizationId() or valueOrDefault().
     */
    public function getOrganizationId(): string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
    /** @return MerchantReadinessAxis
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): MerchantReadinessAxis { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** @return MerchantReadinessAxis
     * @throws SdkError When payouts is omitted; use hasPayouts() or valueOrDefault().
     */
    public function getPayouts(): MerchantReadinessAxis { return $this->get('payouts'); }
    public function hasPayouts(): bool { return $this->has('payouts'); }
    /** @return string
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** @return string
     * @throws SdkError When reporting_timezone is omitted; use hasReportingTimezone() or valueOrDefault().
     */
    public function getReportingTimezone(): string { return $this->get('reporting_timezone'); }
    public function hasReportingTimezone(): bool { return $this->has('reporting_timezone'); }
    /** @return MerchantReadinessRequirements
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): MerchantReadinessRequirements { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When status_reason is omitted; use hasStatusReason() or valueOrDefault().
     */
    public function getStatusReason(): string { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** @return string
     * @throws SdkError When support_email is omitted; use hasSupportEmail() or valueOrDefault().
     */
    public function getSupportEmail(): string { return $this->get('support_email'); }
    public function hasSupportEmail(): bool { return $this->has('support_email'); }
    /** @return string
     * @throws SdkError When support_phone is omitted; use hasSupportPhone() or valueOrDefault().
     */
    public function getSupportPhone(): string { return $this->get('support_phone'); }
    public function hasSupportPhone(): bool { return $this->has('support_phone'); }
    /** @return string
     * @throws SdkError When support_url is omitted; use hasSupportUrl() or valueOrDefault().
     */
    public function getSupportUrl(): string { return $this->get('support_url'); }
    public function hasSupportUrl(): bool { return $this->has('support_url'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** @return string
     * @throws SdkError When website_url is omitted; use hasWebsiteUrl() or valueOrDefault().
     */
    public function getWebsiteUrl(): string { return $this->get('website_url'); }
    public function hasWebsiteUrl(): bool { return $this->has('website_url'); }
}
