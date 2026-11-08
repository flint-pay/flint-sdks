<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $tax_calculation_callback_id
 * @property-read mixed $body
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxCalculationCallbacksUpdateInput extends Model {
    /** @param array{'tax_calculation_callback_id': string, 'body': mixed}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationCallbacksUpdateInput')); }
    /** Tax calculation callback ID. Example: "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     * @return string
     * @throws SdkError When tax_calculation_callback_id is omitted; use hasTaxCalculationCallbackId() or valueOrDefault().
     */
    public function getTaxCalculationCallbackId(): string { return $this->get('tax_calculation_callback_id'); }
    public function hasTaxCalculationCallbackId(): bool { return $this->has('tax_calculation_callback_id'); }
    /** The request body for: Update a tax calculation callback. Example: {"expected_version":1,"status":"active"}.
     * @return mixed
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
