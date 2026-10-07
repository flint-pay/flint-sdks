<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $role
 * @property-read DeliveryAddressRequest $suggested_address
 * @property-read string $verification_state
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryAddressAdvisoryResource extends Model {
    /** @param array{'role': string, 'suggested_address'?: object{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string}, 'verification_state': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryAddressAdvisoryResource')); }
    /** @return string
     * @throws SdkError When role is omitted; use hasRole() or valueOrDefault().
     */
    public function getRole(): string { return $this->get('role'); }
    public function hasRole(): bool { return $this->has('role'); }
    /** @return DeliveryAddressRequest
     * @throws SdkError When suggested_address is omitted; use hasSuggestedAddress() or valueOrDefault().
     */
    public function getSuggestedAddress(): DeliveryAddressRequest { return $this->get('suggested_address'); }
    public function hasSuggestedAddress(): bool { return $this->has('suggested_address'); }
    /** @return string
     * @throws SdkError When verification_state is omitted; use hasVerificationState() or valueOrDefault().
     */
    public function getVerificationState(): string { return $this->get('verification_state'); }
    public function hasVerificationState(): bool { return $this->has('verification_state'); }
}
