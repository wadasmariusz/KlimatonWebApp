import { useMutation } from "react-query";

export const useHookFormMutation = (methods, mutationFn, passedConfig) => {
  const { onError, onSuccess, handleError, handleSuccess, ...config } =
    passedConfig || {};

  const handleInnerSuccess = (data) => {};

  const handleInnerError = (error) => {
    // console.log(error.response.status, error?.response?.data?.message)
    if (error?.response?.data?.message) {
      methods.setError("__status", {
        type: "API",
        message: error?.response?.data?.message,
      });
    } else if (error?.message) {
      methods.setError("__status", { type: "API", message: error?.message });
    }
    if (error?.response?.data) {
      //get all errors
      const errors = error.response.data?.errors;
      if (errors && methods?.setError && errors?.forEach) {
        errors.forEach(({ code, message }) => {
          methods.setError(code, { type: "API", message });
        });
      }
    } else {
      if (error?.response?.status === 404) {
        methods.setError("__status", {
          type: "API",
          message: "Nie znaleziono (#ErrorCode 404)",
        });
      } else if (error?.response?.status === 500) {
        methods.setError("__status", {
          type: "response",
          message:
            "Wystąpił wewnętrzny błąd serwera, już pracujemy nad rozwiązaniem. Prosimy spróbować później (#ErrorCode 500)",
        });
      } else if (error?.response?.status === 401) {
        methods.setError("__status", {
          type: "response",
          message: "Brak uprawnień (#ErrorCode 401)",
        });
      } else if (error?.response?.status === 403) {
        methods.setError("__status", {
          type: "response",
          message: "Brak uprawnień (#ErrorCode 403)",
        });
      }
    }
  };

  const mutation = useMutation(mutationFn, {
    ...config,
    onSuccess: (...props) => {
      handleInnerSuccess(...props);
      if (typeof handleSuccess === "function") {
        handleSuccess(...props);
      } else if (typeof onSuccess === "function") {
        onSuccess(...props);
      }
    },
    onError: (...props) => {
      handleInnerError(...props);
      if (typeof handleError === "function") {
        handleError(...props);
      } else if (typeof onError === "function") {
        onError(...props);
      }
    },
  });
  const submitPromise = async (...a) => {
    try {
      return await mutation.mutateAsync(...a);
    } catch (e) {
      return false;
    }
  };

  const mutate = methods.handleSubmit(submitPromise);

  return {
    ...mutation,
    mutate,
  };
};
