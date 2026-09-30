<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'action': string, 'description': string, 'enabled'?: bool, 'predicate': array{'all': list<mixed>}|object|array{'any': list<mixed>}|object|array{'not': mixed}|object|array{'attribute': string, 'operator': string, 'value': string|int|bool}|object|array{'amount_money': mixed, 'attribute': string, 'operator': string}|object|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|object|array{'attribute': string, 'list_alias': string, 'operator': string}|object|array{'attribute': string, 'operator': string}|object, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskRulesCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'action': string, 'description': string, 'enabled'?: bool, 'predicate': array{'all': list<mixed>}|object|array{'any': list<mixed>}|object|array{'not': mixed}|object|array{'attribute': string, 'operator': string, 'value': string|int|bool}|object|array{'amount_money': mixed, 'attribute': string, 'operator': string}|object|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|object|array{'attribute': string, 'list_alias': string, 'operator': string}|object|array{'attribute': string, 'operator': string}|object, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskRulesCreateInput')); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'action': string, 'description': string, 'enabled'?: bool, 'predicate': array{'all': list<mixed>}|object|array{'any': list<mixed>}|object|array{'not': mixed}|object|array{'attribute': string, 'operator': string, 'value': string|int|bool}|object|array{'amount_money': mixed, 'attribute': string, 'operator': string}|object|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|object|array{'attribute': string, 'list_alias': string, 'operator': string}|object|array{'attribute': string, 'operator': string}|object, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
