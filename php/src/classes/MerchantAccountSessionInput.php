<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MerchantAccountSessionClientSessionInput|array<array-key, mixed>|\stdClass $client_session
 * @property-read list<string> $components
 * @property-read MerchantAccountSessionEffectivePolicyInput|array<array-key, mixed>|\stdClass $effective_policy
 * @property-read string $launch_token
 * @property-read string|\DateTimeInterface $launch_token_expires_at
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionInput extends Model {
    /** @param array{'client_session': MerchantAccountSessionClientSessionInput|array<array-key, mixed>|\stdClass, 'components': list<string>, 'effective_policy': MerchantAccountSessionEffectivePolicyInput|array<array-key, mixed>|\stdClass, 'launch_token': string, 'launch_token_expires_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionInput')); }
    /** Shape $ (Value): {@see MerchantAccountSessionClientSessionInput}. Browser initialization data required to mount embedded account-management components. These instructions are not merchant account resource state. Short-lived browser initialization data for an embedded merchant account session.
     * @return MerchantAccountSessionClientSessionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When client_session is omitted; use hasClientSession() or valueOrDefault().
     */
    public function getClientSession(): mixed { return $this->get('client_session'); }
    public function hasClientSession(): bool { return $this->has('client_session'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner". Shape $[] (Value): string.  Value enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner".
     * @return list<string>
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Shape $ (Value): {@see MerchantAccountSessionEffectivePolicyInput}. The collection policy applied to a merchant account session: which requirements it targets, how they are collected, and whether future requirements are included.
     * @return MerchantAccountSessionEffectivePolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When effective_policy is omitted; use hasEffectivePolicy() or valueOrDefault().
     */
    public function getEffectivePolicy(): mixed { return $this->get('effective_policy'); }
    public function hasEffectivePolicy(): bool { return $this->has('effective_policy'); }
    /** Shape $ (Value): string. Signed Flint token to exchange at POST /v1/merchant-account-session-refreshes. Each new refresh operation rotates this token; a same-key retry replays the original token. The caller must still authenticate and authorize the human using the session.
     * @return string
     * @throws SdkError When launch_token is omitted; use hasLaunchToken() or valueOrDefault().
     */
    public function getLaunchToken(): string { return $this->get('launch_token'); }
    public function hasLaunchToken(): bool { return $this->has('launch_token'); }
    /** Shape $ (Value): string. Expiry of launch_token in UTC. After expiry, create a new merchant account session. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When launch_token_expires_at is omitted; use hasLaunchTokenExpiresAt() or valueOrDefault().
     */
    public function getLaunchTokenExpiresAt(): string|\DateTimeInterface { return $this->get('launch_token_expires_at'); }
    public function hasLaunchTokenExpiresAt(): bool { return $this->has('launch_token_expires_at'); }
}
