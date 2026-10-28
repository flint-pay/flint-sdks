import { d185 as c0 } from '../descriptors/data/9.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4535 as c2, d4536 as c3 } from '../descriptors/data/200.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d185 as d185 } from '../descriptors/data/9.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d185;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderPaymentIntentRequest"]:c0(),["MoneyValue"]:c1(),["OrderPaymentSourceCardSelection"]:c2(),["OrderPaymentSourceSelection"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
