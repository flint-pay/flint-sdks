<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $currency
 * @property-read list<string> $customer_segments
 * @property-read string $external_reference_id
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePriceListRequestInput extends Model {
    /** @param array{'currency': string, 'customer_segments'?: list<string>, 'external_reference_id'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'status'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePriceListRequestInput')); }
    /** Currency of all list prices, as an uppercase ISO 4217 code. Must match the catalog currency; currently only USD is supported. Cannot be changed after creation. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Customer.segment labels to assign, at most 20. Each label can belong to only one unarchived list, including inactive lists. Omit or send [] for no segment assignments. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When customer_segments is omitted; use hasCustomerSegments() or valueOrDefault().
     */
    public function getCustomerSegments(): array { return $this->get('customer_segments'); }
    public function hasCustomerSegments(): bool { return $this->has('customer_segments'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Caller-owned metadata to store on this price list. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Name used to identify the price list. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Initial availability. Inactive lists remain assignable but do not provide prices. Default: "active". Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
