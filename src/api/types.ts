export interface ApiResponse<T> {
  status: "success" | "error";
  data?: T;
  error?: {
    message: string;
    field?: string;
  };
  code?: string;
}
