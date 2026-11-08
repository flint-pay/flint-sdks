<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $delivery_revocation_id
 * @property-read DeliveryRevocationImpact $estimated_impact
 * @property-read ?string $merchant_note
 * @property-read string $reason
 * @property-read DeliveryRevocationCreatedMerchantEventDataObjectTargetLocationGeography|DeliveryRevocationCreatedMerchantEventDataObjectTargetDeliveryRateCallbackSigningKey|DeliveryRevocationCreatedMerchantEventDataObjectTargetDeliveryRateCallbackRevision|DeliveryRevocationCreatedMerchantEventDataObjectTargetDeliveryMethodRevision|\stdClass $target
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRevocationCreatedMerchantEventDataObject extends Model {
    /** @param array{'created_at': string, 'delivery_revocation_id': string, 'estimated_impact': mixed, 'merchant_note'?: string, 'reason': string, 'target': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRevocationCreatedMerchantEventDataObject')); }
    /** When Flint created this permanent fence, as an RFC 3339 timestamp in UTC. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Unique ID of this permanent delivery revocation.
     * @return string
     */
    public function getDeliveryRevocationId(): string { return $this->get('delivery_revocation_id'); }
    public function hasDeliveryRevocationId(): bool { return $this->has('delivery_revocation_id'); }
    /** Counts of active quotes and provisional selections that depended on the target when the fence was created. Later reads keep these recorded counts. Counts of active delivery quotes and current delivery selections affected by a delivery revocation.
     * @return DeliveryRevocationImpact
     */
    public function getEstimatedImpact(): DeliveryRevocationImpact { return $this->get('estimated_impact'); }
    public function hasEstimatedImpact(): bool { return $this->has('estimated_impact'); }
    /** Optional incident context recorded when this revocation was created.
     * @return ?string
     */
    public function getMerchantNote(): ?string { return $this->get('merchant_note'); }
    public function hasMerchantNote(): bool { return $this->has('merchant_note'); }
    /** Why the dependency was permanently fenced. Value enum: "unsafe_configuration", "location_unavailable", "credential_compromise", "legal_requirement", "other".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** The parent and exact revision, HMAC signing key, or recorded geography version permanently fenced by this revocation. The parent and exact child identity permanently fenced by this revocation.
     * @return DeliveryRevocationCreatedMerchantEventDataObjectTargetLocationGeography|DeliveryRevocationCreatedMerchantEventDataObjectTargetDeliveryRateCallbackSigningKey|DeliveryRevocationCreatedMerchantEventDataObjectTargetDeliveryRateCallbackRevision|DeliveryRevocationCreatedMerchantEventDataObjectTargetDeliveryMethodRevision|\stdClass
     */
    public function getTarget(): DeliveryRevocationCreatedMerchantEventDataObjectTargetLocationGeography|DeliveryRevocationCreatedMerchantEventDataObjectTargetDeliveryRateCallbackSigningKey|DeliveryRevocationCreatedMerchantEventDataObjectTargetDeliveryRateCallbackRevision|DeliveryRevocationCreatedMerchantEventDataObjectTargetDeliveryMethodRevision|\stdClass { return $this->get('target'); }
    public function hasTarget(): bool { return $this->has('target'); }
}
