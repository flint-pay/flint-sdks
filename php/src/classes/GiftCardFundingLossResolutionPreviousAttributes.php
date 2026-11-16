<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read string|null $disposition
 * @property-read string|null $gift_card_funding_disposition_id
 * @property-read string|null $reason_message
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardFundingLossResolutionPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'disposition'?: mixed, 'gift_card_funding_disposition_id'?: mixed, 'reason_message'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingLossResolutionPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** What the merchant decided about the card's value after the funding payment lost a dispute. Value enum: "honor_value". anyOf[1] (Value): string. What the merchant decided about the card's value after the funding payment lost a dispute. Value enum: "honor_value". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDisposition(): string|null { return $this->get('disposition'); }
    public function hasDisposition(): bool { return $this->has('disposition'); }
    /** ID of the funding disposition recorded for the lost dispute. anyOf[1] (Value): string. ID of the funding disposition recorded for the lost dispute. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardFundingDispositionId(): string|null { return $this->get('gift_card_funding_disposition_id'); }
    public function hasGiftCardFundingDispositionId(): bool { return $this->has('gift_card_funding_disposition_id'); }
    /** The note you gave when you created the disposition. anyOf[1] (Value): string. The note you gave when you created the disposition. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReasonMessage(): string|null { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
}
