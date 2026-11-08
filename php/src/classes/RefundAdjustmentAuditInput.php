<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $actor_id
 * @property-read string $actor_type
 * @property-read string $source
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundAdjustmentAuditInput extends Model {
    /** @param array{'actor_id': string, 'actor_type': string, 'source': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundAdjustmentAuditInput')); }
    /** ID you use for whoever made the adjustment, up to 255 characters. minLength: 1. Example: "usr_01KEZF7C00YC8757ZYP9727JM0".
     * @return string
     * @throws SdkError When actor_id is omitted; use hasActorId() or valueOrDefault().
     */
    public function getActorId(): string { return $this->get('actor_id'); }
    public function hasActorId(): bool { return $this->has('actor_id'); }
    /** What kind of actor made the adjustment. Example: "user". Value enum: "user", "system", "admin".
     * @return string
     * @throws SdkError When actor_type is omitted; use hasActorType() or valueOrDefault().
     */
    public function getActorType(): string { return $this->get('actor_type'); }
    public function hasActorType(): bool { return $this->has('actor_type'); }
    /** Where the adjustment came from, such as the name of your support tool. 1 to 255 characters. minLength: 1.
     * @return string
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
