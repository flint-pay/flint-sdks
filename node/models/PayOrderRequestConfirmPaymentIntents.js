import { d7928 as c0 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9924 as c1, d9928 as c2 } from '../descriptors/data/460.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1440 as c3 } from '../descriptors/data/71.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10017 as c4, d10019 as c5, d10020 as c8, d10021 as c9, d10022 as c10, d10023 as c11, d10024 as c21, d10025 as c22 } from '../descriptors/data/464.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9935 as c6, d9936 as c7, d9944 as c12, d9945 as c13, d9946 as c14, d9954 as c15, d9955 as c16, d9956 as c17, d9957 as c18, d9958 as c19, d9959 as c20 } from '../descriptors/data/461.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1440 as d1440 } from '../descriptors/data/71.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1440;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequestConfirmPaymentIntents"]:c3(),["PaymentSourceCredential"]:c4(),["ReaderPaymentSourceTip"]:c5(),["SharedCodec1932"]:c6(),["SharedCodec1933"]:c7(),["SharedCodec2250"]:c8(),["SharedCodec2251"]:c9(),["SharedCodec2252"]:c10(),["SharedCodec2253"]:c11(),["SharedCodec2273"]:c12(),["SharedCodec2274"]:c13(),["SharedCodec2275"]:c14(),["SharedCodec2283"]:c15(),["SharedCodec2284"]:c16(),["SharedCodec2285"]:c17(),["SharedCodec2286"]:c18(),["SharedCodec2287"]:c19(),["SharedCodec2288"]:c20(),["SharedCodec334"]:c21(),["SharedCodec336"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
