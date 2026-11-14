import { d5929 as c0, d5930 as c1, d5921 as c4, d5922 as c5, d5920 as c6, d5918 as c9 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5936 as c2, d5941 as c8 } from '../descriptors/data/269.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c3 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5912 as c7 } from '../descriptors/data/267.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5636 as c10 } from '../descriptors/data/246.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5636 as d5636 } from '../descriptors/data/246.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5636;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec1690"]:c4(),["SharedCodec1691"]:c5(),["SharedCodec1692"]:c6(),["SharedCodec1693"]:c7(),["SharedCodec1694"]:c8(),["UpdateBundleComponentRequest"]:c9(),["UpdateBundleRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateBundleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
