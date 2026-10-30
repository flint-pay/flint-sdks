<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?Address $address
 * @property-read ?string $api_version
 * @property-read ?string $api_version_changed_at
 * @property-read ?string $api_version_pinned_at
 * @property-read ?string $api_version_previous
 * @property-read ?string $api_version_rollback_expires_at
 * @property-read ?string $business_name
 * @property-read ?string $business_type
 * @property-read ?string $created_at
 * @property-read string|null $email
 * @property-read ?ImageAttachment $icon
 * @property-read ?ImageAttachment $logo
 * @property-read string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read ExpandedOrganizationSummary|null $organization
 * @property-read string $organization_id
 * @property-read ?string $phone
 * @property-read MerchantReadiness $readiness
 * @property-read ?string $reporting_timezone
 * @property-read string $status
 * @property-read ?string $support_email
 * @property-read ?string $support_phone
 * @property-read ?string $support_url
 * @property-read ?string $updated_at
 * @property-read int $version
 * @property-read ?string $website_url
 * Presence-aware response; omitted optional fields return null. */
final class MerchantUpdatedEventDataObject extends Model {
    /** @param array{'address'?: mixed, 'api_version'?: string, 'api_version_changed_at'?: string, 'api_version_pinned_at'?: string, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string, 'business_name'?: string, 'business_type'?: string, 'created_at'?: string, 'email': string|null, 'icon'?: mixed, 'logo'?: mixed, 'merchant_id': string, 'metadata'?: mixed, 'organization'?: mixed, 'organization_id': string, 'phone'?: string, 'readiness': mixed, 'reporting_timezone'?: string, 'status': string, 'support_email'?: string, 'support_phone'?: string, 'support_url'?: string, 'updated_at'?: string, 'version': int, 'website_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantUpdatedEventDataObject')); }
    /** A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return ?Address
     */
    public function getAddress(): ?Address { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Default API version for requests without a Flint-Version header. Shared across live and test environments.
     * @return ?string
     */
    public function getApiVersion(): ?string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** When the merchant's default API version last changed. Format: date-time.
     * @return ?string
     */
    public function getApiVersionChangedAt(): ?string { return $this->get('api_version_changed_at'); }
    public function hasApiVersionChangedAt(): bool { return $this->has('api_version_changed_at'); }
    /** When the merchant's default API version was first set. Format: date-time.
     * @return ?string
     */
    public function getApiVersionPinnedAt(): ?string { return $this->get('api_version_pinned_at'); }
    public function hasApiVersionPinnedAt(): bool { return $this->has('api_version_pinned_at'); }
    /** Previous API version, present while a supported rollback is available.
     * @return ?string
     */
    public function getApiVersionPrevious(): ?string { return $this->get('api_version_previous'); }
    public function hasApiVersionPrevious(): bool { return $this->has('api_version_previous'); }
    /** When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: date-time.
     * @return ?string
     */
    public function getApiVersionRollbackExpiresAt(): ?string { return $this->get('api_version_rollback_expires_at'); }
    public function hasApiVersionRollbackExpiresAt(): bool { return $this->has('api_version_rollback_expires_at'); }
    /** Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins.
     * @return ?string
     */
    public function getBusinessName(): ?string { return $this->get('business_name'); }
    public function hasBusinessName(): bool { return $this->has('business_name'); }
    /** Merchant's business type. - `other`: A business type Flint does not map yet. Value enum: "individual", "company", "non_profit", "government_entity", "other".
     * @return ?string
     */
    public function getBusinessType(): ?string { return $this->get('business_type'); }
    public function hasBusinessType(): bool { return $this->has('business_type'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** email
     * @return string|null
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. An image attached to a resource, with its display properties and attachment metadata.
     * @return ?ImageAttachment
     */
    public function getIcon(): ?ImageAttachment { return $this->get('icon'); }
    public function hasIcon(): bool { return $this->has('icon'); }
    /** An image attached to a resource, with its display properties and attachment metadata.
     * @return ?ImageAttachment
     */
    public function getLogo(): ?ImageAttachment { return $this->get('logo'); }
    public function hasLogo(): bool { return $this->has('logo'); }
    /** merchant_id
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Present only when `expand` includes `organization`; `null` when expanded and there is no related organization. anyOf[1] (Value): {@see ExpandedOrganizationSummary}. An organization's summary fields, such as its name, status, and parent, returned when the organization is expanded. anyOf[2] (Value): null.
     * @return ExpandedOrganizationSummary|null
     */
    public function getOrganization(): ExpandedOrganizationSummary|null { return $this->get('organization'); }
    public function hasOrganization(): bool { return $this->has('organization'); }
    /** The organization this merchant belongs to. Flint creates it with the merchant, and it can't be changed through the API.
     * @return string
     */
    public function getOrganizationId(): string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
    /** phone
     * @return ?string
     */
    public function getPhone(): ?string { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** A merchant's readiness to accept payments and receive payouts, with per-capability status and outstanding requirements.
     * @return MerchantReadiness
     */
    public function getReadiness(): MerchantReadiness { return $this->get('readiness'); }
    public function hasReadiness(): bool { return $this->has('readiness'); }
    /** reporting_timezone
     * @return ?string
     */
    public function getReportingTimezone(): ?string { return $this->get('reporting_timezone'); }
    public function hasReportingTimezone(): bool { return $this->has('reporting_timezone'); }
    /** Value enum: "active", "suspended", "restricted", "closed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** support_email
     * @return ?string
     */
    public function getSupportEmail(): ?string { return $this->get('support_email'); }
    public function hasSupportEmail(): bool { return $this->has('support_email'); }
    /** support_phone
     * @return ?string
     */
    public function getSupportPhone(): ?string { return $this->get('support_phone'); }
    public function hasSupportPhone(): bool { return $this->has('support_phone'); }
    /** support_url
     * @return ?string
     */
    public function getSupportUrl(): ?string { return $this->get('support_url'); }
    public function hasSupportUrl(): bool { return $this->has('support_url'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. Format: int64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** website_url
     * @return ?string
     */
    public function getWebsiteUrl(): ?string { return $this->get('website_url'); }
    public function hasWebsiteUrl(): bool { return $this->has('website_url'); }
}
