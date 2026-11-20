import { d8049 as c0 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8145 as c1 } from '../descriptors/data/358.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10035 as c2, d10036 as c3, d10037 as c4, d10038 as c5 } from '../descriptors/data/467.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7776 as c6 } from '../descriptors/data/328.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7776 as d7776 } from '../descriptors/data/328.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7776;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3073"]:c0(),["SharedCodec3076"]:c1(),["SharedCodec3142"]:c2(),["SharedCodec3143"]:c3(),["SharedCodec3144"]:c4(),["SharedCodec3145"]:c5(),["UpdatePackageRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
