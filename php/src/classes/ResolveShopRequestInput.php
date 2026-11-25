<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_reference
 * @property-read list<ResolveShopLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read PaymentLinkResolvePrefillRequestInput|array<array-key, mixed>|\stdClass $prefill
 * @property-read string $resolution_context
 * Presence-aware input; omitted fields throw when accessed. */
final class ResolveShopRequestInput extends Model {
    /** @param array{'client_reference'?: string, 'line_items': list<ResolveShopLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'prefill'?: PaymentLinkResolvePrefillRequestInput|array<array-key, mixed>|\stdClass, 'resolution_context': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResolveShopRequestInput')); }
    /** Buyer or cart reference copied to the order and checkout session. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When client_reference is omitted; use hasClientReference() or valueOrDefault().
     */
    public function getClientReference(): string { return $this->get('client_reference'); }
    public function hasClientReference(): bool { return $this->has('client_reference'); }
    /** Cart lines in order. Lines may repeat a listing. minItems: 1. maxItems: 50. [] (Value): {@see ResolveShopLineItemRequestInput}. A listing, quantity, and optional selections for one cart line.
     * @return list<ResolveShopLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Buyer-editable email prefill. Buyer-editable email prefill for payment-link checkout. It never identifies a customer.
     * @return PaymentLinkResolvePrefillRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When prefill is omitted; use hasPrefill() or valueOrDefault().
     */
    public function getPrefill(): mixed { return $this->get('prefill'); }
    public function hasPrefill(): bool { return $this->has('prefill'); }
    /** Private resolution context from the public shop read. minLength: 1.
     * @return string
     * @throws SdkError When resolution_context is omitted; use hasResolutionContext() or valueOrDefault().
     */
    public function getResolutionContext(): string { return $this->get('resolution_context'); }
    public function hasResolutionContext(): bool { return $this->has('resolution_context'); }
}
