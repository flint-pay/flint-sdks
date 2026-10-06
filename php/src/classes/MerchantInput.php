<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PostalAddressInput|array<array-key, mixed>|\stdClass $address
 * @property-read string $api_version
 * @property-read string $business_name
 * @property-read string $email
 * @property-read array{'alt'?: string, 'external_reference_id'?: string, 'height': int, 'url': string, 'width': int, ...}|object $icon
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $logo
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $organization_id
 * @property-read string $phone
 * @property-read string $reporting_timezone
 * @property-read string $support_email
 * @property-read string $support_phone
 * @property-read string $support_url
 * @property-read string $website_url
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantInput extends Model {
    /** @param array{'address'?: PostalAddressInput|array<array-key, mixed>|\stdClass, 'api_version'?: string, 'business_name'?: string, 'email': string, 'icon'?: array{'alt'?: string, 'external_reference_id'?: string, 'height': int, 'url': string, 'width': int, ...}|object, 'logo'?: ImageInput|array<array-key, mixed>|\stdClass, 'metadata'?: array<array-key, string>|\stdClass, 'organization_id'?: string, 'phone'?: string, 'reporting_timezone'?: string, 'support_email'?: string, 'support_phone'?: string, 'support_url'?: string, 'website_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantInput')); }
    /** @return PostalAddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** @return string
     * @throws SdkError When business_name is omitted; use hasBusinessName() or valueOrDefault().
     */
    public function getBusinessName(): string { return $this->get('business_name'); }
    public function hasBusinessName(): bool { return $this->has('business_name'); }
    /** @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** @return array{'alt'?: string, 'external_reference_id'?: string, 'height': int, 'url': string, 'width': int, ...}|object
     * @throws SdkError When icon is omitted; use hasIcon() or valueOrDefault().
     */
    public function getIcon(): array|object { return $this->get('icon'); }
    public function hasIcon(): bool { return $this->has('icon'); }
    /** @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When logo is omitted; use hasLogo() or valueOrDefault().
     */
    public function getLogo(): mixed { return $this->get('logo'); }
    public function hasLogo(): bool { return $this->has('logo'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When organization_id is omitted; use hasOrganizationId() or valueOrDefault().
     */
    public function getOrganizationId(): string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
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
     * @throws SdkError When website_url is omitted; use hasWebsiteUrl() or valueOrDefault().
     */
    public function getWebsiteUrl(): string { return $this->get('website_url'); }
    public function hasWebsiteUrl(): bool { return $this->has('website_url'); }
}
