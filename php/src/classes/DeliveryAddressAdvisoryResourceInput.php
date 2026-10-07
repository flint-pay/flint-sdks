<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $role
 * @property-read DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass $suggested_address
 * @property-read string $verification_state
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryAddressAdvisoryResourceInput extends Model {
    /** @param array{'role': string, 'suggested_address'?: DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass, 'verification_state': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryAddressAdvisoryResourceInput')); }
    /** @return string
     * @throws SdkError When role is omitted; use hasRole() or valueOrDefault().
     */
    public function getRole(): string { return $this->get('role'); }
    public function hasRole(): bool { return $this->has('role'); }
    /** @return DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When suggested_address is omitted; use hasSuggestedAddress() or valueOrDefault().
     */
    public function getSuggestedAddress(): mixed { return $this->get('suggested_address'); }
    public function hasSuggestedAddress(): bool { return $this->has('suggested_address'); }
    /** @return string
     * @throws SdkError When verification_state is omitted; use hasVerificationState() or valueOrDefault().
     */
    public function getVerificationState(): string { return $this->get('verification_state'); }
    public function hasVerificationState(): bool { return $this->has('verification_state'); }
}
