<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $product_id
 * @property-read array{'barcode'?: string, 'delivery_profile_id'?: string, 'external_reference_id'?: string, 'gift_card_configuration'?: mixed, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'inventory_item'?: mixed, 'inventory_item_id'?: string, 'line_item_tax_category'?: string, 'metadata'?: mixed, 'modifier_set_id'?: string|null, 'name'?: string, 'position'?: int, 'selected_options'?: list<mixed>, 'sku'?: string, 'status'?: string, 'taxable'?: bool, 'unit_dimensions'?: mixed, 'unit_price_money': mixed, 'unit_weight'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductsCreateVariantInput extends Model {
    /** @param array{'product_id': string, 'body': array{'barcode'?: string, 'delivery_profile_id'?: string, 'external_reference_id'?: string, 'gift_card_configuration'?: mixed, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'inventory_item'?: mixed, 'inventory_item_id'?: string, 'line_item_tax_category'?: string, 'metadata'?: mixed, 'modifier_set_id'?: string|null, 'name'?: string, 'position'?: int, 'selected_options'?: list<mixed>, 'sku'?: string, 'status'?: string, 'taxable'?: bool, 'unit_dimensions'?: mixed, 'unit_price_money': mixed, 'unit_weight'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductsCreateVariantInput')); }
    /** Flint product ID. Example: "prod_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** The request body for: Create product variant.
     * @return array{'barcode'?: string, 'delivery_profile_id'?: string, 'external_reference_id'?: string, 'gift_card_configuration'?: mixed, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'inventory_item'?: mixed, 'inventory_item_id'?: string, 'line_item_tax_category'?: string, 'metadata'?: mixed, 'modifier_set_id'?: string|null, 'name'?: string, 'position'?: int, 'selected_options'?: list<mixed>, 'sku'?: string, 'status'?: string, 'taxable'?: bool, 'unit_dimensions'?: mixed, 'unit_price_money': mixed, 'unit_weight'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
