import { d5913 as c0, d5914 as c4 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c1 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7707 as c2, d7716 as c3 } from '../descriptors/data/370.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6010 as c5 } from '../descriptors/data/273.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7754 as c6, d7755 as c7, d7756 as c8, d7757 as c9, d7758 as c10, d7759 as c11, d7760 as c12, d7761 as c13, d7762 as c14, d7763 as c16 } from '../descriptors/data/372.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7618 as c15 } from '../descriptors/data/364.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6581 as c17, d6582 as c18, d6583 as c19, d6584 as c20, d6585 as c21 } from '../descriptors/data/304.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7802 as c22, d7803 as c23, d7804 as c24 } from '../descriptors/data/374.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5844 as c25 } from '../descriptors/data/262.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5657 as c26 } from '../descriptors/data/247.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5657 as d5657 } from '../descriptors/data/247.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5657;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTaxRequest"]:c2(),["OrderLineItemModifierRequestModel"]:c3(),["SharedCodec1680"]:c4(),["SharedCodec1683"]:c5(),["SharedCodec1715"]:c6(),["SharedCodec1716"]:c7(),["SharedCodec1717"]:c8(),["SharedCodec1718"]:c9(),["SharedCodec1719"]:c10(),["SharedCodec1720"]:c11(),["SharedCodec1721"]:c12(),["SharedCodec1722"]:c13(),["SharedCodec1723"]:c14(),["SharedCodec1724"]:c15(),["SharedCodec1725"]:c16(),["SharedCodec327"]:c17(),["SharedCodec328"]:c18(),["SharedCodec329"]:c19(),["SharedCodec330"]:c20(),["SharedCodec331"]:c21(),["TaxCalculationRequestRequest"]:c22(),["TaxComponentRequestRequest"]:c23(),["TaxJurisdictionRequest"]:c24(),["TextModifierRequest"]:c25(),["UpdateLineItemRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
