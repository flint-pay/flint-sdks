<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $archived_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $currency
 * @property-read list<string> $customer_segments
 * @property-read string|null $external_reference_id
 * @property-read string $merchant_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read int $price_count
 * @property-read string $price_list_id
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class PriceListInput extends Model {
    /** @param array{'archived_at': string|\DateTimeInterface|null, 'created_at': string|\DateTimeInterface, 'currency': string, 'customer_segments': list<string>, 'external_reference_id': string|null, 'merchant_id': string, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'price_count': int, 'price_list_id': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PriceListInput')); }
    /** When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When archived_at is omitted; use hasArchivedAt() or valueOrDefault().
     */
    public function getArchivedAt(): string|\DateTimeInterface|null { return $this->get('archived_at'); }
    public function hasArchivedAt(): bool { return $this->has('archived_at'); }
    /** When this price list was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Customer.segment labels assigned to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true. [] (Value): string.
     * @return list<string>
     * @throws SdkError When customer_segments is omitted; use hasCustomerSegments() or valueOrDefault().
     */
    public function getCustomerSegments(): array { return $this->get('customer_segments'); }
    public function hasCustomerSegments(): bool { return $this->has('customer_segments'); }
    /** Caller-owned identifier for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Identifier of the merchant that owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata stored on this price list. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Name used to identify this price list.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000.
     * @return int
     * @throws SdkError When price_count is omitted; use hasPriceCount() or valueOrDefault().
     */
    public function getPriceCount(): int { return $this->get('price_count'); }
    public function hasPriceCount(): bool { return $this->has('price_count'); }
    /** Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * @return string
     * @throws SdkError When price_list_id is omitted; use hasPriceListId() or valueOrDefault().
     */
    public function getPriceListId(): string { return $this->get('price_list_id'); }
    public function hasPriceListId(): bool { return $this->has('price_list_id'); }
    /** Availability or retirement state. Derived as archived when archived_at is set; otherwise active or inactive. Value enum: "active", "inactive", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Aggregate version, increased once for a request that changes the list or its prices. No-op writes preserve it. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
