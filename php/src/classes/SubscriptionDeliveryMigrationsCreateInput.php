<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'from_delivery_method_id': string, 'subscription_plan_id'?: string, 'to_delivery_method_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryMigrationsCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'from_delivery_method_id': string, 'subscription_plan_id'?: string, 'to_delivery_method_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationsCreateInput')); }
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
    /** @return array{'from_delivery_method_id': string, 'subscription_plan_id'?: string, 'to_delivery_method_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
