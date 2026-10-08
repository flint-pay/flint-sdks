<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $state
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscriptionAddressVerification extends Model {
    /** @param array{'state': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionAddressVerification')); }
    /** @return string
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): string { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
