import { d9 as c0 } from '../descriptors/data/0.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c1 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c2 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7706 as c3, d7708 as c4 } from '../descriptors/data/371.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7724 as c5, d7725 as c6 } from '../descriptors/data/372.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7260 as c7, d7262 as c8 } from '../descriptors/data/343.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7813 as c9, d7814 as c10, d7815 as c11 } from '../descriptors/data/376.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d9 as d9 } from '../descriptors/data/0.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddOrderChargeRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderCalculatedChargeTaxRequest"]:c3(),["OrderChargeRequest"]:c4(),["SharedCodec1065"]:c5(),["SharedCodec1066"]:c6(),["SharedCodec356"]:c7(),["SharedCodec358"]:c8(),["TaxCalculationRequestRequest"]:c9(),["TaxComponentRequestRequest"]:c10(),["TaxJurisdictionRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
