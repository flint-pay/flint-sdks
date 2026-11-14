import { d6126 as c0, d6123 as c2, d6124 as c3, d6125 as c4 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d214 as c1 } from '../descriptors/data/10.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5973 as c5, d5974 as c6, d5975 as c7 } from '../descriptors/data/271.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5989 as c8, d5990 as c9 } from '../descriptors/data/273.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d214 as d214 } from '../descriptors/data/10.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d214;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionReturnResolution"]:c1(),["SharedCodec201"]:c2(),["SharedCodec202"]:c3(),["SharedCodec203"]:c4(),["SharedCodec204"]:c5(),["SharedCodec205"]:c6(),["SharedCodec206"]:c7(),["SharedCodec219"]:c8(),["SharedCodec220"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionReturnResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
