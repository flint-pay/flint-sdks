import { d7928 as c0 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9924 as c1 } from '../descriptors/data/460.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1441 as c2 } from '../descriptors/data/71.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10017 as c3, d10018 as c4, d10019 as c7, d10020 as c11, d10021 as c12, d10022 as c13, d10023 as c14, d10024 as c24, d10025 as c25 } from '../descriptors/data/464.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8272 as c5, d8271 as c6 } from '../descriptors/data/365.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9935 as c8, d9936 as c9, d9944 as c15, d9945 as c16, d9946 as c17, d9947 as c18, d9948 as c19, d9949 as c20, d9950 as c21, d9951 as c22, d9952 as c23 } from '../descriptors/data/461.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9042 as c10 } from '../descriptors/data/409.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1441 as d1441 } from '../descriptors/data/71.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1441;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeMoney"]:c5(),["PlatformFeeRequest"]:c6(),["ReaderPaymentSourceTip"]:c7(),["SharedCodec1932"]:c8(),["SharedCodec1933"]:c9(),["SharedCodec217"]:c10(),["SharedCodec2250"]:c11(),["SharedCodec2251"]:c12(),["SharedCodec2252"]:c13(),["SharedCodec2253"]:c14(),["SharedCodec2273"]:c15(),["SharedCodec2274"]:c16(),["SharedCodec2275"]:c17(),["SharedCodec2276"]:c18(),["SharedCodec2277"]:c19(),["SharedCodec2278"]:c20(),["SharedCodec2279"]:c21(),["SharedCodec2280"]:c22(),["SharedCodec2281"]:c23(),["SharedCodec334"]:c24(),["SharedCodec336"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
