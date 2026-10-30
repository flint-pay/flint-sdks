<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $email_preferences
 * @property-read string|null $invoice
 * @property-read string|null $order
 * @property-read string|null $return
 * @property-read string|null $subscription
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerAccountRouteTemplatesRequestInput extends Model {
    /** @param array{'email_preferences'?: string|null, 'invoice'?: string|null, 'order'?: string|null, 'return'?: string|null, 'subscription'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccountRouteTemplatesRequestInput')); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When email_preferences is omitted; use hasEmailPreferences() or valueOrDefault().
     */
    public function getEmailPreferences(): string|null { return $this->get('email_preferences'); }
    public function hasEmailPreferences(): bool { return $this->has('email_preferences'); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): string|null { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): string|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When return is omitted; use hasReturn() or valueOrDefault().
     */
    public function getReturn(): string|null { return $this->get('return'); }
    public function hasReturn(): bool { return $this->has('return'); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When subscription is omitted; use hasSubscription() or valueOrDefault().
     */
    public function getSubscription(): string|null { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
}
