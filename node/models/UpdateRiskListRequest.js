import { d7805 as c0 } from '../descriptors/data/330.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7805 as d7805 } from '../descriptors/data/330.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7805;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateRiskListRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRiskListRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
