<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'action': string, 'description': string, 'predicate': array{'all': list<mixed>}|object|array{'any': list<mixed>}|object|array{'not': mixed}|object|array{'attribute': string, 'operator': string, 'value': string|int|bool}|object|array{'amount_money': mixed, 'attribute': string, 'operator': string}|object|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|object|array{'attribute': string, 'list_alias': string, 'operator': string}|object|array{'attribute': string, 'operator': string}|object, 'status'?: string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskRulesCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'action': string, 'description': string, 'predicate': array{'all': list<mixed>}|object|array{'any': list<mixed>}|object|array{'not': mixed}|object|array{'attribute': string, 'operator': string, 'value': string|int|bool}|object|array{'amount_money': mixed, 'attribute': string, 'operator': string}|object|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|object|array{'attribute': string, 'list_alias': string, 'operator': string}|object|array{'attribute': string, 'operator': string}|object, 'status'?: string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskRulesCreateInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Create a risk rule.
     * @return array{'action': string, 'description': string, 'predicate': array{'all': list<mixed>}|object|array{'any': list<mixed>}|object|array{'not': mixed}|object|array{'attribute': string, 'operator': string, 'value': string|int|bool}|object|array{'amount_money': mixed, 'attribute': string, 'operator': string}|object|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|object|array{'attribute': string, 'list_alias': string, 'operator': string}|object|array{'attribute': string, 'operator': string}|object, 'status'?: string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
