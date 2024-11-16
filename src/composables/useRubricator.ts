import type { Rubric, ApiResponse } from "./../type";
import { ref } from "vue";
import axios, {AxiosError} from 'axios';

export const useRubricator = () => {

const rubricatorsList = ref<Rubric[]>([]);
const error = ref<string | null>(null);

const fetchRubricator = async () => {
  try {
    const response = await axios.get(
      "https://www.klerk.ru/yindex.php/v3/event/rubrics"
    );
    rubricatorsList.value = response.data; 
  } catch (err) {
    const axiosError = err as AxiosError;
    error.value = axiosError.request?.data?.statusText || "Opps, error";
  }
};


  return {
    rubricatorsList,
    error,
    fetchRubricator,
  };
};
