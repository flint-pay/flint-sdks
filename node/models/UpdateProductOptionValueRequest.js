import { d8160 as c0 } from '../descriptors/data/398.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8180 as c1 } from '../descriptors/data/399.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8180 as d8180 } from '../descriptors/data/399.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8180;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1781"]:c0(),["UpdateProductOptionValueRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductOptionValueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
