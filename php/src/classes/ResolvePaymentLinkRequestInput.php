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
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When custom_field_values is omitted; use hasCustomFieldValues() or valueOrDefault().
     */
    public function getCustomFieldValues(): array|object { return $this->get('custom_field_values'); }
    public function hasCustomFieldValues(): bool { return $this->has('custom_field_values'); }
    /** @return array<array-key, ResolvePaymentLinkLineItemModifiersInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array|object { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** @return array<array-key, int>|\stdClass
     * @throws SdkError When quantity_overrides is omitted; use hasQuantityOverrides() or valueOrDefault().
     */
    public function getQuantityOverrides(): array|object { return $this->get('quantity_overrides'); }
    public function hasQuantityOverrides(): bool { return $this->has('quantity_overrides'); }
    /** @return string
     * @throws SdkError When resolution_context is omitted; use hasResolutionContext() or valueOrDefault().
     */
    public function getResolutionContext(): string { return $this->get('resolution_context'); }
    public function hasResolutionContext(): bool { return $this->has('resolution_context'); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When unit_price_overrides is omitted; use hasUnitPriceOverrides() or valueOrDefault().
     */
    public function getUnitPriceOverrides(): array|object { return $this->get('unit_price_overrides'); }
    public function hasUnitPriceOverrides(): bool { return $this->has('unit_price_overrides'); }
}
