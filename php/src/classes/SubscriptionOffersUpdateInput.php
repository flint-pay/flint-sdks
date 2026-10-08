<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $subscription_offer_id
 * @property-read array{'billing_interval_options'?: list<array{'billing_interval': string, 'billing_interval_count': int}|object>, 'expected_version'?: string, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'product_ids'?: list<string>, 'promotion_id'?: string|null, 'status'?: string, 'subscription_delivery_method_ids'?: list<string>, 'variant_ids'?: list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionOffersUpdateInput extends Model {
    /** @param array{'subscription_offer_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'billing_interval_options'?: list<array{'billing_interval': string, 'billing_interval_count': int}|object>, 'expected_version'?: string, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'product_ids'?: list<string>, 'promotion_id'?: string|null, 'status'?: string, 'subscription_delivery_method_ids'?: list<string>, 'variant_ids'?: list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionOffersUpdateInput')); }
    /** @return string
     * @throws SdkError When subscription_offer_id is omitted; use hasSubscriptionOfferId() or valueOrDefault().
     */
    public function getSubscriptionOfferId(): string { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'billing_interval_options'?: list<array{'billing_interval': string, 'billing_interval_count': int}|object>, 'expected_version'?: string, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'product_ids'?: list<string>, 'promotion_id'?: string|null, 'status'?: string, 'subscription_delivery_method_ids'?: list<string>, 'variant_ids'?: list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
