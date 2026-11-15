<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $enabled
 * Presence-aware input; omitted fields throw when accessed. */
final class ReaderPaymentSourceTipInput extends Model {
    /** @param array{'enabled': bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReaderPaymentSourceTipInput')); }
    /** Show the smart reader's tip screen before the card. Not accepted on Tap to Pay readers, on an order with a requested tip, or on a payment that already carries a tip. Default: false.
     * @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
