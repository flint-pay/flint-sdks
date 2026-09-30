<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order
 * @property-read string $return
 * @property-read string $subscription
 * Presence-aware response; omitted fields throw when accessed. */
final class CustomerAccountRouteTemplates extends Model {
    /** @param array{'order'?: string, 'return'?: string, 'subscription'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccountRouteTemplates')); }
    /** @return string
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): string { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** @return string
     * @throws SdkError When return is omitted; use hasReturn() or valueOrDefault().
     */
    public function getReturn(): string { return $this->get('return'); }
    public function hasReturn(): bool { return $this->has('return'); }
    /** @return string
     * @throws SdkError When subscription is omitted; use hasSubscription() or valueOrDefault().
     */
    public function getSubscription(): string { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
}
