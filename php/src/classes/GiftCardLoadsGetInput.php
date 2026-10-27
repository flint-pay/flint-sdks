<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $gift_card_load_id
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardLoadsGetInput extends Model {
    /** @param array{'gift_card_load_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardLoadsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_load_id is omitted; use hasGiftCardLoadId() or valueOrDefault().
     */
    public function getGiftCardLoadId(): string { return $this->get('gift_card_load_id'); }
    public function hasGiftCardLoadId(): bool { return $this->has('gift_card_load_id'); }
}
