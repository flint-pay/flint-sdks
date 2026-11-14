import { d6126 as c0, d6123 as c2, d6124 as c3, d6125 as c4 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d287 as c1 } from '../descriptors/data/16.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7431 as c5, d7432 as c6 } from '../descriptors/data/356.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d287 as d287 } from '../descriptors/data/16.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d287;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionReturnResolution"]:c1(),["SharedCodec201"]:c2(),["SharedCodec202"]:c3(),["SharedCodec203"]:c4(),["SharedCodec319"]:c5(),["SharedCodec320"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionReturnResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
