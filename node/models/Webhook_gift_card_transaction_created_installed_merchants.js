import { d938 as c0, d937 as c1, d948 as c2, d40 as c3, d41 as c4, d949 as c5 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d949 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d949;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec287"]:c1(),["SharedCodec291"]:c2(),["SharedCodec5"]:c3(),["SharedCodec6"]:c4(),["Webhook_gift_card_transaction_created_installed_merchants"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_gift_card_transaction_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
