<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $dispute_id
 * @property-read bool $requires_resolution
 * @property-read array{'created_at': string|\DateTimeInterface, 'disposition': string, 'gift_card_funding_disposition_id': string, 'reason_message': string, ...}|object|null $resolution
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardFundingDisputeInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'dispute_id': string, 'requires_resolution': bool, 'resolution': array{'created_at': string|\DateTimeInterface, 'disposition': string, 'gift_card_funding_disposition_id': string, 'reason_message': string, ...}|object|null, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingDisputeInput')); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The dispute on the payment that funded this load. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * @return string
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions.
     * @return bool
     * @throws SdkError When requires_resolution is omitted; use hasRequiresResolution() or valueOrDefault().
     */
    public function getRequiresResolution(): bool { return $this->get('requires_resolution'); }
    public function hasRequiresResolution(): bool { return $this->has('requires_resolution'); }
    /** The funding disposition recorded for this lost dispute. `null` when you have not created one yet. anyOf[1] (Value): {@see GiftCardFundingLossResolutionInput}. How a lost funding dispute was resolved for a gift card load, such as honoring the card's value, with a reason message. anyOf[2] (Value): null.
     * @return array{'created_at': string|\DateTimeInterface, 'disposition': string, 'gift_card_funding_disposition_id': string, 'reason_message': string, ...}|object|null
     * @throws SdkError When resolution is omitted; use hasResolution() or valueOrDefault().
     */
    public function getResolution(): mixed { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
    /** Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. Value enum: "open", "won", "lost".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
