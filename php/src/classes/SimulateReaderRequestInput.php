<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $card_brand
 * @property-read string $outcome
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tip_money
 * Presence-aware input; omitted fields throw when accessed. */
final class SimulateReaderRequestInput extends Model {
    /** @param array{'card_brand'?: string, 'outcome': string, 'tip_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SimulateReaderRequestInput')); }
    /** The brand of the test card to present. Defaults to `visa`. Declines present Visa test cards whatever brand you send. Value enum: "visa", "mastercard", "amex", "discover".
     * @return string
     * @throws SdkError When card_brand is omitted; use hasCardBrand() or valueOrDefault().
     */
    public function getCardBrand(): string { return $this->get('card_brand'); }
    public function hasCardBrand(): bool { return $this->has('card_brand'); }
    /** The buyer's and issuer's decision. Value enum: "approved", "declined", "insufficient_funds".
     * @return string
     * @throws SdkError When outcome is omitted; use hasOutcome() or valueOrDefault().
     */
    public function getOutcome(): string { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** The tip the buyer picks, when the payment was sent with the tip screen on. USD only. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip_money is omitted; use hasTipMoney() or valueOrDefault().
     */
    public function getTipMoney(): mixed { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
}
