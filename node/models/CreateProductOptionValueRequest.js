import { d8147 as c0 } from '../descriptors/data/397.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c1 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8147 as d8147 } from '../descriptors/data/397.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8147;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateProductOptionValueRequest"]:c0(),["MetadataRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateProductOptionValueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
