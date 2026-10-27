<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $modifier_id
 * @property-read string $quantity
 * @property-read ResolvePaymentLinkTextModifierRequestInput|array<array-key, mixed>|\stdClass $text
 * Presence-aware input; omitted fields throw when accessed. */
final class ResolvePaymentLinkLineItemModifierRequestInput extends Model {
    /** @param array{'modifier_id'?: string, 'quantity'?: string, 'text'?: ResolvePaymentLinkTextModifierRequestInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResolvePaymentLinkLineItemModifierRequestInput')); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When modifier_id is omitted; use hasModifierId() or valueOrDefault().
     */
    public function getModifierId(): string { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): {@see ResolvePaymentLinkTextModifierRequestInput}. The text a buyer entered for a text modifier group on a payment link line item.
     * @return ResolvePaymentLinkTextModifierRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When text is omitted; use hasText() or valueOrDefault().
     */
    public function getText(): mixed { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
}
