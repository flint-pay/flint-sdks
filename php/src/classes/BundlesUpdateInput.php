<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $bundle_id
 * @property-read array{'barcode'?: string|null, 'category_handles'?: list<string>, 'components'?: list<array{'bundle_component_id'?: string, 'delivery_profile_id'?: string|null, 'position'?: int, 'quantity'?: int, 'variant_id': string}|object>, 'description'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string, 'sku'?: string|null, 'status'?: string, 'unit_price_money'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class BundlesUpdateInput extends Model {
    /** @param array{'bundle_id': string, 'body': array{'barcode'?: string|null, 'category_handles'?: list<string>, 'components'?: list<array{'bundle_component_id'?: string, 'delivery_profile_id'?: string|null, 'position'?: int, 'quantity'?: int, 'variant_id': string}|object>, 'description'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string, 'sku'?: string|null, 'status'?: string, 'unit_price_money'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundlesUpdateInput')); }
    /** Flint bundle ID. Example: "bun_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Send only fields to change. Omitted fields keep their stored values. null clears nullable fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys after merging.
     * @return array{'barcode'?: string|null, 'category_handles'?: list<string>, 'components'?: list<array{'bundle_component_id'?: string, 'delivery_profile_id'?: string|null, 'position'?: int, 'quantity'?: int, 'variant_id': string}|object>, 'description'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string, 'sku'?: string|null, 'status'?: string, 'unit_price_money'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
