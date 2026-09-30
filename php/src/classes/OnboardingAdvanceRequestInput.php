<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $country
 * @property-read OnboardingProfileRequestInput|array<array-key, mixed>|\stdClass $profile
 * @property-read list<string> $requested_capabilities
 * @property-read string $sandbox_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingAdvanceRequestInput extends Model {
    /** @param array{'country'?: string, 'profile'?: OnboardingProfileRequestInput|array<array-key, mixed>|\stdClass, 'requested_capabilities'?: list<string>, 'sandbox_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingAdvanceRequestInput')); }
    /** @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** @return OnboardingProfileRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When profile is omitted; use hasProfile() or valueOrDefault().
     */
    public function getProfile(): mixed { return $this->get('profile'); }
    public function hasProfile(): bool { return $this->has('profile'); }
    /** @return list<string>
     * @throws SdkError When requested_capabilities is omitted; use hasRequestedCapabilities() or valueOrDefault().
     */
    public function getRequestedCapabilities(): mixed { return $this->get('requested_capabilities'); }
    public function hasRequestedCapabilities(): bool { return $this->has('requested_capabilities'); }
    /** @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
}
