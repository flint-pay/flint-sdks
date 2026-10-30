<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_delivery_selection_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsDeleteCurrentDeliverySelectionParams extends Model {
    /** @param array{'expected_delivery_selection_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsDeleteCurrentDeliverySelectionParams')); }
    /** Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to clear whichever selection is current.
     * @return string
     * @throws SdkError When expected_delivery_selection_id is omitted; use hasExpectedDeliverySelectionId() or valueOrDefault().
     */
    public function getExpectedDeliverySelectionId(): string { return $this->get('expected_delivery_selection_id'); }
    public function hasExpectedDeliverySelectionId(): bool { return $this->has('expected_delivery_selection_id'); }
}
