<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $payment_link_id
 * @property-read bool $include_checkout
 * @property-read array{'attendee_names'?: list<string>, 'client_reference'?: string, 'custom_field_values'?: array<array-key, string>|\stdClass, 'modifiers'?: array<array-key, mixed>|\stdClass, 'prefill'?: mixed, 'quantity_overrides'?: array<array-key, int>|\stdClass, 'resolution_context': string, 'subscription_terms'?: mixed, 'unit_price_overrides'?: array<array-key, mixed>|\stdClass, 'variant_selections'?: array<array-key, string>|\stdClass}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinksResolveInput extends Model {
    /** @param array{'payment_link_id': string, 'include_checkout'?: bool, 'body': array{'attendee_names'?: list<string>, 'client_reference'?: string, 'custom_field_values'?: array<array-key, string>|\stdClass, 'modifiers'?: array<array-key, mixed>|\stdClass, 'prefill'?: mixed, 'quantity_overrides'?: array<array-key, int>|\stdClass, 'resolution_context': string, 'subscription_terms'?: mixed, 'unit_price_overrides'?: array<array-key, mixed>|\stdClass, 'variant_selections'?: array<array-key, string>|\stdClass}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinksResolveInput')); }
    /** Flint payment link ID. Must be a valid ID with prefix pl_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     * @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Include the buyer checkout read fields when a new hosted session is created. Replays return the launch fields.
     * @return bool
     * @throws SdkError When include_checkout is omitted; use hasIncludeCheckout() or valueOrDefault().
     */
    public function getIncludeCheckout(): bool { return $this->get('include_checkout'); }
    public function hasIncludeCheckout(): bool { return $this->has('include_checkout'); }
    /** The request body for: Resolve payment link.
     * @return array{'attendee_names'?: list<string>, 'client_reference'?: string, 'custom_field_values'?: array<array-key, string>|\stdClass, 'modifiers'?: array<array-key, mixed>|\stdClass, 'prefill'?: mixed, 'quantity_overrides'?: array<array-key, int>|\stdClass, 'resolution_context': string, 'subscription_terms'?: mixed, 'unit_price_overrides'?: array<array-key, mixed>|\stdClass, 'variant_selections'?: array<array-key, string>|\stdClass}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
