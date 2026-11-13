import { d5893 as c0 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c1 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7667 as c2 } from '../descriptors/data/365.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1012 as c3 } from '../descriptors/data/50.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7223 as c4 } from '../descriptors/data/336.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7777 as c5, d7778 as c6, d7779 as c7 } from '../descriptors/data/370.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1012 as d1012 } from '../descriptors/data/50.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1012;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedChargeTaxRequest"]:c2(),["OrderChargeInputPercent"]:c3(),["SharedCodec361"]:c4(),["TaxCalculationRequestRequest"]:c5(),["TaxComponentRequestRequest"]:c6(),["TaxJurisdictionRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderChargeInputPercent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
