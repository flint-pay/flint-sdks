import { d5913 as c0 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c1 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6131 as c2 } from '../descriptors/data/280.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8692 as c3, d8693 as c4 } from '../descriptors/data/427.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6581 as c5, d6582 as c6, d6583 as c7, d6584 as c8, d6585 as c9, d6586 as c10, d6587 as c11, d6588 as c12 } from '../descriptors/data/304.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5844 as c13 } from '../descriptors/data/262.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5704 as c14 } from '../descriptors/data/251.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5704 as d5704 } from '../descriptors/data/251.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5704;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec1610"]:c3(),["SharedCodec1611"]:c4(),["SharedCodec327"]:c5(),["SharedCodec328"]:c6(),["SharedCodec329"]:c7(),["SharedCodec330"]:c8(),["SharedCodec331"]:c9(),["SharedCodec343"]:c10(),["SharedCodec344"]:c11(),["SharedCodec345"]:c12(),["TextModifierRequest"]:c13(),["UpdateSubscriptionPlanLineItemInputBundle"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemInputBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
