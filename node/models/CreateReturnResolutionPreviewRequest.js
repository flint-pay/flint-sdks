import { d10567 as c0 } from '../descriptors/data/494.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8684 as c1, d8685 as c2, d8686 as c4, d8687 as c5, d8688 as c6 } from '../descriptors/data/384.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c3 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10585 as c7, d10586 as c8, d10581 as c9, d10588 as c12, d10589 as c13, d10590 as c14, d10591 as c15, d10592 as c16, d10593 as c17, d10594 as c18, d10595 as c19, d10596 as c20, d10582 as c22, d10583 as c24, d10584 as c25 } from '../descriptors/data/496.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9663 as c10, d9664 as c26 } from '../descriptors/data/441.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8794 as c11 } from '../descriptors/data/390.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10579 as c21, d10580 as c23 } from '../descriptors/data/495.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10567 as d10567 } from '../descriptors/data/494.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10567;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ReturnReplacementLineItemRequest"]:c7(),["ReturnReplacementTaxRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec190"]:c11(),["SharedCodec2776"]:c12(),["SharedCodec2777"]:c13(),["SharedCodec2778"]:c14(),["SharedCodec2779"]:c15(),["SharedCodec2780"]:c16(),["SharedCodec2782"]:c17(),["SharedCodec2783"]:c18(),["SharedCodec2784"]:c19(),["SharedCodec551"]:c20(),["SharedCodec552"]:c21(),["SharedCodec553"]:c22(),["SharedCodec554"]:c23(),["SharedCodec555"]:c24(),["SharedCodec556"]:c25(),["SharedCodec98"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
