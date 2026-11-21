import { d10017 as c0, d10019 as c1, d10020 as c2, d10021 as c3, d10022 as c4, d10023 as c5 } from '../descriptors/data/464.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10017 as d10017 } from '../descriptors/data/464.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10017;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredential"]:c0(),["ReaderPaymentSourceTip"]:c1(),["SharedCodec2250"]:c2(),["SharedCodec2251"]:c3(),["SharedCodec2252"]:c4(),["SharedCodec2253"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredential(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
