<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $gift_card_id
 * @property-read string $last4
 * @property-read ?string $original_gift_card_id
 * @property-read ?string $restoration_reason
 * @property-read int $unit_ordinal
 * Presence-aware response; omitted optional fields return null. */
final class PurchasedGiftCard extends Model {
    /** @param array{'gift_card_id': string, 'last4': string, 'original_gift_card_id'?: string, 'restoration_reason'?: string, 'unit_ordinal': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PurchasedGiftCard')); }
    /** gift_card_id
     * @return string
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Last four characters of the card's current code.
     * @return string
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** original_gift_card_id
     * @return ?string
     */
    public function getOriginalGiftCardId(): ?string { return $this->get('original_gift_card_id'); }
    public function hasOriginalGiftCardId(): bool { return $this->has('original_gift_card_id'); }
    /** Value enum: "manual_recollection", "processor_recollection".
     * @return ?string
     */
    public function getRestorationReason(): ?string { return $this->get('restoration_reason'); }
    public function hasRestorationReason(): bool { return $this->has('restoration_reason'); }
    /** Format: int64. minimum: 1.
     * @return int
     */
    public function getUnitOrdinal(): int { return $this->get('unit_ordinal'); }
    public function hasUnitOrdinal(): bool { return $this->has('unit_ordinal'); }
}
