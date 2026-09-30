<?php
declare(strict_types=1);
namespace Flint;
/** Injected streaming transports return this interface in the response's stream field. */
interface ByteStream
{
    /** Return the next bounded byte chunk, or null at EOF. Honor cancellation while waiting. */
    public function read(): ?string;
    public function close(): void;
}
