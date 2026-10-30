<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $checkout_session_id
 * @property-read string $expected_delivery_selection_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsDeleteCurrentDeliverySelectionInput extends Model {
    /** @param array{'checkout_session_id': string, 'expected_delivery_selection_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsDeleteCurrentDeliverySelectionInput')); }
    /** Flint checkout session ID. Example: "cs_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to clear whichever selection is current.
     * @return string
     * @throws SdkError When expected_delivery_selection_id is omitted; use hasExpectedDeliverySelectionId() or valueOrDefault().
     */
    public function getExpectedDeliverySelectionId(): string { return $this->get('expected_delivery_selection_id'); }
    public function hasExpectedDeliverySelectionId(): bool { return $this->has('expected_delivery_selection_id'); }
}
