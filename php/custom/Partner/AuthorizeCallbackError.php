<?php
declare(strict_types=1);

namespace Flint\Partner;

/**
 * A callback OAuth error such as access_denied, a state_mismatch, or an
 * invalid_request callback. Handwritten; regeneration keeps it.
 */
final class AuthorizeCallbackError extends \RuntimeException
{
    public function __construct(
        public readonly string $error,
        public readonly ?string $errorDescription = null,
    ) {
        parent::__construct($errorDescription === null ? $error : $error . ': ' . $errorDescription);
    }
}
