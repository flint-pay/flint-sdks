<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read array<array-key, string>|\stdClass $context
 * @property-read string $message
 * @property-read string $severity
 * Presence-aware input; omitted fields throw when accessed. */
final class RuleWarningInput extends Model {
    /** @param array{'code': string, 'context': array<array-key, string>|\stdClass, 'message': string, 'severity': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RuleWarningInput')); }
    /** @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When context is omitted; use hasContext() or valueOrDefault().
     */
    public function getContext(): array|object { return $this->get('context'); }
    public function hasContext(): bool { return $this->has('context'); }
    /** @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** @return string
     * @throws SdkError When severity is omitted; use hasSeverity() or valueOrDefault().
     */
    public function getSeverity(): string { return $this->get('severity'); }
    public function hasSeverity(): bool { return $this->has('severity'); }
}
