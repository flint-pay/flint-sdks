import { d315 as c0 } from '../descriptors/data/18.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5913 as c1 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c2 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7917 as c3, d7918 as c4 } from '../descriptors/data/380.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7806 as c5 } from '../descriptors/data/374.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6124 as c6 } from '../descriptors/data/279.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6900 as c7 } from '../descriptors/data/324.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7953 as c8, d7954 as c9 } from '../descriptors/data/382.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7955 as c10, d7956 as c11, d7957 as c12, d7958 as c13, d7959 as c14, d7960 as c15, d7961 as c16, d7962 as c17, d7963 as c18, d7964 as c19, d7965 as c20, d7966 as c21, d7967 as c22 } from '../descriptors/data/383.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d315 as d315 } from '../descriptors/data/18.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d315;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4(),["PaymentSplitRequest"]:c5(),["PlatformFeeRequest"]:c6(),["SharedCodec136"]:c7(),["SharedCodec359"]:c8(),["SharedCodec360"]:c9(),["SharedCodec361"]:c10(),["SharedCodec362"]:c11(),["SharedCodec363"]:c12(),["SharedCodec364"]:c13(),["SharedCodec365"]:c14(),["SharedCodec366"]:c15(),["SharedCodec367"]:c16(),["SharedCodec368"]:c17(),["SharedCodec369"]:c18(),["SharedCodec370"]:c19(),["SharedCodec371"]:c20(),["SharedCodec372"]:c21(),["SharedCodec373"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
