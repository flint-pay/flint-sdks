<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $components
 * @property-read MerchantAccountSessionEffectivePolicyInput|array<array-key, mixed>|\stdClass $effective_policy
 * @property-read OnboardingExternalActionInput|array<array-key, mixed>|\stdClass $external_action
 * @property-read OnboardingRequirementsInput|array<array-key, mixed>|\stdClass $requirements
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionInput extends Model {
    /** @param array{'components': list<string>, 'effective_policy': MerchantAccountSessionEffectivePolicyInput|array<array-key, mixed>|\stdClass, 'external_action': OnboardingExternalActionInput|array<array-key, mixed>|\stdClass, 'requirements': OnboardingRequirementsInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionInput')); }
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
    /** @return OnboardingExternalActionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When external_action is omitted; use hasExternalAction() or valueOrDefault().
     */
    public function getExternalAction(): mixed { return $this->get('external_action'); }
    public function hasExternalAction(): bool { return $this->has('external_action'); }
    /** @return OnboardingRequirementsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): mixed { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
}
