<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentSourceAchDebitSummary $ach_debit
 * @property-read PaymentSourceCardSummary $card
 * @property-read string $type
 * Presence-aware response; omitted fields throw when accessed. */
final class PaymentSourceSummary extends Model {
    /** @param array{'ach_debit'?: mixed, 'card'?: mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceSummary')); }
    /** @return PaymentSourceAchDebitSummary
     * @throws SdkError When ach_debit is omitted; use hasAchDebit() or valueOrDefault().
     */
    public function getAchDebit(): PaymentSourceAchDebitSummary { return $this->get('ach_debit'); }
    public function hasAchDebit(): bool { return $this->has('ach_debit'); }
    /** @return PaymentSourceCardSummary
     * @throws SdkError When card is omitted; use hasCard() or valueOrDefault().
     */
    public function getCard(): PaymentSourceCardSummary { return $this->get('card'); }
    public function hasCard(): bool { return $this->has('card'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
