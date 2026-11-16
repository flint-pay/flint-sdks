<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $role
 * @property-read AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $suggested_address
 * @property-read string|null $verification_state
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryAddressAdvisoryResourcePreviousAttributesInput extends Model {
    /** @param array{'role'?: string|null, 'suggested_address'?: AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'verification_state'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryAddressAdvisoryResourcePreviousAttributesInput')); }
    /** Which address the advisory is about. Value enum: "destination_address", "buyer_location". anyOf[1] (Value): string. Which address the advisory is about. Value enum: "destination_address", "buyer_location". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When role is omitted; use hasRole() or valueOrDefault().
     */
    public function getRole(): mixed { return $this->get('role'); }
    public function hasRole(): bool { return $this->has('role'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): {@see AddressPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When suggested_address is omitted; use hasSuggestedAddress() or valueOrDefault().
     */
    public function getSuggestedAddress(): mixed { return $this->get('suggested_address'); }
    public function hasSuggestedAddress(): bool { return $this->has('suggested_address'); }
    /** How far address verification got. Value enum: "needs_review", "unverifiable". anyOf[1] (Value): string. How far address verification got. Value enum: "needs_review", "unverifiable". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When verification_state is omitted; use hasVerificationState() or valueOrDefault().
     */
    public function getVerificationState(): mixed { return $this->get('verification_state'); }
    public function hasVerificationState(): bool { return $this->has('verification_state'); }
}
