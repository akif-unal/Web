import { fileURLToPath } from 'url'

export const getDirName = url => {
	const __dirname = fileURLToPath(new URL('.', url))
	return __dirname
}

export const getFileName = url => {
	const __filename = fileURLToPath(url)
	return __filename
}
