import { d2 as c0, d368 as c1, d812 as c2, d1583 as c3, d1584 as c4, d1585 as c5, d1586 as c6, d69 as c7, d1678 as c8, d1680 as c9, d1681 as c10, d1682 as c11, d1683 as c12, d359 as c13, d361 as c14, d360 as c15, d358 as c16, d357 as c17, d363 as c18, d362 as c19, d365 as c20, d364 as c21, d367 as c22, d366 as c23, d1679 as c24, d2174 as c25 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItem"]:c1(),["ImageReferenceRequest"]:c2(),["LineItemFulfillmentOriginRequest"]:c3(),["LineItemFulfillmentRequest"]:c4(),["LineItemFulfillmentSizeRequest"]:c5(),["LineItemFulfillmentWeightRequest"]:c6(),["MoneyValue"]:c7(),["OrderDraftLineItemInventoryDemandRequest"]:c8(),["OrderDraftLineItemTaxCalculationRequest"]:c9(),["OrderDraftLineItemTaxRequest"]:c10(),["OrderDraftTaxComponentRequest"]:c11(),["OrderDraftTaxJurisdictionRequest"]:c12(),["OrderLineItemModifierRequest"]:c13(),["SharedCodec126"]:c14(),["SharedCodec127"]:c15(),["SharedCodec128"]:c16(),["SharedCodec129"]:c17(),["SharedCodec130"]:c18(),["SharedCodec131"]:c19(),["SharedCodec132"]:c20(),["SharedCodec133"]:c21(),["SharedCodec134"]:c22(),["SharedCodec135"]:c23(),["SharedCodec441"]:c24(),["TextModifierRequest"]:c25()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
