<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'expires_at': string|\DateTimeInterface, 'stripe': array{'account_session': array{'client_secret': string, 'stripe_js_call': string, ...}|object, 'components': list<MerchantAccountSessionStripeComponentInput|array<array-key, mixed>|\stdClass>, 'publishable_key': string, ...}|object, ...}|object $client_session
 * @property-read list<string> $components
 * @property-read MerchantAccountSessionEffectivePolicyInput|array<array-key, mixed>|\stdClass $effective_policy
 * @property-read string $launch_token
 * @property-read string|\DateTimeInterface $launch_token_expires_at
 * @property-read OnboardingRequirementsInput|array<array-key, mixed>|\stdClass $requirements
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionInput extends Model {
    /** @param array{'client_session': array{'expires_at': string|\DateTimeInterface, 'stripe': array{'account_session': array{'client_secret': string, 'stripe_js_call': string, ...}|object, 'components': list<MerchantAccountSessionStripeComponentInput|array<array-key, mixed>|\stdClass>, 'publishable_key': string, ...}|object, ...}|object, 'components': list<string>, 'effective_policy': MerchantAccountSessionEffectivePolicyInput|array<array-key, mixed>|\stdClass, 'launch_token': string, 'launch_token_expires_at': string|\DateTimeInterface, 'requirements': OnboardingRequirementsInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionInput')); }
    /** @return array{'expires_at': string|\DateTimeInterface, 'stripe': array{'account_session': array{'client_secret': string, 'stripe_js_call': string, ...}|object, 'components': list<MerchantAccountSessionStripeComponentInput|array<array-key, mixed>|\stdClass>, 'publishable_key': string, ...}|object, ...}|object
     * @throws SdkError When client_session is omitted; use hasClientSession() or valueOrDefault().
     */
    public function getClientSession(): array|object { return $this->get('client_session'); }
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
