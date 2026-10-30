<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'from_delivery_method_id': string, 'subscription_plan_id'?: string, 'to_delivery_method_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryMigrationsCreateInput extends Model {
    /** @param array{'body': array{'from_delivery_method_id': string, 'subscription_plan_id'?: string, 'to_delivery_method_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationsCreateInput')); }
    /** The request body for: Move subscribers to another delivery method.
     * @return array{'from_delivery_method_id': string, 'subscription_plan_id'?: string, 'to_delivery_method_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
