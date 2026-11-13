import { d5893 as c0, d5894 as c4 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c1 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7668 as c2 } from '../descriptors/data/365.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7677 as c3 } from '../descriptors/data/366.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5978 as c5 } from '../descriptors/data/269.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7728 as c6, d7729 as c7, d7730 as c8, d7731 as c9, d7732 as c10, d7733 as c11, d7734 as c12, d7735 as c13, d7736 as c14, d7737 as c16 } from '../descriptors/data/368.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7581 as c15 } from '../descriptors/data/360.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6539 as c17, d6540 as c18 } from '../descriptors/data/298.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6541 as c19, d6542 as c20, d6543 as c21 } from '../descriptors/data/299.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7777 as c22, d7778 as c23, d7779 as c24 } from '../descriptors/data/370.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5824 as c25 } from '../descriptors/data/259.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5648 as c26 } from '../descriptors/data/247.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5648 as d5648 } from '../descriptors/data/247.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5648;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTaxRequest"]:c2(),["OrderLineItemModifierRequestModel"]:c3(),["SharedCodec1695"]:c4(),["SharedCodec1698"]:c5(),["SharedCodec1730"]:c6(),["SharedCodec1731"]:c7(),["SharedCodec1732"]:c8(),["SharedCodec1733"]:c9(),["SharedCodec1734"]:c10(),["SharedCodec1735"]:c11(),["SharedCodec1736"]:c12(),["SharedCodec1737"]:c13(),["SharedCodec1738"]:c14(),["SharedCodec1739"]:c15(),["SharedCodec1740"]:c16(),["SharedCodec333"]:c17(),["SharedCodec334"]:c18(),["SharedCodec335"]:c19(),["SharedCodec336"]:c20(),["SharedCodec337"]:c21(),["TaxCalculationRequestRequest"]:c22(),["TaxComponentRequestRequest"]:c23(),["TaxJurisdictionRequest"]:c24(),["TextModifierRequest"]:c25(),["UpdateLineItemRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
