import { d301 as c0 } from '../descriptors/data/15.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c1 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9042 as c2 } from '../descriptors/data/409.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d301 as d301 } from '../descriptors/data/15.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d301;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRedemptionRequestManual"]:c0(),["MoneyValue"]:c1(),["SharedCodec217"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRedemptionRequestManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
