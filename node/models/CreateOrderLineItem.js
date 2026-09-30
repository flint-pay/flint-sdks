import { d368 as c0, d812 as c1, d1583 as c2, d1584 as c3, d1585 as c4, d1586 as c5, d69 as c6, d1678 as c7, d1680 as c8, d1681 as c9, d1682 as c10, d1683 as c11, d359 as c12, d361 as c13, d360 as c14, d358 as c15, d357 as c16, d363 as c17, d362 as c18, d365 as c19, d364 as c20, d367 as c21, d366 as c22, d1679 as c23, d2174 as c24 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d368 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d368;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItem"]:c0(),["ImageReferenceRequest"]:c1(),["LineItemFulfillmentOriginRequest"]:c2(),["LineItemFulfillmentRequest"]:c3(),["LineItemFulfillmentSizeRequest"]:c4(),["LineItemFulfillmentWeightRequest"]:c5(),["MoneyValue"]:c6(),["OrderDraftLineItemInventoryDemandRequest"]:c7(),["OrderDraftLineItemTaxCalculationRequest"]:c8(),["OrderDraftLineItemTaxRequest"]:c9(),["OrderDraftTaxComponentRequest"]:c10(),["OrderDraftTaxJurisdictionRequest"]:c11(),["OrderLineItemModifierRequest"]:c12(),["SharedCodec126"]:c13(),["SharedCodec127"]:c14(),["SharedCodec128"]:c15(),["SharedCodec129"]:c16(),["SharedCodec130"]:c17(),["SharedCodec131"]:c18(),["SharedCodec132"]:c19(),["SharedCodec133"]:c20(),["SharedCodec134"]:c21(),["SharedCodec135"]:c22(),["SharedCodec441"]:c23(),["TextModifierRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
