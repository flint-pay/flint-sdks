import { d8719 as c0, d8720 as c1, d8721 as c3, d8722 as c4, d8723 as c5 } from '../descriptors/data/390.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c2 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10642 as c6, d10644 as c8, d10645 as c9 } from '../descriptors/data/504.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8831 as c7 } from '../descriptors/data/396.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10646 as c10, d10647 as c11, d10648 as c12 } from '../descriptors/data/505.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8049 as c13 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8145 as c14 } from '../descriptors/data/358.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8393 as c15 } from '../descriptors/data/372.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10684 as c16, d10685 as c17, d10686 as c18, d10687 as c19, d10688 as c20 } from '../descriptors/data/507.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10709 as c21, d10710 as c22 } from '../descriptors/data/508.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10711 as c23 } from '../descriptors/data/509.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7802 as c24 } from '../descriptors/data/330.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7802 as d7802 } from '../descriptors/data/330.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7802;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderDraftLineItemTaxCalculationRequestModel"]:c3(),["OrderDraftTaxComponentRequestModel"]:c4(),["OrderDraftTaxJurisdictionRequestModel"]:c5(),["ReturnReplacementTaxRequest"]:c6(),["SharedCodec190"]:c7(),["SharedCodec2778"]:c8(),["SharedCodec2779"]:c9(),["SharedCodec2780"]:c10(),["SharedCodec2781"]:c11(),["SharedCodec2782"]:c12(),["SharedCodec3073"]:c13(),["SharedCodec3076"]:c14(),["SharedCodec3077"]:c15(),["SharedCodec3178"]:c16(),["SharedCodec3179"]:c17(),["SharedCodec3180"]:c18(),["SharedCodec3181"]:c19(),["SharedCodec3182"]:c20(),["UpdateReturnReplacementLineItemRequest"]:c21(),["UpdateReturnResolutionAdjustmentRequest"]:c22(),["UpdateReturnResolutionLineItemRequest"]:c23(),["UpdateReturnResolutionRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
