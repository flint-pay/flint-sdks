<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressRequestInput|array<array-key, mixed>|\stdClass $address
 * @property-read string $api_version
 * @property-read string $business_name
 * @property-read string|null $email
 * @property-read int $expected_version
 * @property-read array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null $icon
 * @property-read array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null $logo
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string|null $phone
 * @property-read string $reporting_timezone
 * @property-read string|null $support_email
 * @property-read string|null $support_phone
 * @property-read string|null $support_url
 * @property-read string|null $website_url
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateMerchantRequestInput extends Model {
    /** @param array{'address'?: AddressRequestInput|array<array-key, mixed>|\stdClass, 'api_version'?: string, 'business_name'?: string, 'email'?: string|null, 'expected_version'?: int, 'icon'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'logo'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'phone'?: string|null, 'reporting_timezone'?: string, 'support_email'?: string|null, 'support_phone'?: string|null, 'support_url'?: string|null, 'website_url'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateMerchantRequestInput')); }
    /** This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none.
     * @return AddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Set the merchant default to any supported API version using a live-mode credential or a Dashboard session. Omit to leave it unchanged. Null is not accepted. The default is shared across live and test environments; requests with Flint-Version use that header instead. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: 1.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Business name buyers see. Limited to 120 characters (Unicode code points) before trimming surrounding whitespace. The trimmed name must not be empty. The name cannot be cleared. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: 1. maxLength: 120.
     * @return string
     * @throws SdkError When business_name is omitted; use hasBusinessName() or valueOrDefault().
     */
    public function getBusinessName(): string { return $this->get('business_name'); }
    public function hasBusinessName(): bool { return $this->has('business_name'); }
    /** Send null to clear it. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: 1.
     * @return string|null
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Merchant profile version last read. A different current version returns 409 VERSION_CONFLICT. Send this value when saving a logo or icon to detect concurrent profile edits. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. anyOf[1] (Value): {@see ImageRequestInput}. An image you supply by `source_url`, with optional `alt` text and external reference. anyOf[2] (Value): null.
     * @return array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null
     * @throws SdkError When icon is omitted; use hasIcon() or valueOrDefault().
     */
    public function getIcon(): mixed { return $this->get('icon'); }
    public function hasIcon(): bool { return $this->has('icon'); }
    /** This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. anyOf[1] (Value): {@see ImageRequestInput}. An image you supply by `source_url`, with optional `alt` text and external reference. anyOf[2] (Value): null.
     * @return array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null
     * @throws SdkError When logo is omitted; use hasLogo() or valueOrDefault().
     */
    public function getLogo(): mixed { return $this->get('logo'); }
    public function hasLogo(): bool { return $this->has('logo'); }
    /** This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. anyOf[1] (Value): {@see MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2] (Value): null.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Send null to clear it. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: 1.
     * @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: 1.
     * @return string
     * @throws SdkError When reporting_timezone is omitted; use hasReportingTimezone() or valueOrDefault().
     */
    public function getReportingTimezone(): string { return $this->get('reporting_timezone'); }
    public function hasReportingTimezone(): bool { return $this->has('reporting_timezone'); }
    /** Send null to clear it. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: 1.
     * @return string|null
     * @throws SdkError When support_email is omitted; use hasSupportEmail() or valueOrDefault().
     */
    public function getSupportEmail(): string|null { return $this->get('support_email'); }
    public function hasSupportEmail(): bool { return $this->has('support_email'); }
    /** Support phone in E.164 format, for example +12125551234. Send null to clear it. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: 1. maxLength: 16. pattern: ^\+[1-9][0-9]{6,14}$.
     * @return string|null
     * @throws SdkError When support_phone is omitted; use hasSupportPhone() or valueOrDefault().
     */
    public function getSupportPhone(): string|null { return $this->get('support_phone'); }
    public function hasSupportPhone(): bool { return $this->has('support_phone'); }
    /** Send null to clear it. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: 1.
     * @return string|null
     * @throws SdkError When support_url is omitted; use hasSupportUrl() or valueOrDefault().
     */
    public function getSupportUrl(): string|null { return $this->get('support_url'); }
    public function hasSupportUrl(): bool { return $this->has('support_url'); }
    /** Send null to clear it. This field is shared across live and all sandboxes. Writing it requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required, including for nulls and metadata changes. minLength: 1.
     * @return string|null
     * @throws SdkError When website_url is omitted; use hasWebsiteUrl() or valueOrDefault().
     */
    public function getWebsiteUrl(): string|null { return $this->get('website_url'); }
    public function hasWebsiteUrl(): bool { return $this->has('website_url'); }
}
