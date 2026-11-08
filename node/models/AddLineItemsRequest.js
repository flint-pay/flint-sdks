import { d7 as c0 } from '../descriptors/data/0.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6353 as c1, d6351 as c2, d6354 as c3, d6355 as c4, d6356 as c5, d6357 as c10, d6358 as c11, d6352 as c36 } from '../descriptors/data/285.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6374 as c6, d6359 as c12, d6360 as c13, d6361 as c14, d6362 as c20, d6363 as c21, d6364 as c22, d6365 as c23, d6366 as c24, d6367 as c25, d6368 as c26, d6369 as c27, d6370 as c31, d6371 as c32, d6372 as c33, d6373 as c34 } from '../descriptors/data/286.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6375 as c7, d6376 as c15, d6377 as c16, d6378 as c17, d6379 as c18, d6380 as c19, d6381 as c28, d6382 as c29, d6383 as c30 } from '../descriptors/data/287.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5685 as c8 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c9 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5616 as c35 } from '../descriptors/data/245.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7 as d7 } from '../descriptors/data/0.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddLineItemsRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DimensionsRequest"]:c2(),["GiftCardPurchaseDetailsRequest"]:c3(),["GiftCardPurchaseRecipientRequest"]:c4(),["ImageReferenceRequest"]:c5(),["LineItemFulfillmentOriginRequestModel"]:c6(),["LineItemFulfillmentRequestModel"]:c7(),["MetadataRequest"]:c8(),["MoneyValue"]:c9(),["OrderDraftLineItemInventoryDemandRequest"]:c10(),["OrderDraftLineItemTaxCalculationRequestModel"]:c11(),["OrderDraftLineItemTaxRequestModel"]:c12(),["OrderDraftTaxComponentRequestModel"]:c13(),["OrderDraftTaxJurisdictionRequestModel"]:c14(),["SharedCodec294"]:c15(),["SharedCodec295"]:c16(),["SharedCodec296"]:c17(),["SharedCodec297"]:c18(),["SharedCodec298"]:c19(),["SharedCodec300"]:c20(),["SharedCodec301"]:c21(),["SharedCodec302"]:c22(),["SharedCodec303"]:c23(),["SharedCodec305"]:c24(),["SharedCodec306"]:c25(),["SharedCodec308"]:c26(),["SharedCodec309"]:c27(),["SharedCodec310"]:c28(),["SharedCodec311"]:c29(),["SharedCodec312"]:c30(),["SharedCodec313"]:c31(),["SharedCodec314"]:c32(),["SharedCodec315"]:c33(),["SubscribedLineRequestModel"]:c34(),["TextModifierRequest"]:c35(),["WeightRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
