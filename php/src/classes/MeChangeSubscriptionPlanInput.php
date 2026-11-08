<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $subscription_id
 * @property-read array{'billing_interval'?: string, 'billing_interval_count'?: int, 'expected_version'?: int, 'quantity'?: int, 'subscription_plan_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeChangeSubscriptionPlanInput extends Model {
    /** @param array{'subscription_id': string, 'body': array{'billing_interval'?: string, 'billing_interval_count'?: int, 'expected_version'?: int, 'quantity'?: int, 'subscription_plan_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeChangeSubscriptionPlanInput')); }
    /** Subscription ID. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** The request body for: Change subscription plan. Example: {"billing_interval":"monthly","billing_interval_count":1,"expected_version":1,"subscription_plan_id":"plan_01KEZF7C00H4XP3KVYSYYWA181"}.
     * @return array{'billing_interval'?: string, 'billing_interval_count'?: int, 'expected_version'?: int, 'quantity'?: int, 'subscription_plan_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
