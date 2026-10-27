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
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false || $baseUrl === '') throw new \RuntimeException('Set API_BASE_URL to your sandbox or local mock URL');
$checkoutToken = getenv('CHECKOUT_TOKEN');
if ($checkoutToken === false || $checkoutToken === '') throw new \RuntimeException('Set CHECKOUT_TOKEN: this call requires a credential');
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  allowInsecureHttp: in_array(parse_url($baseUrl, PHP_URL_HOST), ['localhost', '127.0.0.1'], true) && parse_url($baseUrl, PHP_URL_SCHEME) === 'http',
  checkoutToken: $checkoutToken,
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$input = [
  'checkout_session_id' => 'example',
  'body' => (object) [
    'purpose' => 'gift_card_purchase',
    'email' => 'example@example.invalid',
  ],
];
$result = $client->checkoutSessions->createCustomerVerification($input, new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->checkout_session_customer_verification_id . PHP_EOL;
echo $result->checkout_session_id . PHP_EOL;
$client->close();
