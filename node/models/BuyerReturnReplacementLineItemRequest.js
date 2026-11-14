import { d7324 as c0 } from '../descriptors/data/349.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7444 as c1, d7445 as c2, d7446 as c3, d7447 as c4 } from '../descriptors/data/357.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7324 as d7324 } from '../descriptors/data/349.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7324;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerReturnReplacementLineItemRequest"]:c0(),["SharedCodec96"]:c1(),["SharedCodec97"]:c2(),["SharedCodec98"]:c3(),["SharedCodec99"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
