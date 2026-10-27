<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $gift_card_id
 * @property-read string $last4
 * @property-read string $original_gift_card_id
 * @property-read string $restoration_reason
 * @property-read string $unit_ordinal
 * Presence-aware input; omitted fields throw when accessed. */
final class PurchasedGiftCardInput extends Model {
    /** @param array{'gift_card_id': string, 'last4': string, 'original_gift_card_id'?: string, 'restoration_reason'?: string, 'unit_ordinal': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PurchasedGiftCardInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Shape $ (Value): string. Last four characters of the card's current code.
     * @return string
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When original_gift_card_id is omitted; use hasOriginalGiftCardId() or valueOrDefault().
     */
    public function getOriginalGiftCardId(): string { return $this->get('original_gift_card_id'); }
    public function hasOriginalGiftCardId(): bool { return $this->has('original_gift_card_id'); }
    /** Shape $ (Value): string.  Value enum: "manual_recollection", "processor_recollection".
     * @return string
     * @throws SdkError When restoration_reason is omitted; use hasRestorationReason() or valueOrDefault().
     */
    public function getRestorationReason(): string { return $this->get('restoration_reason'); }
    public function hasRestorationReason(): bool { return $this->has('restoration_reason'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When unit_ordinal is omitted; use hasUnitOrdinal() or valueOrDefault().
     */
    public function getUnitOrdinal(): string { return $this->get('unit_ordinal'); }
    public function hasUnitOrdinal(): bool { return $this->has('unit_ordinal'); }
}
