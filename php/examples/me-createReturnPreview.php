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
$result = $client->me->createReturnPreview([
  'eligibility' => (object) [
    'order_id' => 'ord_01KEZF7C00RWKW7JDYTZ5A6ET0',
    'selection' => (object) [
      'line_items' => [
        (object) [
          'order_line_item_id' => 'li_01KEZF7C00XM6VK5KNWVC3T907',
          'requested_quantity' => 1,
          'return_reason_id' => 'rrsn_01KEZF7C005274REWXTZRJ4BM0',
        ],
      ],
      'selection_type' => 'line_items',
    ],
  ],
  'mode' => 'eligibility',
]);
echo json_encode($result, JSON_THROW_ON_ERROR) . PHP_EOL;
$client->close();
