<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $calculation_callback_id
 * @property-read string|null $default_delivery_tax_category
 * @property-read ?bool $default_delivery_taxable
 * @property-read ?bool $default_enabled
 * @property-read ?string $default_line_item_tax_category
 * @property-read ?string $default_price_mode
 * @property-read ?string $delivery_charge_tax_basis
 * Presence-aware response; omitted optional fields return null. */
final class TaxSettings extends Model {
    /** @param array{'calculation_callback_id'?: string|null, 'default_delivery_tax_category'?: string|null, 'default_delivery_taxable'?: bool, 'default_enabled'?: bool, 'default_line_item_tax_category'?: string, 'default_price_mode'?: string, 'delivery_charge_tax_basis'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxSettings')); }
    /** The active tax calculation callback selected for this merchant and environment. Switching IDs is atomic. Omitted when no callback is selected. minLength: 1.
     * @return string|null
     */
    public function getCalculationCallbackId(): string|null { return $this->get('calculation_callback_id'); }
    public function hasCalculationCallbackId(): bool { return $this->has('calculation_callback_id'); }
    /** Charge category inherited by delivery methods that omit charge_tax_category. `null` when no default is set; the category then follows the method type: shipping for shipments, delivery for local delivery, and service_fee for pickup. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     * @return string|null
     */
    public function getDefaultDeliveryTaxCategory(): string|null { return $this->get('default_delivery_tax_category'); }
    public function hasDefaultDeliveryTaxCategory(): bool { return $this->has('default_delivery_tax_category'); }
    /** Taxability of delivery charges for delivery methods that don't set `taxable`. Defaults to true.
     * @return ?bool
     */
    public function getDefaultDeliveryTaxable(): ?bool { return $this->get('default_delivery_taxable'); }
    public function hasDefaultDeliveryTaxable(): bool { return $this->has('default_delivery_taxable'); }
    /** Whether new checkouts and orders calculate tax by default. This does not decide whether an individual line item or delivery charge is taxable.
     * @return ?bool
     */
    public function getDefaultEnabled(): ?bool { return $this->get('default_enabled'); }
    public function hasDefaultEnabled(): bool { return $this->has('default_enabled'); }
    /** Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     * @return ?string
     */
    public function getDefaultLineItemTaxCategory(): ?string { return $this->get('default_line_item_tax_category'); }
    public function hasDefaultLineItemTaxCategory(): bool { return $this->has('default_line_item_tax_category'); }
    /** Price mode an order takes when it starts calculating tax without its own tax.calculation: when it is created, from a checkout session or payment link, or when tax is turned on later. additive (the default) adds tax to prices, and inclusive treats every line item and charge price as including its tax. Subscription orders, including renewals, stay additive, and orders that already calculate tax keep their mode. Value enum: "additive", "inclusive".
     * @return ?string
     */
    public function getDefaultPriceMode(): ?string { return $this->get('default_price_mode'); }
    public function hasDefaultPriceMode(): bool { return $this->has('default_price_mode'); }
    /** Automatic tax basis for delivery-method charges. Defaults to full_charge. taxable_items_share taxes the charge in proportion to discounted gross taxable merchandise in its fulfillment group, rounded half up. Explicit taxable:false wins. Direct order charges and external tax are unchanged. Saved values take effect only when Flint enables this capability; until then the full charge is used. Open orders use the setting at their next calculation; committed tax keeps its basis. Value enum: "full_charge", "taxable_items_share".
     * @return ?string
     */
    public function getDeliveryChargeTaxBasis(): ?string { return $this->get('delivery_charge_tax_basis'); }
    public function hasDeliveryChargeTaxBasis(): bool { return $this->has('delivery_charge_tax_basis'); }
}
