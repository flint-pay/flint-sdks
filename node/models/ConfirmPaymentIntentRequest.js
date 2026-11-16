import { d222 as c0 } from '../descriptors/data/9.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9662 as c1, d9664 as c2, d9665 as c3, d9666 as c4, d9667 as c5, d9668 as c6, d9669 as c11, d9670 as c13 } from '../descriptors/data/444.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9792 as c7, d9795 as c8, d9796 as c9, d9797 as c10, d9798 as c12 } from '../descriptors/data/452.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d222 as d222 } from '../descriptors/data/9.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d222;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["PaymentSourceCredential"]:c1(),["ReaderPaymentSourceTip"]:c2(),["SharedCodec2182"]:c3(),["SharedCodec2183"]:c4(),["SharedCodec2184"]:c5(),["SharedCodec2185"]:c6(),["SharedCodec321"]:c7(),["SharedCodec322"]:c8(),["SharedCodec323"]:c9(),["SharedCodec324"]:c10(),["SharedCodec325"]:c11(),["SharedCodec326"]:c12(),["SharedCodec327"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
