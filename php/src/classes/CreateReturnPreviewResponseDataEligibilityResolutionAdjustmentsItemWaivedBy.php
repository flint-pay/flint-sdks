<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $actor_id
 * @property-read string $actor_type
 * Presence-aware response; omitted optional fields return null. */
final class CreateReturnPreviewResponseDataEligibilityResolutionAdjustmentsItemWaivedBy extends Model {
    /** @param array{'actor_id'?: string, 'actor_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnPreviewResponseDataEligibilityResolutionAdjustmentsItemWaivedBy')); }
    /** actor_id
     * @return ?string
     */
    public function getActorId(): ?string { return $this->get('actor_id'); }
    public function hasActorId(): bool { return $this->has('actor_id'); }
    /** Value enum: "buyer", "merchant", "integration", "system".
     * @return string
     */
    public function getActorType(): string { return $this->get('actor_type'); }
    public function hasActorType(): bool { return $this->has('actor_type'); }
}
