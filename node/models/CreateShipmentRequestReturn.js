import { d6008 as c0, d6017 as c5 } from '../descriptors/data/277.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d312 as c1 } from '../descriptors/data/18.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4268 as c2 } from '../descriptors/data/179.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4398 as c3 } from '../descriptors/data/187.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d977 as c4 } from '../descriptors/data/45.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5278 as c6 } from '../descriptors/data/236.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6091 as c7, d6092 as c8 } from '../descriptors/data/281.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4331 as c9 } from '../descriptors/data/183.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d312 as d312 } from '../descriptors/data/18.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d312;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["CreateShipmentRequestReturn"]:c1(),["Dimensions"]:c2(),["MetadataRequest"]:c3(),["PackageCreateRequest"]:c4(),["ReturnShipmentLineItemAllocationRequest"]:c5(),["SharedCodec322"]:c6(),["SharedCodec580"]:c7(),["SharedCodec581"]:c8(),["Weight"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentRequestReturn(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
