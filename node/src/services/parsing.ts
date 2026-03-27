import type { Address, Money } from "../generated/types/common";

export type Raw = Record<string, unknown>;

export const fromRawMoney = (raw: Raw | undefined): Money => ({
  amount: Number((raw?.["amount"] as string | number) ?? 0),
  currency: (raw?.["currency"] as string) ?? "USD",
});

export const fromRawAddress = (raw: Raw | undefined): Address | undefined => {
  if (!raw) return undefined;
  return {
    line1: (raw["line1"] as string) ?? "",
    line2: raw["line2"] as string | undefined,
    country: (raw["country"] as string) ?? "",
    city: (raw["city"] as string) ?? "",
    state: (raw["state"] as string) ?? "",
    postalCode: (raw["postalCode"] as string) ?? "",
  };
};

export const toProtoAddress = (address: Address): Raw => ({
  line1: address.line1,
  line2: address.line2,
  country: address.country,
  city: address.city,
  state: address.state,
  postalCode: address.postalCode,
});

export const fromTimestamp = (value: unknown): Date | undefined => {
  if (typeof value !== "string" || value.length === 0) return undefined;
  return new Date(value);
};

export const fromRawStringMap = (value: unknown): Record<string, string> => {
  if (!value || typeof value !== "object") return {};
  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>).map(([key, entry]) => [key, String(entry)])
  );
};

export const decodeBase64 = (value: string): Uint8Array => {
  return Uint8Array.from(Buffer.from(value, "base64"));
};
