<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read ?OnboardingLaunchReference $launch
 * @property-read bool $machine_completable
 * @property-read string $owner
 * @property-read ?list<string> $required_fields
 * @property-read ?string $submit_endpoint
 * @property-read ?string $submit_method
 * Presence-aware response; omitted optional fields return null. */
final class OnboardingNextStep extends Model {
    /** @param array{'code': string, 'launch'?: mixed, 'machine_completable': bool, 'owner': string, 'required_fields'?: list<string>, 'submit_endpoint'?: string, 'submit_method'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingNextStep')); }
    /** Shape $ (Value): string.  Value enum: "check_onboarding_state", "start_onboarding", "complete_business_profile", "complete_verification_step", "wait_for_review", "create_api_key".
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Shape $ (Value): {@see OnboardingLaunchReference}. How to launch the embedded onboarding component: the endpoint and method to call, and the recommended policy to send.
     * @return ?OnboardingLaunchReference
     */
    public function getLaunch(): ?OnboardingLaunchReference { return $this->get('launch'); }
    public function hasLaunch(): bool { return $this->has('launch'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getMachineCompletable(): bool { return $this->get('machine_completable'); }
    public function hasMachineCompletable(): bool { return $this->has('machine_completable'); }
    /** Shape $ (Value): string.  Value enum: "agent", "human", "system".
     * @return string
     */
    public function getOwner(): string { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return ?list<string>
     */
    public function getRequiredFields(): ?array { return $this->get('required_fields'); }
    public function hasRequiredFields(): bool { return $this->has('required_fields'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getSubmitEndpoint(): ?string { return $this->get('submit_endpoint'); }
    public function hasSubmitEndpoint(): bool { return $this->has('submit_endpoint'); }
    /** Shape $ (Value): string. HTTP method for submit_endpoint.
     * @return ?string
     */
    public function getSubmitMethod(): ?string { return $this->get('submit_method'); }
    public function hasSubmitMethod(): bool { return $this->has('submit_method'); }
}
