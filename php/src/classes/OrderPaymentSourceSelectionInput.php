<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderPaymentSourceCardSelectionInput|array<array-key, mixed>|\stdClass $card
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderPaymentSourceSelectionInput extends Model {
    /** @param array{'card'?: OrderPaymentSourceCardSelectionInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentSourceSelectionInput')); }
    /** @return OrderPaymentSourceCardSelectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When card is omitted; use hasCard() or valueOrDefault().
     */
    public function getCard(): mixed { return $this->get('card'); }
    public function hasCard(): bool { return $this->has('card'); }
}
