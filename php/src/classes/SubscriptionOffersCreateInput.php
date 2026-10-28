<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'billing_interval_options': list<mixed>, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'product_ids'?: list<string>, 'promotion_id'?: string|null, 'status'?: string, 'subscription_delivery_method_ids'?: list<string>, 'variant_ids'?: list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionOffersCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'billing_interval_options': list<mixed>, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'product_ids'?: list<string>, 'promotion_id'?: string|null, 'status'?: string, 'subscription_delivery_method_ids'?: list<string>, 'variant_ids'?: list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionOffersCreateInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Create subscription offer.
     * @return array{'billing_interval_options': list<mixed>, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'product_ids'?: list<string>, 'promotion_id'?: string|null, 'status'?: string, 'subscription_delivery_method_ids'?: list<string>, 'variant_ids'?: list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
