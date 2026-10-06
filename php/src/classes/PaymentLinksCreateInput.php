<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'custom_fields'?: list<mixed>, 'custom_text'?: mixed, 'customer_collection'?: mixed, 'delivery_method_ids'?: list<string>, 'description'?: string, 'donation_max_amount_money'?: mixed, 'donation_min_amount_money'?: mixed, 'donation_suggested_amount_money_options'?: list<mixed>, 'event_config'?: mixed, 'expiration'?: mixed, 'external_reference_id'?: string, 'image'?: mixed, 'inactive_message'?: string, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: list<mixed>, 'max_completions'?: int, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'payment_link_type'?: string, 'payments'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'subscription_plan_id'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinksCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'custom_fields'?: list<mixed>, 'custom_text'?: mixed, 'customer_collection'?: mixed, 'delivery_method_ids'?: list<string>, 'description'?: string, 'donation_max_amount_money'?: mixed, 'donation_min_amount_money'?: mixed, 'donation_suggested_amount_money_options'?: list<mixed>, 'event_config'?: mixed, 'expiration'?: mixed, 'external_reference_id'?: string, 'image'?: mixed, 'inactive_message'?: string, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: list<mixed>, 'max_completions'?: int, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'payment_link_type'?: string, 'payments'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'subscription_plan_id'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinksCreateInput')); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'custom_fields'?: list<mixed>, 'custom_text'?: mixed, 'customer_collection'?: mixed, 'delivery_method_ids'?: list<string>, 'description'?: string, 'donation_max_amount_money'?: mixed, 'donation_min_amount_money'?: mixed, 'donation_suggested_amount_money_options'?: list<mixed>, 'event_config'?: mixed, 'expiration'?: mixed, 'external_reference_id'?: string, 'image'?: mixed, 'inactive_message'?: string, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: list<mixed>, 'max_completions'?: int, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'payment_link_type'?: string, 'payments'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'subscription_plan_id'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
