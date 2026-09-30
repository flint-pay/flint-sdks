<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ResolvePaymentLinkLineItemModifierRequestInput|array<array-key, mixed>|\stdClass> $modifiers
 * Presence-aware input; omitted fields throw when accessed. */
final class ResolvePaymentLinkLineItemModifiersInput extends Model {
    /** @param array{'modifiers'?: list<ResolvePaymentLinkLineItemModifierRequestInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResolvePaymentLinkLineItemModifiersInput')); }
    /** @return list<ResolvePaymentLinkLineItemModifierRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
}
