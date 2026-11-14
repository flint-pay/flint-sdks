import { d5911 as c0 } from '../descriptors/data/267.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d203 as c1 } from '../descriptors/data/9.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5929 as c2, d5930 as c3, d5919 as c5 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5936 as c4 } from '../descriptors/data/269.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c6 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d203 as d203 } from '../descriptors/data/9.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d203;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateBundleComponentRequest"]:c0(),["CreateBundleRequest"]:c1(),["ImageInputFile"]:c2(),["ImageInputSourceURL"]:c3(),["ImageRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateBundleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
