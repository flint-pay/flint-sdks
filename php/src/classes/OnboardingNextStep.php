<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read OnboardingLaunchReference $launch
 * @property-read bool $machine_completable
 * @property-read string $owner
 * @property-read list<string> $required_fields
 * @property-read string $submit_endpoint
 * @property-read string $submit_method
 * Presence-aware response; omitted fields throw when accessed. */
final class OnboardingNextStep extends Model {
    /** @param array{'code': string, 'launch'?: mixed, 'machine_completable': bool, 'owner': string, 'required_fields'?: list<string>, 'submit_endpoint'?: string, 'submit_method'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingNextStep')); }
    /** @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** @return OnboardingLaunchReference
     * @throws SdkError When launch is omitted; use hasLaunch() or valueOrDefault().
     */
    public function getLaunch(): OnboardingLaunchReference { return $this->get('launch'); }
    public function hasLaunch(): bool { return $this->has('launch'); }
    /** @return bool
     * @throws SdkError When machine_completable is omitted; use hasMachineCompletable() or valueOrDefault().
     */
    public function getMachineCompletable(): bool { return $this->get('machine_completable'); }
    public function hasMachineCompletable(): bool { return $this->has('machine_completable'); }
    /** @return string
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): string { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
    /** @return list<string>
     * @throws SdkError When required_fields is omitted; use hasRequiredFields() or valueOrDefault().
     */
    public function getRequiredFields(): array { return $this->get('required_fields'); }
    public function hasRequiredFields(): bool { return $this->has('required_fields'); }
    /** @return string
     * @throws SdkError When submit_endpoint is omitted; use hasSubmitEndpoint() or valueOrDefault().
     */
    public function getSubmitEndpoint(): string { return $this->get('submit_endpoint'); }
    public function hasSubmitEndpoint(): bool { return $this->has('submit_endpoint'); }
    /** @return string
     * @throws SdkError When submit_method is omitted; use hasSubmitMethod() or valueOrDefault().
     */
    public function getSubmitMethod(): string { return $this->get('submit_method'); }
    public function hasSubmitMethod(): bool { return $this->has('submit_method'); }
}
