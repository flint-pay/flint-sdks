<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $outcome
 * Presence-aware input; omitted fields throw when accessed. */
final class SimulateDisputeRequestInput extends Model {
    /** @param array{'outcome': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SimulateDisputeRequestInput')); }
    /** The ruling to simulate. `won` and `lost` decide a chargeback; `inquiry_closed` and `escalated` decide an inquiry. Value enum: "won", "lost", "inquiry_closed", "escalated".
     * @return string
     * @throws SdkError When outcome is omitted; use hasOutcome() or valueOrDefault().
     */
    public function getOutcome(): string { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
}
