<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PublicCatalogModifierRequestInput|array<array-key, mixed>|\stdClass> $modifiers
 * Presence-aware input; omitted fields throw when accessed. */
final class ResolvePaymentLinkLineItemModifiersInput extends Model {
    /** @param array{'modifiers'?: list<PublicCatalogModifierRequestInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResolvePaymentLinkLineItemModifiersInput')); }
    /** The buyer's modifier selections for the line item. Required, and `null` is not accepted. Send an empty array when the buyer chose none. [] (Value): {@see PublicCatalogModifierRequestInput}. A buyer's modifier choice for one line of a checkout started without an API key.
     * @return list<PublicCatalogModifierRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
}
