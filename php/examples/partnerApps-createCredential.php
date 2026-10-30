<?php
declare(strict_types=1);
$autoload = __DIR__;
while (!is_file($autoload . '/vendor/autoload.php') && !is_file($autoload . '/autoload.php')) {
    $parent = dirname($autoload);
    if ($parent === $autoload) throw new \RuntimeException('Run composer install in the application before running this example.');
    $autoload = $parent;
}
require_once is_file($autoload . '/vendor/autoload.php') ? $autoload . '/vendor/autoload.php' : $autoload . '/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('FLINT_BASE_URL') ?: null;
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  allowInsecureHttp: $baseUrl !== null && in_array(parse_url($baseUrl, PHP_URL_HOST), ['localhost', '127.0.0.1'], true) && parse_url($baseUrl, PHP_URL_SCHEME) === 'http',
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->partnerApps->createCredential('papp_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Production signing key',
  'public_key' => (object) [
    'jwk' => (object) [
      'crv' => 'P-256',
      'kid' => 'production-key',
      'kty' => 'EC',
      'x' => 'axfR8uEsQkf4vOblY6RA8ncDfYEt6zOg9KE5RdiYwpY',
      'y' => 'T-NC4v4af5uO5-tKfA-eFivOM1drMV7Oy7ZAaDe_UfU',
    ],
  ],
  'type' => 'public_key',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->partner_app_credential_id . PHP_EOL;
echo $result->partner_app_id . PHP_EOL;
$client->close();
