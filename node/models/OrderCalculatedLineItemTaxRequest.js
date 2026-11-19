import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9902 as c1 } from '../descriptors/data/459.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9999 as c2, d10000 as c3, d10001 as c4 } from '../descriptors/data/464.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9902 as d9902 } from '../descriptors/data/459.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9902;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedLineItemTaxRequest"]:c1(),["TaxCalculationRequestRequest"]:c2(),["TaxComponentRequestRequest"]:c3(),["TaxJurisdictionRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderCalculatedLineItemTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
