<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $audience
 * @property-read BuyerDeliverySelection|null $delivery_selection
 * @property-read bool $mutable
 * @property-read string $source
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutSessionsGetCurrentDeliverySelectionResponse200DataBuyer extends Model {
    /** @param array{'audience': string, 'delivery_selection'?: mixed, 'mutable': bool, 'source': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsGetCurrentDeliverySelectionResponse200DataBuyer')); }
    /** @return string
     * @throws SdkError When audience is omitted; use hasAudience() or valueOrDefault().
     */
    public function getAudience(): string { return $this->get('audience'); }
    public function hasAudience(): bool { return $this->has('audience'); }
    /** @return BuyerDeliverySelection|null
     * @throws SdkError When delivery_selection is omitted; use hasDeliverySelection() or valueOrDefault().
     */
    public function getDeliverySelection(): BuyerDeliverySelection|null { return $this->get('delivery_selection'); }
    public function hasDeliverySelection(): bool { return $this->has('delivery_selection'); }
    /** @return bool
     * @throws SdkError When mutable is omitted; use hasMutable() or valueOrDefault().
     */
    public function getMutable(): bool { return $this->get('mutable'); }
    public function hasMutable(): bool { return $this->has('mutable'); }
    /** @return string
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
