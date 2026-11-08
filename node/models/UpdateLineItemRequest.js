import { d5685 as c0, d5686 as c4 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c1 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7352 as c2 } from '../descriptors/data/343.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7358 as c3 } from '../descriptors/data/344.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5790 as c5 } from '../descriptors/data/254.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7392 as c6, d7393 as c7, d7394 as c8, d7395 as c9, d7396 as c10, d7397 as c11, d7398 as c12, d7399 as c13, d7400 as c14, d7401 as c16 } from '../descriptors/data/345.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7261 as c15 } from '../descriptors/data/338.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6376 as c17, d6377 as c18, d6378 as c19, d6379 as c20, d6380 as c21 } from '../descriptors/data/287.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7449 as c22, d7450 as c23, d7451 as c24 } from '../descriptors/data/349.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5616 as c25 } from '../descriptors/data/245.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5443 as c26 } from '../descriptors/data/234.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5443 as d5443 } from '../descriptors/data/234.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5443;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTaxRequest"]:c2(),["OrderLineItemModifierRequestModel"]:c3(),["SharedCodec1563"]:c4(),["SharedCodec1566"]:c5(),["SharedCodec1598"]:c6(),["SharedCodec1599"]:c7(),["SharedCodec1600"]:c8(),["SharedCodec1601"]:c9(),["SharedCodec1602"]:c10(),["SharedCodec1603"]:c11(),["SharedCodec1604"]:c12(),["SharedCodec1605"]:c13(),["SharedCodec1606"]:c14(),["SharedCodec1607"]:c15(),["SharedCodec1608"]:c16(),["SharedCodec294"]:c17(),["SharedCodec295"]:c18(),["SharedCodec296"]:c19(),["SharedCodec297"]:c20(),["SharedCodec298"]:c21(),["TaxCalculationRequestRequest"]:c22(),["TaxComponentRequestRequest"]:c23(),["TaxJurisdictionRequest"]:c24(),["TextModifierRequest"]:c25(),["UpdateLineItemRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
