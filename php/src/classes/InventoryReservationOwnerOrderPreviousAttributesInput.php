<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $order_id
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationOwnerOrderPreviousAttributesInput extends Model {
    /** @param array{'order_id'?: string|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationOwnerOrderPreviousAttributesInput')); }
    /** The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. anyOf[1] (Value): string. The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Who holds the reservation. Value enum: "order". anyOf[1] (Value): string. Who holds the reservation. Value enum: "order". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
