<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'billing_anchor_day'?: int, 'billing_schedule'?: mixed, 'billing_start': mixed, 'customer_id': string, 'delivery'?: mixed, 'external_reference_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'payment_method_id'?: string, 'service_location'?: mixed, 'terms': mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionsCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'billing_anchor_day'?: int, 'billing_schedule'?: mixed, 'billing_start': mixed, 'customer_id': string, 'delivery'?: mixed, 'external_reference_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'payment_method_id'?: string, 'service_location'?: mixed, 'terms': mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionsCreateInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Create subscription.
     * @return array{'billing_anchor_day'?: int, 'billing_schedule'?: mixed, 'billing_start': mixed, 'customer_id': string, 'delivery'?: mixed, 'external_reference_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'payment_method_id'?: string, 'service_location'?: mixed, 'terms': mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
