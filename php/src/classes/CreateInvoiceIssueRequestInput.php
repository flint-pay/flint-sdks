<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateInvoiceIssueRequestInput extends Model {
    /** @param array{'delivery_mode'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateInvoiceIssueRequestInput')); }
    /** Shape $ (Value): string. How the invoice reaches its recipient. Omit it to use merchant_default. Default: "merchant_default". Value enum: "merchant_default", "email", "caller_managed".
     * @return string
     * @throws SdkError When delivery_mode is omitted; use hasDeliveryMode() or valueOrDefault().
     */
    public function getDeliveryMode(): string { return $this->get('delivery_mode'); }
    public function hasDeliveryMode(): bool { return $this->has('delivery_mode'); }
}
