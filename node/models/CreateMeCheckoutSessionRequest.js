import { d6126 as c0, d6123 as c2, d6124 as c3, d6125 as c4 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d286 as c1 } from '../descriptors/data/15.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7429 as c5, d7430 as c6, d7431 as c7, d7432 as c8 } from '../descriptors/data/356.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7433 as c9 } from '../descriptors/data/357.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d286 as d286 } from '../descriptors/data/15.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d286;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionRequest"]:c1(),["SharedCodec201"]:c2(),["SharedCodec202"]:c3(),["SharedCodec203"]:c4(),["SharedCodec317"]:c5(),["SharedCodec318"]:c6(),["SharedCodec319"]:c7(),["SharedCodec320"]:c8(),["SharedCodec321"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
