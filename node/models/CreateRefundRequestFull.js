import { d335 as c0 } from '../descriptors/data/21.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c1 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c2 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7701 as c3 } from '../descriptors/data/371.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6900 as c4 } from '../descriptors/data/325.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8288 as c5, d8289 as c6, d8291 as c7, d8295 as c8 } from '../descriptors/data/405.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d335 as d335 } from '../descriptors/data/21.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d335;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequestFull"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["RefundDestinations"]:c3(),["SharedCodec141"]:c4(),["SharedCodec391"]:c5(),["SharedCodec392"]:c6(),["SharedCodec394"]:c7(),["SplitReversalRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequestFull(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
