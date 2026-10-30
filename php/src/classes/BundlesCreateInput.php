<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'barcode'?: string, 'category_handles'?: list<string>, 'components'?: list<array{'delivery_profile_id'?: string|null, 'position'?: int, 'quantity'?: int, 'variant_id': string}|object>, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'metadata'?: mixed, 'modifier_set_id'?: string|null, 'name': string, 'sku'?: string, 'status'?: string, 'unit_price_money': mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class BundlesCreateInput extends Model {
    /** @param array{'body': array{'barcode'?: string, 'category_handles'?: list<string>, 'components'?: list<array{'delivery_profile_id'?: string|null, 'position'?: int, 'quantity'?: int, 'variant_id': string}|object>, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'metadata'?: mixed, 'modifier_set_id'?: string|null, 'name': string, 'sku'?: string, 'status'?: string, 'unit_price_money': mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundlesCreateInput')); }
    /** The request body for: Create bundle.
     * @return array{'barcode'?: string, 'category_handles'?: list<string>, 'components'?: list<array{'delivery_profile_id'?: string|null, 'position'?: int, 'quantity'?: int, 'variant_id': string}|object>, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'metadata'?: mixed, 'modifier_set_id'?: string|null, 'name': string, 'sku'?: string, 'status'?: string, 'unit_price_money': mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
