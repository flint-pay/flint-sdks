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

$result = $client->me->createReturn([
  'line_items' => [
    (object) [
      'buyer_note' => 'I changed my mind.',
      'order_line_item_id' => 'li_01KEZF7C00XM6VK5KNWVC3T907',
      'requested_quantity' => 1,
      'requested_resolution_type' => 'refund',
      'return_reason_id' => 'rrsn_01KEZF7C005274REWXTZRJ4BM0',
    ],
  ],
  'order_id' => 'ord_01KEZF7C00RWKW7JDYTZ5A6ET0',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->order_id . PHP_EOL;
echo $result->return_id . PHP_EOL;
$client->close();
