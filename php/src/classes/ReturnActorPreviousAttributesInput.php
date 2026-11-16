<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $actor_id
 * @property-read string|null $actor_type
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnActorPreviousAttributesInput extends Model {
    /** @param array{'actor_id'?: string|null, 'actor_type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnActorPreviousAttributesInput')); }
    /** ID of the actor, when one exists. Merchant reads only. anyOf[1] (Value): string. ID of the actor, when one exists. Merchant reads only. Example: "usr_01KEZF7C00YC8757ZYP9727JM0". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When actor_id is omitted; use hasActorId() or valueOrDefault().
     */
    public function getActorId(): mixed { return $this->get('actor_id'); }
    public function hasActorId(): bool { return $this->has('actor_id'); }
    /** What kind of actor acted. Value enum: "buyer", "merchant", "integration", "system". anyOf[1] (Value): string. What kind of actor acted. Example: "merchant". Value enum: "buyer", "merchant", "integration", "system". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When actor_type is omitted; use hasActorType() or valueOrDefault().
     */
    public function getActorType(): mixed { return $this->get('actor_type'); }
    public function hasActorType(): bool { return $this->has('actor_type'); }
}
