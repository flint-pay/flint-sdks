<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $email_preferences
 * @property-read string $invoice
 * @property-read string $order
 * @property-read string $return
 * @property-read string $subscription
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerAccountRouteTemplatesInput extends Model {
    /** @param array{'email_preferences'?: string, 'invoice'?: string, 'order'?: string, 'return'?: string, 'subscription'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccountRouteTemplatesInput')); }
    /** @return string
     * @throws SdkError When email_preferences is omitted; use hasEmailPreferences() or valueOrDefault().
     */
    public function getEmailPreferences(): string { return $this->get('email_preferences'); }
    public function hasEmailPreferences(): bool { return $this->has('email_preferences'); }
    /** @return string
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): string { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
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
