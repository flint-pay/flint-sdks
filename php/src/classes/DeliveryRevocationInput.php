<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $delivery_revocation_id
 * @property-read DeliveryRevocationImpactInput|array<array-key, mixed>|\stdClass $estimated_impact
 * @property-read string $merchant_note
 * @property-read string $reason
 * @property-read DeliveryRevocationTargetInput|array<array-key, mixed>|\stdClass $target
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRevocationInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'delivery_revocation_id': string, 'estimated_impact': DeliveryRevocationImpactInput|array<array-key, mixed>|\stdClass, 'merchant_note'?: string, 'reason': string, 'target': DeliveryRevocationTargetInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRevocationInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When delivery_revocation_id is omitted; use hasDeliveryRevocationId() or valueOrDefault().
     */
    public function getDeliveryRevocationId(): string { return $this->get('delivery_revocation_id'); }
    public function hasDeliveryRevocationId(): bool { return $this->has('delivery_revocation_id'); }
    /** @return DeliveryRevocationImpactInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When estimated_impact is omitted; use hasEstimatedImpact() or valueOrDefault().
     */
    public function getEstimatedImpact(): mixed { return $this->get('estimated_impact'); }
    public function hasEstimatedImpact(): bool { return $this->has('estimated_impact'); }
    /** @return string
     * @throws SdkError When merchant_note is omitted; use hasMerchantNote() or valueOrDefault().
     */
    public function getMerchantNote(): string { return $this->get('merchant_note'); }
    public function hasMerchantNote(): bool { return $this->has('merchant_note'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return DeliveryRevocationTargetInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When target is omitted; use hasTarget() or valueOrDefault().
     */
    public function getTarget(): mixed { return $this->get('target'); }
    public function hasTarget(): bool { return $this->has('target'); }
}
