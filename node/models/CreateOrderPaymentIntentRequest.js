import { d185 as c0 } from '../descriptors/data/9.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4535 as c2, d4536 as c3 } from '../descriptors/data/200.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d185 as d185 } from '../descriptors/data/9.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d185;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderPaymentIntentRequest"]:c0(),["MoneyValue"]:c1(),["OrderPaymentSourceCardSelection"]:c2(),["OrderPaymentSourceSelection"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
