import { d905 as c0, d74 as c1, d1943 as c2 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1943 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1943;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Image"]:c0(),["MoneyValue"]:c1(),["PaymentLinkSubscriptionPreview"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkSubscriptionPreview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
