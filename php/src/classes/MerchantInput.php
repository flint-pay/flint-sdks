<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $address
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $api_version_changed_at
 * @property-read string|\DateTimeInterface $api_version_pinned_at
 * @property-read string $api_version_previous
 * @property-read string|\DateTimeInterface $api_version_rollback_expires_at
 * @property-read string $business_name
 * @property-read string $business_type
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|null $email
 * @property-read ImageAttachmentInput|array<array-key, mixed>|\stdClass $icon
 * @property-read ImageAttachmentInput|array<array-key, mixed>|\stdClass $logo
 * @property-read string $merchant_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read array{'created_at'?: string|\DateTimeInterface, 'name': string, 'organization_id': string, 'parent_organization_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null $organization
 * @property-read string $organization_id
 * @property-read string $phone
 * @property-read MerchantReadinessInput|array<array-key, mixed>|\stdClass $readiness
 * @property-read string $reporting_timezone
 * @property-read string $status
 * @property-read string $support_email
 * @property-read string $support_phone
 * @property-read string $support_url
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * @property-read string $website_url
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantInput extends Model {
    /** @param array{'address'?: AddressInput|array<array-key, mixed>|\stdClass, 'api_version'?: string, 'api_version_changed_at'?: string|\DateTimeInterface, 'api_version_pinned_at'?: string|\DateTimeInterface, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string|\DateTimeInterface, 'business_name'?: string, 'business_type'?: string, 'created_at'?: string|\DateTimeInterface, 'email': string|null, 'icon'?: ImageAttachmentInput|array<array-key, mixed>|\stdClass, 'logo'?: ImageAttachmentInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'organization'?: array{'created_at'?: string|\DateTimeInterface, 'name': string, 'organization_id': string, 'parent_organization_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null, 'organization_id': string, 'phone'?: string, 'readiness': MerchantReadinessInput|array<array-key, mixed>|\stdClass, 'reporting_timezone'?: string, 'status': string, 'support_email'?: string, 'support_phone'?: string, 'support_url'?: string, 'updated_at'?: string|\DateTimeInterface, 'version': int, 'website_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantInput')); }
    /** A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Default API version for requests without a Flint-Version header. Shared across live and test environments.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** When the merchant's default API version last changed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When api_version_changed_at is omitted; use hasApiVersionChangedAt() or valueOrDefault().
     */
    public function getApiVersionChangedAt(): string|\DateTimeInterface { return $this->get('api_version_changed_at'); }
    public function hasApiVersionChangedAt(): bool { return $this->has('api_version_changed_at'); }
    /** When the merchant's default API version was first set. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When api_version_pinned_at is omitted; use hasApiVersionPinnedAt() or valueOrDefault().
     */
    public function getApiVersionPinnedAt(): string|\DateTimeInterface { return $this->get('api_version_pinned_at'); }
    public function hasApiVersionPinnedAt(): bool { return $this->has('api_version_pinned_at'); }
    /** Previous API version, present while a supported rollback is available.
     * @return string
     * @throws SdkError When api_version_previous is omitted; use hasApiVersionPrevious() or valueOrDefault().
     */
    public function getApiVersionPrevious(): string { return $this->get('api_version_previous'); }
    public function hasApiVersionPrevious(): bool { return $this->has('api_version_previous'); }
    /** When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When api_version_rollback_expires_at is omitted; use hasApiVersionRollbackExpiresAt() or valueOrDefault().
     */
    public function getApiVersionRollbackExpiresAt(): string|\DateTimeInterface { return $this->get('api_version_rollback_expires_at'); }
    public function hasApiVersionRollbackExpiresAt(): bool { return $this->has('api_version_rollback_expires_at'); }
    /** Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins.
     * @return string
     * @throws SdkError When business_name is omitted; use hasBusinessName() or valueOrDefault().
     */
    public function getBusinessName(): string { return $this->get('business_name'); }
    public function hasBusinessName(): bool { return $this->has('business_name'); }
    /** Merchant's business type. - `other`: A business type Flint does not map yet. Value enum: "individual", "company", "non_profit", "government_entity", "other".
     * @return string
     * @throws SdkError When business_type is omitted; use hasBusinessType() or valueOrDefault().
     */
    public function getBusinessType(): string { return $this->get('business_type'); }
    public function hasBusinessType(): bool { return $this->has('business_type'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** email
     * @return string|null
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. An image attached to a resource, with its display properties and attachment metadata.
     * @return ImageAttachmentInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When icon is omitted; use hasIcon() or valueOrDefault().
     */
    public function getIcon(): mixed { return $this->get('icon'); }
    public function hasIcon(): bool { return $this->has('icon'); }
    /** An image attached to a resource, with its display properties and attachment metadata.
     * @return ImageAttachmentInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When logo is omitted; use hasLogo() or valueOrDefault().
     */
    public function getLogo(): mixed { return $this->get('logo'); }
    public function hasLogo(): bool { return $this->has('logo'); }
    /** merchant_id
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Present only when `expand` includes `organization`; `null` when expanded and there is no related organization. anyOf[1] (Value): {@see ExpandedOrganizationSummaryInput}. An organization's summary fields, such as its name, status, and parent, returned when the organization is expanded. anyOf[2] (Value): null.
     * @return array{'created_at'?: string|\DateTimeInterface, 'name': string, 'organization_id': string, 'parent_organization_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null
     * @throws SdkError When organization is omitted; use hasOrganization() or valueOrDefault().
     */
    public function getOrganization(): mixed { return $this->get('organization'); }
    public function hasOrganization(): bool { return $this->has('organization'); }
    /** The organization this merchant belongs to. Flint creates it with the merchant, and it can't be changed through the API.
     * @return string
     * @throws SdkError When organization_id is omitted; use hasOrganizationId() or valueOrDefault().
     */
    public function getOrganizationId(): string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
    /** phone
     * @return string
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** A merchant's readiness to accept payments and receive payouts, with per-capability status and outstanding requirements.
     * @return MerchantReadinessInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When readiness is omitted; use hasReadiness() or valueOrDefault().
     */
    public function getReadiness(): mixed { return $this->get('readiness'); }
    public function hasReadiness(): bool { return $this->has('readiness'); }
    /** reporting_timezone
     * @return string
     * @throws SdkError When reporting_timezone is omitted; use hasReportingTimezone() or valueOrDefault().
     */
    public function getReportingTimezone(): string { return $this->get('reporting_timezone'); }
    public function hasReportingTimezone(): bool { return $this->has('reporting_timezone'); }
    /** Value enum: "active", "suspended", "restricted", "closed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** support_email
     * @return string
     * @throws SdkError When support_email is omitted; use hasSupportEmail() or valueOrDefault().
     */
    public function getSupportEmail(): string { return $this->get('support_email'); }
    public function hasSupportEmail(): bool { return $this->has('support_email'); }
    /** support_phone
     * @return string
     * @throws SdkError When support_phone is omitted; use hasSupportPhone() or valueOrDefault().
     */
    public function getSupportPhone(): string { return $this->get('support_phone'); }
    public function hasSupportPhone(): bool { return $this->has('support_phone'); }
    /** support_url
     * @return string
     * @throws SdkError When support_url is omitted; use hasSupportUrl() or valueOrDefault().
     */
    public function getSupportUrl(): string { return $this->get('support_url'); }
    public function hasSupportUrl(): bool { return $this->has('support_url'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** website_url
     * @return string
     * @throws SdkError When website_url is omitted; use hasWebsiteUrl() or valueOrDefault().
     */
    public function getWebsiteUrl(): string { return $this->get('website_url'); }
    public function hasWebsiteUrl(): bool { return $this->has('website_url'); }
}
