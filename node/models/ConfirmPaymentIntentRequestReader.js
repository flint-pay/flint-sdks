import { d190 as c0 } from '../descriptors/data/8.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7817 as c1, d7818 as c2 } from '../descriptors/data/376.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7942 as c3 } from '../descriptors/data/384.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d190 as d190 } from '../descriptors/data/8.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d190;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequestReader"]:c0(),["ReaderPaymentSourceTip"]:c1(),["SharedCodec186"]:c2(),["SharedCodec187"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequestReader(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
