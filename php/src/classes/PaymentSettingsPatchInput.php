<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $statement_descriptor
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSettingsPatchInput extends Model {
    /** @param array{'statement_descriptor'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSettingsPatchInput')); }
    /** Static text for new payments: 5 to 22 Latin characters, including at least one letter, without < > \ ' " * or control characters. Omit to leave unchanged. Send null to restore the provider default. minLength: 5. maxLength: 22.
     * @return string|null
     * @throws SdkError When statement_descriptor is omitted; use hasStatementDescriptor() or valueOrDefault().
     */
    public function getStatementDescriptor(): string|null { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
}
