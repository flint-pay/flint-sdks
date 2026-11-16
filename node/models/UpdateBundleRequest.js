import { d5951 as c0, d5952 as c1, d5943 as c4, d5944 as c5, d5942 as c6, d5940 as c9 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5958 as c2, d5963 as c8 } from '../descriptors/data/269.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c3 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5934 as c7 } from '../descriptors/data/267.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5660 as c10 } from '../descriptors/data/246.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5660 as d5660 } from '../descriptors/data/246.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5660;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec1685"]:c4(),["SharedCodec1686"]:c5(),["SharedCodec1687"]:c6(),["SharedCodec1688"]:c7(),["SharedCodec1689"]:c8(),["UpdateBundleComponentRequest"]:c9(),["UpdateBundleRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateBundleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
