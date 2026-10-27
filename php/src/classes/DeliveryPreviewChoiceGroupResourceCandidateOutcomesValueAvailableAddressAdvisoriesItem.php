<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $role
 * @property-read ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableAddressAdvisoriesItemSuggestedAddress $suggested_address
 * @property-read string $verification_state
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableAddressAdvisoriesItem extends Model {
    /** @param array{'role': string, 'suggested_address'?: mixed, 'verification_state': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableAddressAdvisoriesItem')); }
    /** Shape $ (Value): string.  Value enum: "destination_address", "buyer_location".
     * @return string
     */
    public function getRole(): string { return $this->get('role'); }
    public function hasRole(): bool { return $this->has('role'); }
    /** Shape $ (Value): {@see DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableAddressAdvisoriesItemSuggestedAddress}. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address you supply for delivery quotes, previews, and selections.
     * @return ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableAddressAdvisoriesItemSuggestedAddress
     */
    public function getSuggestedAddress(): ?DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableAddressAdvisoriesItemSuggestedAddress { return $this->get('suggested_address'); }
    public function hasSuggestedAddress(): bool { return $this->has('suggested_address'); }
    /** Shape $ (Value): string.  Value enum: "needs_review", "unverifiable".
     * @return string
     */
    public function getVerificationState(): string { return $this->get('verification_state'); }
    public function hasVerificationState(): bool { return $this->has('verification_state'); }
}
