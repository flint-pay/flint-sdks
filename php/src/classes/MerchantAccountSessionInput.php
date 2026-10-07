<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MerchantAccountSessionClientSessionInput|array<array-key, mixed>|\stdClass $client_session
 * @property-read list<string> $components
 * @property-read MerchantAccountSessionEffectivePolicyInput|array<array-key, mixed>|\stdClass $effective_policy
 * @property-read string $launch_token
 * @property-read string|\DateTimeInterface $launch_token_expires_at
 * @property-read OnboardingRequirementsInput|array<array-key, mixed>|\stdClass $requirements
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionInput extends Model {
    /** @param array{'client_session': MerchantAccountSessionClientSessionInput|array<array-key, mixed>|\stdClass, 'components': list<string>, 'effective_policy': MerchantAccountSessionEffectivePolicyInput|array<array-key, mixed>|\stdClass, 'launch_token': string, 'launch_token_expires_at': string|\DateTimeInterface, 'requirements': OnboardingRequirementsInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionInput')); }
    /** @return MerchantAccountSessionClientSessionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When client_session is omitted; use hasClientSession() or valueOrDefault().
     */
    public function getClientSession(): mixed { return $this->get('client_session'); }
    public function hasClientSession(): bool { return $this->has('client_session'); }
    /** @return list<string>
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** @return MerchantAccountSessionEffectivePolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When effective_policy is omitted; use hasEffectivePolicy() or valueOrDefault().
     */
    public function getEffectivePolicy(): mixed { return $this->get('effective_policy'); }
    public function hasEffectivePolicy(): bool { return $this->has('effective_policy'); }
    /** @return string
     * @throws SdkError When launch_token is omitted; use hasLaunchToken() or valueOrDefault().
     */
    public function getLaunchToken(): string { return $this->get('launch_token'); }
    public function hasLaunchToken(): bool { return $this->has('launch_token'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When launch_token_expires_at is omitted; use hasLaunchTokenExpiresAt() or valueOrDefault().
     */
    public function getLaunchTokenExpiresAt(): string|\DateTimeInterface { return $this->get('launch_token_expires_at'); }
    public function hasLaunchTokenExpiresAt(): bool { return $this->has('launch_token_expires_at'); }
    /** @return OnboardingRequirementsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): mixed { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
}
