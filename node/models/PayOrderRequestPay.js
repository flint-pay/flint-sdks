import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9659 as c1, d9670 as c7, d9671 as c8 } from '../descriptors/data/443.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1392 as c2 } from '../descriptors/data/69.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9752 as c3, d9753 as c4, d9754 as c6, d9755 as c10, d9756 as c11, d9757 as c12, d9758 as c13, d9759 as c23, d9760 as c24 } from '../descriptors/data/447.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8068 as c5 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8844 as c9 } from '../descriptors/data/396.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9679 as c14, d9680 as c15, d9681 as c16, d9682 as c17, d9683 as c18, d9684 as c19, d9685 as c20, d9686 as c21, d9687 as c22 } from '../descriptors/data/444.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1392 as d1392 } from '../descriptors/data/69.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1392;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeRequest"]:c5(),["ReaderPaymentSourceTip"]:c6(),["SharedCodec1909"]:c7(),["SharedCodec1910"]:c8(),["SharedCodec221"]:c9(),["SharedCodec2239"]:c10(),["SharedCodec2240"]:c11(),["SharedCodec2241"]:c12(),["SharedCodec2242"]:c13(),["SharedCodec2262"]:c14(),["SharedCodec2263"]:c15(),["SharedCodec2264"]:c16(),["SharedCodec2265"]:c17(),["SharedCodec2266"]:c18(),["SharedCodec2267"]:c19(),["SharedCodec2268"]:c20(),["SharedCodec2269"]:c21(),["SharedCodec2270"]:c22(),["SharedCodec345"]:c23(),["SharedCodec347"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
