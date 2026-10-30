<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $checkout_session_id
 * @property-read array{'choices': list<array{'delivery_choice_group_id': string, 'delivery_option_id': string, 'input'?: mixed}|object>, 'delivery_quote_id': string, 'destination_address'?: mixed, 'expected_delivery_selection_id'?: string|null, 'recipient'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsCreateDeliverySelectionInput extends Model {
    /** @param array{'checkout_session_id': string, 'body': array{'choices': list<array{'delivery_choice_group_id': string, 'delivery_option_id': string, 'input'?: mixed}|object>, 'delivery_quote_id': string, 'destination_address'?: mixed, 'expected_delivery_selection_id'?: string|null, 'recipient'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsCreateDeliverySelectionInput')); }
    /** Flint checkout session ID. Example: "cs_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** The request body for: Create delivery selection. Example: {"choices":[{"delivery_choice_group_id":"dcgrp_01K1P6G4M7H2N8Q9R3S5T6V7WX","delivery_option_id":"dopt_01K1P6G4M7H2N8Q9R3S5T6V7WX"}],"delivery_quote_id":"dqt_01K1P6G4M7H2N8Q9R3S5T6V7WX","expected_delivery_selection_id":null}.
     * @return array{'choices': list<array{'delivery_choice_group_id': string, 'delivery_option_id': string, 'input'?: mixed}|object>, 'delivery_quote_id': string, 'destination_address'?: mixed, 'expected_delivery_selection_id'?: string|null, 'recipient'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
