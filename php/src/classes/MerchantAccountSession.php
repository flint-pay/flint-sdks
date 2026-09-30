<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $components
 * @property-read MerchantAccountSessionEffectivePolicy $effective_policy
 * @property-read OnboardingExternalAction $external_action
 * @property-read OnboardingRequirements $requirements
 * Presence-aware response; omitted fields throw when accessed. */
final class MerchantAccountSession extends Model {
    /** @param array{'components': list<string>, 'effective_policy': mixed, 'external_action': mixed, 'requirements': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSession')); }
    /** @return list<string>
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** @return MerchantAccountSessionEffectivePolicy
     * @throws SdkError When effective_policy is omitted; use hasEffectivePolicy() or valueOrDefault().
     */
    public function getEffectivePolicy(): MerchantAccountSessionEffectivePolicy { return $this->get('effective_policy'); }
    public function hasEffectivePolicy(): bool { return $this->has('effective_policy'); }
    /** @return OnboardingExternalAction
     * @throws SdkError When external_action is omitted; use hasExternalAction() or valueOrDefault().
     */
    public function getExternalAction(): OnboardingExternalAction { return $this->get('external_action'); }
    public function hasExternalAction(): bool { return $this->has('external_action'); }
    /** @return OnboardingRequirements
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): OnboardingRequirements { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
}
