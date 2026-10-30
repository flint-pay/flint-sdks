<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersApplyGiftCardParams extends Model {
    /** @param array{'code': string, 'expected_version'?: int, 'Flint-Gift-Card-Challenge'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersApplyGiftCardParams')); }
    /** minLength: 1. maxLength: 64.
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Optional order version from the last order read. The mutation fails if the order changed. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Single-use proof from the checkout's gift card challenge. Needed only after GIFT_CARD_CHALLENGE_REQUIRED. While a challenge is required, every code needs a new proof, for up to an hour after the failures that triggered it. Ignored for API keys.
     * @return string
     * @throws SdkError When Flint-Gift-Card-Challenge is omitted; use hasFlintGiftCardChallenge() or valueOrDefault().
     */
    public function getFlintGiftCardChallenge(): string { return $this->get('Flint-Gift-Card-Challenge'); }
    public function hasFlintGiftCardChallenge(): bool { return $this->has('Flint-Gift-Card-Challenge'); }
}
