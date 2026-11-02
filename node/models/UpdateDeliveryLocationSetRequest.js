import { d4837 as c0, d4842 as c3 } from '../descriptors/data/212.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4399 as c1 } from '../descriptors/data/187.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4511 as c2 } from '../descriptors/data/193.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4151 as c4 } from '../descriptors/data/171.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4151 as d4151 } from '../descriptors/data/171.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4151;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryLocationSetConfiguration"]:c0(),["SharedCodec1350"]:c1(),["SharedCodec1353"]:c2(),["SharedCodec1360"]:c3(),["UpdateDeliveryLocationSetRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryLocationSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
