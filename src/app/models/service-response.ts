export interface ServiceResponse<T> {
  isSuccess: boolean;
  message: string;
  data: T;
}