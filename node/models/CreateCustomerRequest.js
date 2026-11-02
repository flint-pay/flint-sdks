import { d184 as c0 } from '../descriptors/data/8.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4831 as c1 } from '../descriptors/data/212.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4398 as c2 } from '../descriptors/data/187.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4508 as c3, d4509 as c4 } from '../descriptors/data/193.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4810 as c5, d4821 as c6, d4822 as c7, d4820 as c8 } from '../descriptors/data/211.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d184 as d184 } from '../descriptors/data/8.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d184;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomerRequest"]:c0(),["DocumentTaxIDRequest"]:c1(),["MetadataRequest"]:c2(),["SharedCodec0"]:c3(),["SharedCodec1"]:c4(),["SharedCodec151"]:c5(),["SharedCodec841"]:c6(),["SharedCodec842"]:c7(),["TaxIdentityPatch"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
