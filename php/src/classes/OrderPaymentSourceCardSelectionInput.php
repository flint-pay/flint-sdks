<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $digital_wallets
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderPaymentSourceCardSelectionInput extends Model {
    /** @param array{'digital_wallets'?: list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentSourceCardSelectionInput')); }
    /** @return list<string>
     * @throws SdkError When digital_wallets is omitted; use hasDigitalWallets() or valueOrDefault().
     */
    public function getDigitalWallets(): array { return $this->get('digital_wallets'); }
    public function hasDigitalWallets(): bool { return $this->has('digital_wallets'); }
}
