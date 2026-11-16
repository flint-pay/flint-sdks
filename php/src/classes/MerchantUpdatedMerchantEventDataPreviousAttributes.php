<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Address|null $address
 * @property-read string|null $api_version
 * @property-read string|null $api_version_changed_at
 * @property-read string|null $api_version_pinned_at
 * @property-read string|null $api_version_previous
 * @property-read string|null $api_version_rollback_expires_at
 * @property-read string|null $business_name
 * @property-read string|null $business_type
 * @property-read string|null $created_at
 * @property-read mixed $email
 * @property-read ImageAttachment|null $icon
 * @property-read ImageAttachment|null $logo
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $phone
 * @property-read MerchantReadiness|null $readiness
 * @property-read string|null $status
 * @property-read string|null $support_email
 * @property-read string|null $support_phone
 * @property-read string|null $support_url
 * @property-read string|null $timezone
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * @property-read string|null $website_url
 * Presence-aware response; omitted optional fields return null. */
final class MerchantUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'address'?: mixed, 'api_version'?: mixed, 'api_version_changed_at'?: mixed, 'api_version_pinned_at'?: mixed, 'api_version_previous'?: mixed, 'api_version_rollback_expires_at'?: mixed, 'business_name'?: mixed, 'business_type'?: mixed, 'created_at'?: mixed, 'email'?: mixed, 'icon'?: mixed, 'logo'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'phone'?: mixed, 'readiness'?: mixed, 'status'?: mixed, 'support_email'?: mixed, 'support_phone'?: mixed, 'support_url'?: mixed, 'timezone'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, 'website_url'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantUpdatedMerchantEventDataPreviousAttributes')); }
    /** The merchant's business address. anyOf[1] (Value): {@see Address}. The merchant's business address. anyOf[2] (Value): null.
     * @return Address|null
     */
    public function getAddress(): Address|null { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Default API version for requests without a Flint-Version header. Shared across live and test environments. anyOf[1] (Value): string. Default API version for requests without a Flint-Version header. Shared across live and test environments. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getApiVersion(): string|null { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** When the merchant's default API version last changed. anyOf[1] (Value): string. When the merchant's default API version last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getApiVersionChangedAt(): string|null { return $this->get('api_version_changed_at'); }
    public function hasApiVersionChangedAt(): bool { return $this->has('api_version_changed_at'); }
    /** When the merchant's default API version was first set. anyOf[1] (Value): string. When the merchant's default API version was first set. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getApiVersionPinnedAt(): string|null { return $this->get('api_version_pinned_at'); }
    public function hasApiVersionPinnedAt(): bool { return $this->has('api_version_pinned_at'); }
    /** Previous API version, present while a supported rollback is available. anyOf[1] (Value): string. Previous API version, present while a supported rollback is available. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getApiVersionPrevious(): string|null { return $this->get('api_version_previous'); }
    public function hasApiVersionPrevious(): bool { return $this->has('api_version_previous'); }
    /** When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. anyOf[1] (Value): string. When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getApiVersionRollbackExpiresAt(): string|null { return $this->get('api_version_rollback_expires_at'); }
    public function hasApiVersionRollbackExpiresAt(): bool { return $this->has('api_version_rollback_expires_at'); }
    /** Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins. anyOf[1] (Value): string. Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBusinessName(): string|null { return $this->get('business_name'); }
    public function hasBusinessName(): bool { return $this->has('business_name'); }
    /** Merchant's business type. - `other`: A business type Flint does not map yet. Value enum: "individual", "company", "non_profit", "government_entity", "other". anyOf[1] (Value): string. Merchant's business type. - `other`: A business type Flint does not map yet. Value enum: "individual", "company", "non_profit", "government_entity", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBusinessType(): string|null { return $this->get('business_type'); }
    public function hasBusinessType(): bool { return $this->has('business_type'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The account's contact email address. A new account starts with the sign-up email. `null` when none is set. anyOf[1] (Value): string or null. The account's contact email address. A new account starts with the sign-up email. `null` when none is set. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getEmail(): mixed { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. anyOf[1] (Value): {@see ImageAttachment}. A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. anyOf[2] (Value): null.
     * @return ImageAttachment|null
     */
    public function getIcon(): ImageAttachment|null { return $this->get('icon'); }
    public function hasIcon(): bool { return $this->has('icon'); }
    /** The merchant's public brand mark. anyOf[1] (Value): {@see ImageAttachment}. The merchant's public brand mark. anyOf[2] (Value): null.
     * @return ImageAttachment|null
     */
    public function getLogo(): ImageAttachment|null { return $this->get('logo'); }
    public function hasLogo(): bool { return $this->has('logo'); }
    /** Stable identifier of the merchant. anyOf[1] (Value): string. Stable identifier of the merchant. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The account's contact phone number, in international format such as +12125551234. anyOf[1] (Value): string. The account's contact phone number, in international format such as +12125551234. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** Whether the merchant can accept payments and receive payouts, and what is still needed. anyOf[1] (Value): {@see MerchantReadiness}. Whether the merchant can accept payments and receive payouts, and what is still needed. anyOf[2] (Value): null.
     * @return MerchantReadiness|null
     */
    public function getReadiness(): MerchantReadiness|null { return $this->get('readiness'); }
    public function hasReadiness(): bool { return $this->has('readiness'); }
    /** Whether Flint lets the account operate. `readiness` says whether payments and payouts are available. Value enum: "active", "suspended", "restricted", "closed". anyOf[1] (Value): string. Whether Flint lets the account operate. `readiness` says whether payments and payouts are available. Value enum: "active", "suspended", "restricted", "closed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Support email address shown to buyers, for example on receipts and checkout. anyOf[1] (Value): string. Support email address shown to buyers, for example on receipts and checkout. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSupportEmail(): string|null { return $this->get('support_email'); }
    public function hasSupportEmail(): bool { return $this->has('support_email'); }
    /** Support phone number shown to buyers, in international format such as +12125551234. anyOf[1] (Value): string. Support phone number shown to buyers, in international format such as +12125551234. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSupportPhone(): string|null { return $this->get('support_phone'); }
    public function hasSupportPhone(): bool { return $this->has('support_phone'); }
    /** Support page shown to buyers. anyOf[1] (Value): string. Support page shown to buyers. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSupportUrl(): string|null { return $this->get('support_url'); }
    public function hasSupportUrl(): bool { return $this->has('support_url'); }
    /** Business IANA time zone, such as America/New_York. Used for invoice deadlines, new locations, notifications, and reporting when a request omits its time zone. Omitted when unset; UTC then applies. Existing resources keep their saved time zone. anyOf[1] (Value): string. Business IANA time zone, such as America/New_York. Used for invoice deadlines, new locations, notifications, and reporting when a request omits its time zone. Omitted when unset; UTC then applies. Existing resources keep their saved time zone. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. anyOf[1] (Value): integer. Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. Format: int64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** The business's website. anyOf[1] (Value): string. The business's website. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWebsiteUrl(): string|null { return $this->get('website_url'); }
    public function hasWebsiteUrl(): bool { return $this->has('website_url'); }
}
