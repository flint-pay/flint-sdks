import { d5929 as c0, d5930 as c1, d5921 as c3, d5922 as c4, d5920 as c5 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5936 as c2, d5941 as c6 } from '../descriptors/data/269.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8160 as c7, d8161 as c8 } from '../descriptors/data/398.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8179 as c9, d8180 as c10 } from '../descriptors/data/399.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5682 as c11 } from '../descriptors/data/250.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5682 as d5682 } from '../descriptors/data/250.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5682;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["SharedCodec1690"]:c3(),["SharedCodec1691"]:c4(),["SharedCodec1692"]:c5(),["SharedCodec1694"]:c6(),["SharedCodec1781"]:c7(),["SharedCodec1782"]:c8(),["UpdateProductOptionRequest"]:c9(),["UpdateProductOptionValueRequest"]:c10(),["UpdateProductRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
