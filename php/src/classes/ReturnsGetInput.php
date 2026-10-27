<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $return_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsGetInput extends Model {
    /** @param array{'return_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "customer", "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions", "return_inspections", "return_receipts", "return_resolutions", "shipments". Shape $[] (Value): string.  Value enum: "customer", "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions", "return_inspections", "return_receipts", "return_resolutions", "shipments".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
