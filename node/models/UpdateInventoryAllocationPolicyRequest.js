import { d9168 as c0, d9169 as c1 } from '../descriptors/data/415.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8057 as c2 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8155 as c3 } from '../descriptors/data/359.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8491 as c4 } from '../descriptors/data/377.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7764 as c5 } from '../descriptors/data/326.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7764 as d7764 } from '../descriptors/data/326.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7764;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAllocationPolicyConfigurationRequest"]:c0(),["InventoryAllocationPolicyLocation"]:c1(),["SharedCodec3081"]:c2(),["SharedCodec3084"]:c3(),["SharedCodec3092"]:c4(),["UpdateInventoryAllocationPolicyRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryAllocationPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
