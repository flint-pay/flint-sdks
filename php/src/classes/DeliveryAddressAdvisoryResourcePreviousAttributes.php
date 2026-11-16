<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $role
 * @property-read AddressPreviousAttributes|null $suggested_address
 * @property-read string|null $verification_state
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryAddressAdvisoryResourcePreviousAttributes extends Model {
    /** @param array{'role'?: mixed, 'suggested_address'?: mixed, 'verification_state'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryAddressAdvisoryResourcePreviousAttributes')); }
    /** Which address the advisory is about. Value enum: "destination_address", "buyer_location". anyOf[1] (Value): string. Which address the advisory is about. Value enum: "destination_address", "buyer_location". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRole(): string|null { return $this->get('role'); }
    public function hasRole(): bool { return $this->has('role'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getSuggestedAddress(): AddressPreviousAttributes|null { return $this->get('suggested_address'); }
    public function hasSuggestedAddress(): bool { return $this->has('suggested_address'); }
    /** How far address verification got. Value enum: "needs_review", "unverifiable". anyOf[1] (Value): string. How far address verification got. Value enum: "needs_review", "unverifiable". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVerificationState(): string|null { return $this->get('verification_state'); }
    public function hasVerificationState(): bool { return $this->has('verification_state'); }
}
