import { d7718 as c0, d7728 as c2, d7729 as c3, d7730 as c4, d7731 as c5, d7732 as c6 } from '../descriptors/data/372.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7817 as c1 } from '../descriptors/data/376.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7718 as d7718 } from '../descriptors/data/372.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7718;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderPaymentIntentSelection"]:c0(),["ReaderPaymentSourceTip"]:c1(),["SharedCodec1088"]:c2(),["SharedCodec1089"]:c3(),["SharedCodec1090"]:c4(),["SharedCodec1091"]:c5(),["SharedCodec1092"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentIntentSelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
