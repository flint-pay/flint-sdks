<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'action': string, 'description': string, 'predicate': mixed, 'status'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskRulesCreateInput extends Model {
    /** @param array{'body': array{'action': string, 'description': string, 'predicate': mixed, 'status'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskRulesCreateInput')); }
    /** The request body for: Create a risk rule.
     * @return array{'action': string, 'description': string, 'predicate': mixed, 'status'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
