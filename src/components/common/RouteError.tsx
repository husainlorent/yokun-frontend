export function RouteError() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg  p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Xatolik yuz berdi
        </h2>
        <p className="text-gray-600 mb-4">
          Sahifa yuklanmadi. Iltimos, qayta urinib ko‘ring.
        </p>
        <button onClick={() => window.location.reload()}>
          Qayta yuklash
        </button>
      </div>
    </div>
  );
}
