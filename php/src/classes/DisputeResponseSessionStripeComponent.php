<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $component
 * @property-read string $payment
 * Presence-aware response; omitted optional fields return null. */
final class DisputeResponseSessionStripeComponent extends Model {
    /** @param array{'component': string, 'payment': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputeResponseSessionStripeComponent')); }
    /** Value enum: "payment_disputes".
     * @return string
     */
    public function getComponent(): string { return $this->get('component'); }
    public function hasComponent(): bool { return $this->has('component'); }
    /** Stripe payment reference to pass to setPayment or the React payment prop.
     * @return string
     */
    public function getPayment(): string { return $this->get('payment'); }
    public function hasPayment(): bool { return $this->has('payment'); }
}
