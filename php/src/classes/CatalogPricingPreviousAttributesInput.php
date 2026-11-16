<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null|null $minimum_quantity
 * @property-read string|null|null $price_list_id
 * @property-read string|null $source
 * Presence-aware input; omitted fields throw when accessed. */
final class CatalogPricingPreviousAttributesInput extends Model {
    /** @param array{'minimum_quantity'?: int|null|null, 'price_list_id'?: string|null|null, 'source'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CatalogPricingPreviousAttributesInput')); }
    /** Minimum quantity of the applied break. Null when the base price applies. anyOf[1] (Value): integer or null. Minimum quantity of the applied break. Null when the base price applies. Format: int64. anyOf[2] (Value): null.
     * @return int|null|null
     * @throws SdkError When minimum_quantity is omitted; use hasMinimumQuantity() or valueOrDefault().
     */
    public function getMinimumQuantity(): mixed { return $this->get('minimum_quantity'); }
    public function hasMinimumQuantity(): bool { return $this->has('minimum_quantity'); }
    /** Price list providing the selected schedule. Null when the variant's default schedule applies. anyOf[1] (Value): string or null. Price list providing the selected schedule. Null when the variant's default schedule applies. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When price_list_id is omitted; use hasPriceListId() or valueOrDefault().
     */
    public function getPriceListId(): mixed { return $this->get('price_list_id'); }
    public function hasPriceListId(): bool { return $this->has('price_list_id'); }
    /** Source of the selected schedule. New source values may be added. Value enum: "variant", "price_list". anyOf[1] (Value): string. Source of the selected schedule. New source values may be added. Value enum: "variant", "price_list". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
