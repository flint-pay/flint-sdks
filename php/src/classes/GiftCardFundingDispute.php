<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $dispute_id
 * @property-read bool $requires_resolution
 * @property-read GiftCardFundingLossResolution|null $resolution
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardFundingDispute extends Model {
    /** @param array{'created_at': string, 'dispute_id': string, 'requires_resolution': bool, 'resolution': mixed, 'status': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingDispute')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getRequiresResolution(): bool { return $this->get('requires_resolution'); }
    public function hasRequiresResolution(): bool { return $this->has('requires_resolution'); }
    /** Shape $ (Value): {@see GiftCardFundingLossResolution} or null. Shape $.anyOf[1] (Value): {@see GiftCardFundingLossResolution}. How a lost funding dispute was resolved for a gift card load, such as honoring the card's value, with a reason message. Shape $.anyOf[2] (Value): null.
     * @return GiftCardFundingLossResolution|null
     */
    public function getResolution(): GiftCardFundingLossResolution|null { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
    /** Shape $ (Value): string.  Value enum: "open", "won", "lost".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
