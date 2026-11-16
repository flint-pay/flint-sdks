<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read string|null $dispute_id
 * @property-read bool|null $requires_resolution
 * @property-read GiftCardFundingLossResolutionPreviousAttributes|null $resolution
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardFundingDisputePreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'dispute_id'?: mixed, 'requires_resolution'?: mixed, 'resolution'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingDisputePreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The dispute on the payment that funded this load. anyOf[1] (Value): string. The dispute on the payment that funded this load. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDisputeId(): string|null { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions. anyOf[1] (Value): boolean. true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getRequiresResolution(): bool|null { return $this->get('requires_resolution'); }
    public function hasRequiresResolution(): bool { return $this->has('requires_resolution'); }
    /** The funding disposition recorded for this lost dispute. `null` when you have not created one yet. anyOf[1] (Value): {@see GiftCardFundingLossResolutionPreviousAttributes}. anyOf[2] (Value): null.
     * @return GiftCardFundingLossResolutionPreviousAttributes|null
     */
    public function getResolution(): GiftCardFundingLossResolutionPreviousAttributes|null { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
    /** Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. Value enum: "open", "won", "lost". anyOf[1] (Value): string. Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. Value enum: "open", "won", "lost". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
