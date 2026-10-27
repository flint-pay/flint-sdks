<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, string>|\stdClass $custom_field_values
 * @property-read array<array-key, ResolvePaymentLinkLineItemModifiersInput|array<array-key, mixed>|\stdClass>|\stdClass $modifiers
 * @property-read array<array-key, int>|\stdClass $quantity_overrides
 * @property-read string $resolution_context
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $unit_price_overrides
 * Presence-aware input; omitted fields throw when accessed. */
final class ResolvePaymentLinkRequestInput extends Model {
    /** @param array{'custom_field_values'?: array<array-key, string>|\stdClass, 'modifiers'?: array<array-key, ResolvePaymentLinkLineItemModifiersInput|array<array-key, mixed>|\stdClass>|\stdClass, 'quantity_overrides'?: array<array-key, int>|\stdClass, 'resolution_context': string, 'unit_price_overrides'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResolvePaymentLinkRequestInput')); }
    /** Shape $ (Value): Map of string. Buyer answers keyed by custom field key. Checkbox answers must be exactly true or false as strings. A required checkbox must be true. Shape $.* (Value): string. minLength: 1.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When custom_field_values is omitted; use hasCustomFieldValues() or valueOrDefault().
     */
    public function getCustomFieldValues(): array|object { return $this->get('custom_field_values'); }
    public function hasCustomFieldValues(): bool { return $this->has('custom_field_values'); }
    /** Shape $ (Value): Map of {@see ResolvePaymentLinkLineItemModifiersInput}. Modifier choices keyed by line item key, for catalog items. Shape $.* (Value): {@see ResolvePaymentLinkLineItemModifiersInput}. The modifier selections for one payment link line item when resolving a payment link.
     * @return array<array-key, ResolvePaymentLinkLineItemModifiersInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array|object { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Shape $ (Value): Map of integer. Quantities keyed by line item key (line_items[].key), each within that item's min_quantity and max_quantity. Event tiers accept 0. Whole-number quantities; fractional quantities are not supported. Shape $.* (Value): integer. Whole-number quantity value; fractional quantities are not supported. Format: int32.
     * @return array<array-key, int>|\stdClass
     * @throws SdkError When quantity_overrides is omitted; use hasQuantityOverrides() or valueOrDefault().
     */
    public function getQuantityOverrides(): array|object { return $this->get('quantity_overrides'); }
    public function hasQuantityOverrides(): bool { return $this->has('quantity_overrides'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When resolution_context is omitted; use hasResolutionContext() or valueOrDefault().
     */
    public function getResolutionContext(): string { return $this->get('resolution_context'); }
    public function hasResolutionContext(): bool { return $this->has('resolution_context'); }
    /** Shape $ (Value): Map of {@see MoneyValueInput}. Prices keyed by line item key, for items with allow_unit_price_adjustment, between min_unit_price_money and max_unit_price_money. A donation link has one line item, keyed donation. Shape $.* (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When unit_price_overrides is omitted; use hasUnitPriceOverrides() or valueOrDefault().
     */
    public function getUnitPriceOverrides(): array|object { return $this->get('unit_price_overrides'); }
    public function hasUnitPriceOverrides(): bool { return $this->has('unit_price_overrides'); }
}
