<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $return_resolution_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnResolutionsGetInput extends Model {
    /** @param array{'return_resolution_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionsGetInput')); }
    /** Flint return resolution id. Example: "retres_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Supported expansions: payment_intents, refunds, replacement_order. Expanded relationships are returned only when explicitly requested and authorized. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Repeat expand, for example expand=payment_intents&expand=refunds, or pass one comma-separated value. [] enum: "payment_intents", "refunds", "replacement_order". Value enum: "payment_intents", "refunds", "replacement_order". anyOf[1] (Value): Array of string.  [] enum: "payment_intents", "refunds", "replacement_order". anyOf[1][] (Value): string.  Value enum: "payment_intents", "refunds", "replacement_order". anyOf[2] (Value): string.  Value enum: "payment_intents", "refunds", "replacement_order".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
