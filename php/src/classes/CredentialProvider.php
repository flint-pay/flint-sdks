<?php
declare(strict_types=1);
namespace Flint;
interface CredentialProvider
{
    public function getCredential(): Credential;
}
