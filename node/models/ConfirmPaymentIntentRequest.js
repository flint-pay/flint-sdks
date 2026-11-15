import { d189 as c0 } from '../descriptors/data/8.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7805 as c1, d7807 as c2, d7808 as c3, d7809 as c4, d7810 as c5, d7811 as c6, d7812 as c11, d7813 as c13 } from '../descriptors/data/374.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7932 as c7, d7933 as c8 } from '../descriptors/data/381.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7934 as c9, d7935 as c10, d7936 as c12 } from '../descriptors/data/382.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d189 as d189 } from '../descriptors/data/8.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d189;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["PaymentSourceCredential"]:c1(),["ReaderPaymentSourceTip"]:c2(),["SharedCodec1228"]:c3(),["SharedCodec1229"]:c4(),["SharedCodec1230"]:c5(),["SharedCodec1231"]:c6(),["SharedCodec174"]:c7(),["SharedCodec175"]:c8(),["SharedCodec176"]:c9(),["SharedCodec177"]:c10(),["SharedCodec178"]:c11(),["SharedCodec179"]:c12(),["SharedCodec180"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
