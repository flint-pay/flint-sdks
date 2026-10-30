<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $fraud_warning_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class FraudWarningsGetInput extends Model {
    /** @param array{'fraud_warning_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarningsGetInput')); }
    /** Flint fraud warning ID. Example: "frw_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When fraud_warning_id is omitted; use hasFraudWarningId() or valueOrDefault().
     */
    public function getFraudWarningId(): string { return $this->get('fraud_warning_id'); }
    public function hasFraudWarningId(): bool { return $this->has('fraud_warning_id'); }
    /** Supported expansions: dispute, payment_intent. Expansion requires risk.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=dispute&expand=payment_intent, or pass one comma-separated value. [] enum: "dispute", "payment_intent". Value enum: "dispute", "payment_intent". anyOf[1] (Value): Array of string.  [] enum: "dispute", "payment_intent". anyOf[1][] (Value): string.  Value enum: "dispute", "payment_intent". anyOf[2] (Value): string.  Value enum: "dispute", "payment_intent".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
