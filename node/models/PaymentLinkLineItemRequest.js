import { d5786 as c0 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6131 as c1 } from '../descriptors/data/280.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7986 as c2 } from '../descriptors/data/385.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8011 as c3 } from '../descriptors/data/386.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8016 as c4, d8017 as c5, d8019 as c6, d8020 as c7, d8021 as c8, d8022 as c9, d8023 as c10 } from '../descriptors/data/387.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8028 as c11, d8029 as c12 } from '../descriptors/data/388.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8030 as c13, d8031 as c14 } from '../descriptors/data/389.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7986 as d7986 } from '../descriptors/data/385.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7986;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["SharedCodec1185"]:c3(),["SharedCodec1190"]:c4(),["SharedCodec1191"]:c5(),["SharedCodec1193"]:c6(),["SharedCodec1194"]:c7(),["SharedCodec1195"]:c8(),["SharedCodec1196"]:c9(),["SharedCodec1197"]:c10(),["SharedCodec1202"]:c11(),["SharedCodec1203"]:c12(),["SharedCodec1204"]:c13(),["SharedCodec1205"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
