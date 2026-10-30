<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $return_resolution_id
 * @property-read array{'page_origin'?: string, 'payment_return_url'?: string, 'redirects'?: mixed, 'return_url'?: string, 'surface'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateReturnResolutionCheckoutSessionInput extends Model {
    /** @param array{'return_resolution_id': string, 'body'?: array{'page_origin'?: string, 'payment_return_url'?: string, 'redirects'?: mixed, 'return_url'?: string, 'surface'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnResolutionCheckoutSessionInput')); }
    /** Flint return resolution id. Example: "retres_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** The request body for: Create a Return resolution checkout session for the current buyer; Get or create return resolution checkout session.
     * @return array{'page_origin'?: string, 'payment_return_url'?: string, 'redirects'?: mixed, 'return_url'?: string, 'surface'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
