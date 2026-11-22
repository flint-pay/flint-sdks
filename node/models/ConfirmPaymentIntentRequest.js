import { d232 as c0 } from '../descriptors/data/10.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10017 as c1, d10019 as c2, d10020 as c3, d10021 as c4, d10022 as c5, d10023 as c6, d10024 as c11, d10025 as c13 } from '../descriptors/data/464.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10152 as c7, d10154 as c8, d10155 as c9, d10156 as c10, d10159 as c12 } from '../descriptors/data/472.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d232 as d232 } from '../descriptors/data/10.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d232;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["PaymentSourceCredential"]:c1(),["ReaderPaymentSourceTip"]:c2(),["SharedCodec2250"]:c3(),["SharedCodec2251"]:c4(),["SharedCodec2252"]:c5(),["SharedCodec2253"]:c6(),["SharedCodec330"]:c7(),["SharedCodec331"]:c8(),["SharedCodec332"]:c9(),["SharedCodec333"]:c10(),["SharedCodec334"]:c11(),["SharedCodec335"]:c12(),["SharedCodec336"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
