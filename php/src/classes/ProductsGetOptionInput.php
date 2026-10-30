<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $product_id
 * @property-read string $option_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductsGetOptionInput extends Model {
    /** @param array{'product_id': string, 'option_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductsGetOptionInput')); }
    /** Flint product ID. Example: "prod_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Flint product option ID. Example: "opt_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When option_id is omitted; use hasOptionId() or valueOrDefault().
     */
    public function getOptionId(): string { return $this->get('option_id'); }
    public function hasOptionId(): bool { return $this->has('option_id'); }
}
