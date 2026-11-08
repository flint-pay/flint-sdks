<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $disposition
 * @property-read string $gift_card_funding_disposition_id
 * @property-read string $reason_message
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardFundingLossResolutionInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'disposition': string, 'gift_card_funding_disposition_id': string, 'reason_message': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingLossResolutionInput')); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** What the merchant decided about the card's value after the funding payment lost a dispute. Value enum: "honor_value".
     * @return string
     * @throws SdkError When disposition is omitted; use hasDisposition() or valueOrDefault().
     */
    public function getDisposition(): string { return $this->get('disposition'); }
    public function hasDisposition(): bool { return $this->has('disposition'); }
    /** ID of the funding disposition recorded for the lost dispute. Example: "gfd_01KEZF7C0077Q8RK3Q4FD2DTW8".
     * @return string
     * @throws SdkError When gift_card_funding_disposition_id is omitted; use hasGiftCardFundingDispositionId() or valueOrDefault().
     */
    public function getGiftCardFundingDispositionId(): string { return $this->get('gift_card_funding_disposition_id'); }
    public function hasGiftCardFundingDispositionId(): bool { return $this->has('gift_card_funding_disposition_id'); }
    /** The note you gave when you created the disposition.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
}
