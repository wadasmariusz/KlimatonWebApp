import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHookFormMutation } from "../../../app/hooks/useHookFormMutation";
import { useForm, FormProvider } from "react-hook-form";
import { InputText } from "../../../components/form/Input_Text";
import { IoClose, MdOutlineTitle } from "react-icons/all";
import { InputSubmit } from "../../../components/form/Input_Submit";
import { InputTextarea } from "../../../components/form/Input_Textarea";
import { createReport } from "../../../app/crud/reports/createReport";

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  reportType: yup.number().required(),
});

const ReportForm = ({ closeModal }) => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleSuccess = ({ data }) => {
    console.log(data);
  };
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: schema.default(),
  });

  const handleSelectChange = (e) => {
    methods.setValue("reportType", e.target.value);
  };

  const mutation = useHookFormMutation(methods, createReport, {
    handleSuccess,
  });

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-6 sm:py-8 lg:py-12 mt-10">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 dark:text-gray-100 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 flex justify-between items-center">
          Dodaj zgłoszenie
          <button onClick={closeModal} className="appearance-none">
            <IoClose size={36} color="currentColor" />
          </button>
        </h2>
        <FormProvider {...methods}>
          <form
            onSubmit={mutation.mutate}
            className="max-w-lg bg-gray-100 dark:bg-primary-dark rounded mx-auto border dark:border-none"
          >
            <div className="flex flex-col gap-4 p-4 md:p-8 text-gray-800 dark:text-gray-100">
              <div>
                <label
                  htmlFor="title"
                  className="inline-block text-sm sm:text-base mb-2"
                >
                  Tytuł
                </label>
                <InputText
                  required
                  placeholder="Co się dzieje?"
                  name="title"
                  type="text"
                  icon={<MdOutlineTitle color="currentColor" size={16} />}
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="inline-block text-gray-800 dark:text-gray-100 text-sm sm:text-base mb-2"
                >
                  Opis
                </label>
                <InputTextarea
                  required
                  placeholder="Opisz zgłoszenie"
                  name="description"
                />
              </div>

              <div>
                <label
                  htmlFor="reportType"
                  className="inline-block text-gray-800 dark:text-gray-100 text-sm sm:text-base mb-2"
                >
                  Typ zgłoszenia
                </label>
                <select
                  onChange={handleSelectChange}
                  name="reportType"
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value={0} selected disabled>
                    Wybierz typ zgłoszenia
                  </option>
                  <option value={4}>Podtopienie</option>
                  <option value={8}>Kopciuch</option>
                  <option value={12}>Zaśmieciony teren</option>
                  <option value={14}>Brzydki zapach</option>
                  <option value={10}>Inny</option>
                </select>
              </div>

              <label className="mb-5 mt-2 mx-auto w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-300">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="mt-2 text-base leading-normal">
                  Dodaj pliki
                </span>
                <input type="file" className="hidden" />
              </label>

              <InputSubmit value="Dodaj zgłoszenie" />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ReportForm;
