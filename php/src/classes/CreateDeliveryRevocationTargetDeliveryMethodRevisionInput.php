<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_id
 * @property-read string $delivery_method_revision_id
 * @property-read string $target_type
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateDeliveryRevocationTargetDeliveryMethodRevisionInput extends Model {
    /** @param array{'delivery_method_id': string, 'delivery_method_revision_id': string, 'target_type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDeliveryRevocationTargetDeliveryMethodRevisionInput')); }
    /** ID of the delivery method that owns the targeted revision. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** ID of the immutable revision to fence. It must belong to delivery_method_id. minLength: 1. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     * @return string
     * @throws SdkError When delivery_method_revision_id is omitted; use hasDeliveryMethodRevisionId() or valueOrDefault().
     */
    public function getDeliveryMethodRevisionId(): string { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** Fences one immutable revision of the named delivery method. Value enum: "delivery_method_revision".
     * @return string
     * @throws SdkError When target_type is omitted; use hasTargetType() or valueOrDefault().
     */
    public function getTargetType(): string { return $this->get('target_type'); }
    public function hasTargetType(): bool { return $this->has('target_type'); }
}
