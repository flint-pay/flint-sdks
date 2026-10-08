import { d323 as c0, d2417 as c1, d2418 as c2, d2423 as c3 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2417 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2417;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["Tip"]:c1(),["TipPaymentIntentAllocation"]:c2(),["TipValueSettlementAllocation"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTip(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
