<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $default_delivery_tax_category
 * @property-read bool $default_delivery_taxable
 * @property-read bool $default_enabled
 * @property-read string $default_line_item_tax_category
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxSettingsInput extends Model {
    /** @param array{'default_delivery_tax_category'?: string|null, 'default_delivery_taxable'?: bool, 'default_enabled'?: bool, 'default_line_item_tax_category'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxSettingsInput')); }
    /** @return string|null
     * @throws SdkError When default_delivery_tax_category is omitted; use hasDefaultDeliveryTaxCategory() or valueOrDefault().
     */
    public function getDefaultDeliveryTaxCategory(): string|null { return $this->get('default_delivery_tax_category'); }
    public function hasDefaultDeliveryTaxCategory(): bool { return $this->has('default_delivery_tax_category'); }
    /** @return bool
     * @throws SdkError When default_delivery_taxable is omitted; use hasDefaultDeliveryTaxable() or valueOrDefault().
     */
    public function getDefaultDeliveryTaxable(): bool { return $this->get('default_delivery_taxable'); }
    public function hasDefaultDeliveryTaxable(): bool { return $this->has('default_delivery_taxable'); }
    /** @return bool
     * @throws SdkError When default_enabled is omitted; use hasDefaultEnabled() or valueOrDefault().
     */
    public function getDefaultEnabled(): bool { return $this->get('default_enabled'); }
    public function hasDefaultEnabled(): bool { return $this->has('default_enabled'); }
    /** @return string
     * @throws SdkError When default_line_item_tax_category is omitted; use hasDefaultLineItemTaxCategory() or valueOrDefault().
     */
    public function getDefaultLineItemTaxCategory(): string { return $this->get('default_line_item_tax_category'); }
    public function hasDefaultLineItemTaxCategory(): bool { return $this->has('default_line_item_tax_category'); }
}
