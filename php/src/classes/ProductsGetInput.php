<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $product_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductsGetInput extends Model {
    /** @param array{'product_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "modifier_set". Shape $[] (Value): string.  Value enum: "modifier_set".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
