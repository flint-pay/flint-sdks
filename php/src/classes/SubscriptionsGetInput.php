<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $subscription_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionsGetInput extends Model {
    /** @param array{'subscription_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "customer", "payment_method", "subscription_plan". Shape $[] (Value): string.  Value enum: "customer", "payment_method", "subscription_plan".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
