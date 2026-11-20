import { d231 as c0 } from '../descriptors/data/10.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10005 as c1, d10007 as c2, d10008 as c3, d10009 as c4, d10010 as c5, d10011 as c6, d10012 as c11, d10013 as c13 } from '../descriptors/data/465.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10138 as c7, d10141 as c8, d10143 as c9, d10144 as c10, d10145 as c12 } from '../descriptors/data/473.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d231 as d231 } from '../descriptors/data/10.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d231;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["PaymentSourceCredential"]:c1(),["ReaderPaymentSourceTip"]:c2(),["SharedCodec2245"]:c3(),["SharedCodec2246"]:c4(),["SharedCodec2247"]:c5(),["SharedCodec2248"]:c6(),["SharedCodec328"]:c7(),["SharedCodec329"]:c8(),["SharedCodec330"]:c9(),["SharedCodec331"]:c10(),["SharedCodec332"]:c11(),["SharedCodec333"]:c12(),["SharedCodec334"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
