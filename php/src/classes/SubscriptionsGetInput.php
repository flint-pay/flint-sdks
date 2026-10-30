<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $subscription_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionsGetInput extends Model {
    /** @param array{'subscription_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionsGetInput')); }
    /** Flint subscription ID. Example: "sub_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Supported expansions: customer, payment_method, subscription_plan. Expansion requires commerce.subscriptions.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=payment_method, or pass one comma-separated value. [] enum: "customer", "payment_method", "subscription_plan". Value enum: "customer", "payment_method", "subscription_plan". anyOf[1] (Value): Array of string.  [] enum: "customer", "payment_method", "subscription_plan". anyOf[1][] (Value): string.  Value enum: "customer", "payment_method", "subscription_plan". anyOf[2] (Value): string.  Value enum: "customer", "payment_method", "subscription_plan".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
