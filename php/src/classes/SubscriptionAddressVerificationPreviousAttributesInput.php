<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $state
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionAddressVerificationPreviousAttributesInput extends Model {
    /** @param array{'state'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionAddressVerificationPreviousAttributesInput')); }
    /** How far verification of the address got. Each value says what it means. Value enum: "verified", "unverified", "needs_review", "unverifiable". anyOf[1] (Value): string. How far verification of the address got. Each value says what it means. Value enum: "verified", "unverified", "needs_review", "unverifiable". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): mixed { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}
