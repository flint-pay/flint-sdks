<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $component
 * @property-read string $payment
 * Presence-aware input; omitted fields throw when accessed. */
final class DisputeResponseSessionStripeComponentInput extends Model {
    /** @param array{'component': string, 'payment': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputeResponseSessionStripeComponentInput')); }
    /** Value enum: "payment_disputes".
     * @return string
     * @throws SdkError When component is omitted; use hasComponent() or valueOrDefault().
     */
    public function getComponent(): string { return $this->get('component'); }
    public function hasComponent(): bool { return $this->has('component'); }
    /** Stripe payment reference to pass to setPayment or the React payment prop.
     * @return string
     * @throws SdkError When payment is omitted; use hasPayment() or valueOrDefault().
     */
    public function getPayment(): string { return $this->get('payment'); }
    public function hasPayment(): bool { return $this->has('payment'); }
}
