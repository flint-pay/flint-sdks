<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $product_id
 * @property-read array{'category_handles'?: list<string>, 'default_variant_id'?: string|null, 'description'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string, 'options'?: list<array{'existing_variant_value'?: string, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name': string, 'option_id'?: string, 'position'?: int, 'status'?: string, 'values'?: list<array{'metadata'?: array<array-key, string|null>|\stdClass|null, 'option_value_id'?: string, 'position'?: int, 'status'?: string, 'value': string}|object>}|object>, 'product_type'?: string, 'status'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductsUpdateInput extends Model {
    /** @param array{'product_id': string, 'body': array{'category_handles'?: list<string>, 'default_variant_id'?: string|null, 'description'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string, 'options'?: list<array{'existing_variant_value'?: string, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name': string, 'option_id'?: string, 'position'?: int, 'status'?: string, 'values'?: list<array{'metadata'?: array<array-key, string|null>|\stdClass|null, 'option_value_id'?: string, 'position'?: int, 'status'?: string, 'value': string}|object>}|object>, 'product_type'?: string, 'status'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductsUpdateInput')); }
    /** Flint product ID. Example: "prod_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Send only fields to change. Omitted fields keep their stored values. null clears nullable fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys after merging. Example: {"category_handles":["vip","events"],"expected_version":1,"name":"VIP Admission","status":"inactive"}.
     * @return array{'category_handles'?: list<string>, 'default_variant_id'?: string|null, 'description'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string, 'options'?: list<array{'existing_variant_value'?: string, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name': string, 'option_id'?: string, 'position'?: int, 'status'?: string, 'values'?: list<array{'metadata'?: array<array-key, string|null>|\stdClass|null, 'option_value_id'?: string, 'position'?: int, 'status'?: string, 'value': string}|object>}|object>, 'product_type'?: string, 'status'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
