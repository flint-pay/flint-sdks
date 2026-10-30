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
$customerToken = getenv('CUSTOMER_TOKEN');
if ($customerToken === false || $customerToken === '') throw new \RuntimeException('Set CUSTOMER_TOKEN: this call requires a credential');
$client = new Client(new ClientOptions(
  customerToken: $customerToken,
  baseUrl: $baseUrl,
  allowInsecureHttp: $baseUrl !== null && in_array(parse_url($baseUrl, PHP_URL_HOST), ['localhost', '127.0.0.1'], true) && parse_url($baseUrl, PHP_URL_SCHEME) === 'http',
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->createEmailChangeRequest([
  'new_email' => 'example@example.invalid',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->customer_id . PHP_EOL;
echo $result->email_change_request_id . PHP_EOL;
$client->close();
