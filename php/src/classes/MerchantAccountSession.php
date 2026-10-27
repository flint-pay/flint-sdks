<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MerchantAccountSessionClientSession $client_session
 * @property-read list<string> $components
 * @property-read MerchantAccountSessionEffectivePolicy $effective_policy
 * @property-read string $launch_token
 * @property-read string $launch_token_expires_at
 * Presence-aware response; omitted optional fields return null. */
final class MerchantAccountSession extends Model {
    /** @param array{'client_session': mixed, 'components': list<string>, 'effective_policy': mixed, 'launch_token': string, 'launch_token_expires_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSession')); }
    /** Shape $ (Value): {@see MerchantAccountSessionClientSession}. Browser initialization data required to mount embedded account-management components. These instructions are not merchant account resource state. Short-lived browser initialization data for an embedded merchant account session.
     * @return MerchantAccountSessionClientSession
     */
    public function getClientSession(): MerchantAccountSessionClientSession { return $this->get('client_session'); }
    public function hasClientSession(): bool { return $this->has('client_session'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner". Shape $[] (Value): string.  Value enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner".
     * @return list<string>
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Shape $ (Value): {@see MerchantAccountSessionEffectivePolicy}. The collection policy applied to a merchant account session: which requirements it targets, how they are collected, and whether future requirements are included.
     * @return MerchantAccountSessionEffectivePolicy
     */
    public function getEffectivePolicy(): MerchantAccountSessionEffectivePolicy { return $this->get('effective_policy'); }
    public function hasEffectivePolicy(): bool { return $this->has('effective_policy'); }
    /** Shape $ (Value): string. Signed Flint token to exchange at POST /v1/merchant-account-session-refreshes. Each new refresh operation rotates this token; a same-key retry replays the original token. The caller must still authenticate and authorize the human using the session.
     * @return string
     */
    public function getLaunchToken(): string { return $this->get('launch_token'); }
    public function hasLaunchToken(): bool { return $this->has('launch_token'); }
    /** Shape $ (Value): string. Expiry of launch_token in UTC. After expiry, create a new merchant account session. Format: date-time.
     * @return string
     */
    public function getLaunchTokenExpiresAt(): string { return $this->get('launch_token_expires_at'); }
    public function hasLaunchTokenExpiresAt(): bool { return $this->has('launch_token_expires_at'); }
}
