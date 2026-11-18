import { d8684 as c0, d8685 as c1, d8686 as c3, d8687 as c4, d8688 as c5 } from '../descriptors/data/384.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c2 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10586 as c6, d10588 as c8, d10589 as c9, d10590 as c10, d10591 as c11, d10592 as c12 } from '../descriptors/data/496.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8794 as c7 } from '../descriptors/data/390.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10628 as c13, d10629 as c14 } from '../descriptors/data/498.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10630 as c15 } from '../descriptors/data/499.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10653 as c16 } from '../descriptors/data/500.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10653 as d10653 } from '../descriptors/data/500.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10653;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderDraftLineItemTaxCalculationRequestModel"]:c3(),["OrderDraftTaxComponentRequestModel"]:c4(),["OrderDraftTaxJurisdictionRequestModel"]:c5(),["ReturnReplacementTaxRequest"]:c6(),["SharedCodec190"]:c7(),["SharedCodec2776"]:c8(),["SharedCodec2777"]:c9(),["SharedCodec2778"]:c10(),["SharedCodec2779"]:c11(),["SharedCodec2780"]:c12(),["SharedCodec3169"]:c13(),["SharedCodec3170"]:c14(),["SharedCodec3171"]:c15(),["UpdateReturnReplacementLineItemRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
