export type Nullable<T> = T | null | undefined;

export type ValueOf<T> = T[keyof T];

export type ExtendedString<T extends string> = T | (string & {});

export const isNullable = (value: unknown): value is null | undefined => value === null || value === undefined;
