<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $archived_at
 * @property-read string $created_at
 * @property-read string $currency
 * @property-read list<string> $customer_segments
 * @property-read string|null $external_reference_id
 * @property-read string $merchant_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $name
 * @property-read int $price_count
 * @property-read string $price_list_id
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class PriceList extends Model {
    /** @param array{'archived_at': string|null, 'created_at': string, 'currency': string, 'customer_segments': list<string>, 'external_reference_id': string|null, 'merchant_id': string, 'metadata': mixed, 'name': string, 'price_count': int, 'price_list_id': string, 'status': string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PriceList')); }
    /** When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format: date-time.
     * @return string|null
     */
    public function getArchivedAt(): string|null { return $this->get('archived_at'); }
    public function hasArchivedAt(): bool { return $this->has('archived_at'); }
    /** When this price list was created, as an RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Customer.segment labels assigned to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true. [] (Value): string.
     * @return list<string>
     */
    public function getCustomerSegments(): array { return $this->get('customer_segments'); }
    public function hasCustomerSegments(): bool { return $this->has('customer_segments'); }
    /** Caller-owned identifier for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Identifier of the merchant that owns this price list.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata stored on this price list. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return array<array-key, string>
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Name used to identify this price list.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000.
     * @return int
     */
    public function getPriceCount(): int { return $this->get('price_count'); }
    public function hasPriceCount(): bool { return $this->has('price_count'); }
    /** Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getPriceListId(): string { return $this->get('price_list_id'); }
    public function hasPriceListId(): bool { return $this->has('price_list_id'); }
    /** Availability or retirement state. Derived as archived when archived_at is set; otherwise active or inactive. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Aggregate version, increased once for a request that changes the list or its prices. No-op writes preserve it. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
