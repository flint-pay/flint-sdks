<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $enabled
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSavedPaymentDetailsSettingsRequestInput extends Model {
    /** @param array{'enabled'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSavedPaymentDetailsSettingsRequestInput')); }
    /** Whether hosted checkout shows buyers an unchecked option to save the card they type. A card is saved only when the buyer checks it and the payment succeeds, with usage on_session: Flint charges it only in checkouts the buyer completes, never for subscriptions, automatic invoices, or other charges without the buyer. Checkout never shows the option when customer accounts are merchant hosted, or for invoice, subscription, and return checkouts.
     * @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
