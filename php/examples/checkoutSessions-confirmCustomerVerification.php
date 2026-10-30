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
$checkoutToken = getenv('CHECKOUT_TOKEN');
if ($checkoutToken === false || $checkoutToken === '') throw new \RuntimeException('Set CHECKOUT_TOKEN: this call requires a credential');
$client = new Client(new ClientOptions(
  checkoutToken: $checkoutToken,
  baseUrl: $baseUrl,
  allowInsecureHttp: $baseUrl !== null && in_array(parse_url($baseUrl, PHP_URL_HOST), ['localhost', '127.0.0.1'], true) && parse_url($baseUrl, PHP_URL_SCHEME) === 'http',
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->checkoutSessions->confirmCustomerVerification('cs_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'cscv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'code' => '123456',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo json_encode($result, JSON_THROW_ON_ERROR) . PHP_EOL;
$client->close();
