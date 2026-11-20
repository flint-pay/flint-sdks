import { d1747 as c0 } from '../descriptors/data/86.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9420 as c1, d9421 as c2, d9422 as c3 } from '../descriptors/data/428.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1747 as d1747 } from '../descriptors/data/86.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1747;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RemoveLicenseKeyPoolKeysRequest"]:c0(),["SharedCodec2580"]:c1(),["SharedCodec2581"]:c2(),["SharedCodec2582"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRemoveLicenseKeyPoolKeysRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
