<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $archived_at
 * @property-read string|null $created_at
 * @property-read string|null $currency
 * @property-read list<string>|null $customer_segments
 * @property-read mixed $external_reference_id
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $name
 * @property-read int|null $price_count
 * @property-read string|null $price_list_id
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class PriceListArchivedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'archived_at'?: mixed, 'created_at'?: mixed, 'currency'?: mixed, 'customer_segments'?: mixed, 'external_reference_id'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'price_count'?: mixed, 'price_list_id'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PriceListArchivedMerchantEventDataPreviousAttributes')); }
    /** When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. anyOf[1] (Value): string or null. When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format: date-time. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getArchivedAt(): mixed { return $this->get('archived_at'); }
    public function hasArchivedAt(): bool { return $this->has('archived_at'); }
    /** When this price list was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When this price list was created, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes. anyOf[1] (Value): string. Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Customer.segment labels assigned to this list. Empty when no segments are assigned. anyOf[1] (Value): Array of string. Customer.segment labels assigned to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getCustomerSegments(): array|null { return $this->get('customer_segments'); }
    public function hasCustomerSegments(): bool { return $this->has('customer_segments'); }
    /** Caller-owned identifier for this resource in an external system. `null` when unset. anyOf[1] (Value): string or null. Caller-owned identifier for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getExternalReferenceId(): mixed { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Identifier of the merchant that owns this price list. anyOf[1] (Value): string. Identifier of the merchant that owns this price list. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata stored on this price list. anyOf[1] (Value): {@see MetadataMap}. Caller-owned metadata stored on this price list. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Name used to identify this price list. anyOf[1] (Value): string. Name used to identify this price list. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Number of variant prices in the list. anyOf[1] (Value): integer. Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPriceCount(): int|null { return $this->get('price_count'); }
    public function hasPriceCount(): bool { return $this->has('price_count'); }
    /** Stable identifier of this price list. anyOf[1] (Value): string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPriceListId(): string|null { return $this->get('price_list_id'); }
    public function hasPriceListId(): bool { return $this->has('price_list_id'); }
    /** Availability or retirement state. Derived as archived when archived_at is set; otherwise active or inactive. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Availability or retirement state. Derived as archived when archived_at is set; otherwise active or inactive. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When this price list or its prices last changed, as an RFC3339 timestamp. anyOf[1] (Value): string. When this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Aggregate version, increased once for a request that changes the list or its prices. No-op writes preserve it. anyOf[1] (Value): integer. Aggregate version, increased once for a request that changes the list or its prices. No-op writes preserve it. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
