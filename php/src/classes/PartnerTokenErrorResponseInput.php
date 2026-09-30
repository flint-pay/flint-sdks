<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $error
 * @property-read string $error_description
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerTokenErrorResponseInput extends Model {
    /** @param array{'error': string, 'error_description'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerTokenErrorResponseInput')); }
    /** @return string
     * @throws SdkError When error is omitted; use hasError() or valueOrDefault().
     */
    public function getError(): string { return $this->get('error'); }
    public function hasError(): bool { return $this->has('error'); }
    /** @return string
     * @throws SdkError When error_description is omitted; use hasErrorDescription() or valueOrDefault().
     */
    public function getErrorDescription(): string { return $this->get('error_description'); }
    public function hasErrorDescription(): bool { return $this->has('error_description'); }
}
