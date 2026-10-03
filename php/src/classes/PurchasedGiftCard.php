<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $gift_card_id
 * @property-read string $last_characters
 * @property-read string $original_gift_card_id
 * @property-read string $restoration_reason
 * @property-read string $unit_ordinal
 * Presence-aware response; omitted fields throw when accessed. */
final class PurchasedGiftCard extends Model {
    /** @param array{'gift_card_id': string, 'last_characters': string, 'original_gift_card_id'?: string, 'restoration_reason'?: string, 'unit_ordinal': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PurchasedGiftCard')); }
    /** @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** @return string
     * @throws SdkError When last_characters is omitted; use hasLastCharacters() or valueOrDefault().
     */
    public function getLastCharacters(): string { return $this->get('last_characters'); }
    public function hasLastCharacters(): bool { return $this->has('last_characters'); }
    /** @return string
     * @throws SdkError When original_gift_card_id is omitted; use hasOriginalGiftCardId() or valueOrDefault().
     */
    public function getOriginalGiftCardId(): string { return $this->get('original_gift_card_id'); }
    public function hasOriginalGiftCardId(): bool { return $this->has('original_gift_card_id'); }
    /** @return string
     * @throws SdkError When restoration_reason is omitted; use hasRestorationReason() or valueOrDefault().
     */
    public function getRestorationReason(): string { return $this->get('restoration_reason'); }
    public function hasRestorationReason(): bool { return $this->has('restoration_reason'); }
    /** @return string
     * @throws SdkError When unit_ordinal is omitted; use hasUnitOrdinal() or valueOrDefault().
     */
    public function getUnitOrdinal(): string { return $this->get('unit_ordinal'); }
    public function hasUnitOrdinal(): bool { return $this->has('unit_ordinal'); }
}
