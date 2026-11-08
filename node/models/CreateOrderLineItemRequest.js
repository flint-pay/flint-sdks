import { d6353 as c0, d6351 as c1, d6354 as c2, d6355 as c3, d6356 as c4, d6357 as c9, d6358 as c10, d6352 as c35 } from '../descriptors/data/285.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6374 as c5, d6359 as c11, d6360 as c12, d6361 as c13, d6362 as c19, d6363 as c20, d6364 as c21, d6365 as c22, d6366 as c23, d6367 as c24, d6368 as c25, d6369 as c26, d6370 as c30, d6371 as c31, d6372 as c32, d6373 as c33 } from '../descriptors/data/286.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6375 as c6, d6376 as c14, d6377 as c15, d6378 as c16, d6379 as c17, d6380 as c18, d6381 as c27, d6382 as c28, d6383 as c29 } from '../descriptors/data/287.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5685 as c7 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c8 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5616 as c34 } from '../descriptors/data/245.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6353 as d6353 } from '../descriptors/data/285.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6353;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["DimensionsRequest"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequestModel"]:c5(),["LineItemFulfillmentRequestModel"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequestModel"]:c10(),["OrderDraftLineItemTaxRequestModel"]:c11(),["OrderDraftTaxComponentRequestModel"]:c12(),["OrderDraftTaxJurisdictionRequestModel"]:c13(),["SharedCodec294"]:c14(),["SharedCodec295"]:c15(),["SharedCodec296"]:c16(),["SharedCodec297"]:c17(),["SharedCodec298"]:c18(),["SharedCodec300"]:c19(),["SharedCodec301"]:c20(),["SharedCodec302"]:c21(),["SharedCodec303"]:c22(),["SharedCodec305"]:c23(),["SharedCodec306"]:c24(),["SharedCodec308"]:c25(),["SharedCodec309"]:c26(),["SharedCodec310"]:c27(),["SharedCodec311"]:c28(),["SharedCodec312"]:c29(),["SharedCodec313"]:c30(),["SharedCodec314"]:c31(),["SharedCodec315"]:c32(),["SubscribedLineRequestModel"]:c33(),["TextModifierRequest"]:c34(),["WeightRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
