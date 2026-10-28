<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'category_handles'?: list<string>, 'default_variant': mixed, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<mixed>, 'metadata'?: mixed, 'modifier_set_id'?: string|null, 'name': string, 'options'?: list<mixed>, 'product_type': string, 'status'?: string, 'variant_mode': string, 'variants'?: list<mixed>}|object|array{'category_handles'?: list<string>, 'default_variant'?: mixed, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<mixed>, 'metadata'?: mixed, 'modifier_set_id'?: string|null, 'name': string, 'options': list<mixed>, 'product_type': string, 'status'?: string, 'variant_mode': string, 'variants': list<mixed>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductsCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'category_handles'?: list<string>, 'default_variant': mixed, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<mixed>, 'metadata'?: mixed, 'modifier_set_id'?: string|null, 'name': string, 'options'?: list<mixed>, 'product_type': string, 'status'?: string, 'variant_mode': string, 'variants'?: list<mixed>}|object|array{'category_handles'?: list<string>, 'default_variant'?: mixed, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<mixed>, 'metadata'?: mixed, 'modifier_set_id'?: string|null, 'name': string, 'options': list<mixed>, 'product_type': string, 'status'?: string, 'variant_mode': string, 'variants': list<mixed>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductsCreateInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object and Alternative shapes (see declared variants). The request body for: Create product.
     * @return array{'category_handles'?: list<string>, 'default_variant': mixed, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<mixed>, 'metadata'?: mixed, 'modifier_set_id'?: string|null, 'name': string, 'options'?: list<mixed>, 'product_type': string, 'status'?: string, 'variant_mode': string, 'variants'?: list<mixed>}|object|array{'category_handles'?: list<string>, 'default_variant'?: mixed, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<mixed>, 'metadata'?: mixed, 'modifier_set_id'?: string|null, 'name': string, 'options': list<mixed>, 'product_type': string, 'status'?: string, 'variant_mode': string, 'variants': list<mixed>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
