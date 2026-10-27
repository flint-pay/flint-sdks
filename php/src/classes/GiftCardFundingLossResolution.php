<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $disposition
 * @property-read string $gift_card_funding_disposition_id
 * @property-read string $reason_message
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardFundingLossResolution extends Model {
    /** @param array{'created_at': string, 'disposition': string, 'gift_card_funding_disposition_id': string, 'reason_message': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingLossResolution')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.  Value enum: "honor_value".
     * @return string
     */
    public function getDisposition(): string { return $this->get('disposition'); }
    public function hasDisposition(): bool { return $this->has('disposition'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getGiftCardFundingDispositionId(): string { return $this->get('gift_card_funding_disposition_id'); }
    public function hasGiftCardFundingDispositionId(): bool { return $this->has('gift_card_funding_disposition_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
}
