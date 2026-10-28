<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $flint_wallet_card_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateFlintWalletStoreSetupInput extends Model {
    /** @param array{'flint_wallet_card_id': string, 'Idempotency-Key'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateFlintWalletStoreSetupInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When flint_wallet_card_id is omitted; use hasFlintWalletCardId() or valueOrDefault().
     */
    public function getFlintWalletCardId(): string { return $this->get('flint_wallet_card_id'); }
    public function hasFlintWalletCardId(): bool { return $this->has('flint_wallet_card_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
}
