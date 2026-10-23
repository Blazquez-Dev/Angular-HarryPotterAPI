/** La API (PotterDB) sigue el formato JSON:API */
export interface PotterResource<T> {
  id: string;
  type: string;
  attributes: T;
}

export interface PotterListResponse<T> {
  data: PotterResource<T>[];
  meta: { pagination: { current: number; records: number } };
}

export interface PotterSingleResponse<T> {
  data: PotterResource<T>;
}
