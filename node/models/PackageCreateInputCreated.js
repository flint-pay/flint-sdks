import { d5116 as c0 } from '../descriptors/data/234.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2999 as c1 } from '../descriptors/data/114.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d813 as c2 } from '../descriptors/data/35.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3025 as c3 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3889 as c4 } from '../descriptors/data/164.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3044 as c5 } from '../descriptors/data/118.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d813 as d813 } from '../descriptors/data/35.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d813;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["Dimensions"]:c1(),["PackageCreateInputCreated"]:c2(),["ReturnShipmentLineItemAllocation"]:c3(),["SharedCodec226"]:c4(),["Weight"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageCreateInputCreated(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
