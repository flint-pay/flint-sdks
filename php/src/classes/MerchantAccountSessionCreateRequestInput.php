<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $collection_strategy
 * @property-read list<string> $components
 * @property-read string $future_requirements
 * @property-read string $sandbox_id
 * @property-read list<string> $targeted_requirement_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionCreateRequestInput extends Model {
    /** @param array{'collection_strategy'?: string, 'components': list<string>, 'future_requirements'?: string, 'sandbox_id'?: string, 'targeted_requirement_ids'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionCreateRequestInput')); }
    /** @return string
     * @throws SdkError When collection_strategy is omitted; use hasCollectionStrategy() or valueOrDefault().
     */
    public function getCollectionStrategy(): string { return $this->get('collection_strategy'); }
    public function hasCollectionStrategy(): bool { return $this->has('collection_strategy'); }
    /** @return list<string>
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** @return string
     * @throws SdkError When future_requirements is omitted; use hasFutureRequirements() or valueOrDefault().
     */
    public function getFutureRequirements(): string { return $this->get('future_requirements'); }
    public function hasFutureRequirements(): bool { return $this->has('future_requirements'); }
    /** @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** @return list<string>
     * @throws SdkError When targeted_requirement_ids is omitted; use hasTargetedRequirementIds() or valueOrDefault().
     */
    public function getTargetedRequirementIds(): array { return $this->get('targeted_requirement_ids'); }
    public function hasTargetedRequirementIds(): bool { return $this->has('targeted_requirement_ids'); }
}
