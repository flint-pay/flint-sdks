<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $gift_card_id
 * @property-read string|null $last4
 * @property-read string|null $original_gift_card_id
 * @property-read string|null $restoration_reason
 * @property-read int|null $unit_ordinal
 * Presence-aware response; omitted optional fields return null. */
final class PurchasedGiftCardPreviousAttributes extends Model {
    /** @param array{'gift_card_id'?: mixed, 'last4'?: mixed, 'original_gift_card_id'?: mixed, 'restoration_reason'?: mixed, 'unit_ordinal'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PurchasedGiftCardPreviousAttributes')); }
    /** ID of the gift card issued for the purchased unit. anyOf[1] (Value): string. ID of the gift card issued for the purchased unit. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardId(): string|null { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Last four characters of the card's current code. anyOf[1] (Value): string. Last four characters of the card's current code. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLast4(): string|null { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** ID of the card that this card replaces. Set when restoring reversed value needed a replacement card. anyOf[1] (Value): string. ID of the card that this card replaces. Set when restoring reversed value needed a replacement card. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOriginalGiftCardId(): string|null { return $this->get('original_gift_card_id'); }
    public function hasOriginalGiftCardId(): bool { return $this->has('original_gift_card_id'); }
    /** What restored the reversed value onto a replacement card. Value enum: "manual_recollection", "processor_recollection". anyOf[1] (Value): string. What restored the reversed value onto a replacement card. Value enum: "manual_recollection", "processor_recollection". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRestorationReason(): string|null { return $this->get('restoration_reason'); }
    public function hasRestorationReason(): bool { return $this->has('restoration_reason'); }
    /** Which unit of the line item's quantity this card was issued for, starting at 1. anyOf[1] (Value): integer. Which unit of the line item's quantity this card was issued for, starting at 1. Format: int64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getUnitOrdinal(): int|null { return $this->get('unit_ordinal'); }
    public function hasUnitOrdinal(): bool { return $this->has('unit_ordinal'); }
}
