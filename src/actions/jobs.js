import axios from "axios";
import moment from "moment";
import { BASE_API_URL } from "../utils/constants";
import { setErrors } from "./errors";

export const initiateGetJobs = (data) => {
  return async (dispatch) => {
    try {
      let { description, remote_jobs_only, location, page } = data;
      description = description ? encodeURIComponent(description) : "";
      location = location ? encodeURIComponent(location) : "";
      remote_jobs_only = remote_jobs_only ? "&remote_jobs_only=true" : "";

      if (page) {
        page = parseInt(page);
        page = isNaN(page) ? "" : `&page=${page}`;
      }

      const jobs = await axios.get(
        `${BASE_API_URL}/jobs?description=${description}&location=${location}${remote_jobs_only}${page}`
      );
      const sortedJobs = jobs.data.sort(
        (a, b) =>
          moment(new Date(b.created_at)) - moment(new Date(a.created_at))
      );

      return dispatch(setJobs(sortedJobs));
    } catch (error) {
      error.response && dispatch(setErrors(error.response.data));
    }
  };
};

export const setJobs = (jobs) => ({
  type: "SET_JOBS",
  jobs,
});

export const setLoadMoreJobs = (jobs) => ({
  type: "LOAD_MORE_JOBS",
  jobs,
});
