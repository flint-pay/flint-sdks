import { d6548 as c0, d6549 as c4 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c1 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6882 as c2 } from '../descriptors/data/324.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5480 as c3 } from '../descriptors/data/240.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5480 as d5480 } from '../descriptors/data/240.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5480;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DimensionsRequest"]:c0(),["MetadataRequest"]:c1(),["SharedCodec360"]:c2(),["SinglePackageCreateInputCreated"]:c3(),["WeightRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSinglePackageCreateInputCreated(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
