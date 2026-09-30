<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'barcode'?: string, 'categories'?: list<string>, 'components'?: list<mixed>, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<mixed>, 'line_item_tax_category'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'modifier_set_id'?: string|null, 'name': string, 'sku'?: string, 'status'?: string, 'taxable'?: bool, 'unit_price_money': mixed, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class BundlesCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'barcode'?: string, 'categories'?: list<string>, 'components'?: list<mixed>, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<mixed>, 'line_item_tax_category'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'modifier_set_id'?: string|null, 'name': string, 'sku'?: string, 'status'?: string, 'taxable'?: bool, 'unit_price_money': mixed, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundlesCreateInput')); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'barcode'?: string, 'categories'?: list<string>, 'components'?: list<mixed>, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<mixed>, 'line_item_tax_category'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'modifier_set_id'?: string|null, 'name': string, 'sku'?: string, 'status'?: string, 'taxable'?: bool, 'unit_price_money': mixed, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
