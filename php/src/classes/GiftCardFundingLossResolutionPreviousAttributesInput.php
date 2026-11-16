<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $disposition
 * @property-read string|null $gift_card_funding_disposition_id
 * @property-read string|null $reason_message
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardFundingLossResolutionPreviousAttributesInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface|null, 'disposition'?: string|null, 'gift_card_funding_disposition_id'?: string|null, 'reason_message'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingLossResolutionPreviousAttributesInput')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** What the merchant decided about the card's value after the funding payment lost a dispute. Value enum: "honor_value". anyOf[1] (Value): string. What the merchant decided about the card's value after the funding payment lost a dispute. Value enum: "honor_value". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When disposition is omitted; use hasDisposition() or valueOrDefault().
     */
    public function getDisposition(): mixed { return $this->get('disposition'); }
    public function hasDisposition(): bool { return $this->has('disposition'); }
    /** ID of the funding disposition recorded for the lost dispute. anyOf[1] (Value): string. ID of the funding disposition recorded for the lost dispute. Example: "gfd_01KEZF7C0077Q8RK3Q4FD2DTW8". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When gift_card_funding_disposition_id is omitted; use hasGiftCardFundingDispositionId() or valueOrDefault().
     */
    public function getGiftCardFundingDispositionId(): mixed { return $this->get('gift_card_funding_disposition_id'); }
    public function hasGiftCardFundingDispositionId(): bool { return $this->has('gift_card_funding_disposition_id'); }
    /** The note you gave when you created the disposition. anyOf[1] (Value): string. The note you gave when you created the disposition. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): mixed { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
}
