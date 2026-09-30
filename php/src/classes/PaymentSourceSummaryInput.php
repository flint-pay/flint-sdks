<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentSourceAchDebitSummaryInput|array<array-key, mixed>|\stdClass $ach_debit
 * @property-read PaymentSourceCardSummaryInput|array<array-key, mixed>|\stdClass $card
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceSummaryInput extends Model {
    /** @param array{'ach_debit'?: PaymentSourceAchDebitSummaryInput|array<array-key, mixed>|\stdClass, 'card'?: PaymentSourceCardSummaryInput|array<array-key, mixed>|\stdClass, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceSummaryInput')); }
    /** @return PaymentSourceAchDebitSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When ach_debit is omitted; use hasAchDebit() or valueOrDefault().
     */
    public function getAchDebit(): mixed { return $this->get('ach_debit'); }
    public function hasAchDebit(): bool { return $this->has('ach_debit'); }
    /** @return PaymentSourceCardSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When card is omitted; use hasCard() or valueOrDefault().
     */
    public function getCard(): mixed { return $this->get('card'); }
    public function hasCard(): bool { return $this->has('card'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
