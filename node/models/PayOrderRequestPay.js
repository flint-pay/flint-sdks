import { d7640 as c0 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9569 as c1, d9580 as c7, d9581 as c8 } from '../descriptors/data/440.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d1392 as c2 } from '../descriptors/data/69.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9662 as c3, d9663 as c4, d9664 as c6, d9665 as c10, d9666 as c11, d9667 as c12, d9668 as c13, d9669 as c23, d9670 as c24 } from '../descriptors/data/444.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7978 as c5 } from '../descriptors/data/348.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8754 as c9 } from '../descriptors/data/393.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9589 as c14, d9590 as c15, d9591 as c16, d9592 as c17, d9593 as c18, d9594 as c19, d9595 as c20, d9596 as c21, d9597 as c22 } from '../descriptors/data/441.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d1392 as d1392 } from '../descriptors/data/69.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1392;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderGiftCardAllocationAcceptance"]:c1(),["PayOrderRequestPay"]:c2(),["PaymentSourceCredential"]:c3(),["PaymentSplitRequest"]:c4(),["PlatformFeeRequest"]:c5(),["ReaderPaymentSourceTip"]:c6(),["SharedCodec1866"]:c7(),["SharedCodec1867"]:c8(),["SharedCodec211"]:c9(),["SharedCodec2182"]:c10(),["SharedCodec2183"]:c11(),["SharedCodec2184"]:c12(),["SharedCodec2185"]:c13(),["SharedCodec2205"]:c14(),["SharedCodec2206"]:c15(),["SharedCodec2207"]:c16(),["SharedCodec2208"]:c17(),["SharedCodec2209"]:c18(),["SharedCodec2210"]:c19(),["SharedCodec2211"]:c20(),["SharedCodec2212"]:c21(),["SharedCodec2213"]:c22(),["SharedCodec325"]:c23(),["SharedCodec327"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
