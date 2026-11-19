import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9901 as c1 } from '../descriptors/data/459.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8047 as c2 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8143 as c3 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9999 as c4, d10000 as c5, d10001 as c6 } from '../descriptors/data/464.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7771 as c7 } from '../descriptors/data/327.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7771 as d7771 } from '../descriptors/data/327.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7771;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTaxRequest"]:c1(),["SharedCodec3071"]:c2(),["SharedCodec3074"]:c3(),["TaxCalculationRequestRequest"]:c4(),["TaxComponentRequestRequest"]:c5(),["TaxJurisdictionRequest"]:c6(),["UpdateOrderChargeRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
