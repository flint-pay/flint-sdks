<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $dispute_id
 * @property-read bool|null $requires_resolution
 * @property-read GiftCardFundingLossResolutionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $resolution
 * @property-read string|null $status
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardFundingDisputePreviousAttributesInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface|null, 'dispute_id'?: string|null, 'requires_resolution'?: bool|null, 'resolution'?: GiftCardFundingLossResolutionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'status'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, 'version'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingDisputePreviousAttributesInput')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The dispute on the payment that funded this load. anyOf[1] (Value): string. The dispute on the payment that funded this load. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): mixed { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions. anyOf[1] (Value): boolean. true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When requires_resolution is omitted; use hasRequiresResolution() or valueOrDefault().
     */
    public function getRequiresResolution(): mixed { return $this->get('requires_resolution'); }
    public function hasRequiresResolution(): bool { return $this->has('requires_resolution'); }
    /** The funding disposition recorded for this lost dispute. `null` when you have not created one yet. anyOf[1] (Value): {@see GiftCardFundingLossResolutionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return GiftCardFundingLossResolutionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When resolution is omitted; use hasResolution() or valueOrDefault().
     */
    public function getResolution(): mixed { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
    /** Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. Value enum: "open", "won", "lost". anyOf[1] (Value): string. Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. Value enum: "open", "won", "lost". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
