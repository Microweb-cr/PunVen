import { generateClasses } from "@formkit/themes"

const config = {
    config: {
        classes: generateClasses({
            global: {
                message: 'text-red-600 font-bold uppercase',
                label: ' block mb-1 font-bold text-lg uppercase',
                wrapper: 'space-y-2 mb-3',
                input: 'w-full p-3 border border-gray-400 rounded shadow placeholder-gray-500'
            },
            file: {
                noFiles: 'block my-2',
                fileItem: 'hidden'
            },
            submit: {
                input: '$reset bg-green-500 hover:bg-green-600 text-white font-bold w-full p-2 rounded shadow disabled:opacity-50 mt-2'
            }
        })
    }
}

export default config