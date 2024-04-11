// useFetch.d.ts
import { AxiosResponse } from 'axios';

declare module '../creatingAxiosInstance' {
   const creatingAxiosInstance: {
      get: <T = any>(url: string) => Promise<AxiosResponse<T>>;
   };
   export default creatingAxiosInstance;
}

declare module '../../Hooks/useFetch' {
   interface FetchResult<T> {
      data: T;
      error: boolean;
      loading: boolean;
   }

   const useFetch: <T = any>(url: string) => FetchResult<T>;
   export default useFetch;
}
