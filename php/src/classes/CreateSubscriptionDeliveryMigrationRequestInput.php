<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $from_delivery_method_id
 * @property-read string $subscription_plan_id
 * @property-read string $to_delivery_method_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateSubscriptionDeliveryMigrationRequestInput extends Model {
    /** @param array{'from_delivery_method_id': string, 'subscription_plan_id'?: string, 'to_delivery_method_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateSubscriptionDeliveryMigrationRequestInput')); }
    /** @return string
     * @throws SdkError When from_delivery_method_id is omitted; use hasFromDeliveryMethodId() or valueOrDefault().
     */
    public function getFromDeliveryMethodId(): string { return $this->get('from_delivery_method_id'); }
    public function hasFromDeliveryMethodId(): bool { return $this->has('from_delivery_method_id'); }
    /** @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** @return string
     * @throws SdkError When to_delivery_method_id is omitted; use hasToDeliveryMethodId() or valueOrDefault().
     */
    public function getToDeliveryMethodId(): string { return $this->get('to_delivery_method_id'); }
    public function hasToDeliveryMethodId(): bool { return $this->has('to_delivery_method_id'); }
}
