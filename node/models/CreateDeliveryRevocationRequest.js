import { d237 as c0 } from '../descriptors/data/11.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6659 as c1, d6666 as c2, d6667 as c3, d6668 as c4, d6669 as c5 } from '../descriptors/data/309.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d237 as d237 } from '../descriptors/data/11.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d237;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryRevocationRequest"]:c0(),["CreateDeliveryRevocationTarget"]:c1(),["SharedCodec261"]:c2(),["SharedCodec262"]:c3(),["SharedCodec263"]:c4(),["SharedCodec264"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryRevocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
