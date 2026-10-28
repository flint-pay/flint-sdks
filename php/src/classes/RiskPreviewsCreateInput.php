<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'action': string, 'mode': string, 'predicate': mixed, 'risk_rule_id'?: string}|object|array{'action'?: string, 'mode': string, 'predicate'?: mixed, 'risk_rule_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskPreviewsCreateInput extends Model {
    /** @param array{'body': array{'action': string, 'mode': string, 'predicate': mixed, 'risk_rule_id'?: string}|object|array{'action'?: string, 'mode': string, 'predicate'?: mixed, 'risk_rule_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskPreviewsCreateInput')); }
    /** Shape $ (Value): object and Alternative shapes (see declared variants). The request body for: Create a risk preview.
     * @return array{'action': string, 'mode': string, 'predicate': mixed, 'risk_rule_id'?: string}|object|array{'action'?: string, 'mode': string, 'predicate'?: mixed, 'risk_rule_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
