import { d6659 as c0, d6666 as c1, d6667 as c2, d6668 as c3, d6669 as c4 } from '../descriptors/data/309.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6659 as d6659 } from '../descriptors/data/309.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6659;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryRevocationTarget"]:c0(),["SharedCodec261"]:c1(),["SharedCodec262"]:c2(),["SharedCodec263"]:c3(),["SharedCodec264"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryRevocationTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
