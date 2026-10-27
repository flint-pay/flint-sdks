<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $component
 * @property-read string $endpoint
 * @property-read string $method
 * @property-read OnboardingLaunchRecommendedPolicy $recommended_policy
 * @property-read ?string $sandbox_id
 * Presence-aware response; omitted optional fields return null. */
final class OnboardingLaunchReference extends Model {
    /** @param array{'component': string, 'endpoint': string, 'method': string, 'recommended_policy': mixed, 'sandbox_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingLaunchReference')); }
    /** Shape $ (Value): string.  Value enum: "account_onboarding".
     * @return string
     */
    public function getComponent(): string { return $this->get('component'); }
    public function hasComponent(): bool { return $this->has('component'); }
    /** Shape $ (Value): string. Endpoint for creating the browser session. Uses the same public API base URL as submit_endpoint: absolute when configured, relative otherwise.
     * @return string
     */
    public function getEndpoint(): string { return $this->get('endpoint'); }
    public function hasEndpoint(): bool { return $this->has('endpoint'); }
    /** Shape $ (Value): string.  Value enum: "POST".
     * @return string
     */
    public function getMethod(): string { return $this->get('method'); }
    public function hasMethod(): bool { return $this->has('method'); }
    /** Shape $ (Value): {@see OnboardingLaunchRecommendedPolicy}. The recommended collection strategy and future-requirement behavior for launching embedded onboarding.
     * @return OnboardingLaunchRecommendedPolicy
     */
    public function getRecommendedPolicy(): OnboardingLaunchRecommendedPolicy { return $this->get('recommended_policy'); }
    public function hasRecommendedPolicy(): bool { return $this->has('recommended_policy'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getSandboxId(): ?string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
}
