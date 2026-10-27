<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $fraud_warning_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class FraudWarningsGetInput extends Model {
    /** @param array{'fraud_warning_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarningsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When fraud_warning_id is omitted; use hasFraudWarningId() or valueOrDefault().
     */
    public function getFraudWarningId(): string { return $this->get('fraud_warning_id'); }
    public function hasFraudWarningId(): bool { return $this->has('fraud_warning_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "dispute", "payment_intent". Shape $[] (Value): string.  Value enum: "dispute", "payment_intent".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
