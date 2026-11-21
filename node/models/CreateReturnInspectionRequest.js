import { d380 as c0 } from '../descriptors/data/22.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10577 as c1, d10590 as c2, d10578 as c6, d10579 as c7, d10580 as c8 } from '../descriptors/data/499.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10593 as c3, d10594 as c4, d10595 as c5 } from '../descriptors/data/500.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9159 as c9 } from '../descriptors/data/414.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d380 as d380 } from '../descriptors/data/22.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d380;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnInspectionRequest"]:c0(),["ReturnInspectionLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["SharedCodec2685"]:c3(),["SharedCodec2686"]:c4(),["SharedCodec2687"]:c5(),["SharedCodec2704"]:c6(),["SharedCodec2705"]:c7(),["SharedCodec2706"]:c8(),["SharedCodec455"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnInspectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
