import { d187 as c0 } from '../descriptors/data/8.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7817 as c1, d7818 as c7 } from '../descriptors/data/376.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7937 as c2 } from '../descriptors/data/383.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7938 as c3, d7939 as c4, d7940 as c5, d7941 as c6, d7942 as c8 } from '../descriptors/data/384.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d187 as d187 } from '../descriptors/data/8.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d187;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["ReaderPaymentSourceTip"]:c1(),["SharedCodec181"]:c2(),["SharedCodec182"]:c3(),["SharedCodec183"]:c4(),["SharedCodec184"]:c5(),["SharedCodec185"]:c6(),["SharedCodec186"]:c7(),["SharedCodec187"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
