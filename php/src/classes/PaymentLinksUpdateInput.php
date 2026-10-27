<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payment_link_id
 * @property-read array{'buyer_fields'?: mixed, 'checkout_session_expires_in_seconds'?: string, 'custom_fields'?: list<mixed>, 'custom_text'?: mixed, 'delivery_method_ids'?: list<string>, 'description'?: string|null, 'donation_max_amount_money'?: array{'amount': string, 'currency': string}|object|null, 'donation_min_amount_money'?: array{'amount': string, 'currency': string}|object|null, 'donation_suggested_amount_money_options'?: list<mixed>, 'event_config'?: mixed, 'expected_version'?: string, 'external_reference_id'?: string|null, 'image'?: mixed, 'inactive_message'?: string|null, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: list<mixed>, 'max_completions'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'payments'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'sales_end_at'?: string|\DateTimeInterface|null, 'status'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinksUpdateInput extends Model {
    /** @param array{'payment_link_id': string, 'Idempotency-Key'?: string, 'body': array{'buyer_fields'?: mixed, 'checkout_session_expires_in_seconds'?: string, 'custom_fields'?: list<mixed>, 'custom_text'?: mixed, 'delivery_method_ids'?: list<string>, 'description'?: string|null, 'donation_max_amount_money'?: array{'amount': string, 'currency': string}|object|null, 'donation_min_amount_money'?: array{'amount': string, 'currency': string}|object|null, 'donation_suggested_amount_money_options'?: list<mixed>, 'event_config'?: mixed, 'expected_version'?: string, 'external_reference_id'?: string|null, 'image'?: mixed, 'inactive_message'?: string|null, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: list<mixed>, 'max_completions'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'payments'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'sales_end_at'?: string|\DateTimeInterface|null, 'status'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinksUpdateInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update payment link.
     * @return array{'buyer_fields'?: mixed, 'checkout_session_expires_in_seconds'?: string, 'custom_fields'?: list<mixed>, 'custom_text'?: mixed, 'delivery_method_ids'?: list<string>, 'description'?: string|null, 'donation_max_amount_money'?: array{'amount': string, 'currency': string}|object|null, 'donation_min_amount_money'?: array{'amount': string, 'currency': string}|object|null, 'donation_suggested_amount_money_options'?: list<mixed>, 'event_config'?: mixed, 'expected_version'?: string, 'external_reference_id'?: string|null, 'image'?: mixed, 'inactive_message'?: string|null, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: list<mixed>, 'max_completions'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'payments'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'sales_end_at'?: string|\DateTimeInterface|null, 'status'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
