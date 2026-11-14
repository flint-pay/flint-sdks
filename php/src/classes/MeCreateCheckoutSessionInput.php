<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'invoice_id'?: string, 'invoice_schedule_entry_id'?: string, 'page_origin'?: string, 'payment_return_url'?: string, 'redirects'?: mixed, 'return_resolution_id': string, 'return_url'?: string, 'surface'?: string, 'type': string}|object|array{'invoice_id': string, 'invoice_schedule_entry_id'?: string, 'page_origin'?: string, 'payment_return_url'?: string, 'redirects'?: mixed, 'return_resolution_id'?: string, 'return_url'?: string, 'surface'?: string, 'type': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateCheckoutSessionInput extends Model {
    /** @param array{'body': array{'invoice_id'?: string, 'invoice_schedule_entry_id'?: string, 'page_origin'?: string, 'payment_return_url'?: string, 'redirects'?: mixed, 'return_resolution_id': string, 'return_url'?: string, 'surface'?: string, 'type': string}|object|array{'invoice_id': string, 'invoice_schedule_entry_id'?: string, 'page_origin'?: string, 'payment_return_url'?: string, 'redirects'?: mixed, 'return_resolution_id'?: string, 'return_url'?: string, 'surface'?: string, 'type': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateCheckoutSessionInput')); }
    /** The request body for: Create a checkout session for the current buyer. Example: {"return_resolution_id":"retres_01KEZF7C00VBZRA9H0NN82A4S9","surface":"hosted","type":"return_resolution"}.
     * @return array{'invoice_id'?: string, 'invoice_schedule_entry_id'?: string, 'page_origin'?: string, 'payment_return_url'?: string, 'redirects'?: mixed, 'return_resolution_id': string, 'return_url'?: string, 'surface'?: string, 'type': string}|object|array{'invoice_id': string, 'invoice_schedule_entry_id'?: string, 'page_origin'?: string, 'payment_return_url'?: string, 'redirects'?: mixed, 'return_resolution_id'?: string, 'return_url'?: string, 'surface'?: string, 'type': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
