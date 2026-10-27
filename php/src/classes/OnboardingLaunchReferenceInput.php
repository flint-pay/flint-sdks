<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $component
 * @property-read string $endpoint
 * @property-read string $method
 * @property-read OnboardingLaunchRecommendedPolicyInput|array<array-key, mixed>|\stdClass $recommended_policy
 * @property-read string $sandbox_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingLaunchReferenceInput extends Model {
    /** @param array{'component': string, 'endpoint': string, 'method': string, 'recommended_policy': OnboardingLaunchRecommendedPolicyInput|array<array-key, mixed>|\stdClass, 'sandbox_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingLaunchReferenceInput')); }
    /** Shape $ (Value): string.  Value enum: "account_onboarding".
     * @return string
     * @throws SdkError When component is omitted; use hasComponent() or valueOrDefault().
     */
    public function getComponent(): string { return $this->get('component'); }
    public function hasComponent(): bool { return $this->has('component'); }
    /** Shape $ (Value): string. Endpoint for creating the browser session. Uses the same public API base URL as submit_endpoint: absolute when configured, relative otherwise.
     * @return string
     * @throws SdkError When endpoint is omitted; use hasEndpoint() or valueOrDefault().
     */
    public function getEndpoint(): string { return $this->get('endpoint'); }
    public function hasEndpoint(): bool { return $this->has('endpoint'); }
    /** Shape $ (Value): string.  Value enum: "POST".
     * @return string
     * @throws SdkError When method is omitted; use hasMethod() or valueOrDefault().
     */
    public function getMethod(): string { return $this->get('method'); }
    public function hasMethod(): bool { return $this->has('method'); }
    /** Shape $ (Value): {@see OnboardingLaunchRecommendedPolicyInput}. The recommended collection strategy and future-requirement behavior for launching embedded onboarding.
     * @return OnboardingLaunchRecommendedPolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recommended_policy is omitted; use hasRecommendedPolicy() or valueOrDefault().
     */
    public function getRecommendedPolicy(): mixed { return $this->get('recommended_policy'); }
    public function hasRecommendedPolicy(): bool { return $this->has('recommended_policy'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
}
