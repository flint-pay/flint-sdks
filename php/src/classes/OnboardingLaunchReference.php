<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $component
 * @property-read string $endpoint
 * @property-read string $method
 * @property-read OnboardingLaunchRecommendedPolicy $recommended_policy
 * @property-read string $sandbox_id
 * Presence-aware response; omitted fields throw when accessed. */
final class OnboardingLaunchReference extends Model {
    /** @param array{'component': string, 'endpoint': string, 'method': string, 'recommended_policy': mixed, 'sandbox_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingLaunchReference')); }
    /** @return string
     * @throws SdkError When component is omitted; use hasComponent() or valueOrDefault().
     */
    public function getComponent(): string { return $this->get('component'); }
    public function hasComponent(): bool { return $this->has('component'); }
    /** @return string
     * @throws SdkError When endpoint is omitted; use hasEndpoint() or valueOrDefault().
     */
    public function getEndpoint(): string { return $this->get('endpoint'); }
    public function hasEndpoint(): bool { return $this->has('endpoint'); }
    /** @return string
     * @throws SdkError When method is omitted; use hasMethod() or valueOrDefault().
     */
    public function getMethod(): string { return $this->get('method'); }
    public function hasMethod(): bool { return $this->has('method'); }
    /** @return OnboardingLaunchRecommendedPolicy
     * @throws SdkError When recommended_policy is omitted; use hasRecommendedPolicy() or valueOrDefault().
     */
    public function getRecommendedPolicy(): OnboardingLaunchRecommendedPolicy { return $this->get('recommended_policy'); }
    public function hasRecommendedPolicy(): bool { return $this->has('recommended_policy'); }
    /** @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
}
