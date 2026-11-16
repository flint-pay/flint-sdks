import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9659 as c1, d9663 as c2, d9666 as c5, d9670 as c9, d9671 as c10 } from '../descriptors/data/443.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1390 as c3 } from '../descriptors/data/69.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9752 as c4, d9753 as c6, d9754 as c8, d9755 as c12, d9756 as c13, d9757 as c14, d9758 as c15, d9759 as c37, d9760 as c38 } from '../descriptors/data/447.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8068 as c7 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8844 as c11 } from '../descriptors/data/396.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9678 as c16, d9679 as c17, d9680 as c18, d9681 as c19, d9682 as c20, d9683 as c21, d9684 as c22, d9685 as c23, d9686 as c24, d9687 as c25, d9688 as c26, d9689 as c27, d9690 as c28, d9691 as c29, d9692 as c30, d9693 as c31, d9694 as c32, d9695 as c33, d9696 as c34, d9697 as c35, d9698 as c36 } from '../descriptors/data/444.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1390 as d1390 } from '../descriptors/data/69.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1390;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["OrderPaymentIntentSelection"]:c2(),["PayOrderRequest"]:c3(),["PaymentSourceCredential"]:c4(),["PaymentSourceCredentialStripePaymentMethod"]:c5(),["PaymentSplitRequest"]:c6(),["PlatformFeeRequest"]:c7(),["ReaderPaymentSourceTip"]:c8(),["SharedCodec1909"]:c9(),["SharedCodec1910"]:c10(),["SharedCodec221"]:c11(),["SharedCodec2239"]:c12(),["SharedCodec2240"]:c13(),["SharedCodec2241"]:c14(),["SharedCodec2242"]:c15(),["SharedCodec2261"]:c16(),["SharedCodec2262"]:c17(),["SharedCodec2263"]:c18(),["SharedCodec2264"]:c19(),["SharedCodec2265"]:c20(),["SharedCodec2266"]:c21(),["SharedCodec2267"]:c22(),["SharedCodec2268"]:c23(),["SharedCodec2269"]:c24(),["SharedCodec2270"]:c25(),["SharedCodec2271"]:c26(),["SharedCodec2272"]:c27(),["SharedCodec2273"]:c28(),["SharedCodec2274"]:c29(),["SharedCodec2275"]:c30(),["SharedCodec2276"]:c31(),["SharedCodec2277"]:c32(),["SharedCodec2278"]:c33(),["SharedCodec2279"]:c34(),["SharedCodec2280"]:c35(),["SharedCodec2281"]:c36(),["SharedCodec345"]:c37(),["SharedCodec347"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
