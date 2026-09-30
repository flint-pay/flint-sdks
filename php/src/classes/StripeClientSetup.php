<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read StripeClientSetupStripe $stripe
 * Presence-aware response; omitted fields throw when accessed. */
final class StripeClientSetup extends Model {
    /** @param array{'stripe'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('StripeClientSetup')); }
    /** @return StripeClientSetupStripe
     * @throws SdkError When stripe is omitted; use hasStripe() or valueOrDefault().
     */
    public function getStripe(): StripeClientSetupStripe { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
