import { useQuery } from "react-query";
import axios from "axios";

export default { isLoading, error, data } = useQuery("profile", () => {
  axios.get();
});
