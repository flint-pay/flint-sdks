<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $state
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionAddressVerificationInput extends Model {
    /** @param array{'state': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionAddressVerificationInput')); }
    /** @return string
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): string { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
