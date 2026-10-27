<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_id
 * @property-read array{'barcode'?: string|null, 'category_handles'?: list<string>, 'components'?: list<mixed>, 'description'?: string|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'images'?: list<mixed>, 'line_item_tax_category'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string, 'sku'?: string|null, 'status'?: string, 'taxable'?: bool, 'unit_price_money'?: mixed, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class BundlesUpdateInput extends Model {
    /** @param array{'bundle_id': string, 'Idempotency-Key'?: string, 'body': array{'barcode'?: string|null, 'category_handles'?: list<string>, 'components'?: list<mixed>, 'description'?: string|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'images'?: list<mixed>, 'line_item_tax_category'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string, 'sku'?: string|null, 'status'?: string, 'taxable'?: bool, 'unit_price_money'?: mixed, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundlesUpdateInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. Send only fields to change. Omitted fields keep their stored values. null clears nullable fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys after merging.
     * @return array{'barcode'?: string|null, 'category_handles'?: list<string>, 'components'?: list<mixed>, 'description'?: string|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'images'?: list<mixed>, 'line_item_tax_category'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string, 'sku'?: string|null, 'status'?: string, 'taxable'?: bool, 'unit_price_money'?: mixed, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
