<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $message
 * @property-read list<string> $return_line_item_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnResolutionWarningInput extends Model {
    /** @param array{'code': string, 'message': string, 'return_line_item_ids': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionWarningInput')); }
    /** @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** @return list<string>
     * @throws SdkError When return_line_item_ids is omitted; use hasReturnLineItemIds() or valueOrDefault().
     */
    public function getReturnLineItemIds(): array { return $this->get('return_line_item_ids'); }
    public function hasReturnLineItemIds(): bool { return $this->has('return_line_item_ids'); }
}
