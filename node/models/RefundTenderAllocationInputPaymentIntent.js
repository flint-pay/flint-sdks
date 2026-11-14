import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1311 as c1 } from '../descriptors/data/63.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6900 as c2 } from '../descriptors/data/325.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8274 as c3 } from '../descriptors/data/404.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1311 as d1311 } from '../descriptors/data/63.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1311;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundTenderAllocationInputPaymentIntent"]:c1(),["SharedCodec141"]:c2(),["SharedCodec1410"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundTenderAllocationInputPaymentIntent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
