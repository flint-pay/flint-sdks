import { d7928 as c0 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10504 as c1, d10506 as c3, d10507 as c4 } from '../descriptors/data/493.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9042 as c2 } from '../descriptors/data/409.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10508 as c5, d10509 as c6 } from '../descriptors/data/494.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10504 as d10504 } from '../descriptors/data/493.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10504;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundTenderAllocationRequest"]:c1(),["SharedCodec217"]:c2(),["SharedCodec2572"]:c3(),["SharedCodec2573"]:c4(),["SharedCodec2577"]:c5(),["SharedCodec2578"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundTenderAllocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
