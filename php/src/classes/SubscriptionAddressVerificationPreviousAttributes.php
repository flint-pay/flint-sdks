<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $state
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionAddressVerificationPreviousAttributes extends Model {
    /** @param array{'state'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionAddressVerificationPreviousAttributes')); }
    /** How far verification of the address got. Each value says what it means. Value enum: "verified", "unverified", "needs_review", "unverifiable". anyOf[1] (Value): string. How far verification of the address got. Each value says what it means. Value enum: "verified", "unverified", "needs_review", "unverifiable". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getState(): string|null { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
