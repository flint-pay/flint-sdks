<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $actor_id
 * @property-read string|null $actor_type
 * Presence-aware response; omitted optional fields return null. */
final class ReturnActorPreviousAttributes extends Model {
    /** @param array{'actor_id'?: mixed, 'actor_type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnActorPreviousAttributes')); }
    /** ID of the actor, when one exists. Merchant reads only. anyOf[1] (Value): string. ID of the actor, when one exists. Merchant reads only. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getActorId(): string|null { return $this->get('actor_id'); }
    public function hasActorId(): bool { return $this->has('actor_id'); }
    /** What kind of actor acted. Value enum: "buyer", "merchant", "integration", "system". anyOf[1] (Value): string. What kind of actor acted. Value enum: "buyer", "merchant", "integration", "system". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getActorType(): string|null { return $this->get('actor_type'); }
    public function hasActorType(): bool { return $this->has('actor_type'); }
}
