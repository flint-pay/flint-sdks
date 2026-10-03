import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  customerToken: process.env.CUSTOMER_TOKEN ?? '',
});
const result = await client.me.getCreditNotePDF(
  "example",
  "example"
);
// Choose a destination path; PDF bytes must not be decoded as text.
const resultPath = process.env.API_DOWNLOAD_PATH ?? 'download.pdf';
await (await import('node:fs/promises')).writeFile(resultPath, result.data);
console.log('Saved', result.data.byteLength, 'bytes to', resultPath);
console.log(result.meta.requestId);
