<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $email_preferences
 * @property-read string|null $invoice
 * @property-read string|null $order
 * @property-read string|null $return
 * @property-read string|null $subscription
 * Presence-aware response; omitted optional fields return null. */
final class CustomerAccountRouteTemplates extends Model {
    /** @param array{'email_preferences'?: string|null, 'invoice'?: string|null, 'order'?: string|null, 'return'?: string|null, 'subscription'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccountRouteTemplates')); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     */
    public function getEmailPreferences(): string|null { return $this->get('email_preferences'); }
    public function hasEmailPreferences(): bool { return $this->has('email_preferences'); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     */
    public function getInvoice(): string|null { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     */
    public function getOrder(): string|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     */
    public function getReturn(): string|null { return $this->get('return'); }
    public function hasReturn(): bool { return $this->has('return'); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     */
    public function getSubscription(): string|null { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
}
