<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read string $expected_version
 * @property-read string $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class TransitionGiftCardRequestFreezeInput extends Model {
    /** @param array{'action': string, 'expected_version'?: string, 'reason': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TransitionGiftCardRequestFreezeInput')); }
    /** Shape $ (Value): string.  Value enum: "freeze".
     * @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** Shape $ (Value): integer string. The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string.  Value enum: "suspicious_activity", "customer_request", "support_issue".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
