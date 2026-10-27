<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $default_delivery_tax_category
 * @property-read ?bool $default_delivery_taxable
 * @property-read ?bool $default_enabled
 * @property-read ?string $default_line_item_tax_category
 * Presence-aware response; omitted optional fields return null. */
final class TaxSettings extends Model {
    /** @param array{'default_delivery_tax_category'?: string|null, 'default_delivery_taxable'?: bool, 'default_enabled'?: bool, 'default_line_item_tax_category'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxSettings')); }
    /** Shape $ (Value): string or null. Charge category inherited by delivery methods that omit charge_tax_category. Null derives the category from the method type. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     * @return string|null
     */
    public function getDefaultDeliveryTaxCategory(): string|null { return $this->get('default_delivery_tax_category'); }
    public function hasDefaultDeliveryTaxCategory(): bool { return $this->has('default_delivery_tax_category'); }
    /** Shape $ (Value): boolean. Taxability inherited by delivery methods that omit taxable. Defaults to true because Flint cannot yet derive delivery-charge taxability from category and jurisdiction alone.
     * @return ?bool
     */
    public function getDefaultDeliveryTaxable(): ?bool { return $this->get('default_delivery_taxable'); }
    public function hasDefaultDeliveryTaxable(): bool { return $this->has('default_delivery_taxable'); }
    /** Shape $ (Value): boolean. Whether new checkouts and orders calculate tax by default. This does not decide whether an individual line item or delivery charge is taxable.
     * @return ?bool
     */
    public function getDefaultEnabled(): ?bool { return $this->get('default_enabled'); }
    public function hasDefaultEnabled(): bool { return $this->has('default_enabled'); }
    /** Shape $ (Value): string. Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     * @return ?string
     */
    public function getDefaultLineItemTaxCategory(): ?string { return $this->get('default_line_item_tax_category'); }
    public function hasDefaultLineItemTaxCategory(): bool { return $this->has('default_line_item_tax_category'); }
}
