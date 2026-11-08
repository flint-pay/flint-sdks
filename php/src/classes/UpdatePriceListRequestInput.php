<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $customer_segments
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $name
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdatePriceListRequestInput extends Model {
    /** @param array{'customer_segments'?: list<string>, 'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'status'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdatePriceListRequestInput')); }
    /** Complete set of Customer.segment labels to assign, at most 20. Each label can belong to only one unarchived list, including inactive lists. On PATCH, omission preserves the set and [] clears it. Include expected_version whenever customer_segments is supplied. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When customer_segments is omitted; use hasCustomerSegments() or valueOrDefault().
     */
    public function getCustomerSegments(): array { return $this->get('customer_segments'); }
    public function hasCustomerSegments(): bool { return $this->has('customer_segments'); }
    /** Aggregate version last read. Required when customer_segments is present. A mismatch returns VERSION_CONFLICT without changing the list. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned identifier for this resource in an external system. Omit to keep it unchanged; send null to clear it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Metadata patch. Omit to keep metadata unchanged; send null to clear all metadata. anyOf[1] (Value): {@see MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2] (Value): null.
     * @return array<array-key, string|null>|\stdClass|null
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
    /** Set active or inactive. To archive a price list, use DELETE /v1/price-lists/{price_list_id}. Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
