<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $flint_wallet_card_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateFlintWalletStoreSetupInput extends Model {
    /** @param array{'flint_wallet_card_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateFlintWalletStoreSetupInput')); }
    /** The card's handle at this store. Example: "fwc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When flint_wallet_card_id is omitted; use hasFlintWalletCardId() or valueOrDefault().
     */
    public function getFlintWalletCardId(): string { return $this->get('flint_wallet_card_id'); }
    public function hasFlintWalletCardId(): bool { return $this->has('flint_wallet_card_id'); }
}
