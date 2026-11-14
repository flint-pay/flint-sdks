import { d5918 as c0, d5919 as c4 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c1 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7706 as c2 } from '../descriptors/data/368.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7715 as c3 } from '../descriptors/data/369.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6017 as c5 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7766 as c6, d7767 as c7, d7768 as c8, d7769 as c9, d7770 as c10, d7771 as c11, d7772 as c12, d7773 as c13, d7774 as c14, d7775 as c16 } from '../descriptors/data/371.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7619 as c15 } from '../descriptors/data/363.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6576 as c17, d6577 as c18, d6578 as c19, d6579 as c20, d6580 as c21 } from '../descriptors/data/301.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7815 as c22, d7816 as c23, d7817 as c24 } from '../descriptors/data/373.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5849 as c25 } from '../descriptors/data/260.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5673 as c26 } from '../descriptors/data/248.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5673 as d5673 } from '../descriptors/data/248.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5673;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTaxRequest"]:c2(),["OrderLineItemModifierRequestModel"]:c3(),["SharedCodec1697"]:c4(),["SharedCodec1700"]:c5(),["SharedCodec1732"]:c6(),["SharedCodec1733"]:c7(),["SharedCodec1734"]:c8(),["SharedCodec1735"]:c9(),["SharedCodec1736"]:c10(),["SharedCodec1737"]:c11(),["SharedCodec1738"]:c12(),["SharedCodec1739"]:c13(),["SharedCodec1740"]:c14(),["SharedCodec1741"]:c15(),["SharedCodec1742"]:c16(),["SharedCodec335"]:c17(),["SharedCodec336"]:c18(),["SharedCodec337"]:c19(),["SharedCodec338"]:c20(),["SharedCodec339"]:c21(),["TaxCalculationRequestRequest"]:c22(),["TaxComponentRequestRequest"]:c23(),["TaxJurisdictionRequest"]:c24(),["TextModifierRequest"]:c25(),["UpdateLineItemRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
