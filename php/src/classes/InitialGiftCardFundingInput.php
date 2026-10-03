<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object|null $consideration_money
 * @property-read mixed $source
 * @property-read string|\DateTimeInterface $source_created_at
 * @property-read array{'amount': string, 'currency': string}|object $value_money
 * Presence-aware input; omitted fields throw when accessed. */
final class InitialGiftCardFundingInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InitialGiftCardFundingInput')); }
    /** @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When consideration_money is omitted; use hasConsiderationMoney() or valueOrDefault().
     */
    public function getConsiderationMoney(): mixed { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** @return mixed
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When source_created_at is omitted; use hasSourceCreatedAt() or valueOrDefault().
     */
    public function getSourceCreatedAt(): string|\DateTimeInterface { return $this->get('source_created_at'); }
    public function hasSourceCreatedAt(): bool { return $this->has('source_created_at'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When value_money is omitted; use hasValueMoney() or valueOrDefault().
     */
    public function getValueMoney(): array|object { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
}
