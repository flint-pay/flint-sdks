<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $product_id
 * @property-read string $variant_id
 * @property-read array{'barcode'?: string|null, 'delivery_profile_id'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'gift_card_configuration'?: mixed, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'inventory_item'?: mixed, 'inventory_item_id'?: string|null, 'line_item_tax_category'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string|null, 'position'?: int, 'selected_options'?: list<mixed>, 'sku'?: string|null, 'status'?: string, 'taxable'?: bool, 'unit_dimensions'?: array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object|null, 'unit_price_money'?: mixed, 'unit_weight'?: array{'unit': string, 'value': int|float}|object|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductsUpdateVariantInput extends Model {
    /** @param array{'product_id': string, 'variant_id': string, 'body': array{'barcode'?: string|null, 'delivery_profile_id'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'gift_card_configuration'?: mixed, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'inventory_item'?: mixed, 'inventory_item_id'?: string|null, 'line_item_tax_category'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string|null, 'position'?: int, 'selected_options'?: list<mixed>, 'sku'?: string|null, 'status'?: string, 'taxable'?: bool, 'unit_dimensions'?: array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object|null, 'unit_price_money'?: mixed, 'unit_weight'?: array{'unit': string, 'value': int|float}|object|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductsUpdateVariantInput')); }
    /** Flint product ID. Example: "prod_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Flint product variant ID. Example: "var_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
    /** Send only fields to change. Omitted fields keep their stored values. null clears nullable fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys after merging.
     * @return array{'barcode'?: string|null, 'delivery_profile_id'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'gift_card_configuration'?: mixed, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'inventory_item'?: mixed, 'inventory_item_id'?: string|null, 'line_item_tax_category'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string|null, 'position'?: int, 'selected_options'?: list<mixed>, 'sku'?: string|null, 'status'?: string, 'taxable'?: bool, 'unit_dimensions'?: array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object|null, 'unit_price_money'?: mixed, 'unit_weight'?: array{'unit': string, 'value': int|float}|object|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
