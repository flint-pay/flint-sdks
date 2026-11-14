import { d6126 as c0, d6123 as c2, d6124 as c3, d6125 as c4 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d285 as c1 } from '../descriptors/data/15.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7429 as c5 } from '../descriptors/data/356.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d285 as d285 } from '../descriptors/data/15.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d285;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionInvoice"]:c1(),["SharedCodec201"]:c2(),["SharedCodec202"]:c3(),["SharedCodec203"]:c4(),["SharedCodec317"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionInvoice(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
