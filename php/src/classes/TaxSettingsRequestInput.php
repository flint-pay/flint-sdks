<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $calculation_callback_id
 * @property-read array{'components_source'?: string, 'mode': string}|object|null $default_calculation
 * @property-read string|null $default_delivery_tax_category
 * @property-read bool $default_delivery_taxable
 * @property-read bool $default_enabled
 * @property-read string|null $default_line_item_tax_category
 * @property-read string $default_price_mode
 * @property-read string $delivery_charge_tax_basis
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxSettingsRequestInput extends Model {
    /** @param array{'calculation_callback_id'?: string|null, 'default_calculation'?: array{'components_source'?: string, 'mode': string}|object|null, 'default_delivery_tax_category'?: string|null, 'default_delivery_taxable'?: bool, 'default_enabled'?: bool, 'default_line_item_tax_category'?: string|null, 'default_price_mode'?: string, 'delivery_charge_tax_basis'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxSettingsRequestInput')); }
    /** The active tax calculation callback selected for this merchant and environment. Switching IDs is atomic. Omit to preserve the selection; send null to clear it. minLength: 1. Example: "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     * @return string|null
     * @throws SdkError When calculation_callback_id is omitted; use hasCalculationCallbackId() or valueOrDefault().
     */
    public function getCalculationCallbackId(): string|null { return $this->get('calculation_callback_id'); }
    public function hasCalculationCallbackId(): bool { return $this->has('calculation_callback_id'); }
    /** Replaced as a whole: send every field you want to keep. The calculation an order uses when nothing sets its own: an order created with `POST /v1/orders` without `tax.calculation`, and the orders of checkout sessions, payment links, and subscriptions that set none. A `provided` default applies only to orders you create; the orders Flint creates use automatic tax under it. Send null to clear it, which means automatic. While `default_enabled` is on, a `callback` default needs a selected tax calculation callback, and clearing `calculation_callback_id` is refused; any other default needs an active tax connection. anyOf[1] (Value): {@see TaxDefaultCalculationRequestInput}. The calculation an order uses when its request leaves `tax.calculation` unset. anyOf[2] (Value): null.
     * @return array{'components_source'?: string, 'mode': string}|object|null
     * @throws SdkError When default_calculation is omitted; use hasDefaultCalculation() or valueOrDefault().
     */
    public function getDefaultCalculation(): mixed { return $this->get('default_calculation'); }
    public function hasDefaultCalculation(): bool { return $this->has('default_calculation'); }
    /** Charge category inherited by delivery methods that omit charge_tax_category. `null` when no default is set; the category then follows the method type: shipping for shipments, delivery for local delivery, and service_fee for pickup. Send null to clear it. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     * @return string|null
     * @throws SdkError When default_delivery_tax_category is omitted; use hasDefaultDeliveryTaxCategory() or valueOrDefault().
     */
    public function getDefaultDeliveryTaxCategory(): string|null { return $this->get('default_delivery_tax_category'); }
    public function hasDefaultDeliveryTaxCategory(): bool { return $this->has('default_delivery_tax_category'); }
    /** Taxability of delivery charges for delivery methods that don't set `taxable`. Defaults to true.
     * @return bool
     * @throws SdkError When default_delivery_taxable is omitted; use hasDefaultDeliveryTaxable() or valueOrDefault().
     */
    public function getDefaultDeliveryTaxable(): bool { return $this->get('default_delivery_taxable'); }
    public function hasDefaultDeliveryTaxable(): bool { return $this->has('default_delivery_taxable'); }
    /** Whether new checkouts and orders calculate tax by default. This does not decide whether an individual line item or delivery charge is taxable. Turning it on, or changing the default calculation while it is on, needs what the default calculation uses: a selected tax calculation callback for an external `callback` default, and an active tax connection for any other, because the orders Flint creates use automatic tax under an automatic or `provided` default.
     * @return bool
     * @throws SdkError When default_enabled is omitted; use hasDefaultEnabled() or valueOrDefault().
     */
    public function getDefaultEnabled(): bool { return $this->get('default_enabled'); }
    public function hasDefaultEnabled(): bool { return $this->has('default_enabled'); }
    /** Flint line-item tax category. Send null to clear it. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission", null.
     * @return string|null
     * @throws SdkError When default_line_item_tax_category is omitted; use hasDefaultLineItemTaxCategory() or valueOrDefault().
     */
    public function getDefaultLineItemTaxCategory(): string|null { return $this->get('default_line_item_tax_category'); }
    public function hasDefaultLineItemTaxCategory(): bool { return $this->has('default_line_item_tax_category'); }
    /** Price mode an order takes when it starts calculating tax without its own tax.calculation: when it is created, from a checkout session or payment link, or when tax is turned on later. additive (the default) adds tax to prices, and inclusive treats every line item and charge price as including its tax. Subscription orders, including renewals, stay additive, and orders that already calculate tax keep their mode. Value enum: "additive", "inclusive".
     * @return string
     * @throws SdkError When default_price_mode is omitted; use hasDefaultPriceMode() or valueOrDefault().
     */
    public function getDefaultPriceMode(): string { return $this->get('default_price_mode'); }
    public function hasDefaultPriceMode(): bool { return $this->has('default_price_mode'); }
    /** Automatic tax basis for delivery-method charges. Defaults to full_charge. taxable_items_share taxes the charge in proportion to discounted gross taxable merchandise in its fulfillment group, rounded half up. Explicit taxable:false wins. Direct order charges and external tax are unchanged. Saved values take effect only when Flint enables this capability; until then the full charge is used. Open orders use the setting at their next calculation; committed tax keeps its basis. Value enum: "full_charge", "taxable_items_share".
     * @return string
     * @throws SdkError When delivery_charge_tax_basis is omitted; use hasDeliveryChargeTaxBasis() or valueOrDefault().
     */
    public function getDeliveryChargeTaxBasis(): string { return $this->get('delivery_charge_tax_basis'); }
    public function hasDeliveryChargeTaxBasis(): bool { return $this->has('delivery_charge_tax_basis'); }
}
