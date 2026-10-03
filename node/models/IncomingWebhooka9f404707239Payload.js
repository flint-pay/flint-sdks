import { d1349 as c0, d909 as c1, d917 as c2, d515 as c3, d908 as c4, d911 as c5, d916 as c6, d1345 as c7, d1347 as c8, d1348 as c9, d1346 as c10 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1349 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1349;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooka9f404707239Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec197"]:c3(),["SharedCodec275"]:c4(),["SharedCodec278"]:c5(),["SharedCodec280"]:c6(),["SharedCodec374"]:c7(),["SharedCodec375"]:c8(),["Webhook_invoice_collection_blocked_installed_merchants"]:c9(),["Webhook_invoice_collection_blocked_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooka9f404707239Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
