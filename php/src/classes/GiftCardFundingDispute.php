<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $dispute_id
 * @property-read bool $requires_resolution
 * @property-read GiftCardFundingLossResolution $resolution
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardFundingDispute extends Model {
    /** @param array{'created_at': string, 'dispute_id': string, 'requires_resolution': bool, 'resolution'?: object{'created_at': string, 'disposition': string, 'gift_card_funding_disposition_id': string, 'reason_message': string}, 'status': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingDispute')); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** @return bool
     * @throws SdkError When requires_resolution is omitted; use hasRequiresResolution() or valueOrDefault().
     */
    public function getRequiresResolution(): bool { return $this->get('requires_resolution'); }
    public function hasRequiresResolution(): bool { return $this->has('requires_resolution'); }
    /** @return GiftCardFundingLossResolution
     * @throws SdkError When resolution is omitted; use hasResolution() or valueOrDefault().
     */
    public function getResolution(): GiftCardFundingLossResolution { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
