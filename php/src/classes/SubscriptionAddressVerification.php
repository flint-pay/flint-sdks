<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $state
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionAddressVerification extends Model {
    /** @param array{'state': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionAddressVerification')); }
    /** Shape $ (Value): string.  Value enum: "verified", "unverified", "needs_review", "unverifiable".
     * @return string
     */
    public function getState(): string { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
