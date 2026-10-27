import { d4534 as c0 } from '../descriptors/data/199.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4582 as c1, d4583 as c2, d4584 as c3 } from '../descriptors/data/203.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4534 as d4534 } from '../descriptors/data/199.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4534;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderPaymentIntentSelection"]:c0(),["SharedCodec979"]:c1(),["SharedCodec980"]:c2(),["SharedCodec981"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentIntentSelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
