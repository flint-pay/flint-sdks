import { d7928 as c0 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9924 as c1, d9928 as c2, d9931 as c5 } from '../descriptors/data/460.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1439 as c3 } from '../descriptors/data/71.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10017 as c4, d10018 as c6, d10019 as c9, d10020 as c13, d10021 as c14, d10022 as c15, d10023 as c16, d10024 as c38, d10025 as c39 } from '../descriptors/data/464.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8272 as c7, d8271 as c8 } from '../descriptors/data/365.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9935 as c10, d9936 as c11, d9943 as c17, d9944 as c18, d9945 as c19, d9946 as c20, d9947 as c21, d9948 as c22, d9949 as c23, d9950 as c24, d9951 as c25, d9952 as c26, d9953 as c27, d9954 as c28, d9955 as c29, d9956 as c30, d9957 as c31, d9958 as c32, d9959 as c33 } from '../descriptors/data/461.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9042 as c12 } from '../descriptors/data/409.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9960 as c34, d9961 as c35, d9962 as c36, d9963 as c37 } from '../descriptors/data/462.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1439 as d1439 } from '../descriptors/data/71.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1439;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialStripePaymentMethod"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeMoney"]:c7(),["PlatformFeeRequest"]:c8(),["ReaderPaymentSourceTip"]:c9(),["SharedCodec1932"]:c10(),["SharedCodec1933"]:c11(),["SharedCodec217"]:c12(),["SharedCodec2250"]:c13(),["SharedCodec2251"]:c14(),["SharedCodec2252"]:c15(),["SharedCodec2253"]:c16(),["SharedCodec2272"]:c17(),["SharedCodec2273"]:c18(),["SharedCodec2274"]:c19(),["SharedCodec2275"]:c20(),["SharedCodec2276"]:c21(),["SharedCodec2277"]:c22(),["SharedCodec2278"]:c23(),["SharedCodec2279"]:c24(),["SharedCodec2280"]:c25(),["SharedCodec2281"]:c26(),["SharedCodec2282"]:c27(),["SharedCodec2283"]:c28(),["SharedCodec2284"]:c29(),["SharedCodec2285"]:c30(),["SharedCodec2286"]:c31(),["SharedCodec2287"]:c32(),["SharedCodec2288"]:c33(),["SharedCodec2289"]:c34(),["SharedCodec2290"]:c35(),["SharedCodec2291"]:c36(),["SharedCodec2292"]:c37(),["SharedCodec334"]:c38(),["SharedCodec336"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
