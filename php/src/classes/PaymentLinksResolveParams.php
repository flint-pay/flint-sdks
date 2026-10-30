<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, string>|\stdClass $custom_field_values
 * @property-read array<array-key, ResolvePaymentLinkLineItemModifiersInput|array<array-key, mixed>|\stdClass>|\stdClass $modifiers
 * @property-read array<array-key, int>|\stdClass $quantity_overrides
 * @property-read string $resolution_context
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $unit_price_overrides
 * @property-read array<array-key, string>|\stdClass $variant_selections
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinksResolveParams extends Model {
    /** @param array{'custom_field_values'?: array<array-key, string>|\stdClass, 'modifiers'?: array<array-key, ResolvePaymentLinkLineItemModifiersInput|array<array-key, mixed>|\stdClass>|\stdClass, 'quantity_overrides'?: array<array-key, int>|\stdClass, 'resolution_context': string, 'unit_price_overrides'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'variant_selections'?: array<array-key, string>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinksResolveParams')); }
    /** Buyer answers keyed by custom field key. Checkbox answers must be exactly true or false as strings. A required checkbox must be true. * (Value): string. minLength: 1.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When custom_field_values is omitted; use hasCustomFieldValues() or valueOrDefault().
     */
    public function getCustomFieldValues(): array|object { return $this->get('custom_field_values'); }
    public function hasCustomFieldValues(): bool { return $this->has('custom_field_values'); }
    /** Modifier choices keyed by line item key, for catalog items. * (Value): {@see ResolvePaymentLinkLineItemModifiersInput}. The modifier selections for one payment link line item when resolving a payment link.
     * @return array<array-key, ResolvePaymentLinkLineItemModifiersInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array|object { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Quantities keyed by line item key (line_items[].key), each within that item's min_quantity and max_quantity. Event tiers accept 0. Whole-number quantities; fractional quantities are not supported. * (Value): integer. Whole-number quantity value; fractional quantities are not supported. Format: int32.
     * @return array<array-key, int>|\stdClass
     * @throws SdkError When quantity_overrides is omitted; use hasQuantityOverrides() or valueOrDefault().
     */
    public function getQuantityOverrides(): array|object { return $this->get('quantity_overrides'); }
    public function hasQuantityOverrides(): bool { return $this->has('quantity_overrides'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When resolution_context is omitted; use hasResolutionContext() or valueOrDefault().
     */
    public function getResolutionContext(): string { return $this->get('resolution_context'); }
    public function hasResolutionContext(): bool { return $this->has('resolution_context'); }
    /** Prices keyed by line item key, for items with allow_unit_price_adjustment, between min_unit_price_money and max_unit_price_money. A donation link has one line item, keyed donation. * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When unit_price_overrides is omitted; use hasUnitPriceOverrides() or valueOrDefault().
     */
    public function getUnitPriceOverrides(): array|object { return $this->get('unit_price_overrides'); }
    public function hasUnitPriceOverrides(): bool { return $this->has('unit_price_overrides'); }
    /** Variant IDs keyed by line item key (line_items[].key), for lines with variant_ids. Each selection must be offered by that line and priced in its current currency. Omit a key to use default_variant_id; a line without a default requires a selection. Null is not accepted. * (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When variant_selections is omitted; use hasVariantSelections() or valueOrDefault().
     */
    public function getVariantSelections(): array|object { return $this->get('variant_selections'); }
    public function hasVariantSelections(): bool { return $this->has('variant_selections'); }
}
