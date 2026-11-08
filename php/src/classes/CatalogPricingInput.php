<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $minimum_quantity
 * @property-read string|null $price_list_id
 * @property-read string $source
 * Presence-aware input; omitted fields throw when accessed. */
final class CatalogPricingInput extends Model {
    /** @param array{'minimum_quantity': int|null, 'price_list_id': string|null, 'source': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CatalogPricingInput')); }
    /** Minimum quantity of the applied break. Null when the base price applies. Format: int64.
     * @return int|null
     * @throws SdkError When minimum_quantity is omitted; use hasMinimumQuantity() or valueOrDefault().
     */
    public function getMinimumQuantity(): int|null { return $this->get('minimum_quantity'); }
    public function hasMinimumQuantity(): bool { return $this->has('minimum_quantity'); }
    /** Price list providing the selected schedule. Null when the variant's default schedule applies. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * @return string|null
     * @throws SdkError When price_list_id is omitted; use hasPriceListId() or valueOrDefault().
     */
    public function getPriceListId(): string|null { return $this->get('price_list_id'); }
    public function hasPriceListId(): bool { return $this->has('price_list_id'); }
    /** Source of the selected schedule. New source values may be added. Value enum: "variant", "price_list".
     * @return string
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
