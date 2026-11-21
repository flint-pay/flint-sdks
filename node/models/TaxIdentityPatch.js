import { d8480 as c0, d8471 as c1, d8472 as c2, d8468 as c5 } from '../descriptors/data/376.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8156 as c3, d8157 as c4 } from '../descriptors/data/359.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7710 as c6 } from '../descriptors/data/323.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8468 as d8468 } from '../descriptors/data/376.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8468;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec1722"]:c1(),["SharedCodec1723"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["TaxIdentityPatch"]:c5(),["TaxIdentityRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxIdentityPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
