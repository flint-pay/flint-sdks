<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $checkout_session_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsGetCurrentDeliverySelectionInput extends Model {
    /** @param array{'checkout_session_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsGetCurrentDeliverySelectionInput')); }
    /** @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
}
