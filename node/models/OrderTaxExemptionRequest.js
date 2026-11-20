import { d8463 as c0 } from '../descriptors/data/376.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9378 as c1 } from '../descriptors/data/426.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9386 as c2, d9387 as c3, d9388 as c4, d9389 as c5, d9390 as c6, d9391 as c7, d9392 as c8 } from '../descriptors/data/427.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8298 as c9, d8299 as c10, d8300 as c11, d8301 as c12 } from '../descriptors/data/367.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9378 as d9378 } from '../descriptors/data/426.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9378;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1968"]:c2(),["SharedCodec1969"]:c3(),["SharedCodec1970"]:c4(),["SharedCodec1971"]:c5(),["SharedCodec1975"]:c6(),["SharedCodec1976"]:c7(),["SharedCodec1977"]:c8(),["SharedCodec685"]:c9(),["SharedCodec686"]:c10(),["SharedCodec687"]:c11(),["SharedCodec688"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
