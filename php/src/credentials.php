<?php
declare(strict_types=1);
namespace Flint;
function defaultCredentials(): CredentialProvider { return new AmbientCredentialProvider(json_decode('{"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}', true), null, 'https://api.withflintpay.com'); }
/** @param array{workloadIdentityId: string, source?: 'auto'|'none'|'token'|'token_file'|'github_actions', audience?: string, scope?: string} $options */
function workloadIdentityCredentials(array $options): CredentialProvider { return new AmbientCredentialProvider(json_decode('{"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}', true), $options, 'https://api.withflintpay.com'); }
