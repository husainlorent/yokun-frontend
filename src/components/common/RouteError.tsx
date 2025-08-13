import { useTranslation } from "react-i18next";

export function RouteError() {
  const {t} = useTranslation("common")
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg  p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {t("errorOccurred")}
        </h2>
        <p className="text-gray-600 mb-4">
          {t("pageNotLoaded")}
        </p>
        <button onClick={() => window.location.reload()}>
         {t("reload")}
        </button>
      </div>
    </div>
  );
}

