<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $subscription_id
 * @property-read array{'billing_interval'?: string, 'billing_interval_count'?: int, 'cancel_at_period_end'?: bool, 'delivery'?: mixed, 'expected_version'?: string, 'payment_method_id'?: string, 'quantity'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeUpdateSubscriptionInput extends Model {
    /** @param array{'subscription_id': string, 'Idempotency-Key'?: string, 'body': array{'billing_interval'?: string, 'billing_interval_count'?: int, 'cancel_at_period_end'?: bool, 'delivery'?: mixed, 'expected_version'?: string, 'payment_method_id'?: string, 'quantity'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeUpdateSubscriptionInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update subscription.
     * @return array{'billing_interval'?: string, 'billing_interval_count'?: int, 'cancel_at_period_end'?: bool, 'delivery'?: mixed, 'expected_version'?: string, 'payment_method_id'?: string, 'quantity'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
