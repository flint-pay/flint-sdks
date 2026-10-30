<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $payment_link_id
 * @property-read array{'custom_field_values'?: array<array-key, string>|\stdClass, 'modifiers'?: array<array-key, mixed>|\stdClass, 'quantity_overrides'?: array<array-key, int>|\stdClass, 'resolution_context': string, 'unit_price_overrides'?: array<array-key, mixed>|\stdClass, 'variant_selections'?: array<array-key, string>|\stdClass}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinksResolveInput extends Model {
    /** @param array{'payment_link_id': string, 'body': array{'custom_field_values'?: array<array-key, string>|\stdClass, 'modifiers'?: array<array-key, mixed>|\stdClass, 'quantity_overrides'?: array<array-key, int>|\stdClass, 'resolution_context': string, 'unit_price_overrides'?: array<array-key, mixed>|\stdClass, 'variant_selections'?: array<array-key, string>|\stdClass}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinksResolveInput')); }
    /** Flint payment link ID. Example: "pl_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** The request body for: Resolve payment link.
     * @return array{'custom_field_values'?: array<array-key, string>|\stdClass, 'modifiers'?: array<array-key, mixed>|\stdClass, 'quantity_overrides'?: array<array-key, int>|\stdClass, 'resolution_context': string, 'unit_price_overrides'?: array<array-key, mixed>|\stdClass, 'variant_selections'?: array<array-key, string>|\stdClass}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
