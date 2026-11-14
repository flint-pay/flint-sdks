import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5920 as c1 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6018 as c2 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6684 as c3 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5674 as c4 } from '../descriptors/data/250.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5674 as d5674 } from '../descriptors/data/250.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5674;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec1692"]:c1(),["SharedCodec1695"]:c2(),["SharedCodec84"]:c3(),["UpdatePaymentIntentRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
