import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Customer() {
  return (

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center">
        
        <img
          className="inline-block h-13 w-13 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <h1>Sandro Marcelo</h1>
        <h2>Desenvolvedor Back-end</h2>


      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-25 py-12 lg:px-25">
        <div className="sm:mx-auto sm:w-full sm:max-w-[58rem] flex flex-col items-center justify-center">
          <form className="w-full max-w-[58rem]">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 p-12">
                <h2 className="text-base font-semibold leading-7 text-white">Perfil</h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                      Nome
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <span className="flex select-none items-center pl-3 bg-white text-gray-500 sm:text-sm">handleevent.com/</span>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          className="block flex-1 border-0 bg-white text-gray-500 py-1.5 pl-1 placeholder:text-orange focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="seunome"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-white">
                      Observações
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Diga-nos sobre você</p>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="photo" className="block text-sm font-medium leading-6 text-white">
                      Foto de perfil
                    </label>
                    <div className="mt-2 flex items-center gap-x-3">
                      <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                      <button
                        type="button"
                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        <div className="text-center">
                          <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-orange-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-orange-500"
                            >
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-white">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>  

  )
}