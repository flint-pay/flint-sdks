<?php
declare(strict_types=1);

namespace Flint\Partner;

/**
 * Supplies client_assertion values for one partner app client ID. Use PrivateKeyJwt
 * for a registered key, or return your workload identity provider's token from
 * getAssertion() for a workload_identity credential. Handwritten; regeneration keeps it.
 */
interface ClientAssertionProvider
{
    public function clientId(): string;

    /** A compact JWT. Flint accepts each signed private_key_jwt assertion once. */
    public function getAssertion(): string;
}
