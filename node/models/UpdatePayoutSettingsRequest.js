import { d7928 as c0 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9081 as c1 } from '../descriptors/data/411.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10315 as c2, d10316 as c3, d10317 as c4, d10318 as c5, d10319 as c6, d10320 as c7 } from '../descriptors/data/483.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7791 as c8 } from '../descriptors/data/328.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7791 as d7791 } from '../descriptors/data/328.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7791;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec138"]:c1(),["SharedCodec3169"]:c2(),["SharedCodec3170"]:c3(),["SharedCodec3171"]:c4(),["SharedCodec3172"]:c5(),["SharedCodec3173"]:c6(),["SharedCodec3174"]:c7(),["UpdatePayoutSettingsRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePayoutSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
