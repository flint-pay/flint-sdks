<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $kind
 * @property-read string $launch_token
 * @property-read string|\DateTimeInterface $launch_token_expires_at
 * @property-read string|\DateTimeInterface $provider_session_expires_at
 * @property-read MerchantAccountSessionStripeLaunchInput|array<array-key, mixed>|\stdClass $stripe
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingExternalActionInput extends Model {
    /** @param array{'kind': string, 'launch_token': string, 'launch_token_expires_at': string|\DateTimeInterface, 'provider_session_expires_at': string|\DateTimeInterface, 'stripe': MerchantAccountSessionStripeLaunchInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingExternalActionInput')); }
    /** @return string
     * @throws SdkError When kind is omitted; use hasKind() or valueOrDefault().
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
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
    /** @return string|\DateTimeInterface
     * @throws SdkError When provider_session_expires_at is omitted; use hasProviderSessionExpiresAt() or valueOrDefault().
     */
    public function getProviderSessionExpiresAt(): string|\DateTimeInterface { return $this->get('provider_session_expires_at'); }
    public function hasProviderSessionExpiresAt(): bool { return $this->has('provider_session_expires_at'); }
    /** @return MerchantAccountSessionStripeLaunchInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When stripe is omitted; use hasStripe() or valueOrDefault().
     */
    public function getStripe(): mixed { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
